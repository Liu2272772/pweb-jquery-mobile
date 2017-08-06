/**
 * 公共函数
 * @constructor
 */
function Common() {
    /**
     * 设置高度
     */
    var setHeight = function (nextPage) {
        var screen = $.mobile.getScreenHeight();
        var header = nextPage.children(".ui-header").hasClass("ui-header-fixed") ? nextPage.children(".ui-header").outerHeight() - 1 : nextPage.children(".ui-header").outerHeight();
        var footer = nextPage.children(".ui-footer").hasClass("ui-footer-fixed") ? nextPage.children(".ui-footer").outerHeight() - 1 : nextPage.children(".ui-footer").outerHeight()
        var contentCurrent = nextPage.children(".ui-content").outerHeight() - nextPage.children(".ui-content").height();
        var content = screen - header - footer - contentCurrent;
        nextPage.children(".ui-content").height(content);
    }
    /**
     * 初始化高度
     */
    this.initHeightSetting = function (yourFirstPageId) {
        // 这段代码在初始化的时候执行.设置第一个页面的高度
        setHeight($(yourFirstPageId));

        // 在页面显示前会执行下面代码.设置高度
        $( "body" ).on( "pagecontainershow", function( event, ui ) {
            var nextPage = $(ui.toPage[0]);
            setHeight(nextPage);
        });
    }
}