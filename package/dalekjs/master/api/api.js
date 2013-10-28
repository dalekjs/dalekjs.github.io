YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Actions",
        "Dalek",
        "Dalek.Config",
        "Dalek.Driver",
        "Dalek.Internal.Assertions",
        "Dalek.Remote",
        "Dalek.Reporter",
        "Dalek.Suite",
        "Dalek.Timer",
        "Dalek.Unit",
        "Host"
    ],
    "modules": [
        "Assertions",
        "Dalek",
        "DalekJS",
        "Remote"
    ],
    "allModules": [
        {
            "displayName": "Assertions",
            "name": "Assertions"
        },
        {
            "displayName": "Dalek",
            "name": "Dalek",
            "description": "Remote Dalek host proxy"
        },
        {
            "displayName": "DalekJS",
            "name": "DalekJS",
            "description": "Checks & loads reporter modules"
        },
        {
            "displayName": "Remote",
            "name": "Remote",
            "description": "Mimics a real browser that runs in a remote dalek instance"
        }
    ]
} };
});