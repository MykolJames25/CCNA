function GlosarryList() {
    console.log("GLossary Chapter List Ready");
    var self = this;
    var command = []
    self.glossaryList = ko.observableArray([]);

    self.load = function () {
        activate_subpage("#commandGuideListPage");
        for (var i = 0; i < commandNameData.length; i++) {
            command.push(commandNameData[i])
        }
        self.commandNameList(command);
    }

    self.selectCommand = function (command) {
        localStorage.command = command.command_name;
        console.log(localStorage.command);
        var commandsList = []
        for (var i = 0; i < commandContentData.length; i++) {
            if (commandContentData[i].command_name == localStorage.command) {
                commandsList.push(commandContentData[i]);
            }
        }
        commandContentPage.load(commandsList);
    }
}
