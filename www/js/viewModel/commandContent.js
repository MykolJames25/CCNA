function CommandContentPage() {
    console.log("Command Content Page");

    var self = this;
    self.commandContentList = ko.observableArray([]);

    self.load = function (commands) {
        activate_subpage("#commandContentListPage")
        self.commandContentList(commands)
        console.log(commands);
    }

}
