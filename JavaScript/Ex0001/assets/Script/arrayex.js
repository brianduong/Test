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
        person: {
            default: null,
            type:[]
        }
},

    onLoad () {
        this.person = ["Trần", "Mai", "Phương"];
    },

    start () {
        
    },
    backScreen() {
        cc.director.loadScene("home");
    },
    getAge(ns) {
        var date = new Date();
        var year = date.getFullYear();
        return year - ns;
    },
    inPhanTu() {
            var i, ln;
            ln = this.person.length;
            for (i=0;i<ln;i++) 
            {
            this.resultLabel.string += this.person[i] + " , ";
            }
    },
    addPerson() {
        var person = this.person.push("Kiwi");
        var i, ln;
            ln = this.person.length;
            for (i=0;i<ln;i++) 
            {
            this.resultLabel.string += this.person[i] + " , ";
            }
    }

    // update (dt) {},
});
