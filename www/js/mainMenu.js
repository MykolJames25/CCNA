function MainMenu() {
    var self = this;

    self.menuList = ko.observableArray([]);

    self.load = function () {
        console.log(menuData)
        activate_subpage("#mainMenuListSubpage");
        self.menuList(menuData);
    }

    self.selectMenu = function (menu) {
        localStorage.menu = menu.id;
        if (menu.id == 1 || menu.id == 2) {
            modulesList.load();
        }
        if (menu.id == 3) {
        }
        if (menu.id == 4) {
            commandListPage.load();
        }
    }

}
