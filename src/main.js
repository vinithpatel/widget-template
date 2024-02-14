import { x3DDashboardUtils } from "./lib/widget";
import Vue from "vue";
import App from "./components/app.vue";

function start() {
    x3DDashboardUtils.disableCSS(true);

    widget.setIcon(widget.rootUrl + "/static/images/icon.png");

    const mainComponent = new Vue({
        render: h => h(App)
    });

    mainComponent.$mount("app");

    // TODO use this requirejs approach to call DS widget APIs
    requirejs(["DS/PlatformAPI/PlatformAPI"], PlatformAPI => {
        // use 3DDashboard APIs
    });
}
/**
 * Entry point for both standalone & 3DDashboard modes
 * Assuming widget object has been loaded through widget-starter module
 */
export default function() {
    widget.addEvent("onLoad", () => {
        let baseUrl = widget.getUrl();
        baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf("/")); // remove last "/xxxx" (/index.html)
        baseUrl = baseUrl.replace(/\/+$/, ""); // remove other leading "/"
        widget.rootUrl = baseUrl;

        start();
    });
    widget.addEvent("onRefresh", () => {
        // TODO an application data refresh
        // meaning only refresh dynamic content based on remote data, or after preference changed.
        // we could reload the frame [ window.location.reload() ], but this is not a good practice, since it reset preferences
    });
}
