#!/usr/bin/env python3
"""Offene Klausurduell-Anmerkungen (GitHub-Issues) lesen und je Anmerkung ausgeben.
Aufruf: python3 anmerkungen.py [--alle]   (braucht gh, liest TomR-z/klausurduell)
Schließen nach dem Patch: gh api -X PATCH repos/TomR-z/klausurduell/issues/<nr> -f state=closed
Kommentar:                gh api repos/TomR-z/klausurduell/issues/<nr>/comments -f body="..."
"""
import json, re, subprocess, sys
state = "all" if "--alle" in sys.argv else "open"
raw = subprocess.run(["gh", "api", "--paginate", f"repos/TomR-z/klausurduell/issues?state={state}&per_page=100"],
                     capture_output=True, text=True, check=True).stdout
issues = json.loads(raw.replace("][", ","))
n = 0
for it in issues:
    if "pull_request" in it: continue
    body = it.get("body") or ""
    teile = re.split(r"\n---\n", body)
    for t in teile:
        m = re.search(r"<!-- klausurduell (\{.*?\}) -->", t)
        meta = json.loads(m.group(1)) if m else {}
        text = re.sub(r"<!-- klausurduell .*? -->", "", t).strip()
        n += 1
        print(f"#{it['number']} [{it['state']}] {meta.get('kat','?')} · {meta.get('art','?')} · ref={meta.get('ref')} · versteckt={meta.get('hide')}")
        print("   " + text.replace("\n", "\n   "))
        print()
print(f"{n} Anmerkungen in {len([i for i in issues if 'pull_request' not in i])} Issues ({state})")
