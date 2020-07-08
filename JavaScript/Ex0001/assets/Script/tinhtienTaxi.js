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
        nhapSoEditBox: {
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
    backscreenhome() {
        cc.director.loadScene("home");
    },
    tinhtien() {
        var sokm, tongtien;
        tongtien = 0;
        sokm = this.nhapSoEditBox.string;
        if (isNaN(sokm)) {
            this.resultLabel.string = "Mời nhập số!";
        } else {
            if (sokm <= 1) 
	    {
    	tongtien = sokm * 15000;
        }
        if (sokm > 1 && sokm <= 5)
	    {
    	    tongtien = 15000 + (sokm - 1) * 13500;
        }
        if (sokm > 5)
	    {
    	    tongtien  = 15000 + 4*15000 + (sokm - 5)*11000;
        }
        if (sokm > 120)
	    {
        	tongtien  = (15000 + 4*15000 + (sokm - 5)*11000)*0.9;
        }
        }
        this.resultLabel.string = "Số tiền cần trả: " + tongtien;
        }

    
    // update (dt) {},
});
