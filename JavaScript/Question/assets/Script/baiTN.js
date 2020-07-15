// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        cauhoiarr:[],
        cauhoiLabel: {
            default: null, 
            type: cc.Label
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
        xemKQButton: cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.cauhoiarr = [{"STT" : "1", "Cauhoi":"Số bé nhất có hai chữ số là:", "A": "11","B":"12","C":"23","DapAn": "A","User":"0"},
        {"STT" : "2", "Cauhoi":"Số lớn nhất có hai chữ số là:", "A": "22","B":"99","C":"66", "DapAn": "B","User":"0"},
        {"STT" : "3", "Cauhoi":"Các loài hoa có hình dạng, kích thước?", "A": "Giống nhau","B":"Bằng nhau","C":"Khác nhau", "DapAn": "C","User":"0"},
        {"STT" : "4", "Cauhoi":"Từ 1 - 100 có bao nhiêu chữ số tròn chục?", "A": "9 số","B":"10 số","C":"11 số","DapAn": "A","User":"0"},
        {"STT" : "5", "Cauhoi":"10 đơn vị bằng mấy chục?", "A": "3 chục","B":"2 chục","C":"1 chục","DapAn": "C","User":"0"},
        {"STT" : "6", "Cauhoi":"Hai số liền nhau hơn, kém nhau mấy đơn vị?", "A": "1 đơn vị","B":"2 đơn vị","C":"5 đơn vị","DapAn": "A","User":"0"},
        {"STT" : "7", "Cauhoi":"Con vật nào có lợi?", "A": "Mèo","B":"Chuột","C":"Muỗi","DapAn": "A","User":"0"},
        {"STT" : "8", "Cauhoi":"Cây sống ở dưới nước là:", "A": "Hoa sen","B":"Cây keo","C":"Cây ngô","DapAn": "A","User":"0"},
        {"STT" : "9", "Cauhoi":"Loài vật sống ở dưới nước là:", "A": "Cá","B":"Thỏ","C":"Chó","DapAn": "A","User":"0"}];
        this.cauhoiLabel.string = "Câu " + this.cauhoiarr[0].STT + ": " + this.cauhoiarr[0].Cauhoi;
        this.aLabel.string = this.cauhoiarr[0].A;
        this.bLabel.string = this.cauhoiarr[0].B;
        this.cLabel.string = this.cauhoiarr[0].C;
        this.stepLabel.string = "Step: " + this.step;
        this.score = 0;
        this.scoreLabel.string = "Score: " + this.score;
        if(this.step == 0) {
            this.backButton.node.active =  false;
            this.xemKQButton.node.active = false;
        }
    },
    start () {
    },

    // update (dt) {},
    loadScreenHome() {
        cc.director.loadScene ("helloworld");
    }, 
    chooseA() {
       var ln = this.cauhoiarr.length;
       if(this.step < ln) {
           this.cauhoiarr[this.step].User = "A";
           if(this.cauhoiarr[this.step].User == this.cauhoiarr[this.step].DapAn) {
               this.resultLabel.string = "Bạn chọn đáp án: " + this.cauhoiarr[this.step].User;
               this.score = this.score + 1;
               this.scoreLabel.string = "Score: " + this.score;
           } else {
               this.resultLabel.string = "Bạn chọn đáp án: " + this.cauhoiarr[this.step].User;
           }
       }
    },
    chooseB() {
        var ln = this.cauhoiarr.length;
        if(this.step < ln) {
            this.cauhoiarr[this.step].User = "B";
            if(this.cauhoiarr[this.step].User == this.cauhoiarr[this.step].DapAn) {
                this.resultLabel.string = "Bạn chọn đáp án: " + this.cauhoiarr[this.step].User;
                this.score = this.score + 1;
                this.scoreLabel.string = "Score: " + this.score;
            } else {
                this.resultLabel.string = "Bạn chọn đáp án: " + this.cauhoiarr[this.step].User;
            }
        }
    }, 
    chooseC() {
        var ln = this.cauhoiarr.length;
        if(this.step < ln) {
            this.cauhoiarr[this.step].User = "C";
            if(this.cauhoiarr[this.step].User == this.cauhoiarr[this.step].DapAn) {
                this.resultLabel.string = "Bạn chọn đáp án: " + this.cauhoiarr[this.step].User;
                this.score = this.score + 1;
                this.scoreLabel.string = "Score: " + this.score;
            } else {
                this.resultLabel.string = "Bạn chọn đáp án: " + this.cauhoiarr[this.step].User;
            }
        }
    },
    choosenext() {
        var ln = this.cauhoiarr.length;
        this.step = this.step + 1;
        this.stepLabel.string = "Step: " + this.step;
        if(this.step > 0) {
            this.backButton.node.active = true;
        }
        if(this.step < ln) {
            this.cauhoiLabel.string = "Câu " + this.cauhoiarr[this.step].STT + ": " + this.cauhoiarr[this.step].Cauhoi;
            this.aLabel.string = this.cauhoiarr[this.step].A;
            this.bLabel.string = this.cauhoiarr[this.step].B;
            this.cLabel.string = this.cauhoiarr[this.step].C;
        } else {
                this.step = this.cauhoiarr.length;
                this.stepLabel.string = "Step: " + this.step;
                this.nextButton.node.active = false;
                this.xemKQButton.node.active = true;
        }
        }, 
    chooseBack() {
        this.stepLabel.string = "Step: " + this.step;
        var ln = this.cauhoiarr.length;
        if(this.step < ln) {
            this.step = this.step - 1;
            this.cauhoiLabel.string = "Câu " + this.cauhoiarr[this.step].STT + ": " + this.cauhoiarr[this.step].Cauhoi;
            this.aLabel.string = this.cauhoiarr[this.step].A;
            this.bLabel.string = this.cauhoiarr[this.step].B;
            this.cLabel.string = this.cauhoiarr[this.step].C;
        }
    },
    xemKQ() {
        var ln = this.cauhoiarr.length;
        this.step = this.step;
        this.stepLabel.string = "Step: " + this.step;
        if(this.step < ln) {
            this.xemKQButton.node.active = false; 
        } else {
            this.resultLabel.string = "Bạn đã làm đúng: " + this.score + "/" + ln + "\n Kết quả: ";
            for(var i = 0; i < ln; i++) {
                this.dapanLabel.string += "\n Câu " + this.cauhoiarr[i].STT + ": " + "Chọn: " + this.cauhoiarr[i].User + ", KQ: " + this.cauhoiarr[i].DapAn;
            }
        }
    }

});
