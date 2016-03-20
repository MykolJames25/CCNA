function QuizPage() {
    console.log("Quiz is ready!");

    var self = this;
    var questionSet;
    var id;

    self.questionNameA = ko.observable("");
    self.questionNameB = ko.observable("");
    self.questionNameC = ko.observable("");
    self.questionA = ko.observable("");
    self.questionB = ko.observable("");
    self.questionC = ko.observable("");
    self.questionChoice1A = ko.observable("");
    self.questionChoice2A = ko.observable("");
    self.questionChoice3A = ko.observable("");
    self.questionChoice4A = ko.observable("");
    self.questionChoice1B = ko.observable("");
    self.questionChoice2B = ko.observable("");
    self.questionChoice3B = ko.observable("");
    self.questionChoice4B = ko.observable("");
    self.questionChoice5B = ko.observable("");
    self.questionChoice6B = ko.observable("");
    self.questionChoiceC = ko.observable("");
    self.questionAnswerA = ko.observable("");
    self.questionAnswerB = ko.observable("");
    self.questionAnswerC = ko.observable("");

    self.load = function (questions, index) {
        questionSet = questions;
        id = index;
        if (questionSet[index].type_id == 1) {
            console.log(questionSet[index]);
            hideObject("answerA");
            activate_subpage("#quizzesTypeASubpage")
            self.questionNameA(questionSet[index].quiz_name);
            self.questionA(questionSet[index].question);
            self.questionChoice1A("A:" + questionSet[index].answerA);
            self.questionChoice2A("B:" + questionSet[index].answerB);
            self.questionChoice3A("C:" + questionSet[index].answerC);
            self.questionChoice4A("D:" + questionSet[index].answerD);
            self.questionAnswerA("ANSWER:" + questionSet[index].correct_answer + " EXPLANATION: " + questionSet[index].explanation);
            console.log("Single Answer")
        } else if (questionSet[index].type_id == 2) {
            hideObject("answerB");
            self.questionChoice1B("A:" + questionSet[index].answerA);
            self.questionChoice2B("B:" + questionSet[index].answerB);
            self.questionChoice3B("C:" + questionSet[index].answerC);
            self.questionChoice4B("D:" + questionSet[index].answerD);
            self.questionChoice5B("E:" + questionSet[index].answerE);
            self.questionChoice6B("F:" + questionSet[index].answerF);
            self.questionAnswerB("ANSWER:" + questionSet[index].correct_answer + " EXPLANATION:  " + questionSet[index].explanation);
            activate_subpage("#quizzesTypeBSubpage")
            console.log("Multiple Answer")
        } else if (questionSet[index].type_id == 3) {
            hideObject("answerC");
            activate_subpage("#quizzesTypeCSubpage");
            console.log(questionSet[index]);
            self.questionNameC(questionSet[index].quiz_name);
            self.questionC(questionSet[index].question);
            self.questionChoiceC("ANSWER:" + questionSet[index].correct_answer + " EXPLANATION: " + questionSet[index].explanation);
        }
    }

    self.backA = function () {
        activate_subpage("#chaptersListSubpage");
    }

    self.prevA = function () {
        if (id >= 0) {
            self.load(questionSet, id - 1);
        }
    }

    self.nextA = function () {
        if (id <= questionSet.length) {
            self.load(questionSet, id + 1);
        }

    }

    self.backB = function () {
        activate_subpage("#chaptersListSubpage");
    }

    self.prevB = function () {
        if (id >= 0) {
            self.load(questionSet, id - 1);
        }
    }

    self.nextB = function () {
        if (id <= questionSet.length) {
            self.load(questionSet, id + 1);

        }
    }

    self.backC = function () {
        activate_subpage("#chaptersListSubpage");
    }

    self.prevC = function () {
        if (id >= 0) {
            self.load(questionSet, id - 1);
        }
    }

    self.nextC = function () {
        if (id <= questionSet.length) {
            self.load(questionSet, id + 1);
        }
    }

    self.checkAnswerA = function () {
        showObject("answerA");
    }

    self.checkAnswerB = function () {
        showObject("answerB");

    }

    self.checkAnswerC = function () {
        showObject("answerC");

    }
}
