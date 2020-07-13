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
        questionarr: [], 
        resultLabel: {
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
        this.showlabel.string = "Câu "+ this.questionarr[0].STT +  ": "+ this.questionarr[0].Cauhoi;
        this.aLabel.string = this.questionarr[0].A;
        this.bLabel.string = this.questionarr[0].B;
        this.cLabel.string = this.questionarr[0].C;
        this.resultLabel.string = "Số câu đúng là: " + n;
    },

    // called every frame
    update: function (dt) {

    },
    choosedapanA1() {
        this.showlabel.string = "Câu "+ this.questionarr[0].STT + ": "+ this.questionarr[0].Cauhoi;
        this.aLabel.string = this.questionarr[0].A;
        this.bLabel.string = this.questionarr[0].B;
        this.cLabel.string = this.questionarr[0].C;
        if(this.aLabel.string == this.questionarr[0].B )
        {
            this.resultLabel.string = "Kết quả đúng" + (this.score + 1);
            this.showlabel.string = "Câu "+ this.questionarr[1].STT + ": "+this.questionarr[1].Cauhoi;
            this.aLabel.string = this.questionarr[1].A;
            this.bLabel.string = this.questionarr[1].B;
            this.cLabel.string = this.questionarr[1].C;
            if(this.aLabel.string  == this.questionarr[1].C) {
                this.resultLabel.string = "Kết quả đúng" + (this.score + 1);
                this.showlabel.string = "Câu "+ this.questionarr[2].STT + ": "+this.questionarr[1].Cauhoi;
                this.aLabel.string = this.questionarr[2].A;
                this.bLabel.string = this.questionarr[2].B;
                this.cLabel.string = this.questionarr[2].C;
            } else {
                this.resultLabel.string = "Kết quả sai" + (this.score + 0);
                this.showlabel.string = "Câu "+ this.questionarr[2].STT + ": "+this.questionarr[1].Cauhoi;
                this.aLabel.string = this.questionarr[2].A;
                this.bLabel.string = this.questionarr[2].B;
                this.cLabel.string = this.questionarr[2].C;
            }
        } else {
            this.resultLabel.string = "Số câu đúng là: " + (this.score + 0);
            this.showlabel.string = "Câu "+ this.questionarr[1].STT + ": "+this.questionarr[2].Cauhoi;
            this.aLabel.string = this.questionarr[1].A;
            this.bLabel.string = this.questionarr[1].B;
            this.cLabel.string = this.questionarr[1].C;
        }
        
    },
    choosedapanB1() {
        this.showlabel.string = "Câu "+ this.questionarr[1].STT + ": "+this.questionarr[1].Cauhoi;
        this.aLabel.string = this.questionarr[1].A;
        this.bLabel.string = this.questionarr[1].B;
        this.cLabel.string = this.questionarr[1].C;
        this.resultLabel.string = "Số câu đúng là: " + (this.score + 1);
    },
    choosedapanC1() {
        this.showlabel.string = "Câu "+ this.questionarr[1].STT + ": "+this.questionarr[1].Cauhoi;
        this.aLabel.string = this.questionarr[1].A;
        this.bLabel.string = this.questionarr[1].B;
        this.cLabel.string = this.questionarr[1].C;
        this.resultLabel.string = "Số câu đúng là: " + (this.score + 0);
    }
});
