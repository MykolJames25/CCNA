function ModulesList() {
    console.log("Module Chapter List Ready");
    var self = this;

    self.moduleList = ko.observableArray([]);

    self.load = function (menuID) {
        activate_subpage("#modulesListSubpage");
        self.moduleList(moduleData);
    }

    self.selectModule = function (module) {
        localStorage.module = module.module_id;
        chapterList.load();
    }

}
