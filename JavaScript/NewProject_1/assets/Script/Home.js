cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        }
        // defaults, set visually when attaching this script to the Canvas
    },

    // use this for initialization
    onLoad: function () {

    },
    timSoNguyenTo:function() {
        console.log("Tim so nguyen to: ");
        cc.director.loadScene("Bt1");
    },
    timSoHoanHao:function()
    {
        cc.director.loadScene("Bt2");
    },
    // called every frame
    update: function (dt) {

    },
});
