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
            "description": "This module is a browser plugin for [DalekJS](//github.com/dalekjs/dalek).\nIt provides a browser launcher as well the PhantomJS browser itself.\n\nThe browser plugin comes bundled with the DalekJS base framework.\n\nYou can use the browser plugin beside others (it is the default)\nby adding a config option to the your Dalekfile:\n\n```javascript\n\"browsers\": [\"phantomjs\", \"chrome\"]\n```\n\nOr you can tell Dalek that it should test in this & another browser via the command line:\n\n```bash\n$ dalek mytest.js -b phantomjs,chrome\n```"
        }
    ]
} };
});