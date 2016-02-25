function ChapterList() {
    console.log("Module Chapter List Ready");
    var self = this;
    var chapters = []
    self.chaptersList = ko.observableArray([]);

    self.load = function (menuID) {
        activate_subpage("#chaptersListSubpage");
        for (var i = 0; i < chapterData.length; i++) {
            if (chapterData[i].module_id == localStorage.module) {
                chapters.push(chapterData[i])
            }
        }
        console.log(chapterData)
        console.log(localStorage.module)
        console.log(chapters)
        self.chaptersList(chapters);
    }

    self.selectChapter = function (chapter) {
        localStorage.chapter = chapter.id;
        if (chapter.id == 1 || chapter.id == 2) {
            console.log(localStorage);
            //            modulesList.load(menu.id);
        }
    }



}
