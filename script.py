import shutil, os

# Re-touch each file to force artifact registration
files = ['index.html', 'style.css', 'song-data.js', 'app.js', 'vercel.json', 'README.md']
for fname in files:
    src = os.path.join("output", fname)
    with open(src, "r") as f:
        content = f.read()
    with open(fname, "w") as f:  # write to root so tool definitely picks it up
        f.write(content)
    print(fname, "rewritten,", len(content), "chars")
