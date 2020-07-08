// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        dayEditBox: {
            default: null,
            type: cc.EditBox
        },
        monthEditBox: {
            default: null,
            type: cc.EditBox
        },
        yearEditBox: {
            default: null,
            type: cc.EditBox
        },
        resultLabel: {
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    backScreen() {
        cc.director.loadScene("home");
    },
    tinhTuoi() {
        var d,m,y,tuoi,year;
        d = parseInt(this.dayEditBox.string);
        m = parseInt(this.monthEditBox.string)
        y = parseInt(this.yearEditBox.string);
        if(isNaN(d) || isNaN(m) || isNaN(y)) {
            this.resultLabel.string = "Xem lại ngày, tháng, năm";
        } 
    }
    // update (dt) {},
});
