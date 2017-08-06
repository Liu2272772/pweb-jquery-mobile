/**
 * 页面的DOM加载完成后出发，初始化页完成时出发，页面滚动事件
 */
$(document).on("pagecreate","#postgraduate",function(){
    var common = new Common();

    //初始化高度
    common.initHeightSetting("#postgraduate");
    common.initHeightSetting("#university");
    common.initHeightSetting("#senior");
    common.initHeightSetting("#secondary");
    common.initHeightSetting("#primary1");
    common.initHeightSetting("#primary2");

    var education = new Education();

    //向右滑动
    education.swipeRight();

    //向左滑动
    education.swipeLeft();
});
/**
 * 教育信息类
 * @constructor
 */
function Education() {

    /**
     * 向右滑动
     */
    this.swipeRight = function () {
        //研究生
        $("#postgraduate .ui-content").on("swiperight",function(){
            $.mobile.changePage("#university", {transition:"flow"});
        });
        //大学
        $("#university .ui-content").on("swiperight",function(){
            $.mobile.changePage("#senior", {transition:"flow"});
        });
        //高中
        $("#senior .ui-content").on("swiperight",function(){
            $.mobile.changePage("#secondary", {transition:"flow"});
        });
        //初中
        $("#secondary .ui-content").on("swiperight",function(){
            $.mobile.changePage("#primary1", {transition:"flow"});
        });
        //小学1
        $("#primary1 .ui-content").on("swiperight",function(){
            $.mobile.changePage("#primary2", {transition:"flow"});
        });
        //小学2
        $("#primary2 .ui-content").on("swiperight",function(){
            $.mobile.changePage("#postgraduate", {transition:"flow"});
        });
    }
    /**
     * 向左滑动
     */
    this.swipeLeft = function () {
        //研究生
        $("#postgraduate .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#primary2", {transition:"slidefade"});
        });
        //大学
        $("#university .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#postgraduate", {transition:"slidefade"});
        });
        //高中
        $("#senior .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#university", {transition:"slidefade"});
        });
        //初中
        $("#secondary .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#senior", {transition:"slidefade"});
        });
        //小学1
        $("#primary1 .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#secondary", {transition:"slidefade"});
        });
        //小学2
        $("#primary2 .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#primary1", {transition:"slidefade"});
        });
    }
}