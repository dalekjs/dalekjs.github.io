YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Browser.FirefoxDriver",
        "FirefoxDriver.Commands.Marionette.Cookie",
        "FirefoxDriver.Commands.Marionette.Element",
        "FirefoxDriver.Commands.Marionette.Execute",
        "FirefoxDriver.Commands.Marionette.Frame",
        "FirefoxDriver.Commands.Marionette.IME",
        "FirefoxDriver.Commands.Marionette.Interaction",
        "FirefoxDriver.Commands.Marionette.Page",
        "FirefoxDriver.Commands.Marionette.Screenshot",
        "FirefoxDriver.Commands.Marionette.Session",
        "FirefoxDriver.Commands.Marionette.Storage",
        "FirefoxDriver.Commands.Marionette.Timeout",
        "FirefoxDriver.Commands.Marionette.Url",
        "FirefoxDriver.Commands.Marionette.Window",
        "FirefoxDriver.Commands.WebDriver.Cookie",
        "FirefoxDriver.Commands.WebDriver.Element",
        "FirefoxDriver.Commands.WebDriver.Frame",
        "FirefoxDriver.Commands.WebDriver.Ime",
        "FirefoxDriver.Commands.WebDriver.Interaction",
        "FirefoxDriver.Commands.WebDriver.Logging",
        "FirefoxDriver.Commands.WebDriver.Page",
        "FirefoxDriver.Commands.WebDriver.Screenshot",
        "FirefoxDriver.Commands.WebDriver.ScriptExecutor",
        "FirefoxDriver.Commands.WebDriver.Session",
        "FirefoxDriver.Commands.WebDriver.Storage",
        "FirefoxDriver.Commands.WebDriver.Timeout",
        "FirefoxDriver.Commands.WebDriver.URL",
        "FirefoxDriver.Commands.WebDriver.Window",
        "FirefoxDriver.Marionette",
        "FirefoxDriver.WebDriverServer"
    ],
    "modules": [
        "DalekJS",
        "FirefoxDriver"
    ],
    "allModules": [
        {
            "displayName": "DalekJS",
            "name": "DalekJS",
            "description": "This module is a browser plugin for [DalekJS](//github.com/dalekjs/dalek).\nIt provides all a WebDriverServer & browser launcher for Mozilla Firefox &amp; Firefox OS.\n\nThe browser plugin can be installed with the following command:\n\n```bash\n$ npm install dalek-browser-firefox --save-dev\n```\n\nYou can use the browser plugin by adding a config option to the your Dalekfile\n\n```javascript\n\"browser\": [\"firefox\"]\n```\n\nOr you can tell Dalek that it should test in this browser via the command line:\n\n```bash\n$ dalek mytest.js -b firefox\n```\n\nBecause of the availability of the Firefox Marionette testing framework,\nDalek atm. can only drive the Firefox Nightly Debug builds.\n\nYou can get them from Mozillaʼs FTP server, for example the one from the 16th August [http://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/2013/08/2013-08-16-mozilla-central-debug/](http://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/2013/06/2013-06-18-mozilla-central-debug/)\n\nDalek looks for the browser in the std. installation directory, if you installed the\nbrowser in a different place, you can add the location of the browser executable to you Dalekfile,\nbecause Dalek isnʼt capable of finding the executable yet on its own.\n\n```javascript\n\"browsers\": [{\n  \"firefox\": {\n    \"path\": \"~/Apps/FirefoxNightlyDebug.app/Contents/MacOS/firefox-bin\"\n  }\n}]\n```\n\nThe Firefox plugin only implements a subset of Dalekʼs assertions & actions,\nso if you run into any bugs, the issue is most probably related to missing commands.\nPlease report any issues you find, Thank you :)\n\nThe Webdriver Server tries to open Port 9006 by default,\nif this port is blocked, it tries to use a port between 9007 & 9096\nYou can specifiy a different port from within your [Dalekfile](/pages/config.html) like so:\n\n```javascript\n\"browsers\": {\n  \"firefox\": {\n    \"port\": 5555 \n  }\n}\n```\n\nIt is also possible to specify a range of ports:\n\n```javascript\n\"browsers\": {\n  \"firefox\": {\n    \"portRange\": [6100, 6120] \n  }\n}\n```\n\nIf you would like to test Aurora oder Firefox OS releases, you can simply apply a snd. argument,\nwhich defines the browser type:\n\n```bash\n$ dalek mytest.js -b firefox:aurora\n```\n\nfor Firefox Aurora, and if you would like to use the Firefox OS, just append `:os`:\n\n```bash\n$ dalek mytest.js -b firefox:os\n```\n\nThis will only work if you installed your browser in the default locations,\nif the browsers binary is located in a non default location, you are able to specify\nits location in your [Dalekfile](/pages/config.html):\n\n```javascript\n\"browsers\": {\n  \"firefox\": {\n    \"binary\": \"/Applications/Custom Located Firefox.app/MacOS/Contents/firefox-bin\" \n  }\n}\n```\n\nThis also works for the aurora &amp; Firefox OS builds\n\n```javascript\n\"browsers\": {\n  \"firefox:aurora\": {\n    \"binary\": \"/Applications/Custom Located Firefox Aurora.app/MacOS/Contents/firefox-bin\" \n  }\n}\n```"
        },
        {
            "displayName": "FirefoxDriver",
            "name": "FirefoxDriver",
            "description": "Cookie related Marionette commands\nsee [JsonProtocol](https://wiki.mozilla.org/Auto-tools/Projects/Marionette/JSON_Protocol)"
        }
    ]
} };
});