var datascript = require("data");
var ln = datascript.total;
var mau1 = datascript.data;
var mau2 = datascript.qToanData;
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
        loaicauhoi: {
            default:0,
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
        restartButton: cc.Button,
        aUncheckBoxButton: cc.Button,
        aCheckBoxButton: cc.Button,
        bUncheckBoxButton: cc.Button,
        bCheckBoxButton: cc.Button,
        cUncheckBoxButton: cc.Button,
        cCheckBoxButton: cc.Button,
        chooseNumber1Button: cc.Button,
        chooseNumber2Button: cc.Button,
        color:cc.color
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.hideButton();
        this.scoreLabel.string = "Chọn gói câu hỏi trắc nghiệm: \n 1 hoặc 2";
    },
    start () {
    },

    //update (dt) {},
    loadScreenHome() {
        cc.director.loadScene("home");
        this.resetResult();
    }, 
    chooseA() {
       this.resetColor();
       this.resetButton();
       if(this.step < ln) {
        if(this.loaicauhoi == 1) {
            datascript.qToanData[this.step].User = "A";
            this.inDapAn();
            this.chooseresultA();
        }
        if(this.loaicauhoi == 2) {
            mau1[this.step].User = "A";
            this.inDapAn();
            this.chooseresultA();
        }
       }
    },
    chooseB() {
        this.resetColor();
        this.resetButton();
        if(this.step < ln) {
            if(this.loaicauhoi == 1) {
                datascript.qToanData[this.step].User = "B";
            }
            if(this.loaicauhoi == 2) {
                mau1[this.step].User = "B";
            }
           this.inDapAn();
           this.chooseresultB();
        }
    }, 
    chooseC() {
        this.resetColor();
        this.resetButton();
        if(this.step < ln) {
            if(this.loaicauhoi == 1) {
                datascript.qToanData[this.step].User = "C";
            }
            if(this.loaicauhoi == 2) {
                mau1[this.step].User = "C";
            }
            this.inDapAn();
            this.chooseresultC();  
        }
    },
    choosenext() {
       this.resetColor();
       this.resetButton();
        if(datascript.qToanData[this.step].User == "0" && mau1[this.step].User == "0") {
            this.resultLabel.string = "Bạn chưa chọn câu trả lời";
        } else {
            this.step = this.step + 1;
            if(this.loaicauhoi == 1) {
                this.scoreLabel.string = "Chọn đáp án đúng nhất trong các đáp án." + "\n \nCâu " + datascript.qToanData[0].STT + ": ";
                if(datascript.qToanData[this.step].User == 0) {
                    this.resultLabel.string = "";
                } else {
                    this.inColor();
                }
                if(this.step > 0) {
                this.backButton.node.active = true; 
                this.chooseresultA();
                this.chooseresultB();
                this.chooseresultC();
                } 
                if(this.step == 0) {
                    this.backButton.node.active = false; 
                }
                if(this.step < ln) {
                this.inCauHoi();
                } else {
                  this.resetcauhoi();
                }
            }
            if(this.loaicauhoi == 2) {
                this.scoreLabel.string = "Chọn đáp án đúng nhất trong các đáp án." + "\n \nCâu " + mau1[0].STT + ": ";
                if(mau1[this.step].User == 0) {
                    this.resultLabel.string = "";
                } else {
                    this.inColor();
                }
                if(this.step > 0) {
                this.backButton.node.active = true; 
                this.chooseresultA();
                this.chooseresultB();
                this.chooseresultC();
                } 
                if(this.step == 0) {
                    this.backButton.node.active = false; 
                }
                if(this.step < ln) {
                this.inCauHoi();
                } else {
                  this.resetcauhoi();
                }
            }
            }
            }, 
    chooseBack() {
        this.resetColor();
        this.resetButton();
        if(this.step < ln) {
            if(this.step == 0) {
                this.backButton.node.active = false;
                this.inColor();
                this.chooseresultA();
                this.chooseresultB();
                this.chooseresultC();
            }
            if(this.step > 0) {
                this.step = this.step - 1;
                if(this.step == 0) {
                    this.backButton.node.active = false;
                } else {
                    this.backButton.node.active = true;
                }
                this.inColor();
                this.chooseresultA();
                this.chooseresultB();
                this.chooseresultC();
                this.inCauHoi();
                }
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
                if(this.loaicauhoi == 1) {
                    ketqua += "\n Câu " + datascript.qToanData[i].STT + ": " + "Chọn: " + datascript.qToanData[i].User + ", KQ: " +datascript.qToanData[i].DapAn;
                }
                if(this.loaicauhoi == 2) {
                    ketqua += "\n Câu " + mau1[i].STT + ": " + "Chọn: " + mau1[i].User + ", KQ: " + mau1[i].DapAn;
                }               
            }
            this.dapanLabel.string = "Đáp án: " + ketqua;
            this.backButton.node.active = false;
            this.nextButton.node.active = false;
            this.restartButton.node.active = true;
            this.aUncheckBoxButton.node.active = false;
            this.bUncheckBoxButton = false;
            this.cUncheckBoxButton = false;
        }
    },
    resetColor() {
        this.cLabel.node.color = new cc.Color(0,0,0);
        this.bLabel.node.color = new cc.Color(0,0,0);
        this.aLabel.node.color = new cc.Color(0,0,0);
    },
    inCauHoi() {
        if(this.loaicauhoi == 1) {
            this.scoreLabel.string = "Chọn đáp án đúng nhất trong các đáp án." + "\n \nCâu " + datascript.qToanData[this.step].STT + ": ";
            this.cauhoiRichText.string = datascript.qToanData[this.step].Cauhoi;
            this.aLabel.string = "A." + datascript.qToanData[this.step].A;
            this.bLabel.string = "B." + datascript.qToanData[this.step].B;
            this.cLabel.string = "C." + datascript.qToanData[this.step].C;
        }
        if(this.loaicauhoi == 2) {
            this.scoreLabel.string = "Chọn đáp án đúng nhất trong các đáp án." + "\n \nCâu " + mau1[this.step].STT + ": ";
            this.cauhoiRichText.string = mau1[this.step].Cauhoi;
            this.aLabel.string = "A." + mau1[this.step].A;
            this.bLabel.string = "B." + mau1[this.step].B;
            this.cLabel.string = "C." + mau1[this.step].C;
        }
       
    },
    inDapAn() {
        if(this.loaicauhoi == 1) {
            this.resultLabel.string = "Bạn chọn đáp án: " + datascript.qToanData[this.step].User;
            if(datascript.qToanData[this.step].User == datascript.qToanData[this.step].DapAn) {
                this.score = this.score + 1;
            } else {
                this.resultLabel.string = "Bạn chọn đáp án: " + datascript.qToanData[this.step].User;
            }
        }
        if(this.loaicauhoi == 2) {
            this.resultLabel.string = "Bạn chọn đáp án: " + mau1[this.step].User;
            if(mau1[this.step].User == mau1[this.step].DapAn) {
                this.score = this.score + 1;
            } else {
                this.resultLabel.string = "Bạn chọn đáp án: " + mau1[this.step].User;
            }
        }
       
    },
    inColor() {
        if(this.loaicauhoi == 1) {
            this.resultLabel.string = "Bạn chọn đáp án: " + datascript.qToanData[this.step].User;
                if(datascript.qToanData[this.step].User == "A") {
                    this.aLabel.node.color = new cc.Color(255,0,0);
                }
                if(datascript.qToanData[this.step].User == "B") {
                    this.bLabel.node.color = new cc.Color(255,0,0);
                }
                if(datascript.qToanData[this.step].User == "C") {
                    this.cLabel.node.color = new cc.Color(255,0,0);
                }
        }
        if(this.loaicauhoi == 2) {
            this.resultLabel.string = "Bạn chọn đáp án: " + mau1[this.step].User;
                if(mau1[this.step].User == "A") {
                    this.aLabel.node.color = new cc.Color(255,0,0);
                }
                if(mau1[this.step].User == "B") {
                    this.bLabel.node.color = new cc.Color(255,0,0);
                }
                if(mau1[this.step].User == "C") {
                    this.cLabel.node.color = new cc.Color(255,0,0);
                }
        }
        
    },
    resetResult() {
        if(this.loaicauhoi == 1) {
            for(var i = 0; i < ln; i++) {
                datascript.qToanData[i].User = " ";
            }
        }
        if(this.loaicauhoi == 2) {
            for(var i = 0; i < ln; i++) {
                mau1[i].User = " ";
            }
        }
        cc.director.loadScene("home");
    }, 
    resetButton() {
        this.aCheckBoxButton.node.active = false;
        this.bCheckBoxButton.node.active = false;
        this.cCheckBoxButton.node.active = false;
    },
    chooseresultC() {
        if(this.loaicauhoi == 1) {
            if(datascript.qToanData[this.step].User == "C") {
                this.cLabel.node.color = new cc.Color(255,0,0);
                this.cCheckBoxButton.node.active = true;
               } else {
                this.cLabel.node.color = new cc.Color(0,0,0);
                this.cCheckBoxButton.node.active = false;
                this.cUncheckBoxButton.node.active = true;
               }
        }
        if(this.loaicauhoi == 2) {
            if(mau1[this.step].User == "C") {
                this.cLabel.node.color = new cc.Color(255,0,0);
                this.cCheckBoxButton.node.active = true;
               } else {
                this.cLabel.node.color = new cc.Color(0,0,0);
                this.cCheckBoxButton.node.active = false;
                this.cUncheckBoxButton.node.active = true;
               }
        }
        
    },
    chooseresultA() {
        if(this.loaicauhoi == 1) {
            if(datascript.qToanData[this.step].User == "A") {
                this.aLabel.node.color = new cc.Color(255,0,0);
                this.aCheckBoxButton.node.active = true;
               } else {
                this.aLabel.node.color = new cc.Color(0,0,0);
                this.aCheckBoxButton.node.active = false;
                this.aUncheckBoxButton.node.active = true;
               }
        }
        if(this.loaicauhoi == 2) {
            if(mau1[this.step].User == "A") {
                this.aLabel.node.color = new cc.Color(255,0,0);
                this.aCheckBoxButton.node.active = true;
               } else {
                this.aLabel.node.color = new cc.Color(0,0,0);
                this.aCheckBoxButton.node.active = false;
                this.aUncheckBoxButton.node.active = true;
               }
        }
        
    },
    chooseresultB() {
        if(this.loaicauhoi == 1) {
            if(datascript.qToanData[this.step].User == "B") {
                this.bLabel.node.color = new cc.Color(255,0,0);
                this.bCheckBoxButton.node.active = true;
               } else {
                this.bLabel.node.color = new cc.Color(0,0,0);
                this.bCheckBoxButton.node.active = false;
                this.bUncheckBoxButton.node.active = true;
               }
        }
        if(this.loaicauhoi == 2) {
            if(mau1[this.step].User == "B") {
                this.bLabel.node.color = new cc.Color(255,0,0);
                this.bCheckBoxButton.node.active = true;
               } else {
                this.bLabel.node.color = new cc.Color(0,0,0);
                this.bCheckBoxButton.node.active = false;
                this.bUncheckBoxButton.node.active = true;
               }
        }
        
    },
    hideButton() {
            this.backButton.node.active =  false;
            this.xemKQButton.node.active = false;           
            this.restartButton.node.active = false;
            this.aCheckBoxButton.node.active = false;
            this.bCheckBoxButton.node.active = false;
            this.cCheckBoxButton.node.active = false;
            this.nextButton.node.active = false;
            this.aLabel.string = "";
            this.bLabel.string = "";
            this.cLabel.string = "";
            this.cauhoiRichText.string = "";
            this.aCheckBoxButton.node.active = false;
            this.aUncheckBoxButton.node.active = false;
            this.bCheckBoxButton.node.active = false;
            this.bUncheckBoxButton.node.active = false;
            this.cCheckBoxButton.node.active = false;
            this.cUncheckBoxButton.node.active = false;
        
    },
    showButton() {
        if(this.step == 0) {
            this.backButton.node.active =  false;
            this.xemKQButton.node.active = false;  
            this.restartButton.node.active = false;
            this.aCheckBoxButton.node.active = false;
            this.bCheckBoxButton.node.active = false;
            this.cCheckBoxButton.node.active = false;
            this.nextButton.node.active = true;
            this.aUncheckBoxButton.node.active = true;
            this.bUncheckBoxButton.node.active = true;
            this.cUncheckBoxButton.node.active = true;
        }                 
    },
    choosenumber1() {
        this.chooseNumber1Button.node.active = false;
        this.chooseNumber2Button.node.active = false;
        this.scoreLabel.string = "Chọn đáp án đúng nhất trong các đáp án." + "\n Câu " + datascript.qToanData[0].STT + ": ";
        this.cauhoiRichText.string = datascript.qToanData[0].Cauhoi;
        this.aLabel.string = "A." + datascript.qToanData[0].A;
        this.bLabel.string = "B." + datascript.qToanData[0].B;
        this.cLabel.string = "C." + datascript.qToanData[0].C;
        this.score = 0;
        this.loaicauhoi = 1;
        this.stepLabel.string = "Gói: "+ this.loaicauhoi;
        this.showButton();
    }, 
    chooseNumber2() {
        console.log("chooseNumber2");
        this.chooseNumber1Button.node.active = false;
        this.chooseNumber2Button.node.active = false;
        this.scoreLabel.string = "Chọn đáp án đúng nhất trong các đáp án." + "\n Câu " + datascript.data[0].STT + ": ";
        this.cauhoiRichText.string = datascript.data[0].Cauhoi;
        this.aLabel.string = "A." + datascript.data[0].A;
        this.bLabel.string = "B." + datascript.data[0].B;
        this.cLabel.string = "C." + datascript.data[0].C;
        this.score = 0;
        this.loaicauhoi = 2;
        this.stepLabel.string = "Gói: " + this.loaicauhoi;
        this.showButton();
    },
    resetcauhoi() {
        this.cauhoiRichText.string = "";
        this.aLabel.string = "";
        this.bLabel.string = "";
        this.cLabel.string = "";
        this.scoreLabel.string = "Đã hoàn thành";
        this.nextButton.node.active = false;
        this.backButton.node.active = false;
        this.xemKQButton.node.active = true;
        this.aUncheckBoxButton.node.active = false;
        this.bUncheckBoxButton.node.active = false;
        this.cUncheckBoxButton.node.active = false;
    }
});
