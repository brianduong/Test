// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        dayEditBox: {
            default: null, 
            type: cc.EditBox
        }, 
        monthEditBox: {
            default: null, 
            type: cc.EditBox
        },
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

     onLoad () {

        
     },
     ktraNamNhuan(year) 
     { 
         // Nếu số năm chia hết cho 400,
         // đó là 1 năm nhuận
         if (year % 400 == 0) 
             return true; 
       
         // Nếu số năm chia hết cho 4 và không chia hết cho 100,
         // đó không là 1 năm nhuận
         if (year % 4 == 0 && year % 100 != 0) 
             return true;
      
         // trường hợp còn lại 
         // không phải năm nhuận
         return false; 
     },     
    start () {

    },
    backScreen () {
        cc.director.loadScene("home");
    }, 
    tinhCungHD() {
        var ngay, thang, nam;
        ngay = parseInt(this.dayEditBox.string); 
        thang = parseInt(this.monthEditBox.string);
        nam = parseInt(this.yearEditBox.string);
        if(isNaN(ngay) || isNaN(thang)||isNaN(nam)) {
            this.resultLabel.string = "Ngày, tháng, năm phải là số!";
        } else if(ngay <= 0 || thang <= 0 || nam <= 0) {
            this.resultLabel.string = "Ngày, tháng, năm phải > 0";

        } 
        else {
            if(thang >= 1 && thang <= 12) {
                switch(thang) {
                    case 1:
                        if(ngay <= 31){
                            if(ngay >= 1 && ngay <= 19) {
                                this.resultLabel.string = "Cung Ma Kết";
                            } else if(ngay >= 20 && ngay <=31) {
                                this.resultLabel.string = "Cung Bảo Bình";
                            } 
                        } else {
                            this.resultLabel.string = "Tháng 1 có 31 ngày";
                        }
                        break;
                    case 2: 
                    var ngaycuoithang= this.ktraNamNhuan(nam) ? 29:28;
                    if(ngay <= ngaycuoithang){
                        if(ngay >= 1 && ngay <= 18) {
                            this.resultLabel.string = "Cung Bảo Bình";
                        } else if(ngay >= 19 && ngay <= ngaycuoithang) {
                            this.resultLabel.string = "Cung Song Ngư";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 2 có " + ngaycuoithang + " ngày";
                    }
                        break;
                    case 3: 
                    if(ngay <= 31){
                        if(ngay >= 1 && ngay <= 20) {
                            this.resultLabel.string = "Cung Song Ngư";
                        } else if(ngay >= 21 && ngay <=31) {
                            this.resultLabel.string = "Cung Bạch Dương";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 3 có 31 ngày";
                    }
                    break;
                    case 4: 
                    if(ngay <= 30){
                        if(ngay >= 1 && ngay <= 20) {
                            this.resultLabel.string = "Cung Bạch Dương";
                        } else if(ngay >= 21 && ngay <=30) {
                            this.resultLabel.string = "Cung Kim Ngưu";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 4 có 30 ngày";
                    }
                    break;
                    case 5: 
                    if(ngay <= 31){
                        if(ngay >= 1 && ngay <= 20) {
                            this.resultLabel.string = "Cung Kim Ngưu";
                        } else if(ngay >= 21 && ngay <=31) {
                            this.resultLabel.string = "Cung Song Tử";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 5 có 31 ngày";
                    }
                    break;
                    case 6: 
                    if(ngay <= 30){
                        if(ngay >= 1 && ngay <= 21) {
                            this.resultLabel.string = "Cung Song Tử";
                        } else if(ngay >= 22 && ngay <=30) {
                            this.resultLabel.string = "Cung Cự Giải";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 6 có 30 ngày";
                    }
                    break;
                    case 7: 
                    if(ngay <= 31){
                        if(ngay >= 1 && ngay <= 22) {
                            this.resultLabel.string = "Cung Cự Giải";
                        } else if(ngay >= 23 && ngay <=31) {
                            this.resultLabel.string = "Cung Sư Tử";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 7 có 31 ngày";
                    }
                    break;
                    case 8: 
                    if(ngay <= 31){
                        if(ngay >= 1 && ngay <= 22) {
                            this.resultLabel.string = "Cung Sư Tử";
                        } else if(ngay >= 23 && ngay <=31) {
                            this.resultLabel.string = "Cung Xử Nữ";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 8 có 31 ngày";
                    }
                    break;
                    case 9: 
                    if(ngay <= 30){
                        if(ngay >= 1 && ngay <= 22) {
                            this.resultLabel.string = "Cung Xử Nữ";
                        } else if(ngay >= 23 && ngay <=30) {
                            this.resultLabel.string = "Cung Thiên Bình";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 9 có 30 ngày";
                    }
                    break;
                    case 10: 
                    if(ngay <= 31){
                        if(ngay >= 1 && ngay <= 23) {
                            this.resultLabel.string = "Cung Thiên Bình";
                        } else if(ngay >= 24 && ngay <=31) {
                            this.resultLabel.string = "Cung Thiên Yết";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 10 có 31 ngày";
                    }
                    break;
                    case 11: 
                    if(ngay <= 30){
                        if(ngay >= 1 && ngay <= 22) {
                            this.resultLabel.string = "Cung Thiên Yết";
                        } else if(ngay >= 23 && ngay <=30) {
                            this.resultLabel.string = "Cung Nhân Mã";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 11 có 30 ngày";
                    }
                    break;
                    case 12: 
                    if(ngay <= 31){
                        if(ngay >= 1 && ngay <= 21) {
                            this.resultLabel.string = "Cung Nhân Mã";
                        } else if(ngay >= 22 && ngay <=31) {
                            this.resultLabel.string = "Cung Ma Kết";
                        } 
                    } else {
                        this.resultLabel.string = "Tháng 12 có 31 ngày";
                    }
                    break;
                }

            } else {
                this.resultLabel.string = "Tháng không hợp lệ!";
            }
        }
    },
    // update (dt) {},
});
