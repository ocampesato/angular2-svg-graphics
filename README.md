After installing Node and tsc (TypeScript Compiler) on your machine:
```
1) download/uncompress the zip file (or clone this repository) 
2) cd archimedes 
3) npm install
4) python -m SimpleHTTPServer (or equivalent)
5) go to localhost:8000
```
Perform step #2 for each of the other subdirectories (cissoid, cochleoid, conchoid, lissajous, lituus), or better yet, create symbolic links:
```
cd archimedes
mv node_modules ../
ln -s ../node_modules .
```
You can view the other sample graphics by modifying a pair of lines in app/main.ts in each of the subdirectories in order to import the correct TypeScript file and also specify the correct value for `directives`.
For example, if you want to see the graphics in ArchEllipses1, first comment the following two lines:
```
//import {ArchTubeRotate1Ellipses1} from './ArchTubeRotate1Ellipses1.ts';
//directives: [ArchTubeRotate1Ellipses1],
```
Next uncomment these two lines:
```
  import {ArchEllipses1} from './ArchEllipses1';
  directives: [ArchEllipses1],
```
Enjoy!
