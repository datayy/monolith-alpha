define([], function() {
    var $ = monolith.require("hr/dom");
    var settings = monolith.require("core/settings");

    // Add settings
    return settings.add({
        'namespace': "files-panel",
        'title': "Files Explorer Panel",
        'defaults': {
            'openfiles': true,
            'hiddenfiles': true,
            'gitfolder': false
        },
        'fields': {
            'hiddenfiles': {
                'label': "Show Hidden Files",
                'type': "checkbox"
            },
            'gitfolder': {
                'label': "Show GIT Folder",
                'type': "checkbox"
            }
        }
    });
});