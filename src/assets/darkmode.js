/**
 * FlyingSky's Home
 * Dark Mode
 * 
 * @author FlyingSky-CN
 * @link https://github.com/FlyingSky-CN/MDr/blob/master/darkmode.js
 * @link https://blog.skk.moe/post/hello-darkmode-my-old-friend
 * @link https://blog.fsky7.com/archives/46
 */

export default function (vue) {

    /**On DarkMode */
    const onDarkMode = () => {
        console.log('[Dark mode]', true)
        vue.dark = true
        document.cookie = "dark=1;path=/;"
        var meta = document.getElementsByTagName('meta')
        meta["theme-color"].setAttribute('content', '#272727')
    }

    /**Off Darkmode */
    const offDarkMode = () => {
        console.log('[Dark mode]', false);
        vue.dark = false
        document.cookie = "dark=0;path=/;";
        var meta = document.getElementsByTagName('meta');
        meta["theme-color"].setAttribute('content', '#f5f5f5');
    }

    /**应用模式 */
    const applyDarkMode = (mode) => {
        if (mode === true) {
            onDarkMode();
        } else if (mode === false) {
            offDarkMode();
        } else return;
    }

    /**
     * 从 CSS 媒体查询获取
     * 是否为 Dark Mode
     */
    const getDarkModeFromCSSMediaQuery = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false
    }

    /**
     * 从 Cookie 获取
     * 是否为 Dark Mode
     */
    const getDarkModeFromCookie = () => {
        var cookie = document.cookie.replace(/(?:(?:^|.*;\s*)dark\s*=\s*([^;]*).*$)|^.*$/, "$1");
        if (cookie === "0") {
            return false
        } else if (cookie === "1") {
            return true
        } else return null
    }

    /* Dark Mode 对于 @print 的适配 */
    window.addEventListener("beforeprint", function () {
        vue.dark = false
    });
    window.addEventListener("afterprint", function () {
        initDarkMode()
    });

    /**初始化 DarkMode */
    const initDarkMode = () => {
        var css = getDarkModeFromCSSMediaQuery(),
            coo = getDarkModeFromCookie();
        if (css === coo) {
            applyDarkMode(css)
        } else if (coo === null) {
            applyDarkMode(css)
        } else {
            applyDarkMode(coo)
        }
    }

    /**切换标签页 */
    document.addEventListener('visibilitychange', function () {
        initDarkMode();
    });

    vue.onDarkMode = onDarkMode
    vue.offDarkMode = offDarkMode

    initDarkMode()
}