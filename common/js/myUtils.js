// require("./md5.js");//引入MD5插件
// try{
//   require("./md5.js");//引入MD5插件
// }catch(e){
//   console.log("没有找到MD5所在的插件请确保路径正确")
// }
!function(win){
    var reg = new RegExp();
    win.myUtils = {

        dateDay: function (mat = "yyyy/MM/dd", num = 0, delay = 0) {
            /**
             * 获取指定显示的多少天的日期
             * eg:dateDay("-",20,1);
             * @mat
             *  设置日期的间隔符
             *  默认为yyyy/MM/dd
             * @param num
             * 	需要显示多少天
             *  默认为当天
             * 	为正数则是从当天前往明天开始
             *  为负数则是从当天前往昨天开始
             * @delay
             *  延后天数
             * @return
             *  返回一个指定多少天的集合
             */
            var t = new Date();
            var iToDay = t.getDate();
            var iToMon = t.getMonth();
            var iToYear = t.getFullYear();
            var iArray = [];
            var bool = num>=0 ? 1 : -1;
            if (mat.length == 1){
                if (!reg.myReg.letter.test(mat)){
                    mat = "yyyy"+mat+"MM"+mat+"dd";
                }
            } else if(mat.length <= 0){
                mat = "yyyy/MM/dd";
            }
            for (var i = 0; i <= Math.abs(num); i++) {
                var newDay = new Date(iToYear, iToMon, (iToDay + i * bool + delay*bool));
                var data_set = newDay.format(mat);
                iArray.push(data_set);
            }
            if(iArray.length == 1){
                return iArray[0];
            }else {
                return iArray;
            }
        },

        dateMonth: function (mat = "yyyy/MM", num = 0, month = 0) {
            /**
             * 获取指定显示的多少月的日期
             * eg:dateDay("-",20,1);
             * @mat
             *  设置日期的间隔符
             *  默认为yyyy/MM
             * @param num
             * 	需要显示多少月
             *  默认为当月
             * 	为正数则是从当月前往下月开始
             *  为负数则是从当月前往上月开始
             * @delay
             *  延后月数
             * @return
             *  返回一个指定多少月的集合
             */
            var t = new Date();
            var iToDay = t.getDate();
            var iToMon = t.getMonth();
            var iToYear = t.getFullYear();
            var iArray = [];
            var bool = num>=0 ? 1 : -1;
            if (mat.length == 1){
                if (!reg.myReg.letter.test(mat)){
                    mat = "yyyy"+mat+"MM"+mat+"dd";
                }
            } else if(mat.length <= 0){
                mat = "yyyy/MM/dd";
            }
            for (var i = 0; i <= Math.abs(num); i++) {
                var newDay = new Date(iToYear, (iToMon + i * bool + month*bool), 1);
                var data_set = newDay.format(mat);
                iArray.push(data_set);
            }
            if(iArray.length == 1){
                return iArray[0];
            }else {
                return iArray;
            }
        },

        dateStr: function (AddDayCount = 0) {
            /**
             *
             * @param AddDayCount
             * 延后的天数（可以为负数）
             * @returns {string}
             */
            var dd = new Date();
            dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1;//获取当前月份的日期
            var d = dd.getDate();
            var a = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日");
            var week = new Date().getDay() + AddDayCount;
            var w = a[week];
            return m + "月" + d + "日 " + w;
        },

        trim:function(str = ""){
            str+="";
            return str.replace(/(^\s*)|(\s*$)/g,'');
        },

        file_format:function(str = "",search = "."){
            /*
            * 传入文件名
            * 获取某个文件的扩展名
            * 0)返回一个字符串
            * 1)没有扩展名则返回""空字符串
            * 2)返回的扩展名都是小写的
            * */
            var index = str.lastIndexOf(search);
            if(index >= 0){
                return (str.substr(index+1)).toLocaleLowerCase();
            }else{
                return "";
            }
        }
    };
    win.regObj = {
        chinese : /^[\u4e00-\u9fa5]$/, /*仅中文*/
        CED : /^([A-Za-z\d]|[\u4E00-\u9FA5])+$/, /*中文、字母、数字*/
        chiEng : /^([A-Za-z]|[\u4E00-\u9FA5])+$/, /*中文和字母*/
        numEng : /^[A-Za-z0-9]+$/, /*^[A-Za-z0-9]{4,40}$/;英文和数字*/
        posnum : /^[1-9]\d*$/, /*正整数*/
        num : /^\d{1}$/, /*只能有数字切不能为空*/
        pass : /([^\s\u4E00-\u9FA5]){6,20}$/, /*密码*/
        personName : /[\u4E00-\u9FA5]{2,10}(?:·[\u4E00-\u9FA5]{2,10})*/, /*人的姓名*/
        letter : /^[A-Za-z]+$/, /*字母*/
        notnulls : /\S/, /*不能为空*/
        filsenulls : /^\S/, /*第一个字符不能为空格*/
        notspan : /^[^\s]+$/, /*不能有空格*/
        notnull : /^\S+$/, /*不能有空格并且不能为空*/
        notspe : new RegExp("[\^\\`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"), /*不能有特殊字符*/
        tel : /^1[1234578]\d{9}$/, /*手机号*/
        email : /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/, /*邮箱*/
    };
}(window);

!function () {
    //设置原生对象
    RegExp.prototype.myReg = {
        letter:/^[A-Za-z]+$/,//字母
        chinese:/^[\u4e00-\u9fa5]$/,/*中文*/
        posnum:/^[1-9]\d*$/,/*正整数*/
        tel:/^1[1-9]\d{9}$/,/*手机号*/
        notnull:/^\S+$/,/*不能有空格并且不能为空*/
    };

    Date.prototype.format = function (format) {
        /*
         * eg:format="yyyy-MM-dd hh:mm:ss";
         */
        var o = {
            "M+": this.getMonth() + 1, // month
            "d+": this.getDate(), // day
            "h+": this.getHours(), // hour
            "m+": this.getMinutes(), // minute
            "s+": this.getSeconds(), // second
            "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
            "S": this.getMilliseconds()
            // millisecond
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
                - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? o[k]
                    : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };
}();











