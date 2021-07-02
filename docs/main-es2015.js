(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_video_data_video_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/video-data/video-data.component */ "./src/app/pages/video-data/video-data.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "./src/app/pages/inicio/inicio.component.ts");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/video/video.component */ "./src/app/components/video/video.component.ts");







const routes = [
    { path: 'video/:id/play', component: _components_video_video_component__WEBPACK_IMPORTED_MODULE_4__["VideoComponent"] },
    { path: 'video/:id', component: _pages_video_data_video_data_component__WEBPACK_IMPORTED_MODULE_0__["VideoDataComponent"] },
    { path: 'inicio', component: _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_bootstrap_navbar_bootstrap_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/bootstrap-navbar/bootstrap-navbar.component */ "./src/app/components/bootstrap-navbar/bootstrap-navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    ngOnInit() {
        /*     const navbar = document.getElementById('navbar');
        
            window.onscroll = () => {
              if (window.scrollY === 0) {
                navbar.classList.remove('navbar-scrolled');
              } else {
                navbar.classList.add('navbar-scrolled');
              }
            }; */
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["id", "page-container"], ["id", "content-wrap"], ["id", "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-bootstrap-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [src_app_components_bootstrap_navbar_bootstrap_navbar_component__WEBPACK_IMPORTED_MODULE_1__["BootstrapNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#page-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n}\n\n#content-wrap[_ngcontent-%COMP%] {\n  padding-bottom: 11rem;\n  \n}\n\n#footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2.5rem;\n  \n}\n\n@media screen and (max-width: 578px) {\n  #content-wrap[_ngcontent-%COMP%] {\n    padding-bottom: 15rem;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFF2aXhcXGZsb3cgY2xvblxcZmxvd0Nsb24vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7RUFBMEIsa0JBQUE7QUNFOUI7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUEyQixrQkFBQTtBQ0cvQjs7QURBRTtFQUNFO0lBQ0kscUJBQUE7SUFBMEIsa0JBQUE7RUNJaEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gICNjb250ZW50LXdyYXAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDExcmVtOyAgICAvKiBGb290ZXIgaGVpZ2h0ICovXHJcbiAgfVxyXG5cclxuICAjZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07ICAgICAgICAgICAgLyogRm9vdGVyIGhlaWdodCAqL1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc4cHgpIHtcclxuICAgICNjb250ZW50LXdyYXAge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXJlbTsgICAgLyogRm9vdGVyIGhlaWdodCAqL1xyXG4gICAgICB9ICAgXHJcbiAgfSIsIiNwYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbiNjb250ZW50LXdyYXAge1xuICBwYWRkaW5nLWJvdHRvbTogMTFyZW07XG4gIC8qIEZvb3RlciBoZWlnaHQgKi9cbn1cblxuI2Zvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIC8qIEZvb3RlciBoZWlnaHQgKi9cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc4cHgpIHtcbiAgI2NvbnRlbnQtd3JhcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cmVtO1xuICAgIC8qIEZvb3RlciBoZWlnaHQgKi9cbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/channels/channels.component */ "./src/app/components/channels/channels.component.ts");
/* harmony import */ var _components_channels_channel_channel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/channels/channel/channel.component */ "./src/app/components/channels/channel/channel.component.ts");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/video/video.component */ "./src/app/components/video/video.component.ts");
/* harmony import */ var _components_video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/video-thumbnail/video-thumbnail.component */ "./src/app/components/video-thumbnail/video-thumbnail.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "./src/app/pages/inicio/inicio.component.ts");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/safe.pipe */ "./src/app/pipes/safe.pipe.ts");
/* harmony import */ var _directives_pointer_cursor_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/pointer-cursor.directive */ "./src/app/directives/pointer-cursor.directive.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var src_app_components_bootstrap_navbar_bootstrap_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/components/bootstrap-navbar/bootstrap-navbar.component */ "./src/app/components/bootstrap-navbar/bootstrap-navbar.component.ts");
/* harmony import */ var _pages_video_data_video_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/video-data/video-data.component */ "./src/app/pages/video-data/video-data.component.ts");
/* harmony import */ var _components_inicio_carousel_inicio_carousel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/inicio-carousel/inicio-carousel.component */ "./src/app/components/inicio-carousel/inicio-carousel.component.ts");
/* harmony import */ var _components_live_videos_live_videos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/live-videos/live-videos.component */ "./src/app/components/live-videos/live-videos.component.ts");
/* harmony import */ var _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/duration.pipe */ "./src/app/pipes/duration.pipe.ts");
/* harmony import */ var _components_live_videos_live_video_thumbnail_live_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/live-videos/live-video-thumbnail/live-video-thumbnail.component */ "./src/app/components/live-videos/live-video-thumbnail/live-video-thumbnail.component.ts");
/* harmony import */ var _components_favorito_favorito_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/favorito/favorito.component */ "./src/app/components/favorito/favorito.component.ts");
/* harmony import */ var _pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/timestamp.pipe */ "./src/app/pipes/timestamp.pipe.ts");
/* harmony import */ var _pipes_split_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/split.pipe */ "./src/app/pipes/split.pipe.ts");
/* harmony import */ var _pipes_tags_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/tags.pipe */ "./src/app/pipes/tags.pipe.ts");
/* harmony import */ var _directives_navbar_scroll_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/navbar-scroll.directive */ "./src/app/directives/navbar-scroll.directive.ts");
/* harmony import */ var _pipes_reduce_string_length_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/reduce-string-length.pipe */ "./src/app/pipes/reduce-string-length.pipe.ts");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_7__["ChannelsComponent"],
        _components_channels_channel_channel_component__WEBPACK_IMPORTED_MODULE_8__["ChannelComponent"],
        _components_video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"],
        _components_video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__["VideoThumbnailComponent"],
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_12__["InicioComponent"],
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_13__["SafePipe"],
        _directives_pointer_cursor_directive__WEBPACK_IMPORTED_MODULE_14__["PointerCursorDirective"],
        src_app_components_bootstrap_navbar_bootstrap_navbar_component__WEBPACK_IMPORTED_MODULE_16__["BootstrapNavbarComponent"],
        _pages_video_data_video_data_component__WEBPACK_IMPORTED_MODULE_17__["VideoDataComponent"],
        _components_inicio_carousel_inicio_carousel_component__WEBPACK_IMPORTED_MODULE_18__["InicioCarouselComponent"],
        _components_live_videos_live_videos_component__WEBPACK_IMPORTED_MODULE_19__["LiveVideosComponent"],
        _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_20__["DurationPipe"],
        _components_live_videos_live_video_thumbnail_live_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_21__["LiveVideoThumbnailComponent"],
        _components_favorito_favorito_component__WEBPACK_IMPORTED_MODULE_22__["FavoritoComponent"],
        _pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_23__["TimestampPipe"],
        _pipes_split_pipe__WEBPACK_IMPORTED_MODULE_24__["SplitPipe"],
        _pipes_tags_pipe__WEBPACK_IMPORTED_MODULE_25__["TagsPipe"],
        _directives_navbar_scroll_directive__WEBPACK_IMPORTED_MODULE_26__["NavbarScrollDirective"],
        _pipes_reduce_string_length_pipe__WEBPACK_IMPORTED_MODULE_27__["ReduceStringLengthPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_7__["ChannelsComponent"],
                    _components_channels_channel_channel_component__WEBPACK_IMPORTED_MODULE_8__["ChannelComponent"],
                    _components_video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"],
                    _components_video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__["VideoThumbnailComponent"],
                    _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_12__["InicioComponent"],
                    _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_13__["SafePipe"],
                    _directives_pointer_cursor_directive__WEBPACK_IMPORTED_MODULE_14__["PointerCursorDirective"],
                    src_app_components_bootstrap_navbar_bootstrap_navbar_component__WEBPACK_IMPORTED_MODULE_16__["BootstrapNavbarComponent"],
                    _pages_video_data_video_data_component__WEBPACK_IMPORTED_MODULE_17__["VideoDataComponent"],
                    _components_inicio_carousel_inicio_carousel_component__WEBPACK_IMPORTED_MODULE_18__["InicioCarouselComponent"],
                    _components_live_videos_live_videos_component__WEBPACK_IMPORTED_MODULE_19__["LiveVideosComponent"],
                    _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_20__["DurationPipe"],
                    _components_live_videos_live_video_thumbnail_live_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_21__["LiveVideoThumbnailComponent"],
                    _components_favorito_favorito_component__WEBPACK_IMPORTED_MODULE_22__["FavoritoComponent"],
                    _pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_23__["TimestampPipe"],
                    _pipes_split_pipe__WEBPACK_IMPORTED_MODULE_24__["SplitPipe"],
                    _pipes_tags_pipe__WEBPACK_IMPORTED_MODULE_25__["TagsPipe"],
                    _directives_navbar_scroll_directive__WEBPACK_IMPORTED_MODULE_26__["NavbarScrollDirective"],
                    _pipes_reduce_string_length_pipe__WEBPACK_IMPORTED_MODULE_27__["ReduceStringLengthPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/bootstrap-navbar/bootstrap-navbar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/bootstrap-navbar/bootstrap-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: BootstrapNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapNavbarComponent", function() { return BootstrapNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directives_navbar_scroll_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/navbar-scroll.directive */ "./src/app/directives/navbar-scroll.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/"]; };
class BootstrapNavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
BootstrapNavbarComponent.ɵfac = function BootstrapNavbarComponent_Factory(t) { return new (t || BootstrapNavbarComponent)(); };
BootstrapNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BootstrapNavbarComponent, selectors: [["app-bootstrap-navbar"]], decls: 28, vars: 2, consts: [["appNavbarScroll", "", 1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/logo/3502272.png", "id", "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["id", "search", 1, "navbar-text"], [1, "fas", "fa-search"], ["id", "user", 1, "navbar-text"], [1, "fas", "fa-user-circle"]], template: function BootstrapNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Gu\u00EDa de TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pel\u00EDculas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Kids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_directives_navbar_scroll_directive__WEBPACK_IMPORTED_MODULE_1__["NavbarScrollDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%] {\n  font-size: large;\n  background-color: rgba(26, 26, 26, 0.3) !important;\n}\n\n.bootstrap-navbar-scrolled[_ngcontent-%COMP%] {\n  background-color: #1A1A1A !important;\n}\n\n#logo[_ngcontent-%COMP%] {\n  height: 4rem;\n  flex-basis: auto;\n}\n\n#search[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  margin-right: 1.5rem;\n  margin-left: auto;\n}\n\n#user[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  margin-right: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib290c3RyYXAtbmF2YmFyL0M6XFxRdml4XFxmbG93IGNsb25cXGZsb3dDbG9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxib290c3RyYXAtbmF2YmFyXFxib290c3RyYXAtbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Jvb3RzdHJhcC1uYXZiYXIvYm9vdHN0cmFwLW5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBRUEsa0RBQUE7QUNESjs7QURJQTtFQUNJLG9DQUFBO0FDREo7O0FES0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib290c3RyYXAtbmF2YmFyL2Jvb3RzdHJhcC1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdmJhciB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI2LDI2LDI2LDEpIDAlLCByZ2JhKDI2LCAyNiwgMjYsIDApIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyNiwgMjYsIDAuMykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvb3RzdHJhcC1uYXZiYXItc2Nyb2xsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuI2xvZ28ge1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgZmxleC1iYXNpczogYXV0bztcclxufVxyXG5cclxuI3NlYXJjaCB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuI3VzZXIge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4iLCIubmF2YmFyIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjYsIDI2LCAwLjMpICFpbXBvcnRhbnQ7XG59XG5cbi5ib290c3RyYXAtbmF2YmFyLXNjcm9sbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQSAhaW1wb3J0YW50O1xufVxuXG4jbG9nbyB7XG4gIGhlaWdodDogNHJlbTtcbiAgZmxleC1iYXNpczogYXV0bztcbn1cblxuI3NlYXJjaCB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuI3VzZXIge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bootstrap-navbar',
                templateUrl: './bootstrap-navbar.component.html',
                styleUrls: ['./bootstrap-navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/channels/channel/channel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/channels/channel/channel.component.ts ***!
  \******************************************************************/
/*! exports provided: ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../video-thumbnail/video-thumbnail.component */ "./src/app/components/video-thumbnail/video-thumbnail.component.ts");
/* harmony import */ var src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/daily-motion.service */ "./src/app/services/daily-motion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/netflix-carousel.service */ "./src/app/services/netflix-carousel.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");










function ChannelComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-video-thumbnail", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelComponent_div_0_div_3_Template_app_video_thumbnail_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const video_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.watchVideo(video_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSize", ctx_r2.thumbnailSize)("videoId", video_r3.id);
} }
function ChannelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swiperTouchStart", function ChannelComponent_div_0_Template_div_swiperTouchStart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onTouchStart(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChannelComponent_div_0_div_3_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.videos);
} }
class ChannelComponent {
    constructor(dailyMotionProvider, router, netflixCarouselProvider) {
        this.dailyMotionProvider = dailyMotionProvider;
        this.router = router;
        this.netflixCarouselProvider = netflixCarouselProvider;
        this.thumbnailSize = _video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["ThumbnailSize"].small;
        this.config = {
            slidesPerView: 5,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    }
    ngOnInit() {
        this.dailyMotionProvider.getChannelVideos(this.channel.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('list')).subscribe(videos => this.videos = videos);
    }
    watchVideo(videoId) {
        this.router.navigate(['video', videoId]);
    }
    onTouchStart(lautaroSwiper) {
        this.netflixCarouselProvider.onTouchStarted();
    }
}
ChannelComponent.ɵfac = function ChannelComponent_Factory(t) { return new (t || ChannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_3__["DailyMotionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_5__["NetflixCarouselService"])); };
ChannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChannelComponent, selectors: [["app-channel"]], inputs: { channel: "channel" }, decls: 1, vars: 1, consts: [["class", "swiper-container", 3, "swiper", "swiperTouchStart", 4, "ngIf"], [1, "swiper-container", 3, "swiper", "swiperTouchStart"], ["lautaroSwiper", ""], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-button-next", "swiper-button-white"], [1, "swiper-button-prev", "swiper-button-white"], [1, "swiper-slide"], [3, "imgSize", "videoId", "click"]], template: function ChannelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChannelComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["VideoThumbnailComponent"]], styles: [".swiper-container[_ngcontent-%COMP%] {\n  height: 280px;\n}\n\n.swiper-wrapper[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  height: 233px;\n  background-position: center;\n  background-size: cover;\n  background-color: black;\n  transition: 250ms all;\n  max-width: 233px;\n}\n\n.swiper-slide[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFubmVscy9jaGFubmVsL0M6XFxRdml4XFxmbG93IGNsb25cXGZsb3dDbG9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGFubmVsc1xcY2hhbm5lbFxcY2hhbm5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGFubmVscy9jaGFubmVsL2NoYW5uZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENJO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYW5uZWxzL2NoYW5uZWwvY2hhbm5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICB9XHJcblxyXG4gIC5zd2lwZXItd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGhlaWdodDogMjMzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGw7XHJcbiAgICBtYXgtd2lkdGg6IDIzM3B4O1xyXG4gXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9IiwiLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDI4MHB4O1xufVxuXG4uc3dpcGVyLXdyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBoZWlnaHQ6IDIzM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAyNTBtcyBhbGw7XG4gIG1heC13aWR0aDogMjMzcHg7XG59XG4uc3dpcGVyLXNsaWRlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB6LWluZGV4OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-channel',
                templateUrl: './channel.component.html',
                styleUrls: ['./channel.component.scss']
            }]
    }], function () { return [{ type: src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_3__["DailyMotionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_5__["NetflixCarouselService"] }]; }, { channel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/channels/channels.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/channels/channels.component.ts ***!
  \***********************************************************/
/*! exports provided: ChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function() { return ChannelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/daily-motion.service */ "./src/app/services/daily-motion.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/components/channels/channel/channel.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/components/loading/loading.component.ts");







function ChannelsComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-channel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const channel_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channel", channel_r4);
} }
function ChannelsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChannelsComponent_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const channels_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", channels_r2);
} }
function ChannelsComponent_app_loading_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class ChannelsComponent {
    constructor(dailyMotionProvider) {
        this.dailyMotionProvider = dailyMotionProvider;
        this.channelsList$ = this.dailyMotionProvider.popularChannels$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('list'));
    }
    ngOnInit() {
    }
}
ChannelsComponent.ɵfac = function ChannelsComponent_Factory(t) { return new (t || ChannelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_2__["DailyMotionService"])); };
ChannelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChannelsComponent, selectors: [["app-channels"]], decls: 3, vars: 4, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "margin-top", "1.5rem"], [3, "channel"]], template: function ChannelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChannelsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelsComponent_app_loading_2_Template, 1, 0, "app-loading", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.channelsList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.channelsList$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _channel_channel_component__WEBPACK_IMPORTED_MODULE_4__["ChannelComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbm5lbHMvY2hhbm5lbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-channels',
                templateUrl: './channels.component.html',
                styleUrls: ['./channels.component.scss']
            }]
    }], function () { return [{ type: src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_2__["DailyMotionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/favorito/favorito.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/favorito/favorito.component.ts ***!
  \***********************************************************/
/*! exports provided: FavoritoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritoComponent", function() { return FavoritoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/components/loading/loading.component.ts");




const _c0 = ["heart"];
function FavoritoComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritoComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleFavourite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FavoritoComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class FavoritoComponent {
    constructor() {
        this.isFavourite = false;
        this.isLoading = false;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    toggleFavourite() {
        if (!this.isFavourite) {
            this.heart.nativeElement.classList.remove("far");
            this.heart.nativeElement.classList.add("fas");
            this.isFavourite = true;
            this.changed.emit(true);
        }
        else {
            this.heart.nativeElement.classList.remove("fas");
            this.heart.nativeElement.classList.add("far");
            this.isFavourite = false;
            this.changed.emit(false);
        }
    }
}
FavoritoComponent.ɵfac = function FavoritoComponent_Factory(t) { return new (t || FavoritoComponent)(); };
FavoritoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritoComponent, selectors: [["app-favorito"]], viewQuery: function FavoritoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.heart = _t.first);
    } }, inputs: { isFavourite: "isFavourite" }, outputs: { changed: "changed" }, decls: 2, vars: 2, consts: [[3, "click", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "far", "fa-heart"], ["heart", ""]], template: function FavoritoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FavoritoComponent_button_0_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoritoComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif !important;\n  color: white !important;\n  background-color: #191919 !important;\n}\n.reproducir-btn[_ngcontent-%COMP%] {\n  border: 1px solid #57DFB7;\n  border-radius: 50px;\n  background-color: #57DFB7;\n  font-weight: bolder;\n  transition-duration: 1000ms;\n}\n.reproducir-btn[_ngcontent-%COMP%]:hover {\n  background-color: #40ac8b;\n}\n.btn-back[_ngcontent-%COMP%] {\n  z-index: 1;\n  border: none;\n  border-radius: 20px;\n  padding: 8px 18px 8px 18px;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n}\ni[_ngcontent-%COMP%] {\n  color: #57DFB7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0by9DOlxcUXZpeFxcZmxvdyBjbG9uXFxmbG93Q2xvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRvL2Zhdm9yaXRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRvL0M6XFxRdml4XFxmbG93IGNsb25cXGZsb3dDbG9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmYXZvcml0b1xcZmF2b3JpdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFhUjtFQUNJLDRDQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQ1hKO0FEY0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBaEJZO0VBaUJaLG1CQUFBO0VBQ0EsMkJBQUE7QUNYSjtBRFlJO0VBQ0kseUJBbkJjO0FDU3RCO0FEY0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0F6QmM7RUEwQmQsWUE1QmM7RUE2QmQsaUJBQUE7RUFDQSxpQkFBQTtBQ1hKO0FEYUk7RUFDSSxvQ0E5QmlCO0FDbUJ6QjtBQzVCQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBRCtCSjtBQzVCQTtFQUNJLGNGRlk7QUNpQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0by9mYXZvcml0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiRmb250LXN0YWNrOiAgICAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcblxyXG4vL2NvbG9yIHBhbGxldGU6XHJcbiRwcmltYXJ5LWNvbG9yOiAjNTdERkI3O1xyXG4kcHJpbWFyeS1jb2xvci1ob3ZlcjogcmdiKDY0LCAxNzIsIDEzOSk7XHJcbiRzZWNvbmRhcnktY29sb3I6IHdoaXRlO1xyXG5cclxuJHRleHQtYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kdGV4dC1iYWNrZ3JvdW5kLWhvdmVyOiAgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtc3RhY2sgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlcHJvZHVjaXItYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWhvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWJhY2sge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMThweCA4cHggMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtYmFja2dyb3VuZC1ob3ZlcjtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXByb2R1Y2lyLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1N0RGQjc7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1N0RGQjc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcbn1cbi5yZXByb2R1Y2lyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGFjOGI7XG59XG5cbi5idG4tYmFjayB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogOHB4IDE4cHggOHB4IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnRuLWJhY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaSB7XG4gIGNvbG9yOiAjNTdERkI3O1xufSIsIkB1c2UgJy4uLy4uLy4uL3N0eWxlcyc7XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTsgXHJcbn1cclxuXHJcbmkge1xyXG4gICAgY29sb3I6IHN0eWxlcy4kcHJpbWFyeS1jb2xvcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorito',
                templateUrl: './favorito.component.html',
                styleUrls: ['./favorito.component.scss']
            }]
    }], function () { return []; }, { isFavourite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], heart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['heart']
        }], changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 0, consts: [["href", ""], [2, "text-align", "center"], ["href", "#"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Protecci\u00F3n de datos personales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "T\u00E9rminos y condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Medios de contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Direcci\u00F3n General de Defensa y Protecci\u00F3n al Consumidor, para consultas y/o denuncias, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ingrese aqu\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["ul[_ngcontent-%COMP%] {\n  text-align: center;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  display: inline-block;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: list-item;\n  list-style: square;\n  color: white;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  background-color: black;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFF2aXhcXGZsb3cgY2xvblxcZmxvd0Nsb24vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDUjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDWjtBRENZO0VBQ0ksMEJBQUE7QUNDaEI7QURLQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmIGxpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICYgYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogc3F1YXJlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAmIDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59IiwidWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG51bCBsaSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxudWwgbGkgYSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgbGlzdC1zdHlsZTogc3F1YXJlO1xuICBjb2xvcjogd2hpdGU7XG59XG51bCBsaSBhIDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5mb290ZXIge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/inicio-carousel/inicio-carousel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/inicio-carousel/inicio-carousel.component.ts ***!
  \*************************************************************************/
/*! exports provided: InicioCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioCarouselComponent", function() { return InicioCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/daily-motion.service */ "./src/app/services/daily-motion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/components/loading/loading.component.ts");






const _c0 = function (a0) { return { "background-image": a0 }; };
function InicioCarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InicioCarouselComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.reproducirVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " REPRODUCIR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "M\u00C1S INFO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + ctx_r0.video.thumbnail_1080_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.video.title);
} }
function InicioCarouselComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class InicioCarouselComponent {
    constructor(dailyMotionProvider, router) {
        this.dailyMotionProvider = dailyMotionProvider;
        this.router = router;
    }
    ngOnInit() {
        this.dailyMotionProvider.getVideo(this.videoId)
            .subscribe(video => {
            this.video = video;
            if (this.video.title.length > 80) {
                this.video.title = this.video.description.slice(0, 80) + '...';
            }
        });
    }
    reproducirVideo() {
        this.router.navigate(['video', this.videoId]);
    }
}
InicioCarouselComponent.ɵfac = function InicioCarouselComponent_Factory(t) { return new (t || InicioCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_1__["DailyMotionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
InicioCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioCarouselComponent, selectors: [["app-inicio-carousel"]], inputs: { videoId: "videoId" }, decls: 2, vars: 2, consts: [["class", "lautaro-container", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], [1, "lautaro-container", 3, "ngStyle"], ["id", "carousel-title"], ["id", "reproducir-btn", 1, "reproducir-btn", 3, "click"], [1, "fas", "fa-play"], ["id", "mas-info-btn"]], template: function InicioCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InicioCarouselComponent_div_0_Template, 8, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InicioCarouselComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.video);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.video);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif !important;\n  color: white !important;\n  background-color: #191919 !important;\n}\n.reproducir-btn[_ngcontent-%COMP%] {\n  border: 1px solid #57DFB7;\n  border-radius: 50px;\n  background-color: #57DFB7;\n  font-weight: bolder;\n  transition-duration: 1000ms;\n}\n.reproducir-btn[_ngcontent-%COMP%]:hover {\n  background-color: #40ac8b;\n}\n.btn-back[_ngcontent-%COMP%] {\n  z-index: 1;\n  border: none;\n  border-radius: 20px;\n  padding: 8px 18px 8px 18px;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.lautaro-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-top: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 40px;\n}\n#thumbnail[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#carousel-title[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  position: relative;\n  top: 82%;\n  left: 36px;\n  color: white;\n  font-weight: 900;\n  font-size: 3rem;\n  text-align: center;\n  padding-left: 1.5rem;\n  padding-right: 1rem;\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n#reproducir-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90%;\n  left: 60px;\n  padding: 8px 25px 8px 25px;\n  color: black;\n}\n#mas-info-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90%;\n  left: 230px;\n  border: 1px solid white;\n  border-radius: 50px;\n  padding: 8px 25px 8px 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: white;\n  font-weight: bolder;\n  transition-duration: 1000ms;\n}\n#mas-info-btn[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: black;\n}\n@media only screen and (max-width: 800px) {\n  .lautaro-container[_ngcontent-%COMP%] {\n    font-size: xx-small;\n  }\n\n  #carousel-title[_ngcontent-%COMP%] {\n    max-width: 800px;\n    color: white;\n    font-weight: 900;\n    font-size: 20px;\n    text-align: center;\n    padding-left: 0rem;\n    padding-right: 1rem;\n    background-color: rgba(0, 0, 0, 0.4);\n    border-radius: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmljaW8tY2Fyb3VzZWwvQzpcXFF2aXhcXGZsb3cgY2xvblxcZmxvd0Nsb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmljaW8tY2Fyb3VzZWwvaW5pY2lvLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2luaWNpby1jYXJvdXNlbC9DOlxcUXZpeFxcZmxvdyBjbG9uXFxmbG93Q2xvbi9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW5pY2lvLWNhcm91c2VsXFxpbmljaW8tY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFhUjtFQUNJLDRDQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQ1hKO0FEY0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBaEJZO0VBaUJaLG1CQUFBO0VBQ0EsMkJBQUE7QUNYSjtBRFlJO0VBQ0kseUJBbkJjO0FDU3RCO0FEY0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0F6QmM7RUEwQmQsWUE1QmM7RUE2QmQsaUJBQUE7RUFDQSxpQkFBQTtBQ1hKO0FEYUk7RUFDSSxvQ0E5QmlCO0FDbUJ6QjtBQzVCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUQrQko7QUM1QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUQrQko7QUM1QkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBRCtCSjtBQzVCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUQrQko7QUM1QkM7RUFDRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NGdENjO0VFdUNkLFlGekNjO0VFMENkLG1CQUFBO0VBQ0EsMkJBQUE7QUQrQko7QUM5Qkk7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QURnQ1I7QUMzQkM7RUFDRztJQUNJLG1CQUFBO0VEOEJOOztFQzNCRTtJQUNJLGdCQUFBO0lBQ0EsWUYxRFU7SUUyRFYsZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0NBQUE7SUFDQSxtQkFBQTtFRDhCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmljaW8tY2Fyb3VzZWwvaW5pY2lvLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuJGZvbnQtc3RhY2s6ICAgICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuXHJcbi8vY29sb3IgcGFsbGV0ZTpcclxuJHByaW1hcnktY29sb3I6ICM1N0RGQjc7XHJcbiRwcmltYXJ5LWNvbG9yLWhvdmVyOiByZ2IoNjQsIDE3MiwgMTM5KTtcclxuJHNlY29uZGFyeS1jb2xvcjogd2hpdGU7XHJcblxyXG4kdGV4dC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiR0ZXh0LWJhY2tncm91bmQtaG92ZXI6ICByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjayAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVwcm9kdWNpci1idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItaG92ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tYmFjayB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxOHB4IDhweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtYmFja2dyb3VuZDtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kLWhvdmVyO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTkgIWltcG9ydGFudDtcbn1cblxuLnJlcHJvZHVjaXItYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU3REZCNztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3REZCNztcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xufVxuLnJlcHJvZHVjaXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwYWM4Yjtcbn1cblxuLmJ0bi1iYWNrIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA4cHggMThweCA4cHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idG4tYmFjazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLmxhdXRhcm8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbiN0aHVtYm5haWwge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbiNjYXJvdXNlbC10aXRsZSB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogODIlO1xuICBsZWZ0OiAzNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4jcmVwcm9kdWNpci1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTAlO1xuICBsZWZ0OiA2MHB4O1xuICBwYWRkaW5nOiA4cHggMjVweCA4cHggMjVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jbWFzLWluZm8tYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDkwJTtcbiAgbGVmdDogMjMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA4cHggMjVweCA4cHggMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcbn1cbiNtYXMtaW5mby1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5sYXV0YXJvLWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcbiAgfVxuXG4gICNjYXJvdXNlbC10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG59IiwiQHVzZSAnLi4vLi4vLi4vc3R5bGVzJztcclxuXHJcbi5sYXV0YXJvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4jdGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuI2Nhcm91c2VsLXRpdGxlIHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA4MiU7XHJcbiAgICBsZWZ0OiAzNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbiNyZXByb2R1Y2lyLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDkwJTtcclxuICAgIGxlZnQ6IDYwcHg7IFxyXG4gICAgcGFkZGluZzogOHB4IDI1cHggOHB4IDI1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcblxyXG4gI21hcy1pbmZvLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDkwJTtcclxuICAgIGxlZnQ6IDIzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDI1cHggOHB4IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdHlsZXMuJHRleHQtYmFja2dyb3VuZDtcclxuICAgIGNvbG9yOiBzdHlsZXMuJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAubGF1dGFyby1jb250YWluZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgI2Nhcm91c2VsLXRpdGxlIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIGNvbG9yOiBzdHlsZXMuJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inicio-carousel',
                templateUrl: './inicio-carousel.component.html',
                styleUrls: ['./inicio-carousel.component.scss']
            }]
    }], function () { return [{ type: src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_1__["DailyMotionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/live-videos/live-video-thumbnail/live-video-thumbnail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/live-videos/live-video-thumbnail/live-video-thumbnail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ThumbnailSize, LiveVideoThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailSize", function() { return ThumbnailSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveVideoThumbnailComponent", function() { return LiveVideoThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/daily-motion.service */ "./src/app/services/daily-motion.service.ts");
/* harmony import */ var src_app_services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/netflix-carousel.service */ "./src/app/services/netflix-carousel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/duration.pipe */ "./src/app/pipes/duration.pipe.ts");









const _c0 = ["thumbnail"];
function LiveVideoThumbnailComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LiveVideoThumbnailComponent_div_0_div_2_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.reproducirVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.video.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Duraci\u00F3n: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx_r3.video.duration), " | Vistas: ", ctx_r3.video.views_total, "");
} }
const _c1 = function (a0) { return { "background-image": a0 }; };
function LiveVideoThumbnailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function LiveVideoThumbnailComponent_div_0_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onHover(); })("mouseleave", function LiveVideoThumbnailComponent_div_0_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onMouseLeave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LiveVideoThumbnailComponent_div_0_div_2_Template, 8, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "url(" + ctx_r0.img + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isHovered);
} }
function LiveVideoThumbnailComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
var ThumbnailSize;
(function (ThumbnailSize) {
    ThumbnailSize[ThumbnailSize["small"] = 1] = "small";
    ThumbnailSize[ThumbnailSize["medium"] = 2] = "medium";
    ThumbnailSize[ThumbnailSize["extraLarge"] = 3] = "extraLarge";
})(ThumbnailSize || (ThumbnailSize = {}));
class LiveVideoThumbnailComponent {
    constructor(dailyMotionProvider, netflixCarouselService, router) {
        this.dailyMotionProvider = dailyMotionProvider;
        this.netflixCarouselService = netflixCarouselService;
        this.router = router;
        this.imgSize = ThumbnailSize.extraLarge;
        this.isInicioCarousel = false;
        this.isHovered = false;
        this.swiperTouch$ = this.netflixCarouselService.swiperTouch$;
    }
    ngOnInit() {
        this.dailyMotionProvider.getVideo(this.videoId)
            .subscribe(video => {
            this.video = video;
            if (this.video.description.length > 150) {
                this.video.description = this.video.description.slice(0, 150);
                this.video.description = this.video.description + '...';
            }
            if (this.imgSize === ThumbnailSize.small) {
                this.img = video.thumbnail_240_url;
            }
            if (this.imgSize === ThumbnailSize.medium) {
                this.img = video.thumbnail_360_url;
            }
            if (this.imgSize === ThumbnailSize.extraLarge) {
                this.img = video.thumbnail_1080_url;
            }
        });
        this.swiperTouch$.subscribe(dragEvent => this.onDrag());
    }
    onHover() {
        this.isHovered = true;
        try {
            this.thumbnailRef.nativeElement.classList.remove('grabbing-cursor');
            this.thumbnailRef.nativeElement.classList.add('pointer-cursor');
        }
        catch (err) { }
    }
    onMouseLeave() {
        this.isHovered = false;
        try {
            this.thumbnailRef.nativeElement.classList.remove('pointer-cursor');
            this.thumbnailRef.nativeElement.classList.remove('grabbing-cursor');
        }
        catch (err) { }
    }
    onDrag() {
        try {
            this.thumbnailRef.nativeElement.classList.remove('pointer-cursor');
            this.thumbnailRef.nativeElement.classList.add('grabbing-cursor');
        }
        catch (err) {
            //do nth
        }
    }
    reproducirVideo() {
        this.router.navigate(['video', this.videoId, 'play']);
    }
}
LiveVideoThumbnailComponent.ɵfac = function LiveVideoThumbnailComponent_Factory(t) { return new (t || LiveVideoThumbnailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_1__["DailyMotionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_2__["NetflixCarouselService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LiveVideoThumbnailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiveVideoThumbnailComponent, selectors: [["app-live-video-thumbnail"]], viewQuery: function LiveVideoThumbnailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thumbnailRef = _t.first);
    } }, inputs: { imgSize: "imgSize", videoId: "videoId", isInicioCarousel: "isInicioCarousel" }, decls: 2, vars: 2, consts: [["id", "thumbnail", 3, "ngStyle", "mouseenter", "mouseleave", 4, "ngIf"], [4, "ngIf"], ["id", "thumbnail", 3, "ngStyle", "mouseenter", "mouseleave"], ["thumbnail", ""], ["class", "lautaro-container", 4, "ngIf"], [1, "lautaro-container"], ["id", "thumbnail-title"], ["id", "thumbnail-play-button", 3, "click"], [1, "fas", "fa-play-circle", "fa-5x"], ["id", "thumbnail-duration-views"]], template: function LiveVideoThumbnailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LiveVideoThumbnailComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LiveVideoThumbnailComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.video);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.video);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]], pipes: [_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_6__["DurationPipe"]], styles: ["@media only screen and (max-width: 800px) {\n  .lautaro-container[_ngcontent-%COMP%] {\n    font-size: xx-small;\n  }\n}\n#thumbnail[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#thumbnail[_ngcontent-%COMP%]   .lautaro-container[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 40px;\n  background: #1a1a1a;\n  background: linear-gradient(0deg, #1a1a1a 0%, rgba(26, 26, 26, 0) 100%);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n#thumbnail[_ngcontent-%COMP%]   .lautaro-container[_ngcontent-%COMP%]   #thumbnail-play-button[_ngcontent-%COMP%] {\n  color: #57DFB7;\n  text-align: center;\n}\n#thumbnail[_ngcontent-%COMP%]   .lautaro-container[_ngcontent-%COMP%]   #thumbnail-play-button[_ngcontent-%COMP%]:hover {\n  color: #34886f;\n}\n#thumbnail[_ngcontent-%COMP%]   .lautaro-container[_ngcontent-%COMP%]   #thumbnail-title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-weight: bolder;\n  font-size: 140%;\n  color: #57DFB7;\n  margin-top: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 20px;\n}\n#thumbnail[_ngcontent-%COMP%]   .lautaro-container[_ngcontent-%COMP%]   #thumbnail-duration-views[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  font-size: 75%;\n}\n.pointer-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.grabbing-cursor[_ngcontent-%COMP%] {\n  cursor: -webkit-grabbing !important;\n  cursor: grabbing !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXZlLXZpZGVvcy9saXZlLXZpZGVvLXRodW1ibmFpbC9DOlxcUXZpeFxcZmxvdyBjbG9uXFxmbG93Q2xvbi9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGl2ZS12aWRlb3NcXGxpdmUtdmlkZW8tdGh1bWJuYWlsXFxsaXZlLXZpZGVvLXRodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saXZlLXZpZGVvcy9saXZlLXZpZGVvLXRodW1ibmFpbC9saXZlLXZpZGVvLXRodW1ibmFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksbUJBQUE7RUNDTjtBQUNGO0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNBSjtBREVJO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVFQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRlI7QURJUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FESVk7RUFDSSxjQUFBO0FDRmhCO0FETVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FDSlo7QURPUTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtBQ0xaO0FEV0E7RUFDSSxlQUFBO0FDUko7QURXQTtFQUNJLG1DQUFBO0VBQUEsMkJBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGl2ZS12aWRlb3MvbGl2ZS12aWRlby10aHVtYm5haWwvbGl2ZS12aWRlby10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAubGF1dGFyby1jb250YWluZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN0aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgICYgLmxhdXRhcm8tY29udGFpbmVyIHtcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjYsMjYsMjYpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI2LDI2LDI2LDEpIDAlLCByZ2JhKDI2LDI2LDI2LDApIDEwMCUpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgJiAjdGh1bWJuYWlsLXBsYXktYnV0dG9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1N0RGQjc7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDUyLCAxMzYsIDExMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJiAjdGh1bWJuYWlsLXRpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzU3REZCNztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYgI3RodW1ibmFpbC1kdXJhdGlvbi12aWV3c3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4ucG9pbnRlci1jdXJzb3Ige1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ3JhYmJpbmctY3Vyc29yIHtcclxuICAgIGN1cnNvcjogZ3JhYmJpbmcgIWltcG9ydGFudDtcclxuIH1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubGF1dGFyby1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gIH1cbn1cbiN0aHVtYm5haWwge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4jdGh1bWJuYWlsIC5sYXV0YXJvLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzFhMWExYSAwJSwgcmdiYSgyNiwgMjYsIDI2LCAwKSAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3RodW1ibmFpbCAubGF1dGFyby1jb250YWluZXIgI3RodW1ibmFpbC1wbGF5LWJ1dHRvbiB7XG4gIGNvbG9yOiAjNTdERkI3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jdGh1bWJuYWlsIC5sYXV0YXJvLWNvbnRhaW5lciAjdGh1bWJuYWlsLXBsYXktYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMzNDg4NmY7XG59XG4jdGh1bWJuYWlsIC5sYXV0YXJvLWNvbnRhaW5lciAjdGh1bWJuYWlsLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxNDAlO1xuICBjb2xvcjogIzU3REZCNztcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4jdGh1bWJuYWlsIC5sYXV0YXJvLWNvbnRhaW5lciAjdGh1bWJuYWlsLWR1cmF0aW9uLXZpZXdzIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGZvbnQtc2l6ZTogNzUlO1xufVxuXG4ucG9pbnRlci1jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ncmFiYmluZy1jdXJzb3Ige1xuICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveVideoThumbnailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-live-video-thumbnail',
                templateUrl: './live-video-thumbnail.component.html',
                styleUrls: ['./live-video-thumbnail.component.scss']
            }]
    }], function () { return [{ type: src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_1__["DailyMotionService"] }, { type: src_app_services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_2__["NetflixCarouselService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { imgSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isInicioCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbnailRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['thumbnail']
        }] }); })();


