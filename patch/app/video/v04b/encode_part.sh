#!/bin/bash
# usage: encode_part.sh "Ausgabe.mp4" szene1 szene2 ...
set -e; OUT=$1; shift; D=sc_land; mkdir -p $D; : > $D/v.txt; : > $D/a.txt
for i in "$@"; do
  ffmpeg -loglevel error -y -f concat -safe 0 -i frames_land/s$i.txt -vf "fps=30,format=yuv420p" -c:v libx264 -preset veryfast -crf 18 $D/v$i.mp4
  VD=$(ffprobe -v error -show_entries format=duration -of csv=p=0 $D/v$i.mp4)
  if [ -f audio/s$(printf %02d $i).mp3 ]; then ffmpeg -loglevel error -y -i audio/s$(printf %02d $i).mp3 -af "apad" -t $VD -ar 44100 -ac 2 $D/a$i.wav
  else ffmpeg -loglevel error -y -f lavfi -i anullsrc=r=44100:cl=stereo -t $VD $D/a$i.wav; fi
  echo "file 'v$i.mp4'" >> $D/v.txt; echo "file 'a$i.wav'" >> $D/a.txt
done
ffmpeg -loglevel error -y -f concat -safe 0 -i $D/v.txt -c copy $D/video.mp4
ffmpeg -loglevel error -y -f concat -safe 0 -i $D/a.txt -c:a pcm_s16le $D/audio.wav
ffmpeg -loglevel error -y -i $D/video.mp4 -i $D/audio.wav -c:v copy -c:a aac -b:a 160k -movflags +faststart -shortest "$OUT"
ffprobe -v error -show_entries format=duration,size -of csv=p=0 "$OUT"
