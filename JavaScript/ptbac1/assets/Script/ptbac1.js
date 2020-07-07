cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        heSoALabel: {
            default: null,
            type: cc.EditBox
        },
        heSoBLabel: {
            default: null,
            type: cc.EditBox
        },
        resultLabel: {
            default: null,
            type: cc.Label
        },
        NotificationLabel: {
            default: null,
            type: cc.Label
        }
        // defaults, set visually when attaching this script to the Canvas
    },

    // use this for initialization
    onLoad: function () {
        console.log("Hello");
    },

    // called every frame
    update: function (dt) {

    },
    xuatKetQua: function() 
    {
        var a,b;
        a = parseInt(this.heSoALabel.string);
        b = parseInt(this.heSoBLabel.string);
        console.log("Kết quả" + a +"  "+  b);
        if(!isNaN(a) && !isNaN(b))
        {
            console.log("Kết quả");
            this.NotificationLabel.string = "";
            this.resultLabel.string = a + b; 
           
        } else {
            this.NotificationLabel.string = "a hoặc b phải là số!";
        }
       
       // console.log("Result" + a+b );
    },
});