/***/ }),

/***/ "./src/app/components/live-videos/live-videos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/live-videos/live-videos.component.ts ***!
  \*****************************************************************/
/*! exports provided: LiveVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveVideosComponent", function() { return LiveVideosComponent; });
/* harmony import */ var src_app_components_video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/video-thumbnail/video-thumbnail.component */ "./src/app/components/video-thumbnail/video-thumbnail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/daily-motion.service */ "./src/app/services/daily-motion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/netflix-carousel.service */ "./src/app/services/netflix-carousel.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _live_video_thumbnail_live_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./live-video-thumbnail/live-video-thumbnail.component */ "./src/app/components/live-videos/live-video-thumbnail/live-video-thumbnail.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/components/loading/loading.component.ts");











function LiveVideosComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-live-video-thumbnail", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LiveVideosComponent_div_0_div_5_Template_app_live_video_thumbnail_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const video_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.watchVideo(video_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imgSize", ctx_r3.thumbnailSize)("videoId", video_r4.id);
} }
function LiveVideosComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Videos en vivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("swiperTouchStart", function LiveVideosComponent_div_0_Template_div_swiperTouchStart_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onTouchStart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LiveVideosComponent_div_0_div_5_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const liveVideos_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("swiper", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", liveVideos_r2);
} }
function LiveVideosComponent_app_loading_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading");
} }
class LiveVideosComponent {
    constructor(dailyMotionService, router, netflixCarouselProvider) {
        this.dailyMotionService = dailyMotionService;
        this.router = router;
        this.netflixCarouselProvider = netflixCarouselProvider;
        this.liveVideos$ = this.dailyMotionService.liveVideos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('list'));
        this.thumbnailSize = src_app_components_video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_0__["ThumbnailSize"].medium;
        this.config = {
            slidesPerView: 3,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    }
    ngOnInit() {
    }
    watchVideo(videoId) {
        this.router.navigate(['video', videoId]);
    }
    onTouchStart() {
        this.netflixCarouselProvider.onTouchStarted();
    }
}
LiveVideosComponent.ɵfac = function LiveVideosComponent_Factory(t) { return new (t || LiveVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_3__["DailyMotionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_5__["NetflixCarouselService"])); };
LiveVideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LiveVideosComponent, selectors: [["app-live-videos"]], decls: 3, vars: 4, consts: [[4, "ngIf"], [1, "swiper-container", 3, "swiper", "swiperTouchStart"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-button-next", "swiper-button-white"], [1, "swiper-button-prev", "swiper-button-white"], [1, "swiper-slide"], [3, "imgSize", "videoId", "click"]], template: function LiveVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LiveVideosComponent_div_0_Template, 8, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LiveVideosComponent_app_loading_2_Template, 1, 0, "app-loading", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.liveVideos$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.liveVideos$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _live_video_thumbnail_live_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_8__["LiveVideoThumbnailComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".swiper-container[_ngcontent-%COMP%] {\n  height: 360px;\n}\n\n.swiper-wrapper[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  height: 300px;\n  background-position: center;\n  background-size: cover;\n  background-color: black;\n  transition: 250ms all;\n}\n\n.swiper-slide[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  z-index: 1;\n}\n\n#thumbnail-title[_ngcontent-%COMP%] {\n  font-size: larger !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXZlLXZpZGVvcy9DOlxcUXZpeFxcZmxvdyBjbG9uXFxmbG93Q2xvbi9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGl2ZS12aWRlb3NcXGxpdmUtdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xpdmUtdmlkZW9zL2xpdmUtdmlkZW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUNDUjs7QURHRTtFQUNFLDRCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpdmUtdmlkZW9zL2xpdmUtdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAzNjBweDtcclxuICB9XHJcblxyXG4gIC5zd2lwZXItd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGw7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgI3RodW1ibmFpbC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlciAhaW1wb3J0YW50O1xyXG4gIH0iLCIuc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMzYwcHg7XG59XG5cbi5zd2lwZXItd3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IDI1MG1zIGFsbDtcbn1cbi5zd2lwZXItc2xpZGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbiN0aHVtYm5haWwtdGl0bGUge1xuICBmb250LXNpemU6IGxhcmdlciAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LiveVideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-live-videos',
                templateUrl: './live-videos.component.html',
                styleUrls: ['./live-videos.component.scss']
            }]
    }], function () { return [{ type: src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_3__["DailyMotionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_5__["NetflixCarouselService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 5, vars: 0, consts: [[1, "spinner-box"], [1, "pulse-container"], [1, "pulse-bubble", "pulse-bubble-1"], [1, "pulse-bubble", "pulse-bubble-2"], [1, "pulse-bubble", "pulse-bubble-3"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.75);\n  }\n}\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.75);\n  }\n}\n\n.spinner-box[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n\n.pulse-container[_ngcontent-%COMP%] {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.pulse-bubble[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #57DFB7;\n}\n.pulse-bubble-1[_ngcontent-%COMP%] {\n  -webkit-animation: pulse 0.4s ease 0s infinite alternate;\n          animation: pulse 0.4s ease 0s infinite alternate;\n}\n.pulse-bubble-2[_ngcontent-%COMP%] {\n  -webkit-animation: pulse 0.4s ease 0.2s infinite alternate;\n          animation: pulse 0.4s ease 0.2s infinite alternate;\n}\n.pulse-bubble-3[_ngcontent-%COMP%] {\n  -webkit-animation: pulse 0.4s ease 0.4s infinite alternate;\n          animation: pulse 0.4s ease 0.4s infinite alternate;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL0M6XFxRdml4XFxmbG93IGNsb25cXGZsb3dDbG9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2FkaW5nXFxsb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBRUU7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ0FKO0VERUU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUNBSjtBQUNGO0FEUkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ0FKO0VERUU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUNBSjtBQUNGO0FER0UsaUJBQUE7QUFlQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ2ZKO0FEa0JFLGtCQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNoQko7QURtQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNoQko7QURtQkU7RUFDSSx3REFBQTtVQUFBLGdEQUFBO0FDaEJOO0FEa0JFO0VBQ0ksMERBQUE7VUFBQSxrREFBQTtBQ2ZOO0FEaUJFO0VBQ0ksMERBQUE7VUFBQSxrREFBQTtBQ2ROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBLRVlGUkFNRVMgKi9cclxuICBcclxuICBAa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBvcGFjaXR5OiAuMjU7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogR1JJRCBTVFlMSU5HICovXHJcbiAgXHJcbiAgLy8gKiB7XHJcbiAgLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vIH1cclxuICBcclxuICAvLyBib2R5IHtcclxuICAvLyAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLy8gICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLy8gICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLnNwaW5uZXItYm94IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFBVTFNFIEJVQkJMRVMgKi9cclxuICBcclxuICAucHVsc2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucHVsc2UtYnViYmxlIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3REZCNztcclxuICB9XHJcbiAgXHJcbiAgLnB1bHNlLWJ1YmJsZS0xIHtcclxuICAgICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgfVxyXG4gIC5wdWxzZS1idWJibGUtMiB7XHJcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgLjRzIGVhc2UgLjJzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICB9XHJcbiAgLnB1bHNlLWJ1YmJsZS0zIHtcclxuICAgICAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAuNHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gIH1cclxuICAiLCIvKiBLRVlGUkFNRVMgKi9cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgfVxufVxuLyogR1JJRCBTVFlMSU5HICovXG4uc3Bpbm5lci1ib3gge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyogUFVMU0UgQlVCQkxFUyAqL1xuLnB1bHNlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHVsc2UtYnViYmxlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdERkI3O1xufVxuXG4ucHVsc2UtYnViYmxlLTEge1xuICBhbmltYXRpb246IHB1bHNlIDAuNHMgZWFzZSAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5wdWxzZS1idWJibGUtMiB7XG4gIGFuaW1hdGlvbjogcHVsc2UgMC40cyBlYXNlIDAuMnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4ucHVsc2UtYnViYmxlLTMge1xuICBhbmltYXRpb246IHB1bHNlIDAuNHMgZWFzZSAwLjRzIGluZmluaXRlIGFsdGVybmF0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 21, vars: 4, consts: [["id", "navbar", 1, "navbar-unscrolled"], ["id", "logo-navbar-item", 1, "navbar-item"], [3, "routerLink"], ["src", "assets/images/logo/3502272.png", "id", "logo"], ["id", "inicio", 1, "navbar-item"], [1, "navbar-item"], ["id", "search", 1, "navbar-item"], [1, "fas", "fa-search"], ["id", "user", 1, "navbar-item"], [1, "fas", "fa-user-circle"], ["id", "hamburguer-menu"], [1, "fas", "fa-bars"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Gu\u00EDa de TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pel\u00EDculas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Kids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#navbar[_ngcontent-%COMP%] {\n  padding: 0px;\n  height: 5rem;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: large;\n  z-index: 99999;\n}\n\n.navbar-unscrolled[_ngcontent-%COMP%] {\n  background-image: linear-gradient(180deg, #1a1a1a 0%, rgba(26, 26, 26, 0) 100%);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\n.navbar-scrolled[_ngcontent-%COMP%] {\n  background-color: #1A1A1A;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  left: 0px;\n}\n\n.navbar-item[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n#inicio[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-decoration: underline;\n}\n\n#logo[_ngcontent-%COMP%] {\n  height: 4rem;\n  flex-basis: auto;\n}\n\n#search[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  margin-left: auto;\n}\n\n#user[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  margin-right: 1.5rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n}\n\n#hamburguer-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 576px) {\n  #navbar[_ngcontent-%COMP%] {\n    padding: 0px;\n    height: 5rem;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n    font-size: large;\n    z-index: 99999;\n  }\n\n  #hamburguer-menu[_ngcontent-%COMP%] {\n    font-size: xx-large;\n    display: inline;\n    margin-left: 80%;\n  }\n\n  .navbar-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #logo-navbar-item[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  #hamburguer-menu[_ngcontent-%COMP%] {\n    font-size: xx-large;\n    display: inline;\n    margin-left: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFF2aXhcXGZsb3cgY2xvblxcZmxvd0Nsb24vc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSwrRUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLFNBQUE7QUNFZDs7QURDQTtFQUNJLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFFSTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNBTjs7RURHRTtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDQU47O0VER0U7SUFDSSxhQUFBO0VDQU47O0VER0U7SUFDSSxlQUFBO0VDQU47QUFDRjs7QURJQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG5cclxuLm5hdmJhci11bnNjcm9sbGVkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjYsMjYsMjYsMSkgMCUsIHJnYmEoMjYsIDI2LCAyNiwgMCkgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDsgbGVmdDogMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLXNjcm9sbGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItaXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbiNpbmljaW8ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIGZsZXgtYmFzaXM6IGF1dG87XHJcbn1cclxuXHJcblxyXG4jc2VhcmNoIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuI3VzZXIge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2hhbWJ1cmd1ZXItbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG5cclxuICAgICNuYXZiYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgfVxyXG5cclxuICAgICNoYW1idXJndWVyLW1lbnUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICNsb2dvLW5hdmJhci1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9IFxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgI2hhbWJ1cmd1ZXItbWVudSB7XHJcbiAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcwJTtcclxuICAgIH1cclxufSIsIiNuYXZiYXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgei1pbmRleDogOTk5OTk7XG59XG5cbi5uYXZiYXItdW5zY3JvbGxlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYTFhMWEgMCUsIHJnYmEoMjYsIDI2LCAyNiwgMCkgMTAwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLm5hdmJhci1zY3JvbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLm5hdmJhci1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG4jaW5pY2lvIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuI2xvZ28ge1xuICBoZWlnaHQ6IDRyZW07XG4gIGZsZXgtYmFzaXM6IGF1dG87XG59XG5cbiNzZWFyY2gge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuI3VzZXIge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2hhbWJ1cmd1ZXItbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICNuYXZiYXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICB9XG5cbiAgI2hhbWJ1cmd1ZXItbWVudSB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxuXG4gIC5uYXZiYXItaXRlbSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNsb2dvLW5hdmJhci1pdGVtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICNoYW1idXJndWVyLW1lbnUge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/video-thumbnail/video-thumbnail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/video-thumbnail/video-thumbnail.component.ts ***!
  \*************************************************************************/
/*! exports provided: ThumbnailSize, VideoThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailSize", function() { return ThumbnailSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoThumbnailComponent", function() { return VideoThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/daily-motion.service */ "./src/app/services/daily-motion.service.ts");
/* harmony import */ var src_app_services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/netflix-carousel.service */ "./src/app/services/netflix-carousel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/duration.pipe */ "./src/app/pipes/duration.pipe.ts");









const _c0 = ["thumbnail"];
function VideoThumbnailComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoThumbnailComponent_div_0_div_2_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.reproducirVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.video.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Duraci\u00F3n: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx_r3.video.duration), " | Vistas: ", ctx_r3.video.views_total, "");
} }
const _c1 = function (a0) { return { "background-image": a0 }; };
function VideoThumbnailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function VideoThumbnailComponent_div_0_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onHover(); })("mouseleave", function VideoThumbnailComponent_div_0_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onMouseLeave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoThumbnailComponent_div_0_div_2_Template, 8, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "url(" + ctx_r0.img + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isHovered);
} }
function VideoThumbnailComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
var ThumbnailSize;
(function (ThumbnailSize) {
    ThumbnailSize[ThumbnailSize["small"] = 1] = "small";
    ThumbnailSize[ThumbnailSize["medium"] = 2] = "medium";
    ThumbnailSize[ThumbnailSize["extraLarge"] = 3] = "extraLarge";
})(ThumbnailSize || (ThumbnailSize = {}));
class VideoThumbnailComponent {
    constructor(dailyMotionProvider, netflixCarouselService, router) {
        this.dailyMotionProvider = dailyMotionProvider;
        this.netflixCarouselService = netflixCarouselService;
        this.router = router;
        this.imgSize = ThumbnailSize.extraLarge;
        this.isInicioCarousel = false;
        this.isHovered = false;
        this.swiperTouch$ = this.netflixCarouselService.swiperTouch$;
    }
    ngOnInit() {
        this.dailyMotionProvider.getVideo(this.videoId)
            .subscribe(video => {
            this.video = video;
            if (this.video.description.length > 150) {
                this.video.description = this.video.description.slice(0, 150);
                this.video.description = this.video.description + '...';
            }
            if (this.imgSize === ThumbnailSize.small) {
                this.img = video.thumbnail_240_url;
            }
            if (this.imgSize === ThumbnailSize.medium) {
                this.img = video.thumbnail_360_url;
            }
            if (this.imgSize === ThumbnailSize.extraLarge) {
                this.img = video.thumbnail_1080_url;
            }
        });
        this.swiperTouch$.subscribe(dragEvent => this.onDrag());
    }
    onHover() {
        this.isHovered = true;
        try {
            this.thumbnailRef.nativeElement.classList.remove('grabbing-cursor');
            this.thumbnailRef.nativeElement.classList.add('pointer-cursor');
        }
        catch (err) { }
    }
    onMouseLeave() {
        this.isHovered = false;
        try {
            this.thumbnailRef.nativeElement.classList.remove('pointer-cursor');
            this.thumbnailRef.nativeElement.classList.remove('grabbing-cursor');
        }
        catch (err) { }
    }
    onDrag() {
        try {
            this.thumbnailRef.nativeElement.classList.remove('pointer-cursor');
            this.thumbnailRef.nativeElement.classList.add('grabbing-cursor');
        }
        catch (err) {
            //do nth
        }
    }
    reproducirVideo() {
        this.router.navigate(['video', this.videoId, 'play']);
    }
}
VideoThumbnailComponent.ɵfac = function VideoThumbnailComponent_Factory(t) { return new (t || VideoThumbnailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_1__["DailyMotionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_2__["NetflixCarouselService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
VideoThumbnailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoThumbnailComponent, selectors: [["app-video-thumbnail"]], viewQuery: function VideoThumbnailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thumbnailRef = _t.first);
    } }, inputs: { imgSize: "imgSize", videoId: "videoId", isInicioCarousel: "isInicioCarousel" }, decls: 2, vars: 2, consts: [["id", "thumbnail", 3, "ngStyle", "mouseenter", "mouseleave", 4, "ngIf"], [4, "ngIf"], ["id", "thumbnail", 3, "ngStyle", "mouseenter", "mouseleave"], ["thumbnail", ""], ["class", "lautaro-container", 4, "ngIf"], [1, "lautaro-container"], ["id", "thumbnail-title"], ["id", "thumbnail-play-button", 3, "click"], [1, "fas", "fa-play-circle", "fa-5x"], ["id", "thumbnail-duration-views"]], template: function VideoThumbnailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoThumbnailComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoThumbnailComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.video);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.video);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]], pipes: [_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_6__["DurationPipe"]], styles: ["@media only screen and (max-width: 800px) {\n  .lautaro-container[_ngcontent-%COMP%] {\n    font-size: xx-small;\n  }\n}\n#thumbnail[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#thumbnail[_ngcontent-%COMP%]   .lautaro-container[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 40px;\n  background: #1a1a1a;\n  background: linear-gradient(0deg, #1a1a1a 0%, rgba(26, 26, 26, 0) 100%);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n#thumbnail[_ngcontent-%COMP%]   .lautaro-container[_ngcontent-%COMP%]   #thumbnail-play-button[_ngcontent-%COMP%] {\n  color: #57DFB7;\n  text-align: center;\n}\n#thumbnail[_ngcontent-%COMP%]   .lautaro-container[_ngcontent-%COMP%]   #thumbnail-play-button[_ngcontent-%COMP%]:hover {\n  color: #34886f;\n}\n#thumbnail[_ngcontent-%COMP%]   .lautaro-container[_ngcontent-%COMP%]   #thumbnail-title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-weight: bolder;\n  font-size: 85%;\n  color: #57DFB7;\n  margin-top: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 20px;\n}\n#thumbnail[_ngcontent-%COMP%]   .lautaro-container[_ngcontent-%COMP%]   #thumbnail-duration-views[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  font-size: 75%;\n}\n.pointer-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.grabbing-cursor[_ngcontent-%COMP%] {\n  cursor: -webkit-grabbing !important;\n  cursor: grabbing !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlby10aHVtYm5haWwvQzpcXFF2aXhcXGZsb3cgY2xvblxcZmxvd0Nsb24vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHZpZGVvLXRodW1ibmFpbFxcdmlkZW8tdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvLXRodW1ibmFpbC92aWRlby10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLG1CQUFBO0VDQ047QUFDRjtBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQUo7QURFSTtFQUVJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1RUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FESVE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNGWjtBRElZO0VBQ0ksY0FBQTtBQ0ZoQjtBRE1RO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQ0paO0FET1E7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUNMWjtBRFdBO0VBQ0ksZUFBQTtBQ1JKO0FEV0E7RUFDSSxtQ0FBQTtFQUFBLDJCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvLXRodW1ibmFpbC92aWRlby10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAubGF1dGFyby1jb250YWluZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN0aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgICYgLmxhdXRhcm8tY29udGFpbmVyIHtcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjYsMjYsMjYpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI2LDI2LDI2LDEpIDAlLCByZ2JhKDI2LDI2LDI2LDApIDEwMCUpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgJiAjdGh1bWJuYWlsLXBsYXktYnV0dG9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1N0RGQjc7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDUyLCAxMzYsIDExMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJiAjdGh1bWJuYWlsLXRpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4NSU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTdERkI3O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJiAjdGh1bWJuYWlsLWR1cmF0aW9uLXZpZXdze1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5wb2ludGVyLWN1cnNvciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ncmFiYmluZy1jdXJzb3Ige1xyXG4gICAgY3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50O1xyXG4gfVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5sYXV0YXJvLWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcbiAgfVxufVxuI3RodW1ibmFpbCB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbiN0aHVtYm5haWwgLmxhdXRhcm8tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMWExYTFhIDAlLCByZ2JhKDI2LCAyNiwgMjYsIDApIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jdGh1bWJuYWlsIC5sYXV0YXJvLWNvbnRhaW5lciAjdGh1bWJuYWlsLXBsYXktYnV0dG9uIHtcbiAgY29sb3I6ICM1N0RGQjc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiN0aHVtYm5haWwgLmxhdXRhcm8tY29udGFpbmVyICN0aHVtYm5haWwtcGxheS1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzM0ODg2Zjtcbn1cbiN0aHVtYm5haWwgLmxhdXRhcm8tY29udGFpbmVyICN0aHVtYm5haWwtdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDg1JTtcbiAgY29sb3I6ICM1N0RGQjc7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuI3RodW1ibmFpbCAubGF1dGFyby1jb250YWluZXIgI3RodW1ibmFpbC1kdXJhdGlvbi12aWV3cyB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDc1JTtcbn1cblxuLnBvaW50ZXItY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ3JhYmJpbmctY3Vyc29yIHtcbiAgY3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoThumbnailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-thumbnail',
                templateUrl: './video-thumbnail.component.html',
                styleUrls: ['./video-thumbnail.component.scss']
            }]
    }], function () { return [{ type: src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_1__["DailyMotionService"] }, { type: src_app_services_netflix_carousel_service__WEBPACK_IMPORTED_MODULE_2__["NetflixCarouselService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { imgSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isInicioCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbnailRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['thumbnail']
        }] }); })();


