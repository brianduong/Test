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
        nhapDiemToanEditBox: {
            default: null,
            type: cc.EditBox
        },
        nhapDiemLyEditBox: {
            default: null,
            type: cc.EditBox
        },
        nhapDiemHoaEditBox: {
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
    backScreenhome () {
        cc.director.loadScene("home");
    },
    tinhDTB () {
        var a,b,c,dtb;
        a = parseInt(this.nhapDiemToanEditBox.string);
        b = parseInt(this.nhapDiemLyEditBox.string);
        c = parseInt(this.nhapDiemHoaEditBox.string);
        if(isNaN(a) || isNaN (b) || isNaN(c)) {
            this.resultLabel.string = "Điểm các môn phải là số!";
        } else if(a < 0 || b < 0 || c < 0) {
            this.resultLabel.string = "Điểm các môn phải >= 0";
        } else {
            if(a > 10 || b > 10 || c > 10) {
                this.resultLabel.string = "Điểm các môn phải <= 10";
            } else {
                dtb = (a + b + c) /3;
                if(dtb >= 9) {
                    this.resultLabel.string = "ĐTB: " + dtb + " XL: Xuất sắc";
                }
                if(dtb >= 8 && dtb < 9) {
                    this.resultLabel.string = "ĐTB: " + dtb + " XL: Giỏi";
                }
                if (dtb < 8 && dtb >= 6.5) {
                    this.resultLabel.string = "ĐTB: " + dtb + " XL: Khá";
                }
                if (dtb < 6.5 && dtb >= 5) {
                    this.resultLabel.string = "ĐTB: " + dtb + " XL: Trung Bình";
                }
                if (dtb < 5 && dtb >= 3.5) {
                    this.resultLabel.string = "ĐTB: " + dtb + " XL: Yếu";
                }
                if (dtb < 3.5 ) {
                    this.resultLabel.string = "ĐTB: " + dtb + " XL: Kém";
                }
            }
           
        }
    }
    // update (dt) {},
});
