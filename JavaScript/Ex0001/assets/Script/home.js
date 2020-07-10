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
        var txt = "12/03/2020";   // String
        var arr = txt.split("/"); 
        var ln = arr.length;
        for(var i = 0; i<ln; i++) {
            console.log(arr[i]);
        }

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
    },
    chuyenScreen4() {
        cc.director.loadScene("tinhDTB");
    },
    chuyenScreen5() {
        cc.director.loadScene("tinhCungHD");
    },
    chuyenScreen6() {
        cc.director.loadScene("arrayex");
    }, 
    chuyenSCreen7() {
        cc.director.loadScene("checkDate");
    }
});
