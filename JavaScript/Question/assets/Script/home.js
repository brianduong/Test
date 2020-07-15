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
        }, 
        demSoCau: {
            default: 0,
            type: cc.Integer
        }, 
        showSoCauRichText: {
            default: null, 
            type: cc.RichText
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
        this.demSoCau = this.demSoCau + 1;
        this.showSoCauRichText.string = "Số câu đã làm là: " + this.demSoCau;
    }, 
    chosecau1a() {
        this.showkqLabel.string = "Đáp án sai. Kết quả đúng là: " + this.questionarr[0].B;
        this.resultLabel.string = "Số câu đúng: " + this.score;
    }, 
    chosecau1b() {
        this.showkqLabel.string = "Đáp án đúng";
        this.score = this.score + 1;
        this.resultLabel.string = "Số câu đúng: " + this.score;
    },
    choosecau1c() {
        this.showkqLabel.string = "Đáp án sai. Kết quả đúng là: " + this.questionarr[0].B;
        this.resultLabel.string = "Số câu đúng: " + this.score;
    },
    choosecau2() {
        this.showlabel.string = "Câu: " + this.questionarr[1].STT + ": " + this.questionarr[1].Cauhoi;
        this.a1Label.string = this.questionarr[1].A;
        this.b1Label.string = this.questionarr[1].B;
        this.c1Label.string = this.questionarr[1].C;
        this.demSoCau = this.demSoCau + 1;
        this.showSoCauRichText.string = "Số câu đã làm là: " + this.demSoCau;
    }, 
    chosecau2a() {
        this.showkqLabel.string = "Đáp án sai. Kết quả đúng là: " + this.questionarr[1].C;
        this.resultLabel.string = "Số câu đúng: " + this.score;
    }, 
    chosecau2b() {
        this.showkqLabel.string = "Đáp án sai. Kết quả đúng là: " + this.questionarr[1].C;
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
        this.demSoCau = this.demSoCau + 1;
        this.showSoCauRichText.string = "Số câu đã làm là: " + this.demSoCau;
    }, 
    chosecau3a() {
        this.showkqLabel.string = "Đáp án sai. Kết quả đúng là: " + this.questionarr[2].B;
        this.resultLabel.string = "Số câu đúng: " + this.score;
    }, 
    chosecau3b() {
        this.showkqLabel.string = "Đáp án đúng";
        this.score = this.score + 1
        this.resultLabel.string = "Số câu đúng: " + this.score;
    },
    choosecau3c() {
        this.showkqLabel.string = "Đáp án sai. Kết quả đúng là: " + this.questionarr[2].B;
        this.resultLabel.string = "Số câu đúng: " + this.score;
    }, 
    loadnextscreen() {
        cc.director.loadScene("baiTN");
    }

});
