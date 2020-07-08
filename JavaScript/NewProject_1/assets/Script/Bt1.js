// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
            heSoA: {
                default: null,
                type: cc.EditBox
            },
            heSoB: {
                default:null,
                type: cc.EditBox
            },
            resultLabel: {
                default:null,
                type: cc.Label
            }
            // defaults, set visually when attaching this script to the Canvas
        },
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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    start () {

    },
    buttonBack: function() {
        cc.director.loadScene("Home");
    },
    tinhPhuongTrinh() {
        var a,b;
        a = parseInt(this.heSoA.string);
        b = parseInt(this.heSoB.string);
        if(isNaN(a))
        {   
            this.resultLabel.node.color = new cc.Color(255,0,0);
            this.resultLabel.string = "a không phải là số!";
        } else if(isNaN(b)) {
            this.resultLabel.node.color = new cc.Color(255,0,0);
            this.resultLabel.string = "b không phải là số!";
        } else {
            this.resultLabel.string = "Kết quả là: " + (a + b);
        }
    }
    // update (dt) {},
});
