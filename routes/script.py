# script.py

import sys
import json

def add(a, b):
    print(f"enter at add {a} {b}", file=sys.stderr)
    return a + b

if __name__ == "__main__":
    try:
        a = int(sys.argv[1])
        b = int(sys.argv[2])
        result = add(a, b)
        print(json.dumps({"result": result}))
    except Exception as e:
        print(json.dumps({"error": str(e)}), file=sys.stderr)
