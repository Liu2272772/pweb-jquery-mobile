/**
 * 页面的DOM加载完成后出发，初始化页完成时出发，页面滚动事件
 */
$(document).on("pagecreate","#pageone",function(){
    var common = new Common();

    //初始化高度
    common.initHeightSetting("#pageone");
});