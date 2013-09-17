YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Browser.IosDriver"
    ],
    "modules": [
        "DalekJS"
    ],
    "allModules": [
        {
            "displayName": "DalekJS",
            "name": "DalekJS",
            "description": "This module is a browser plugin for [DalekJS](//github.com/dalekjs/dalek).\nIt provides all a WebDriverServer & browser launcher for Safari on iOS.\n\nAt the moment this only works with the IPhone \n\nThe browser plugin can be installed with the following command:\n\n```bash\n$ npm install dalek-browser-ios --save-dev\n```\n\nYou can use the browser plugin by adding a config option to the your Dalekfile\n\n```javascript\n\"browsers\": [\"ios\"]\n```\n\nOr you can tell Dalek that it should test in this browser via the command line:\n\n```bash\n$ dalek mytest.js -b ios\n```\n\nThe Webdriver Server tries to open Port 9003 by default,\nif this port is blocked, it tries to use a port between 9004 & 9093\nYou can specifiy a different port from within your [Dalekfile](/pages/config.html) like so:\n\n```javascript\n\"browsers\": {\n  \"ios\": {\n    \"port\": 5555 \n  }\n}\n```\n\nIt is also possible to specify a range of ports:\n\n```javascript\n\"browsers\": {\n  \"ios\": {\n    \"portRange\": [6100, 6120] \n  }\n}\n```\n\nIf you would like to test on the IPad (IPhone) emulator, you can simply apply a snd. argument,\nwhich defines the browser type:\n\n```bash\n$ dalek mytest.js -b ios:ipad\n```"
        }
    ]
} };
});