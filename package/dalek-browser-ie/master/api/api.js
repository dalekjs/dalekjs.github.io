YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Browser.InternetExplorer"
    ],
    "modules": [
        "DalekJS"
    ],
    "allModules": [
        {
            "displayName": "DalekJS",
            "name": "DalekJS",
            "description": "This module is a browser plugin for [DalekJS](//github.com/dalekjs/dalek).\nIt provides all a WebDriverServer & browser launcher for Internet Explorer.\n\nThe browser plugin can be installed with the following command:\n\n```bash\n$ npm install dalek-browser-ie --save-dev\n```\n\nYou can use the browser plugin by adding a config option to the your Dalekfile\n\n```javascript\n\"browsers\": [\"IE\"]\n```\n\nOr you can tell Dalek that it should test in this browser via the command line:\n\n```bash\n$ dalek mytest.js -b IE\n```\n\nThe Webdriver Server tries to open Port 5555 by default,\nif this port is blocked, it tries to use a port between 5555 & 5564\nYou can specifiy a different port from within your [Dalekfile](/pages/config.html) like so:\n\n```javascript\n\"browsers\": {\n  \"ie\": {\n    \"port\": 6555 \n  }\n}\n```\n\nIt is also possible to specify a range of ports:\n\n```javascript\n\"browsers\": {\n  \"ie\": {\n    \"portRange\": [6100, 6120] \n  }\n}\n```"
        }
    ]
} };
});