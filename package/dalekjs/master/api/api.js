YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Actions",
        "Dalek",
        "Dalek.Config",
        "Dalek.Driver",
        "Dalek.Internal.Assertions",
        "Dalek.Reporter",
        "Dalek.Suite",
        "Dalek.Timer",
        "Dalek.Unit"
    ],
    "modules": [
        "Assertions",
        "DalekJS"
    ],
    "allModules": [
        {
            "displayName": "Assertions",
            "name": "Assertions"
        },
        {
            "displayName": "DalekJS",
            "name": "DalekJS",
            "description": "Parses config data & loads config files for [DalekJS](//github.com/dalekjs/dalek) tests.\n\nThis module is a driver plugin for [DalekJS](//github.com/dalekjs/dalek).\nIt connects Daleks testsuite with the remote testing environment of [Sauce Labs](https://saucelabs.com).\n\nThe driver can be installed with the following command:\n\n```bash\n$ npm install dalek-driver-sauce --save-dev\n```\n\nYou can use the driver by adding a config option to the your [Dalekfile](/docs/config.html)\n\n```javascript\n\"driver\": [\"sauce\"]\n```\n\nOr you can tell Dalek that it should run your tests via sauces service via the command line:\n\n```bash\n$ dalek mytest.js -d sauce\n```\n\nIn order to run your tests within the Sauce Labs infrastructure, you must add your sauce username & key \nto your dalek configuration. Those two parameters must be set in order to get this driver up & running.\nYou can specifiy them within your [Dalekfile](/docs/config.html) like so:\n\n```javascript\n\"driver.sauce\": {\n  \"user\": \"dalekjs\",\n  \"key\": \"aaaaaa-1234-567a-1abc-1br6d9f68689\"\n}\n```\n\nIt is also possible to specify a set of other extra saucy parameters like `name` & `tags`:\n\n```javascript\n\"driver.sauce\": {\n  \"user\": \"dalekjs\",\n  \"key\": \"aaaaaa-1234-567a-1abc-1br6d9f68689\",\n  \"name\": \"Guineapig\",\n  \"tags\": [\"dalek\", \"testproject\"]\n}\n```\n\nIf you would like to have a more control over the browser/OS combinations that are available, you are able \nto configure you custom combinations:\n\n```javascript\n\"browsers\": [{\n  \"chrome\": {\n    \"platform\": \"OS X 10.6\",\n    \"actAs\": \"chrome\",\n    \"version\": 27\n  },\n  \"chromeWin\": {\n    \"platform\": \"Windows 7\",\n    \"actAs\": \"chrome\",\n    \"version\": 27\n  },\n  \"chromeLinux\": {\n    \"platform\": \"Linux\",\n    \"actAs\": \"chrome\",\n    \"version\": 26\n  }\n```\n\nYou can then call your custom browsers like so:\n\n```bash\n$ dalek mytest.js -d sauce -b chrome,chromeWin,chromeLinux\n```\n\nor you can define them in your Dalekfile:\n\n```javascript\n\"browser\": [\"chrome\", \"chromeWin\", \"chromeLinux\"]\n```\n\nA list of all available browser/OS combinations, can be found [here](https://saucelabs.com/docs/platforms)."
        }
    ]
} };
});