// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
            dateEditBox: {
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
    backScreenhome() {
        cc.director.loadScene("home");
    },
    checkDate() {
        var date = this.dateEditBox.string;
        var patt = /[/]/g;
        var result = date.match(patt);
        var ln = result.length;
        if(ln == 2) {
            var arr = date.split("/");
            var len = arr.length;
            var d = parseInt(arr[0]); 
            var m = parseInt(arr[1]); 
            var y = parseInt(arr[2]);
            if(d <= 0 || m <= 0 || y <= 0) {
                this.resultLabel.string = "Ngày/Tháng/Năm không thể <= 0";
            } else {
                //this.resultLabel.string = d + "/"+ m + "/" + y;
                if(m >= 1 && m <= 12) {
                    var ngaytrongthang =  this.tinhNgayTrongThang(m, y);
                    console.log(ngaytrongthang);
                    if(d >= 1 && d <= ngaytrongthang) {
                    console.log("timNgayHomTruoc");
                      this.timNgayHomTruoc(d,m,y);
                    } else {
                        this.resultLabel.string = "Ngày không hợp lệ";
                   }
                } else {
                    this.resultLabel.string = "Tháng không hợp lệ";
                }
            }
        } else {
            this.resultLabel.string = "Nhập sai format ngày!";
        }
    }, 
    tinhNgayTrongThang(nMonth,nYear) {
        var nNumOfDays;
        console.log(" "+ typeof nMonth + " " + nYear);
	       switch (nMonth)
	        {

                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12: 
                    nNumOfDays = 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11: 
                    nNumOfDays = 30;
                    break;
                case 2:
                    nNumOfDays = this.tinhNamNhuan(nYear) ? 29:28;

                    break;
	}
	return nNumOfDays;
    }, 
    timNgayHomTruoc(nDay,nMonth,nYear) {
        console.log(nDay + "/" + nMonth + "/" + nYear);
        if(nMonth == 3 && nDay == 1) {
            nMonth = nMonth - 1;
            nDay = this.tinhNamNhuan(nYear) ? 29:28;
            this.resultLabel.string = nDay + "/" + nMonth + "/" + nYear;
        } else if (nDay > 1){
        nDay = nDay - 1;
        this.resultLabel.string = nDay + "/" + nMonth + "/" + nYear;
        } else {
        nDay = this.tinhNgayTrongThang(nMonth,nYear);
            if(nMonth > 1) {
                nMonth = nMonth - 1;
                this.resultLabel.string = nDay + "/" + nMonth + "/" + nYear;
            } else
            {
                nMonth = 12; 
                nYear = nYear - 1;
                this.resultLabel.string = nDay + "/" + nMonth + "/" + nYear;
            }
    }
},
tinhNamNhuan(nm)
{
    console.log("tinhNamNhuan");
    if ((nm % 4 == 0 && nm % 100 != 0) || nm % 4 == 0)
	    {
            
		    return true;
	    }
	        return false;
}

    // update (dt) {},
});
