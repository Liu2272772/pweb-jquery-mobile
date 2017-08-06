/**
 * Created by Administrator on 2017/8/5 0005.
 */
/**
 * 页面的DOM加载完成后出发，初始化页完成时出发，页面滚动事件
 */
$(document).on("pagecreate",function(){
    var common = new Common();

    //初始化高度
    common.initHeightSetting("#appProjectOne");
    common.initHeightSetting("#appProjectTwo");
    common.initHeightSetting("#appProjectThree");
    common.initHeightSetting("#appProjectFour");
    common.initHeightSetting("#appProjectFive");

    var project = new AppProject();

    //向右滑动
    project.swipeRight();

    //向左滑动
    project.swipeLeft();
});
/**
 * 教育信息类
 * @constructor
 */
function AppProject() {

    /**
     * 向右滑动
     */
    this.swipeRight = function () {
        //软件生态系统——云测、众测、远程调测、运营平台
        $("#appProjectOne .ui-content").on("swiperight",function(){
            $.mobile.changePage("#appProjectTwo", {transition:"flow"});
        });
        //DevCloud（公有云）
        $("#appProjectTwo .ui-content").on("swiperight",function(){
            $.mobile.changePage("#appProjectThree", {transition:"flow"});
        });
        //云龙系统——JAD
        $("#appProjectThree .ui-content").on("swiperight",function(){
            $.mobile.changePage("#appProjectFour", {transition:"flow"});
        });
        //云龙系统——Monitor
        $("#appProjectFour .ui-content").on("swiperight",function(){
            $.mobile.changePage("#appProjectFive", {transition:"flow"});
        });
        //商户管理系统/创客管理系统
        $("#appProjectFive .ui-content").on("swiperight",function(){
            $.mobile.changePage("#appProjectOne", {transition:"flow"});
        });
    }
    /**
     * 向左滑动
     */
    this.swipeLeft = function () {
        //软件生态系统——云测、众测、远程调测、运营平台
        $("#appProjectOne .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#appProjectFive", {transition:"slidefade"});
        });
        //DevCloud（公有云）
        $("#appProjectTwo .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#appProjectOne", {transition:"slidefade"});
        });
        //云龙系统——JAD
        $("#appProjectThree .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#appProjectTwo", {transition:"slidefade"});
        });
        //云龙系统——Monitor
        $("#appProjectFour .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#appProjectThree", {transition:"slidefade"});
        });
        //商户管理系统/创客管理系统
        $("#appProjectFive .ui-content").on("swipeleft",function(){
            $.mobile.changePage("#appProjectFour", {transition:"slidefade"});
        });
    }
}
