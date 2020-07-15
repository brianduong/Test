cc.Class({
    extends: cc.Component,

    properties: {
        showlabel: {
            default: null,
            type: cc.Label
        },
        aLabel: {
            default: null, 
            type: cc.Label
        }, 
        bLabel: {
            default: null, 
            type: cc.Label
        }, 
        cLabel: {
            default: null, 
            type: cc.Label
        },
        a1Label: {
            default: null, 
            type: cc.Label
        }, 
        b1Label: {
            default: null, 
            type: cc.Label
        }, 
        c1Label: {
            default: null, 
            type: cc.Label
        },
        a2Label: {
            default: null, 
            type: cc.Label
        }, 
        b2Label: {
            default: null, 
            type: cc.Label
        }, 
        c2Label: {
            default: null, 
            type: cc.Label
        },
        questionarr: [], 
        resultLabel: {
            default: null, 
            type: cc.Label
        }, 
        showkqLabel: {
            default: null, 
            type: cc.Label
        },
        score: {
            default: 0,
            type: cc.Integer
        }
        // defaults, set visually when attaching this script to the Canvas
    },

    // use this for initialization
    onLoad: function () {
        var n = this.score;
        this.questionarr = [{"STT": "1", "Cauhoi":"Lá cờ Việt Nam có màu gì?", "A": "Xanh", "B": "Đỏ", "C": "Vàng"},
                            {"STT": "2", "Cauhoi":"Số bé nhất có hai chữ số là:", "A": "11", "B": "12", "C": "5"},
                            {"STT": "3", "Cauhoi":"Số 100 có mấy chữ số?:", "A": "2", "B": "3", "C": "4"}];
        this.showlabel.string = "Chọn câu hỏi";
    },

    // called every frame
    update: function (dt) {

    },
    choosecau1() {
        this.showlabel.string = "Câu: " + this.questionarr[0].STT + ": " + this.questionarr[0].Cauhoi;
        this.aLabel.string = this.questionarr[0].A;
        this.bLabel.string = this.questionarr[0].B;
        this.cLabel.string = this.questionarr[0].C;

    }, 
    chosecau1a() {
        this.showkqLabel.string = "Đáp án sai";
        this.resultLabel.string = "Số câu đúng: " + this.score;
    }, 
    chosecau1b() {
        this.showkqLabel.string = "Đáp án đúng";
        this.score = this.score + 1;
        this.resultLabel.string = "Số câu đúng: " + this.score;
    },
    choosecau1c() {
        this.showkqLabel.string = "Đáp án sai";
        this.resultLabel.string = "Số câu đúng: " + this.score;
    },
    choosecau2() {
        this.showlabel.string = "Câu: " + this.questionarr[1].STT + ": " + this.questionarr[1].Cauhoi;
        this.a1Label.string = this.questionarr[1].A;
        this.b1Label.string = this.questionarr[1].B;
        this.c1Label.string = this.questionarr[1].C;
    }, 
    chosecau2a() {
        this.showkqLabel.string = "Đáp án sai";
        this.resultLabel.string = "Số câu đúng: " + this.score;
    }, 
    chosecau2b() {
        this.showkqLabel.string = "Đáp án sai";
        this.resultLabel.string = "Số câu đúng: " + this.score;
    },
    choosecau2c() {
        this.showkqLabel.string = "Đáp án đúng";
        this.score = this.score + 1
        this.resultLabel.string = "Số câu đúng: " + this.score;
    }, 
    choosecau3() {
        this.showlabel.string = "Câu: " + this.questionarr[2].STT + ": " + this.questionarr[2].Cauhoi;
        this.a2Label.string = this.questionarr[2].A;
        this.b2Label.string = this.questionarr[2].B;
        this.c2Label.string = this.questionarr[2].C;
    }, 
    chosecau3a() {
        this.showkqLabel.string = "Đáp án sai";
        this.resultLabel.string = "Số câu đúng: " + (this.score - 1);
    }, 
    chosecau3b() {
        this.showkqLabel.string = "Đáp án sai";
        this.resultLabel.string = "Số câu đúng: " + this.score;
    },
    choosecau3c() {
        this.showkqLabel.string = "Đáp án đúng";
        this.score = this.score + 1
        this.resultLabel.string = "Số câu đúng: " + this.score;
    }, 

});
