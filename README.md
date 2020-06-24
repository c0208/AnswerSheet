# AnswerSheet
A Chrome extension that helps you gather and organize HTML elements.

## How to use
1. Install the .crx file
2. Open the web page you want to use this extension with
3. Open the console (F12)
4. Click the icon of the extension  

*You can also run cheat.js directly in the console ([here](https://developers.google.com/web/tools/chrome-devtools/console/javascript) is how), but this way you will need to copy and paste the code every time.*

## How it works
This extension will search the entire page for similar HTML elements, e.g., elements of the same class, and print them in the console.  

*Currently the extension will only search for elements of the class **answer**, but you can always edit cheat.js to suit your own needs.*

## How to build (pack)
1. Go to chrome://extensions/
2. Turn on Developer Mode
3. Load Unpacked for the extension to work on your machine
4. Or Pack Extension to pack source files into a .crx file
