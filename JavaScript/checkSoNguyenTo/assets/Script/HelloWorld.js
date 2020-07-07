cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        NhapEditBoxLabel: {
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
        console.log("Hello");
    },
    update: function (dt) {

    },
    // called every frame
    ktSoNguyenTo: function() 
    {
        var n,dem,i;
        dem = 0;
        n = parseInt(this.NhapEditBoxLabel.string);
        if(!isNaN(n)) 
        {
            if(n < 2) 
            {
                this.resultLabel.string = n + " không phải số nguyên tố";
            }
            if(n == 2)
            {
                this.resultLabel.string = n + " là số nguyên tố";
            }
            if(n > 2) 
            {
                for(i = 2; i <= Math.sqrt(n); i++) 
                {
                    if(n % i == 0) 
                    {
                        dem++;
                    } 
                }
                if(dem == 0) 
                {
                    this.resultLabel.string = n + " là số nguyên tố";
                } 
                if(dem != 0)
                {
                    this.resultLabel.string = n + " không phải số nguyên tố";
                }
            }
        } else
        {
            this.resultLabel.string = "Không được nhập chữ";
        }

    },

});
