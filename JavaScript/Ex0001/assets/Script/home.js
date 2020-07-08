cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
    },

    // use this for initialization
    onLoad: function () {
    },

    // called every frame
    update: function (dt) {

    },
    chuyenScreen1() {
        cc.director.loadScene("sapxepMang");
    }, 
    chuyenScreen2() {
        cc.director.loadScene("tinhtienTaxi");
    },
    chuyenScreen3() {
        cc.director.loadScene("tinhTuoi");
    }
});
