This folder is where favicon and PWA assets should live.

Files you should add (from your favicon bundle):
- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- favicon-16x16.png
- favicon-32x32.png
- favicon.ico
- site.webmanifest (already present)

To add the files from your machine, run something like:

cp ~/Downloads/favicon_io-2/* /path/to/repo/public/

Then commit:

cd /path/to/repo
git add public/android-chrome-192x192.png public/android-chrome-512x512.png public/apple-touch-icon.png public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico public/site.webmanifest
git commit -m "Add favicon and PWA assets"
git push origin main
