YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Browser.PhantomJSDriver"
    ],
    "modules": [
        "DalekJS"
    ],
    "allModules": [
        {
            "displayName": "DalekJS",
            "name": "DalekJS",
            "description": "This module is a browser plugin for [DalekJS](//github.com/dalekjs/dalek).\nIt provides a browser launcher as well the PhantomJS browser itself.\n\nThe browser plugin comes bundled with the DalekJS base framework.\n\nYou can use the browser plugin beside others (it is the default)\nby adding a config option to the your Dalekfile:\n\n```javascript\n\"browser\": [\"phantomjs\", \"chrome\"]\n```\n\nOr you can tell Dalek that it should test in this & another browser via the command line:\n\n```bash\n$ dalek mytest.js -b phantomjs,chrome\n```\n\nThe Webdriver Server tries to open Port 9001 by default,\nif this port is blocked, it tries to use a port between 9002 & 9091\nYou can specifiy a different port from within your [Dalekfile](/pages/config.html) like so:\n\n```javascript\n\"browsers\": {\n  \"phantomjs\": {\n    \"port\": 5555 \n  }\n}\n```\n\nIt is also possible to specify a range of ports:\n\n```javascript\n\"browsers\": {\n  \"phantomjs\": {\n    \"portRange\": [6100, 6120] \n  }\n}\n```\n\nIf you would like to use a different Phantom version than the one that comes bundled with the driver,\nyour are able to specify its location in your [Dalekfile](/pages/config.html):\n\n```javascript\n\"browsers\": {\n  \"phantomjs\": {\n    \"binary\": \"~/bin/phantomjs\" \n  }\n}\n```\n\nIf you would like to preserve the ability to use the bundled version,\nyou can also add an additional browser launcher in your [Dalekfile](/pages/config.html).\n\n```javascript\n\"browsers\": {\n  \"phantomjs:1.9.1\": {\n    \"binary\": \"~/bin/phantomjs\" \n  }\n}\n```\n\nAnd then launch it like this:\n\n```bash\n$ dalek mytest.js -b phantomjs:1.9.1\n```"
        }
    ]
} };
});