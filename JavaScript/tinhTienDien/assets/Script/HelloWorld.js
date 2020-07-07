cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        soDienCuEditBox: {
            default: null,
            type: cc.EditBox 
        },
        soDienMoiEditBox: {
            default: null,
            type: cc.EditBox 
        },
        resultLabel: {
            default: null,
            type: cc.Label 
        }
    },

    // use this for initialization
    onLoad: function () {
    },

    // called every frame
    update: function (dt) {

    },
    tinhSoDien:function() 
    {
        var soDienCu, soDienMoi, tienDien;
        soDienCu = parseInt(this.soDienCuEditBox.string);
        soDienMoi = parseInt(this.soDienMoiEditBox.string);
        tienDien = soDienMoi - soDienCu;
        if(!isNaN(soDienCu) && !isNaN(soDienMoi)) 
        {
            if(soDienCu < 0 || soDienMoi < 0) 
            {
                this.resultLabel.string = "Số điện không thể nhỏ hơn 0";
            }
            if(soDienCu > soDienMoi) 
            {
                this.resultLabel.string = "Số điện cũ phải nhỏ hơn số điện mới";
            }
            if(tienDien == 0)
            {
                this.resultLabel.string = "Người dùng không sử dụng điện!";
            }
            if(tienDien == 100)
            {
                this.resultLabel.string = "Tiền điện cần trả: " + tienDien * 1242;
            }
            if(tienDien >= 101 && tienDien <= 150)
            {
                this.resultLabel.string = "Tiền điện cần trả: " + tienDien * 1304;
            }
            if(tienDien >= 151 && tienDien <= 200)
            {
                this.resultLabel.string = "Tiền điện cần trả: " + tienDien * 1651;
            }
            if(tienDien >= 301 && tienDien <= 400)
            {
                this.resultLabel.string = "Tiền điện cần trả: " + tienDien * 1912;
            }
            if(tienDien >= 401)
            {
                this.resultLabel.string = "Tiền điện cần trả: " + tienDien * 1962;
            }
        } else
        {
            this.resultLabel.string = "Số điện chỉ có thể nhập số";
        }
    }

});
