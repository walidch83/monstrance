

import os
os.makedirs("output", exist_ok=True)
files = ['index.html', 'style.css', 'song-data.js', 'app.js', 'README.md', 'vercel.json']
for fname in files:
    src = os.path.join("output", fname)
    with open(src, "r") as f:
        content = f.read()
    with open(fname, "w") as f:
        f.write(content)
    print(fname, len(content), "chars")
