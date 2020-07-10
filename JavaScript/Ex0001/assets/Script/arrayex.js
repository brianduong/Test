// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        resultLabel: {
            default: null, 
            type: cc.Label
    }, 
        person:[],
        addLabel: {
            default: null, 
            type: cc.Label
        }, 
        replaceNameEditBox: {
            default: null,
            type: cc.EditBox
        }
},

    onLoad () {
    },

    start () {
        this.person = [
            {"Ho":"Trần", "Ten":"Phương", "SN": "1994", "GT": 1},
            {"Ho":"Nguyễn", "Ten":"Hồng", "SN": "1998", "GT": 0},
            ];
        var i, ln;
            ln = this.person.length;
            for (i=0;i<ln;i++) 
            {
           // tuoi = this.getAge(this.person[i].SN);
            this.resultLabel.string += "\n Họ và tên: "+ this.person[i].Ho + " "+ this.person[i].Ten + " " + this.person[i].SN;
            }
    },
    backScreen() {
        cc.director.loadScene("home");
    },
    addPerson() {
        var person2 = {"Ho":"Trần", "Ten":"Kiwi", "SN": "1999", "GT": 0};
        this.person.push(person2);
        var i, ln;
            ln = this.person.length;
            for (i=0;i<ln;i++) 
            {
            this.addLabel.string += "\n Họ và tên: "+ this.person[i].Ho + " "+ this.person[i].Ten + " " + this.person[i].SN;
            }
    }, 
    replaceName() {
        var i, ln, ten;
        ln = this.person.length;
        ten = this.replaceNameEditBox.string;
        for (i = 0; i < ln; i++) {
            if(ten == this.person[i].Ten) {
                this.person[i].Ten = "1234";
                this.addLabel.string = "\n Họ và tên: "+ this.person[i].Ho + " "+ this.person[i].Ten + " " + this.person[i].SN;
                dem++;
            } else {
                this.addLabel.string = "Không có tên phù hợp";
            }
            
        }
    }, 
    deleteName() {
       var ten,ln,i;
       ten = this.replaceNameEditBox.string;
       ln = this.person.length;
       for(i = 0 ; i < ln ; i++) {
               if(ten == this.person[i].Ten) {
                   this.person.splice(i,1);
                   i--;
               } else {
                   this.addLabel.string = "Không có tên phù hợp";
               }
        this.addLabel.string = "\n Họ và tên: "+ this.person[i].Ho + " "+ this.person[i].Ten + " " + this.person[i].SN; 
       }
       
    }

    // update (dt) {},
});
