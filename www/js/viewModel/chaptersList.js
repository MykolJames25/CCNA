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
        console.log(chapter);
        localStorage.chapter = chapter.chapter_id;
        if (localStorage.menu == 1) {
            console.log("Modules");
            window.location.href = "pdf/11/index.htm";
        }

        if (localStorage.menu == 2) {
            localStorage.quiz = chapter.chapter_id;
            console.log("Quizzes");
            var questionSet = []
            console.log(questionData.length);
            console.log(localStorage.module);
            console.log(localStorage.quiz);
            for (var i = 0; i < questionData.length; i++) {
                if (questionData[i].module_id == localStorage.module && questionData[i].quiz_id == localStorage.quiz) {
                    questionSet.push(questionData[i])
                }
            }
            console.log(questionSet);
            quizPage.load(questionSet,0);
        }

    }



}
