/**
 * 页面初始化时，初始化之前触发。
 */
$(document).on("pagebeforecreate","#pageone",function () {
    console.info("pagebeforecreate" );

});
/**
 * 在页面成功载入并插入 DOM 后触发
 */
$(document).on("pagebeforeload","#pageone", function () {
    console.info("pagebeforeload");
});
/**
 * 页面的DOM加载完成后出发，初始化页完成时出发，页面滚动事件
 */
$(document).on("pagecreate","#pageone",function(){
    console.info("pagecreate");

    var common = new Common();

    //初始化高度
    common.initHeightSetting("#pageone");

    var index = new Index();

    //设置菜单滚动显示
    index.swiperight();
});
/**
 * Index对象
 * @constructor
 */
function Index() {

    /**
     * 设置菜单滚动显示
     */
    this.swiperight = function () {
        $(".showMenu").on("swiperight",function(){
            $("#showMenuA").click();
        });
    }
}
