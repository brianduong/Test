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
        pt1EditBox: {
            default: null,
            type: cc.EditBox
        },
        pt2EditBox: {
            default: null,
            type: cc.EditBox
        },
        pt3EditBox: {
            default: null,
            type: cc.EditBox
        },
        ResultLabel: {
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
    backscreen() {
        cc.director.loadScene("home");
    },
    sosanhPt() {
        var a,b,c, array;
        a = parseInt(this.pt1EditBox.string);
        b = parseInt(this.pt2EditBox.string);
        c = parseInt(this.pt3EditBox.string);
        if(isNaN(a) || isNaN(b) || isNaN(c)) {
            this.ResultLabel.string = "a, b, c phải là số!";
        } else
        {
            array = [a,b,c];
            array.sort(function (a,b) {return a - b});
            this.ResultLabel.string = array;
        }
            
    }

});
