YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Browser.ChromeDriver"
    ],
    "modules": [
        "DalekJS"
    ],
    "allModules": [
        {
            "displayName": "DalekJS",
            "name": "DalekJS",
            "description": "This module is a browser plugin for [DalekJS](//github.com/dalekjs/dalek).\nIt provides all a WebDriverServer & browser launcher for Google Chrome.\n\nThe browser plugin can be installed with the following command:\n\n```bash\n$ npm install dalek-browser-chrome --save-dev\n```\n\nYou can use the browser plugin by adding a config option to the your Dalekfile\n\n```javascript\n\"browsers\": [\"chrome\"]\n```\n\nOr you can tell Dalek that it should test in this browser via the command line:\n\n```bash\n$ dalek mytest.js -b chrome\n```"
        }
    ]
} };
});