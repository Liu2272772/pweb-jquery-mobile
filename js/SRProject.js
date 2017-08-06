/**
 * Created by Administrator on 2017/8/5 0005.
 */
/**
 * 页面的DOM加载完成后出发，初始化页完成时出发，页面滚动事件
 */
$(document).on("pagecreate",function(){
    var common = new Common();

    //初始化高度
    common.initHeightSetting("#SROne");
    common.initHeightSetting("#SRTwo");
    common.initHeightSetting("#SRThree");

    var project = new SRProject();

    //向右滑动
    project.swipeRight();

    //向左滑动
    project.swipeLeft();
});
/**
 * 教育信息类
 * @constructor
 */
function SRProject() {

    /**
     * 向右滑动
     */
    this.swipeRight = function () {
        //基于物理模型的新型多媒体加密算法研究
        $("#SROne .ui-content").on("swiperight",function(){
            $.mobile.changePage("#SRTwo", {transition:"flow"});
        });
        //基于混沌的安全高效密码算法设计
        $("#SRTwo .ui-content").on("swiperight",function(){
            $.mobile.changePage("#SRThree", {transition:"flow"});
        });
        //重庆市网络经营者交易信用标准研究
        $("#SRThree .ui-content").on("swiperight",function(){
            $.mobile.changePage("#SROne", {transition:"flow"});
        });
    }
    /**
     * 向左滑动
     */
    this.swipeLeft = function () {
        //基于物理模型的新型多媒体加密算法研究
        $("#SROne .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#SRThree", {transition:"slidefade"});
        });
        //基于混沌的安全高效密码算法设计
        $("#SRTwo .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#SROne", {transition:"slidefade"});
        });
        //重庆市网络经营者交易信用标准研究
        $("#SRThree .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#SRTwo", {transition:"slidefade"});
        });
    }
}