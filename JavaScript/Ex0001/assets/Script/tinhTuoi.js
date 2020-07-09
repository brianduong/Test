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
        var date, namsinh,y;
        date = new Date();
        y = date.getFullYear();
        namsinh = parseInt(this.yearEditBox.string);
        if(!isNaN(namsinh)) {
            if(namsinh < 0) {
                this.resultLabel.string = "Năm sinh không được là số âm";
            } else {
                if(namsinh > y) {
                    this.resultLabel.string = "Năm sinh không được lớn hơn năm hiện tại:" + " " + y;
                } else {
                    this.resultLabel.string = "Tuổi: " + (y - namsinh);
                }
            } 
            } else {
                this.resultLabel.string = "Năm sinh chỉ có thể là số!"
            }
            
                
        }
    // update (dt) {},
});
