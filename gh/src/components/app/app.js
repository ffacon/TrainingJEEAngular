System.register(["@angular/core", "@angular/platform-browser", "@angular/common", "@angular/router-deprecated", "@angular/http", "../../services/slidesHelper", "../../services/keyupListener", "../../services/constants", "../menu/menu", "@angular/compiler", "@angular/platform-browser-dynamic/src/xhr/xhr_impl", "google-code-prettify/src/prettify.js", "google-code-prettify/src/lang-basic.js", "jquery/dist/jquery.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, common_1, router_deprecated_1, http_1, slidesHelper_1, keyupListener_1, constants_1, menu_1, compiler_1, compiler_2, xhr_impl_1, App, ALL_ROUTER_BINDINGS, IN_BINDINGS, ALL_BINDINGS;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (slidesHelper_1_1) {
                slidesHelper_1 = slidesHelper_1_1;
            },
            function (keyupListener_1_1) {
                keyupListener_1 = keyupListener_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (compiler_1_1) {
                compiler_1 = compiler_1_1;
                compiler_2 = compiler_1_1;
            },
            function (xhr_impl_1_1) {
                xhr_impl_1 = xhr_impl_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            }
        ],
        execute: function () {
            //The app component contains the app version and name
            App = (function () {
                function App() {
                    this.name = 'TrainingAngular2';
                    this.version = '1.0.0';
                }
                return App;
            }());
            App = __decorate([
                core_1.Component({
                    selector: 'app',
                    styleUrls: ['src/components/app/app.css'],
                    templateUrl: 'src/components/app/app.html',
                    directives: [menu_1.Menu, router_deprecated_1.ROUTER_DIRECTIVES]
                }),
                __metadata("design:paramtypes", [])
            ], App);
            exports_1("App", App);
            //Define providers for Router
            ALL_ROUTER_BINDINGS = [
                router_deprecated_1.ROUTER_BINDINGS,
                core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' }),
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ];
            //Define providers coming from the app itself
            IN_BINDINGS = [slidesHelper_1.SlidesHelper, keyupListener_1.KeyupListener,
                core_1.provide(constants_1.HOST_SLIDE_CONTAINER_CLASS, { useValue: 'hostSlideContainer' })
            ];
            //Define all needed providers
            ALL_BINDINGS = [
                ALL_ROUTER_BINDINGS,
                compiler_1.COMPILER_PROVIDERS,
                core_1.provide(compiler_2.XHR, { useClass: xhr_impl_1.XHRImpl }),
                http_1.HTTP_PROVIDERS,
                IN_BINDINGS,
                // This service corresponds to the google prettify app, used to display code
                core_1.provide(constants_1.GPRETTIFYER, { useValue: window.prettyPrint }),
                // We also want a service for jQuery, used in editor/editortab components
                core_1.provide(constants_1.JQUERY, { useValue: window.jQuery })
            ];
            platform_browser_1.bootstrapStatic(App, [menu_1.Menu, ALL_BINDINGS]);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2FwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0NBLHFEQUFxRDtZQUNyRDtnQkFLQztvQkFKQSxTQUFJLEdBQVcsa0JBQWtCLENBQUM7b0JBQ2xDLFlBQU8sR0FBVyxPQUFPLENBQUM7Z0JBR1gsQ0FBQztnQkFDakIsVUFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQ7Z0JBUEMsZ0JBQVMsQ0FBQztvQkFDVixRQUFRLEVBQUUsS0FBSztvQkFDZixTQUFTLEVBQUMsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDeEMsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsVUFBVSxFQUFFLENBQUMsV0FBSSxFQUFFLHFDQUFpQixDQUFDO2lCQUNyQyxDQUFDOzttQkFRRDs2QkFOWSxHQUFHO1lBUWhCLDZCQUE2QjtZQUN2QixtQkFBbUIsR0FBZTtnQkFDdkMsbUNBQWU7Z0JBQ2YsY0FBTyxDQUFDLHNCQUFhLEVBQUUsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLENBQUM7Z0JBQ3RDLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDO2FBQzVELENBQUM7WUFFRiw2Q0FBNkM7WUFDdkMsV0FBVyxHQUFlLENBQUMsMkJBQVksRUFBRSw2QkFBYTtnQkFDM0QsY0FBTyxDQUFDLHNDQUEwQixFQUFFLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLENBQUM7YUFDdkUsQ0FBQztZQUVGLDZCQUE2QjtZQUN2QixZQUFZLEdBQWU7Z0JBQ2hDLG1CQUFtQjtnQkFDbkIsNkJBQWtCO2dCQUNsQixjQUFPLENBQUMsY0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLGtCQUFPLEVBQUUsQ0FBRTtnQkFDcEMscUJBQWM7Z0JBQ2QsV0FBVztnQkFDWCw0RUFBNEU7Z0JBQzVFLGNBQU8sQ0FBQyx1QkFBVyxFQUFFLEVBQUUsUUFBUSxFQUFxQixNQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzFFLHlFQUF5RTtnQkFDekUsY0FBTyxDQUFDLGtCQUFNLEVBQUUsRUFBRSxRQUFRLEVBQVEsTUFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ25ELENBQUM7WUFHRixrQ0FBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQUksRUFBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm92aWRlLCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXBTdGF0aWN9ICAgIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSwgQVBQX0JBU0VfSFJFRn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG5cdFJPVVRFUl9CSU5ESU5HUyxcblx0Uk9VVEVSX0RJUkVDVElWRVMsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnOyBcblxuaW1wb3J0IHtTbGlkZXNIZWxwZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NsaWRlc0hlbHBlcic7XG5pbXBvcnQge0tleXVwTGlzdGVuZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2tleXVwTGlzdGVuZXInO1xuaW1wb3J0IHtcblx0SE9TVF9TTElERV9DT05UQUlORVJfQ0xBU1MsXG5cdEdQUkVUVElGWUVSLFxuXHRQcmV0dHlQcmludCxcblx0SlFVRVJZXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7TWVudX0gZnJvbSAnLi4vbWVudS9tZW51JzsgXG5cbmltcG9ydCB7Q09NUElMRVJfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge1hIUn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtYSFJJbXBsfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvc3JjL3hoci94aHJfaW1wbCc7XG5cbmltcG9ydCBcImdvb2dsZS1jb2RlLXByZXR0aWZ5L3NyYy9wcmV0dGlmeS5qc1wiO1xuaW1wb3J0IFwiZ29vZ2xlLWNvZGUtcHJldHRpZnkvc3JjL2xhbmctYmFzaWMuanNcIjtcbmltcG9ydCBcImpxdWVyeS9kaXN0L2pxdWVyeS5qc1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhcHAnLFxuXHRzdHlsZVVybHM6WydzcmMvY29tcG9uZW50cy9hcHAvYXBwLmNzcyddLFxuXHR0ZW1wbGF0ZVVybDogJ3NyYy9jb21wb25lbnRzL2FwcC9hcHAuaHRtbCcsXG5cdGRpcmVjdGl2ZXM6IFtNZW51LCBST1VURVJfRElSRUNUSVZFU11cbn0pXG4vL1RoZSBhcHAgY29tcG9uZW50IGNvbnRhaW5zIHRoZSBhcHAgdmVyc2lvbiBhbmQgbmFtZVxuZXhwb3J0IGNsYXNzIEFwcCB7XG5cdG5hbWU6IHN0cmluZyA9ICdUcmFpbmluZ0FuZ3VsYXIyJztcblx0dmVyc2lvbjogc3RyaW5nID0gJzEuMC4wJzsgXG5cdG1lbnU6IE1lbnU7XG5cblx0Y29uc3RydWN0b3IoKSB7fVxufVxuXG4vL0RlZmluZSBwcm92aWRlcnMgZm9yIFJvdXRlclxuY29uc3QgQUxMX1JPVVRFUl9CSU5ESU5HUzogQXJyYXk8YW55PiA9IFtcblx0Uk9VVEVSX0JJTkRJTkdTLFxuXHRwcm92aWRlKEFQUF9CQVNFX0hSRUYsIHt1c2VWYWx1ZTonLyd9KSxcblx0cHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7IHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pXG5dO1xuXG4vL0RlZmluZSBwcm92aWRlcnMgY29taW5nIGZyb20gdGhlIGFwcCBpdHNlbGZcbmNvbnN0IElOX0JJTkRJTkdTOiBBcnJheTxhbnk+ID0gW1NsaWRlc0hlbHBlciwgS2V5dXBMaXN0ZW5lcixcblx0cHJvdmlkZShIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTUywgeyB1c2VWYWx1ZTogJ2hvc3RTbGlkZUNvbnRhaW5lcicgfSlcbl07XG5cbi8vRGVmaW5lIGFsbCBuZWVkZWQgcHJvdmlkZXJzXG5jb25zdCBBTExfQklORElOR1M6IEFycmF5PGFueT4gPSBbXG5cdEFMTF9ST1VURVJfQklORElOR1MsXG5cdENPTVBJTEVSX1BST1ZJREVSUyxcblx0cHJvdmlkZShYSFIsIHsgdXNlQ2xhc3M6IFhIUkltcGwgfSApLCAvL21hbmRhdG9yeSBmb3IgdGhpcyB2ZXJzaW9uXG5cdEhUVFBfUFJPVklERVJTLCBcblx0SU5fQklORElOR1MsXG5cdC8vIFRoaXMgc2VydmljZSBjb3JyZXNwb25kcyB0byB0aGUgZ29vZ2xlIHByZXR0aWZ5IGFwcCwgdXNlZCB0byBkaXNwbGF5IGNvZGVcblx0cHJvdmlkZShHUFJFVFRJRllFUiwgeyB1c2VWYWx1ZTogPFByZXR0eVByaW50Pig8YW55PndpbmRvdykucHJldHR5UHJpbnQgfSksXG5cdC8vIFdlIGFsc28gd2FudCBhIHNlcnZpY2UgZm9yIGpRdWVyeSwgdXNlZCBpbiBlZGl0b3IvZWRpdG9ydGFiIGNvbXBvbmVudHNcblx0cHJvdmlkZShKUVVFUlksIHsgdXNlVmFsdWU6ICg8YW55PndpbmRvdykualF1ZXJ5IH0pXG5dO1xuXG5cbmJvb3RzdHJhcFN0YXRpYyhBcHAsIFtNZW51LCAgQUxMX0JJTkRJTkdTXSk7Il19
