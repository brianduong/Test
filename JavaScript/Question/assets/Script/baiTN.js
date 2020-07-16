var datascript = require("data");
var ln = datascript.total;
cc.Class({
    extends: cc.Component,

    properties: {
        cauhoiarr:[],
        cauhoiLabel: {
            default: null, 
            type: cc.Label
        },
        cauhoiRichText: {
            default: null,
            type: cc.RichText
        },
        resultLabel: {
            default: null,
            type: cc.Label
        },
        step: {
            default: 0,
            type: cc.Integer
        },
        score: {
            default: 0,
            type: cc.Integer
        },
        scoreLabel: {
            default: null,
            type: cc.Label
        },
        stepLabel: {
            default: null,
            type: cc.Label
        },
        dapanLabel: {
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
        nextButton: cc.Button,
        backButton: cc.Button,
        xemKQButton: cc.Button,
        color:cc.color
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.scoreLabel.string = "Chọn đáp án đúng nhất trong các đáp án." + "\n Câu " + datascript.data[0].STT + ": ";
        this.cauhoiRichText.string = datascript.data[0].Cauhoi;
        this.aLabel.string = "A." + datascript.data[0].A;
        this.bLabel.string = "B." + datascript.data[0].B;
        this.cLabel.string = "C." + datascript.data[0].C;
        this.score = 0;
        if(this.step <= 0) {
            this.backButton.node.active =  false;
            this.xemKQButton.node.active = false;
        }
    },
    start () {
    },

    //update (dt) {},
    loadScreenHome() {
        cc.director.loadScene("home");
    }, 
    chooseA() {
       this.resetColor();
       if(this.step < ln) {
          datascript.data[this.step].User = "A";
          this.inDapAn();
           if(datascript.data[this.step].User == "A") {
            this.aLabel.node.color = new cc.Color(255,0,0);
           } else {
            this.aLabel.node.color = new cc.Color(0,0,0);
           }
       }
    },
    chooseB() {
        this.resetColor();
        if(this.step < ln) {
           datascript.data[this.step].User = "B";
           this.inDapAn();
            if(datascript.data[this.step].User == "B") {
                this.bLabel.node.color = new cc.Color(255,0,0);
               } else {
                this.bLabel.node.color = new cc.Color(0,0,0);
               }
        }
    }, 
    chooseC() {
        this.resetColor();
        if(this.step < ln) {
           datascript.data[this.step].User = "C";
           this.inDapAn();
           if(datascript.data[this.step].User == "C") {
            this.cLabel.node.color = new cc.Color(255,0,0);
           } else {
            this.cLabel.node.color = new cc.Color(0,0,0);
           }
        }
    },
    choosenext() {
       this.resetColor();
        if(datascript.data[this.step].User == 0) {
            this.resultLabel.string = "Bạn chưa chọn câu trả lời";
        } else {
            this.step = this.step + 1;
            this.scoreLabel.string = "Chọn đáp án đúng nhất trong các đáp án." + "\n \nCâu " + datascript.data[0].STT + ": ";
            if(datascript.data[this.step].User == 0) {
                this.resultLabel.string = "";
            } else {
                this.inColor();
            }
            if(this.step > 0) {
            this.backButton.node.active = true; 
            } 
            if(this.step == 0) {
                this.backButton.node.active = false; 
            }
            if(this.step < ln) {
            this.inCauHoi();
            } else {
                this.cauhoiRichText.string = "";
                this.aLabel.string = "";
                this.bLabel.string = "";
                this.cLabel.string = "";
                this.scoreLabel.string = "Đã hoàn thành";
                this.nextButton.node.active = false;
                this.backButton.node.active = false;
                this.xemKQButton.node.active = true;
            }
            }
            }, 
    chooseBack() {
        this.resetColor()
        if(this.step < ln) {
            this.step = this.step - 1;
            if(this.step == 0) {
                this.backButton.node.active = false;
                this.inColor();
            }
            this.inCauHoi();
            this.inColor();
        }
    },
    xemKQ() {
        var ketqua = "";
        this.step = this.step;
        if(this.step < ln) {
            this.xemKQButton.node.active = false; 
        } else {
            if(this.score > ln) {
                this.score = ln;
            }
            this.resultLabel.string = "Đúng: " + this.score + "/" + ln;
            for(var i = 0; i < ln; i++) {
                console.log(typeof ketqua);
                ketqua += "\n Câu " + datascript.data[i].STT + ": " + "Chọn: " + datascript.data[i].User + ", KQ: " +datascript.data[i].DapAn;
            }
            this.dapanLabel.string = "Đáp án: " + ketqua;
            this.backButton.node.active = false;
            this.nextButton.node.active = false;
        }
    },
    resetColor() {
        this.cLabel.node.color = new cc.Color(0,0,0);
        this.bLabel.node.color = new cc.Color(0,0,0);
        this.aLabel.node.color = new cc.Color(0,0,0);
    },
    inCauHoi() {
        this.scoreLabel.string = "Chọn đáp án đúng nhất trong các đáp án." + "\n \nCâu " + datascript.data[this.step].STT + ": ";
        this.cauhoiRichText.string = datascript.data[this.step].Cauhoi;
        this.aLabel.string = "A." + datascript.data[this.step].A;
        this.bLabel.string = "B." + datascript.data[this.step].B;
        this.cLabel.string = "C." + datascript.data[this.step].C;
    },
    inDapAn() {
        this.resultLabel.string = "Bạn chọn đáp án: " + datascript.data[this.step].User;
        if(datascript.data[this.step].User == datascript.data[this.step].DapAn) {
            this.score = this.score + 1;
        } else {
            this.resultLabel.string = "Bạn chọn đáp án: " + datascript.data[this.step].User;
        }
    },
    inColor() {
        this.resultLabel.string = "Bạn chọn đáp án: " + datascript.data[this.step].User;
                if(datascript.data[this.step].User == "A") {
                    this.aLabel.node.color = new cc.Color(255,0,0);
                }
                if(datascript.data[this.step].User == "B") {
                    this.bLabel.node.color = new cc.Color(255,0,0);
                }
                if(datascript.data[this.step].User == "C") {
                    this.cLabel.node.color = new cc.Color(255,0,0);
                }
    }
});
