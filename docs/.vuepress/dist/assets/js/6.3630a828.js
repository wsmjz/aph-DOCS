(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{449:function(e,l,t){},494:function(e,l,t){"use strict";var n=t(449);t.n(n).a},503:function(e,l,t){"use strict";t.r(l);var n=t(18),c={name:"Demo",props:{toggleText:{type:String,default:"代码"}},data:function(){return{collapsed:!0,fullscreen:!1}},watch:{fullscreen:function(e){e?this.setFullscreen():this.cancelFullscreen()}},methods:{handleCollapsed:function(){this.collapsed=!this.collapsed},setFullscreen:function(){var e=this.$refs.preview,l=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;void 0!==l&&l&&l.call(e)},cancelFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()},isFullScreen:function(){return document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen},handleFullscreenChange:function(){this.fullscreen=this.isFullScreen()}},mounted:function(){Object(n.on)(this.$refs.preview,"webkitfullscreenchange",this.handleFullscreenChange)},beforeDestroy:function(){Object(n.off)(this.$refs.preview,"webkitfullscreenchange",this.handleFullscreenChange)}},s=(t(494),t(58)),i=Object(s.a)(c,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("ClientOnly",[t("div",{staticClass:"demo"},[t("div",{ref:"preview",staticClass:"demo__preview",class:{"full-screen ":e.fullscreen}},[e._t("default",null,{fullscreen:e.fullscreen}),e._v(" "),t("div",{staticClass:"demo__actions"},[e.fullscreen?t("el-tooltip",{attrs:{effect:"dark",content:"取消全屏",placement:"top"}},[t("i",{staticClass:" el-icon-switch-button",attrs:{title:"取消全屏"},on:{click:function(l){e.fullscreen=!1}}})]):t("el-tooltip",{attrs:{effect:"dark",content:"全屏",placement:"top"}},[t("i",{staticClass:"el-icon-full-screen",on:{click:function(l){e.fullscreen=!0}}})])],1)],2),e._v(" "),t("transition",{attrs:{name:"el-zoom-in-top"}},[e.collapsed?e._e():t("div",{staticClass:"demo__body"},[e.$slots.desc?t("div",{staticClass:"demo__desc"},[e._t("desc")],2):e._e(),e._v(" "),t("div",{staticClass:"demo__code"},[e._t("code")],2)])]),e._v(" "),t("div",{staticClass:"demo__handler",on:{click:e.handleCollapsed}},[e.collapsed?t("span",[t("i",{staticClass:"el-icon-caret-bottom"}),e._v(" 显示"+e._s(e.toggleText))]):t("span",[t("i",{staticClass:"el-icon-caret-top"}),e._v(" 隐藏"+e._s(e.toggleText))])])],1)])}),[],!1,null,"2bbc58db",null);l.default=i.exports}}]);