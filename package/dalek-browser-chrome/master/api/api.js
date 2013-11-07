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
            "description": "This module is a browser plugin for [DalekJS](//github.com/dalekjs/dalek).\nIt provides all a WebDriverServer & browser launcher for Google Chrome.\n\nThe browser plugin can be installed with the following command:\n\n```bash\n$ npm install dalek-browser-chrome --save-dev\n```\n\nYou can use the browser plugin by adding a config option to the your [Dalekfile](/pages/config.html)\n\n```javascript\n\"browser\": [\"chrome\"]\n```\n\nOr you can tell Dalek that it should test in this browser via the command line:\n\n```bash\n$ dalek mytest.js -b chrome\n```\n\nThe Webdriver Server tries to open Port 9002 by default,\nif this port is blocked, it tries to use a port between 9003 & 9092\nYou can specifiy a different port from within your [Dalekfile](/pages/config.html) like so:\n\n```javascript\n\"browsers\": [{\n  \"chrome\": {\n    \"port\": 5555 \n  }\n}]\n```\n\nIt is also possible to specify a range of ports:\n\n```javascript\n\"browsers\": [{\n  \"chrome\": {\n    \"portRange\": [6100, 6120] \n  }\n}]\n```\n\nIf you would like to test Chrome Canary oder Chromium releases, you can simply apply a snd. argument,\nwhich defines the browser type:\n\n```bash\n$ dalek mytest.js -b chrome:canary\n```\n\nfor canary, and if you would like to use chromium, just append `:chromium`:\n\n```bash\n$ dalek mytest.js -b chrome:chromium\n```\n\nThis will only work if you installed your browser in the default locations,\nif the browsers binary is located in a non default location, you are able to specify\nits location in your [Dalekfile](/pages/config.html):\n\n```javascript\n\"browsers\": [{\n  \"chrome\": {\n    \"binary\": \"/Applications/Custom Located Chrome.app/MacOS/Contents/Chrome\" \n  }\n}]\n```\n\nThis also works for the canary &amp; chromium builds\n\n```javascript\n\"browsers\": [{\n  \"chrome\": {\n    \"binary\": \"/Applications/Custom Located Chrome.app/MacOS/Contents/Chrome\" \n  }\n}]\n```"
        }
    ]
} };
});