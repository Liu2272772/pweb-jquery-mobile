/**
 * Created by Administrator on 2017/8/5 0005.
 */
/**
 * 页面的DOM加载完成后出发，初始化页完成时出发，页面滚动事件
 */
$(document).on("pagecreate",function(){
    var common = new Common();

    //初始化高度
    common.initHeightSetting("#zhongRuan");
    common.initHeightSetting("#feiQieEr");

    var work = new Work();

    //向右滑动
    work.swipeRight();

    //向左滑动
    work.swipeLeft();
});
/**
 * 教育信息类
 * @constructor
 */
function Work() {

    /**
     * 向右滑动
     */
    this.swipeRight = function () {
        //中软国际
        $("#zhongRuan .ui-content").on("swiperight",function(){
            $.mobile.changePage("#feiQieEr", {transition:"flow"});
        });
        //费切尔
        $("#feiQieEr .ui-content").on("swiperight",function(){
            $.mobile.changePage("#zhongRuan", {transition:"flow"});
        });
    }
    /**
     * 向左滑动
     */
    this.swipeLeft = function () {
        //中软国际
        $("#zhongRuan .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#feiQieEr", {transition:"slidefade"});
        });
        //费切尔
        $("#feiQieEr .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#zhongRuan", {transition:"slidefade"});
        });

    }
}