/***/ }),

/***/ "./src/app/components/video/video.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/video/video.component.ts ***!
  \*****************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/daily-motion.service */ "./src/app/services/daily-motion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/components/loading/loading.component.ts");








function VideoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.videoEmbedUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r2.description);
} }
function VideoComponent_app_loading_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class VideoComponent {
    constructor(dailyMotionProvider, route, sanitizer) {
        this.dailyMotionProvider = dailyMotionProvider;
        this.route = route;
        this.sanitizer = sanitizer;
        this.video$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(params => {
            this.videoId = String(params.get('id'));
            return this.dailyMotionProvider.getVideo(this.videoId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(v => {
            const dangerousUrl = 'https://www.dailymotion.com/embed/video/' + v.id;
            this.videoEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
        }));
    }
    ngOnInit() {
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_2__["DailyMotionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], decls: 3, vars: 4, consts: [["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], ["frameborder", "0", "allowfullscreen", "", 3, "src"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoComponent_div_0_Template, 6, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoComponent_app_loading_2_Template, 1, 0, "app-loading", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.video$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.video$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n@media only screen and (min-width: 900px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 10rem 0 10rem;\n  }\n}\niframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vw * 0.3);\n}\n@media only screen and (max-width: 1200px) {\n  iframe[_ngcontent-%COMP%] {\n    height: calc(100vw * 0.52);\n  }\n}\nh1[_ngcontent-%COMP%] {\n  color: #57DFB7;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlby9DOlxcUXZpeFxcZmxvdyBjbG9uXFxmbG93Q2xvbi9zcmNcXGFwcFxcY29tcG9uZW50c1xcdmlkZW9cXHZpZGVvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksZ0JBQUE7QUNGSjtBRERJO0VBREo7SUFFUSx3QkFBQTtFQ0lOO0FBQ0Y7QURBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQ0dKO0FEREk7RUFKSjtJQUtRLDBCQUFBO0VDSU47QUFDRjtBRERBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHJlbSAwIDEwcmVtO1xyXG4gICAgfSAgICBcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2dyAqIDAuMyk7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdncgKiAwLjUyKTtcclxuICAgIH0gICAgICAgIFxyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogIzU3REZCNztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEwcmVtIDAgMTByZW07XG4gIH1cbn1cblxuaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2dyAqIDAuMyk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBpZnJhbWUge1xuICAgIGhlaWdodDogY2FsYygxMDB2dyAqIDAuNTIpO1xuICB9XG59XG5cbmgxIHtcbiAgY29sb3I6ICM1N0RGQjc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.scss']
            }]
    }], function () { return [{ type: src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_2__["DailyMotionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/navbar-scroll.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/navbar-scroll.directive.ts ***!
  \*******************************************************/
/*! exports provided: NavbarScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarScrollDirective", function() { return NavbarScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarScrollDirective {
    constructor(el) {
        this.el = el;
    }
    onWindowScroll() {
        if (window.scrollY > 0) {
            this.el.nativeElement.classList.add('bootstrap-navbar-scrolled');
        }
        else {
            this.el.nativeElement.classList.remove('bootstrap-navbar-scrolled');
        }
    }
}
NavbarScrollDirective.ɵfac = function NavbarScrollDirective_Factory(t) { return new (t || NavbarScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NavbarScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NavbarScrollDirective, selectors: [["", "appNavbarScroll", ""]], hostBindings: function NavbarScrollDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarScrollDirective_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appNavbarScroll]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "./src/app/directives/pointer-cursor.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/pointer-cursor.directive.ts ***!
  \********************************************************/
/*! exports provided: PointerCursorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerCursorDirective", function() { return PointerCursorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PointerCursorDirective {
    constructor(el) {
        this.el = el;
    }
    onMouseEnter() {
        this.el.nativeElement.style.cursor = 'pointer';
    }
}
PointerCursorDirective.ɵfac = function PointerCursorDirective_Factory(t) { return new (t || PointerCursorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PointerCursorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PointerCursorDirective, selectors: [["", "appPointerCursor", ""]], hostBindings: function PointerCursorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function PointerCursorDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointerCursorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appPointerCursor]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/inicio/inicio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/inicio/inicio.component.ts ***!
  \**************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_components_video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/video-thumbnail/video-thumbnail.component */ "./src/app/components/video-thumbnail/video-thumbnail.component.ts");
/* harmony import */ var src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/daily-motion.service */ "./src/app/services/daily-motion.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_live_videos_live_videos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/live-videos/live-videos.component */ "./src/app/components/live-videos/live-videos.component.ts");
/* harmony import */ var _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/channels/channels.component */ "./src/app/components/channels/channels.component.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _components_inicio_carousel_inicio_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/inicio-carousel/inicio-carousel.component */ "./src/app/components/inicio-carousel/inicio-carousel.component.ts");










function InicioComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function InicioComponent_div_1_Template_div_indexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.index = $event; })("swiperTouchStart", function InicioComponent_div_1_Template_div_swiperTouchStart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showControls(); })("mouseenter", function InicioComponent_div_1_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showControls(); })("mouseleave", function InicioComponent_div_1_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.hideControls(); })("swiperTouchEnd", function InicioComponent_div_1_Template_div_swiperTouchEnd_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hideControls(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-inicio-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-inicio-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-inicio-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-inicio-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-inicio-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-inicio-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-inicio-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-inicio-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-inicio-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const videosId_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx_r0.config)("index", ctx_r0.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", videosId_r1[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", videosId_r1[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", videosId_r1[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", videosId_r1[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", videosId_r1[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", videosId_r1[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", videosId_r1[6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", videosId_r1[7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", videosId_r1[8]);
} }
class InicioComponent {
    constructor(dailyMotionProvider) {
        this.dailyMotionProvider = dailyMotionProvider;
        this._hideControls = true;
        this.index = 1;
        this.thumbnailSize = src_app_components_video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["ThumbnailSize"].extraLarge;
        this.config = {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
        this.slides$ = this.dailyMotionProvider.trendingVerifiedVideos$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('list'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(v => v.map(_v => _v.id)));
    }
    ngOnInit() {
    }
    showControls() {
        document.getElementById('big-carousel-next-btn').classList.remove('hide');
        document.getElementById('big-carousel-prev-btn').classList.remove('hide');
    }
    hideControls() {
        document.getElementById('big-carousel-next-btn').classList.add('hide');
        document.getElementById('big-carousel-prev-btn').classList.add('hide');
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_3__["DailyMotionService"])); };
InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 6, vars: 3, consts: [[1, "container-fluid"], ["class", "swiper-container", 3, "swiper", "index", "indexChange", "swiperTouchStart", "mouseenter", "mouseleave", "swiperTouchEnd", 4, "ngIf"], [2, "height", "2.2rem"], [1, "swiper-container", 3, "swiper", "index", "indexChange", "swiperTouchStart", "mouseenter", "mouseleave", "swiperTouchEnd"], [1, "swiper-wrapper"], [1, "swiper-slide"], [3, "videoId"], [1, "swiper-pagination"], ["id", "big-carousel-next-btn", 1, "swiper-button-next", "swiper-button-white", "hide"], ["id", "big-carousel-prev-btn", 1, "swiper-button-prev", "swiper-button-white", "hide"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InicioComponent_div_1_Template, 23, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-live-videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.slides$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_live_videos_live_videos_component__WEBPACK_IMPORTED_MODULE_5__["LiveVideosComponent"], _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_6__["ChannelsComponent"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperDirective"], _components_inicio_carousel_inicio_carousel_component__WEBPACK_IMPORTED_MODULE_8__["InicioCarouselComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".swiper-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 700px;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  \n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL0M6XFxRdml4XFxmbG93IGNsb25cXGZsb3dDbG9uL3NyY1xcYXBwXFxwYWdlc1xcaW5pY2lvXFxpbmljaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVFO0VBRUUsMkJBQUE7RUFDQSxzQkFBQTtFQUNKOzs7OztTQUFBO0FDS0E7O0FESUU7RUFDRSxhQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLyogICAgIHRyYW5zaXRpb246IDI1MG1zIGFsbDtcclxuXHJcbiAgICAmOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfSAqL1xyXG4gIH1cclxuXHJcblxyXG4gIC5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfSIsIi5zd2lwZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzAwcHg7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qICAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGw7XG5cbiAgICAgICY6aG92ZXIsIDpmb2N1cywgOmFjdGl2ZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9ICovXG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inicio',
                templateUrl: './inicio.component.html',
                styleUrls: ['./inicio.component.scss']
            }]
    }], function () { return [{ type: src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_3__["DailyMotionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/video-data/video-data.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/video-data/video-data.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDataComponent", function() { return VideoDataComponent; });
/* harmony import */ var _components_favorito_favorito_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/favorito/favorito.component */ "./src/app/components/favorito/favorito.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/daily-motion.service */ "./src/app/services/daily-motion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_channels_channel_channel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/channels/channel/channel.component */ "./src/app/components/channels/channel/channel.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/duration.pipe */ "./src/app/pipes/duration.pipe.ts");
/* harmony import */ var _pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/timestamp.pipe */ "./src/app/pipes/timestamp.pipe.ts");
/* harmony import */ var _pipes_split_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/split.pipe */ "./src/app/pipes/split.pipe.ts");
/* harmony import */ var _pipes_tags_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/tags.pipe */ "./src/app/pipes/tags.pipe.ts");
/* harmony import */ var _pipes_reduce_string_length_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/reduce-string-length.pipe */ "./src/app/pipes/reduce-string-length.pipe.ts");

















function VideoDataComponent_ng_container_4_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ATP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VideoDataComponent_ng_container_4_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "reduceStringLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, video_r3.description, 250));
} }
function VideoDataComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " REPRODUCIR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-favorito", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function VideoDataComponent_ng_container_4_Template_app_favorito_changed_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onFavouriteChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "timestamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, VideoDataComponent_ng_container_4_span_24_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, VideoDataComponent_ng_container_4_div_25_Template, 4, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "G\u00E9nero:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "split");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const video_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", video_r3.thumbnail_1080_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", video_r3.thumbnail_240_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isFavourite", ctx_r0.isFavourite);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 10, video_r3.duration), " \u2022 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 15, video_r3.created_time), "yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !video_r3.explicit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", video_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](31, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 20, video_r3.tags, 4), " ,"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Subido por: ", ctx_r0.videoUsername, "");
} }
function VideoDataComponent_section_6_app_channel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-channel", 23);
} if (rf & 2) {
    const channel_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channel", channel_r9);
} }
function VideoDataComponent_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tambi\u00E9n podr\u00EDa gustarte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VideoDataComponent_section_6_app_channel_3_Template, 1, 1, "app-channel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", channel_r9);
} }
function VideoDataComponent_app_loading_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading");
} }
class VideoDataComponent {
    constructor(dailyMotionProvider, route, router, sanitizer) {
        this.dailyMotionProvider = dailyMotionProvider;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.video$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(params => {
            this.videoId = String(params.get('id'));
            return this.dailyMotionProvider.getVideo(this.videoId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(v => {
            const dangerousUrl = 'https://www.dailymotion.com/embed/video/' + v.id;
            this.videoEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
            this.videoUsername = v['owner.username'];
        }));
        this.channelsList$ = this.dailyMotionProvider.popularChannels$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('list'));
        this.channel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.video$, this.channelsList$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([v, cs]) => {
            cs = cs.filter(c => c.id === v.channel);
            return cs[0];
        }));
        this.isFavourite = false;
    }
    ngOnInit() {
    }
    onFavouriteChange(event) {
        console.log('favourite change', event);
    }
    navigateBack() {
        this.router.navigate(['']);
    }
}
VideoDataComponent.ɵfac = function VideoDataComponent_Factory(t) { return new (t || VideoDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_4__["DailyMotionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
VideoDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VideoDataComponent, selectors: [["app-video-data"]], viewQuery: function VideoDataComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_components_favorito_favorito_component__WEBPACK_IMPORTED_MODULE_0__["FavoritoComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.favComponent = _t.first);
    } }, decls: 9, vars: 7, consts: [["id", "back-ctrl", 1, "d-flex"], [1, "btn-back", 3, "click"], [1, "fas", "fa-chevron-left"], [4, "ngIf"], ["id", "tambien-podria-gustarte", 4, "ngIf"], ["id", "video-poster", 1, "d-flex"], [3, "src"], ["id", "video-details", 1, "container-fluid"], [1, "container"], [1, "row"], [1, "col-4", "d-flex", "justify-content-end", "align-items-center"], [1, "col-8"], [1, "row", "mb-4", "mt-1"], [1, "reproducir-btn"], [1, "fas", "fa-play"], [3, "isFavourite", "changed"], [1, "far", "fa-clock"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "badge", "badge-secondary"], ["id", "tambien-podria-gustarte"], [2, "padding-top", "100px"], [3, "channel", 4, "ngIf"], [3, "channel"]], template: function VideoDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoDataComponent_Template_button_click_1_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VideoDataComponent_ng_container_4_Template, 36, 23, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, VideoDataComponent_section_6_Template, 4, 1, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, VideoDataComponent_app_loading_8_Template, 1, 0, "app-loading", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, ctx.video$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, ctx.channel$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.video$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_favorito_favorito_component__WEBPACK_IMPORTED_MODULE_0__["FavoritoComponent"], _components_channels_channel_channel_component__WEBPACK_IMPORTED_MODULE_8__["ChannelComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_10__["DurationPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_11__["TimestampPipe"], _pipes_split_pipe__WEBPACK_IMPORTED_MODULE_12__["SplitPipe"], _pipes_tags_pipe__WEBPACK_IMPORTED_MODULE_13__["TagsPipe"], _pipes_reduce_string_length_pipe__WEBPACK_IMPORTED_MODULE_14__["ReduceStringLengthPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif !important;\n  color: white !important;\n  background-color: #191919 !important;\n}\n.reproducir-btn[_ngcontent-%COMP%] {\n  border: 1px solid #57DFB7;\n  border-radius: 50px;\n  background-color: #57DFB7;\n  font-weight: bolder;\n  transition-duration: 1000ms;\n}\n.reproducir-btn[_ngcontent-%COMP%]:hover {\n  background-color: #40ac8b;\n}\n.btn-back[_ngcontent-%COMP%] {\n  z-index: 1;\n  border: none;\n  border-radius: 20px;\n  padding: 8px 18px 8px 18px;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: white;\n  font-size: medium;\n  font-weight: bold;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\nh1[_ngcontent-%COMP%] {\n  color: #57DFB7;\n}\n.reproducir-btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bolder;\n  padding: 0px 20px 0px 20px;\n}\napp-favorito[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n#video-poster[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  height: 470px;\n  top: 0px;\n  z-index: 0;\n}\n#video-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n#video-details[_ngcontent-%COMP%] {\n  padding-top: 15rem;\n  position: absolute;\n  top: 0px;\n  background: #191919;\n  background: linear-gradient(0deg, #191919 10%, rgba(25, 25, 25, 0) 100%);\n  z-index: 1;\n}\n#back-ctrl[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 2;\n}\n.btn-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  left: 1%;\n  z-index: 3;\n}\n#tambien-podria-gustarte[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 400px;\n  background-color: #191919;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW8tZGF0YS9DOlxcUXZpeFxcZmxvdyBjbG9uXFxmbG93Q2xvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy92aWRlby1kYXRhL3ZpZGVvLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZpZGVvLWRhdGEvQzpcXFF2aXhcXGZsb3cgY2xvblxcZmxvd0Nsb24vc3JjXFxhcHBcXHBhZ2VzXFx2aWRlby1kYXRhXFx2aWRlby1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBYVI7RUFDSSw0Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUNYSjtBRGNBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQWhCWTtFQWlCWixtQkFBQTtFQUNBLDJCQUFBO0FDWEo7QURZSTtFQUNJLHlCQW5CYztBQ1N0QjtBRGNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBekJjO0VBMEJkLFlBNUJjO0VBNkJkLGlCQUFBO0VBQ0EsaUJBQUE7QUNYSjtBRGFJO0VBQ0ksb0NBOUJpQjtBQ21CekI7QUM1QkE7RUFDSSxjQUFBO0FEK0JKO0FDNUJBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUQrQko7QUM1QkE7RUFDSSxlQUFBO0FEK0JKO0FDNUJBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBRCtCSjtBQzlCSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FEZ0NSO0FDNUJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkY3QmU7RUU4QmYsd0VBQUE7RUFDQSxVQUFBO0FEK0JKO0FDNUJBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FEK0JKO0FDNUJBO0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUQ4Qko7QUMzQkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJGcERlO0FDa0ZuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGVvLWRhdGEvdmlkZW8tZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiRmb250LXN0YWNrOiAgICAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcblxyXG4vL2NvbG9yIHBhbGxldGU6XHJcbiRwcmltYXJ5LWNvbG9yOiAjNTdERkI3O1xyXG4kcHJpbWFyeS1jb2xvci1ob3ZlcjogcmdiKDY0LCAxNzIsIDEzOSk7XHJcbiRzZWNvbmRhcnktY29sb3I6IHdoaXRlO1xyXG5cclxuJHRleHQtYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kdGV4dC1iYWNrZ3JvdW5kLWhvdmVyOiAgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtc3RhY2sgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlcHJvZHVjaXItYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWhvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWJhY2sge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMThweCA4cHggMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtYmFja2dyb3VuZC1ob3ZlcjtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXByb2R1Y2lyLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1N0RGQjc7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1N0RGQjc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcbn1cbi5yZXByb2R1Y2lyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGFjOGI7XG59XG5cbi5idG4tYmFjayB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogOHB4IDE4cHggOHB4IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnRuLWJhY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbmgxIHtcbiAgY29sb3I6ICM1N0RGQjc7XG59XG5cbi5yZXByb2R1Y2lyLWJ0biB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbmFwcC1mYXZvcml0byB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuI3ZpZGVvLXBvc3RlciB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgaGVpZ2h0OiA0NzBweDtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDA7XG59XG4jdmlkZW8tcG9zdGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuI3ZpZGVvLWRldGFpbHMge1xuICBwYWRkaW5nLXRvcDogMTVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICMxOTE5MTk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTkxOTE5IDEwJSwgcmdiYSgyNSwgMjUsIDI1LCAwKSAxMDAlKTtcbiAgei1pbmRleDogMTtcbn1cblxuI2JhY2stY3RybCB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5idG4tYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogMSU7XG4gIHotaW5kZXg6IDM7XG59XG5cbiN0YW1iaWVuLXBvZHJpYS1ndXN0YXJ0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG59IiwiQHVzZSAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuaDEge1xyXG4gICAgY29sb3I6ICM1N0RGQjc7XHJcbn1cclxuXHJcbi5yZXByb2R1Y2lyLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbmFwcC1mYXZvcml0byB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbiN2aWRlby1wb3N0ZXIge1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGhlaWdodDogNDcwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICAmIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN2aWRlby1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogc3R5bGVzLiRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjUsMjUsMjUsMSkgMTAlLCByZ2JhKDI1LDI1LDI1LDApIDEwMCUpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuI2JhY2stY3RybCB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYnRuLWJhY2sge1xyXG4gICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogMSU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4jdGFtYmllbi1wb2RyaWEtZ3VzdGFydGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdHlsZXMuJGJhY2tncm91bmQtY29sb3I7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-video-data',
                templateUrl: './video-data.component.html',
                styleUrls: ['./video-data.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_daily_motion_service__WEBPACK_IMPORTED_MODULE_4__["DailyMotionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }]; }, { favComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_components_favorito_favorito_component__WEBPACK_IMPORTED_MODULE_0__["FavoritoComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/duration.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/duration.pipe.ts ***!
  \****************************************/
/*! exports provided: DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DurationPipe {
    transform(value) {
        if (!isNaN(value)) {
            const hours = Math.floor(value / 3600);
            const minutes = Math.floor((value - (hours * 3600)) / 60);
            const seconds = value - (hours * 3600) - (minutes * 60);
            return ('0' + hours).substr(-2) + ':' + ('0' + minutes).substr(-2) + ':' + ('0' + seconds).substr(-2);
        }
        return;
    }
}
DurationPipe.ɵfac = function DurationPipe_Factory(t) { return new (t || DurationPipe)(); };
DurationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "duration", type: DurationPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DurationPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'duration'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/reduce-string-length.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/reduce-string-length.pipe.ts ***!
  \****************************************************/
/*! exports provided: ReduceStringLengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduceStringLengthPipe", function() { return ReduceStringLengthPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReduceStringLengthPipe {
    transform(value, length) {
        let newValue = value;
        if (value.length > length) {
            newValue = value.substr(0, length) + '...';
        }
        return newValue;
    }
}
ReduceStringLengthPipe.ɵfac = function ReduceStringLengthPipe_Factory(t) { return new (t || ReduceStringLengthPipe)(); };
ReduceStringLengthPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "reduceStringLength", type: ReduceStringLengthPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReduceStringLengthPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'reduceStringLength'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/split.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/split.pipe.ts ***!
  \*************************************/
/*! exports provided: SplitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPipe", function() { return SplitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SplitPipe {
    transform(value, replacestr = ' ,') {
        let aux;
        if (typeof (value) === 'string') {
            aux = value.split(' ');
        }
        else {
            aux = value;
        }
        let newString = '';
        aux.forEach(v => newString += v + replacestr);
        return newString.slice(0, -2);
    }
}
SplitPipe.ɵfac = function SplitPipe_Factory(t) { return new (t || SplitPipe)(); };
SplitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "split", type: SplitPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'split'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/tags.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/tags.pipe.ts ***!
  \************************************/
/*! exports provided: TagsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPipe", function() { return TagsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TagsPipe {
    transform(value, quantity = 4) {
        return value.slice(0, quantity);
    }
}
TagsPipe.ɵfac = function TagsPipe_Factory(t) { return new (t || TagsPipe)(); };
TagsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tags", type: TagsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tags'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/timestamp.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/timestamp.pipe.ts ***!
  \*****************************************/
/*! exports provided: TimestampPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampPipe", function() { return TimestampPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TimestampPipe {
    transform(value) {
        return new Date(value);
    }
}
TimestampPipe.ɵfac = function TimestampPipe_Factory(t) { return new (t || TimestampPipe)(); };
TimestampPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timestamp", type: TimestampPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimestampPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'timestamp'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/daily-motion.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/daily-motion.service.ts ***!
  \**************************************************/
/*! exports provided: DailyMotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyMotionService", function() { return DailyMotionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DailyMotionService {
    constructor(http) {
        this.http = http;
        this.endpoint = 'https://api.dailymotion.com';
        this.token = 'ajJFXQwWGUNYVF8PWkZUAVQGTVkFFRoIBlYDB1sIC1AH';
        this.trendingVerifiedVideos$ = this.http.get('https://api.dailymotion.com/videos?sort=trending&flags=verified')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        this.popularChannels$ = this.http.get(this.endpoint + '/channels&sort=popular&limit=6')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        this.liveVideos$ = this.http.get('https://api.dailymotion.com/videos?flags=live').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => console.log('trending live videos', res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getChannelVideos(channelId) {
        return this.http.get(this.endpoint + '/channel/' + channelId + '/videos')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getVideo(videoId) {
        return this.http.get(this.endpoint + '/video/' + videoId + '?fields=thumbnail_360_url%2Cviews_total%2Ctitle%2Cid%2Cdescription%2Cthumbnail_240_url%2Cthumbnail_1080_url%2Cduration%2Ccreated_time%2Cexplicit%2Ctags%2Cowner.username%2Cchannel&localization=es_AR')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
DailyMotionService.ɵfac = function DailyMotionService_Factory(t) { return new (t || DailyMotionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DailyMotionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DailyMotionService, factory: DailyMotionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyMotionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/netflix-carousel.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/netflix-carousel.service.ts ***!
  \******************************************************/
/*! exports provided: NetflixCarouselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetflixCarouselService", function() { return NetflixCarouselService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class NetflixCarouselService {
    constructor() {
        this.swiperTouchSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.swiperTouch$ = this.swiperTouchSource.asObservable();
    }
    onTouchStarted() {
        this.swiperTouchSource.next(true);
    }
}
NetflixCarouselService.ɵfac = function NetflixCarouselService_Factory(t) { return new (t || NetflixCarouselService)(); };
NetflixCarouselService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NetflixCarouselService, factory: NetflixCarouselService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NetflixCarouselService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Qvix\flow clon\flowClon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map