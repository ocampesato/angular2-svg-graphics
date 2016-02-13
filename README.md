After installing Node and tsc (TypeScript Compiler) on your machine:
`
1) download/uncompress the zip file (or clone this repository) 
2) cd archimedes 
3) npm install
4) python -m SimpleHTTPServer (or equivalent)
5) go to localhost:8000
`
Perform step #2 for each of the other subdirectories (cissoid, cochleoid, conchoid, lissajous, lituus), or better yet, create symbolic links:
`
cd archimedes
mv node_modules ../
ln -s ../node_modules .
`
Enjoy!
