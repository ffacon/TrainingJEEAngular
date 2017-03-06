System.register(["@angular/core", "rxjs/Observable", "rxjs/operator/zip", "rxjs/add/observable/range", "rxjs/add/observable/from", "rxjs/add/operator/mergeMap", "rxjs/add/operator/toArray", "rxjs/add/operator/concat", "@angular/router-deprecated", "@angular/http"], function (exports_1, context_1) {
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
    var core_1, Observable_1, zip_1, router_deprecated_1, http_1, SlidesHelper;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (zip_1_1) {
                zip_1 = zip_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (_4) {
            },
            function (_5) {
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            // This service is used in the application for all navigation
            // purpose (router service should not be used outside of this service)
            // More specifically, the service does the following:
            // -> configure the routes based on the data/slides.json file (have a look a configureSlide method)
            // -> Get the route definitions if needed (observe the slidesObservable stream to do so)
            // -> Observe that a slide has been accessed successfully (observe the slideChangedObservable stream to do so)
            // -> Navigate to a given slide (use the goto method to do so)
            // -> Navigate to the preivous or next slide (use the previousSlide and nextSlide methods to do so)
            SlidesHelper = (function () {
                function SlidesHelper(http, router) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.routesConfig = new Array();
                    // Subscribe to this in order to be notified when the routes are configured and eventually
                    // to retrieve the routes definition
                    this.slidesObservable = new core_1.EventEmitter();
                    this.configureSlides = function () {
                        //routeDefsObs is a stream containing the array of route definitions
                        // ie: Observable< Array<RouteDefinition> >
                        var routeDefsObs = _this.http.get('data/slides.json')
                            .flatMap(function (response) {
                            var data = response.json();
                            var slidesDefs = data.slides;
                            return zip_1.zipStatic(
                            // Create a stream from integer: (0, 1, ..., slidesDefs.length )
                            Observable_1.Observable.range(0, slidesDefs.length), 
                            // Create a stream from the array of slides ( {slide1 data}, {slide2 data}, ... )
                            Observable_1.Observable.from(slidesDefs), 
                            // Call this call back by associating data from the first and second streams to generate our new observable:
                            // ( callback(0, {slide1 data}), callback(1, {slide1 data}), ...)
                            function (index, slideDef) {
                                var conventions = _this.getConventionInfos(index, slideDef);
                                var res = new router_deprecated_1.AsyncRoute({
                                    path: conventions.path,
                                    loader: function () {
                                        return new Promise(function (resolve, reject) {
                                            System.import(data.mainPath + slideDef.path).then(function (imported) {
                                                resolve(imported[conventions.moduleName]);
                                            });
                                        });
                                    },
                                    name: conventions.name,
                                    useAsDefault: index === 0
                                });
                                res.slidePath = slideDef.path;
                                return res;
                            });
                        })
                            .toArray();
                        // The route definitions array is passed to the slidesObservable stream
                        // So the slidesObservable stream will just contains the array of route
                        // definitions and notify every observer which subscribed to id
                        routeDefsObs.subscribe(_this.slidesObservable);
                    };
                    this.getModuleNameFromSlidePath = function (slidePath) {
                        var lastIndex = slidePath.lastIndexOf('/');
                        return slidePath.substring(lastIndex + 1, lastIndex + 2).toUpperCase() + slidePath.substring(lastIndex + 2);
                    };
                    // Get RouteDefinitions values based on slides.json data with help of some conventions
                    this.getConventionInfos = function (i, slideDef) {
                        return {
                            moduleName: slideDef ? _this.getModuleNameFromSlidePath(slideDef.path) : undefined,
                            name: 'Slide' + (i + 1),
                            path: '/slide' + (i + 1)
                        };
                    };
                    // Use the router service to go to a specific slide based on its index
                    this.goto = function (routeIdx) {
                        var componentName = _this.routesConfig[routeIdx].name;
                        _this.router.navigate(['./' + componentName, {}]);
                    };
                    // Go to the previous slide
                    this.previousSlide = function () {
                        var isMin = (_this.currentSlideIndex === 0);
                        !isMin && _this.goto(_this.currentSlideIndex - 1);
                    };
                    // Go to the next slide
                    this.nextSlide = function () {
                        var isMax = (_this.currentSlideIndex === _this.routesConfig.length - 2);
                        !isMax && _this.goto(_this.currentSlideIndex + 1);
                    };
                    this.slideChangedObservable = new core_1.EventEmitter();
                    // Listen for route changes in oder 
                    // -> set the current index (slide1 means index = 0, etc )
                    // -> to emit an event on the slideChangedObservable stream
                    router.subscribe(function (routePath) {
                        // console.log('new route: ' + routePath);
                        var regex = new RegExp('slide[\\d]+');
                        if (!regex.test(routePath)) {
                            return;
                        }
                        _this.currentSlideIndex = parseInt(routePath.split(new RegExp('slide'))[1]) - 1;
                        _this.slideChangedObservable.next(_this.currentSlideIndex);
                    });
                    // Call the configureSlides method in order to aliment the slidesObservable stream
                    this.configureSlides();
                    // Subscribe the slidesObservable stream in order to configure the router
                    // with the route definitions
                    this.slidesObservable.subscribe(function (routesConfig) {
                        router.config(routesConfig);
                        _this.routesConfig = routesConfig;
                    });
                }
                return SlidesHelper;
            }());
            SlidesHelper = __decorate([
                core_1.Component({
                    providers: [http_1.HTTP_PROVIDERS]
                }),
                __metadata("design:paramtypes", [http_1.Http, router_deprecated_1.Router])
            ], SlidesHelper);
            exports_1("SlidesHelper", SlidesHelper);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9zbGlkZXNIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNEJBLDZEQUE2RDtZQUM3RCxzRUFBc0U7WUFDdEUscURBQXFEO1lBQ3JELG1HQUFtRztZQUNuRyx3RkFBd0Y7WUFDeEYsOEdBQThHO1lBQzlHLDhEQUE4RDtZQUM5RCxtR0FBbUc7WUFDbkc7Z0JBVUMsc0JBQW1CLElBQVUsRUFBUyxNQUFjO29CQUFwRCxpQkF3QkM7b0JBeEJrQixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBUnBELGlCQUFZLEdBQTJCLElBQUksS0FBSyxFQUFtQixDQUFDO29CQUlwRSwwRkFBMEY7b0JBQzFGLG9DQUFvQztvQkFDcEMscUJBQWdCLEdBQXlDLElBQUksbUJBQVksRUFBMEIsQ0FBQztvQkE2QnBHLG9CQUFlLEdBQUU7d0JBRWhCLG9FQUFvRTt3QkFDcEUsMkNBQTJDO3dCQUMzQyxJQUFJLFlBQVksR0FBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQzs2QkFDakQsT0FBTyxDQUFDLFVBQUMsUUFBa0I7NEJBRTNCLElBQUksSUFBSSxHQUFlLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDdkMsSUFBSSxVQUFVLEdBQW9CLElBQUksQ0FBQyxNQUFNLENBQUM7NEJBRzlDLE1BQU0sQ0FBQyxlQUFTOzRCQUNmLGdFQUFnRTs0QkFDaEUsdUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUM7NEJBQ3RDLGlGQUFpRjs0QkFDakYsdUJBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOzRCQUMzQiw0R0FBNEc7NEJBQzVHLGlFQUFpRTs0QkFDakUsVUFBQyxLQUFhLEVBQUUsUUFBa0I7Z0NBQ2pDLElBQUksV0FBVyxHQUFxQixLQUFJLENBQUMs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QWlCLDBCQUFNOzRCQWlIcEQ7c0NBM0hZLFlBQVk7UUEySHhCLENBQUMiLCJmaWxlIjoic3JjL3NlcnZpY2VzL3NsaWRlc0hlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHt6aXBBbGx9IGZyb20gJ3J4anMvb3BlcmF0b3IvemlwQWxsJztcbmltcG9ydCB7emlwU3RhdGljfSBmcm9tICdyeGpzL29wZXJhdG9yL3ppcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvcmFuZ2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvQXJyYXknO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jb25jYXQnO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlLCBSb3V0ZURlZmluaXRpb24sIEFzeW5jUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEh0dHAsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHtBcHB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXBwL2FwcCc7XG5cbmludGVyZmFjZSBTbGlkZURlZntwYXRoOiBzdHJpbmc7fVxuXG5pbnRlcmZhY2UgU2xpZGVzRGVmcyB7XG5cdG1haW5QYXRoOiBzdHJpbmc7XG5cdHNsaWRlczogQXJyYXk8U2xpZGVEZWY+O1xufVxuXG5pbnRlcmZhY2UgQ29udmVudGlvblZhbHVlcyB7XG5cdG5hbWU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBtb2R1bGVOYW1lPzogc3RyaW5nXG59XG5cbkBDb21wb25lbnQoe1xuXHRwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSU11cbn0pXG4vLyBUaGlzIHNlcnZpY2UgaXMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24gZm9yIGFsbCBuYXZpZ2F0aW9uXG4vLyBwdXJwb3NlIChyb3V0ZXIgc2VydmljZSBzaG91bGQgbm90IGJlIHVzZWQgb3V0c2lkZSBvZiB0aGlzIHNlcnZpY2UpXG4vLyBNb3JlIHNwZWNpZmljYWxseSwgdGhlIHNlcnZpY2UgZG9lcyB0aGUgZm9sbG93aW5nOlxuLy8gLT4gY29uZmlndXJlIHRoZSByb3V0ZXMgYmFzZWQgb24gdGhlIGRhdGEvc2xpZGVzLmpzb24gZmlsZSAoaGF2ZSBhIGxvb2sgYSBjb25maWd1cmVTbGlkZSBtZXRob2QpXG4vLyAtPiBHZXQgdGhlIHJvdXRlIGRlZmluaXRpb25zIGlmIG5lZWRlZCAob2JzZXJ2ZSB0aGUgc2xpZGVzT2JzZXJ2YWJsZSBzdHJlYW0gdG8gZG8gc28pXG4vLyAtPiBPYnNlcnZlIHRoYXQgYSBzbGlkZSBoYXMgYmVlbiBhY2Nlc3NlZCBzdWNjZXNzZnVsbHkgKG9ic2VydmUgdGhlIHNsaWRlQ2hhbmdlZE9ic2VydmFibGUgc3RyZWFtIHRvIGRvIHNvKVxuLy8gLT4gTmF2aWdhdGUgdG8gYSBnaXZlbiBzbGlkZSAodXNlIHRoZSBnb3RvIG1ldGhvZCB0byBkbyBzbylcbi8vIC0+IE5hdmlnYXRlIHRvIHRoZSBwcmVpdm91cyBvciBuZXh0IHNsaWRlICh1c2UgdGhlIHByZXZpb3VzU2xpZGUgYW5kIG5leHRTbGlkZSBtZXRob2RzIHRvIGRvIHNvKVxuZXhwb3J0IGNsYXNzIFNsaWRlc0hlbHBlcntcblx0Y3VycmVudFNsaWRlSW5kZXg6IG51bWJlcjtcblx0cm91dGVzQ29uZmlnOiBBcnJheTxSb3V0ZURlZmluaXRpb24+ID0gbmV3IEFycmF5PFJvdXRlRGVmaW5pdGlvbj4oKTtcblxuXHQvL1N1YnNjcmliZSB0byB0aGlzIGluIG9yZGVyIHRvIG9ic2VydmUgdGhhdCBhIHNsaWRlIGhhcyBiZWVuIGFjY2Vzc2VkIHN1Y2Nlc3NmdWxseVxuXHRzbGlkZUNoYW5nZWRPYnNlcnZhYmxlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcblx0Ly8gU3Vic2NyaWJlIHRvIHRoaXMgaW4gb3JkZXIgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgcm91dGVzIGFyZSBjb25maWd1cmVkIGFuZCBldmVudHVhbGx5XG5cdC8vIHRvIHJldHJpZXZlIHRoZSByb3V0ZXMgZGVmaW5pdGlvblxuXHRzbGlkZXNPYnNlcnZhYmxlOiBFdmVudEVtaXR0ZXI8QXJyYXk8Um91dGVEZWZpbml0aW9uPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PFJvdXRlRGVmaW5pdGlvbj4+KCk7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcil7XG5cblx0XHR0aGlzLnNsaWRlQ2hhbmdlZE9ic2VydmFibGUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRcdC8vIExpc3RlbiBmb3Igcm91dGUgY2hhbmdlcyBpbiBvZGVyIFxuXHRcdC8vIC0+IHNldCB0aGUgY3VycmVudCBpbmRleCAoc2xpZGUxIG1lYW5zIGluZGV4ID0gMCwgZXRjIClcblx0XHQvLyAtPiB0byBlbWl0IGFuIGV2ZW50IG9uIHRoZSBzbGlkZUNoYW5nZWRPYnNlcnZhYmxlIHN0cmVhbVxuXHRcdHJvdXRlci5zdWJzY3JpYmUoKHJvdXRlUGF0aDogYW55KSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnbmV3IHJvdXRlOiAnICsgcm91dGVQYXRoKTtcblx0XHRcdHZhciByZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cCgnc2xpZGVbXFxcXGRdKycpO1xuXHRcdFx0aWYgKCFyZWdleC50ZXN0KHJvdXRlUGF0aCkpIHsgcmV0dXJuOyB9XG5cdFx0XHR0aGlzLmN1cnJlbnRTbGlkZUluZGV4ID0gcGFyc2VJbnQocm91dGVQYXRoLnNwbGl0KG5ldyBSZWdFeHAoJ3NsaWRlJykpWzFdKSAtIDE7XG5cdFx0XHR0aGlzLnNsaWRlQ2hhbmdlZE9ic2VydmFibGUubmV4dCh0aGlzLmN1cnJlbnRTbGlkZUluZGV4KTtcblx0XHR9KTtcblxuXHRcdC8vIENhbGwgdGhlIGNvbmZpZ3VyZVNsaWRlcyBtZXRob2QgaW4gb3JkZXIgdG8gYWxpbWVudCB0aGUgc2xpZGVzT2JzZXJ2YWJsZSBzdHJlYW1cblx0XHR0aGlzLmNvbmZpZ3VyZVNsaWRlcygpO1xuXHRcdC8vIFN1YnNjcmliZSB0aGUgc2xpZGVzT2JzZXJ2YWJsZSBzdHJlYW0gaW4gb3JkZXIgdG8gY29uZmlndXJlIHRoZSByb3V0ZXJcblx0XHQvLyB3aXRoIHRoZSByb3V0ZSBkZWZpbml0aW9uc1xuXHRcdHRoaXMuc2xpZGVzT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHJvdXRlc0NvbmZpZzogQXJyYXk8Um91dGVEZWZpbml0aW9uPik6IHZvaWQgPT4ge1xuXHRcdFx0cm91dGVyLmNvbmZpZyhyb3V0ZXNDb25maWcpO1xuXHRcdFx0dGhpcy5yb3V0ZXNDb25maWcgPSByb3V0ZXNDb25maWc7XG5cdFx0fSk7XG5cblx0fVxuXG5cblx0Y29uZmlndXJlU2xpZGVzPSAoKTogdm9pZCA9PiB7XG5cblx0XHQvL3JvdXRlRGVmc09icyBpcyBhIHN0cmVhbSBjb250YWluaW5nIHRoZSBhcnJheSBvZiByb3V0ZSBkZWZpbml0aW9uc1xuXHRcdC8vIGllOiBPYnNlcnZhYmxlPCBBcnJheTxSb3V0ZURlZmluaXRpb24+ID5cblx0XHR2YXIgcm91dGVEZWZzT2JzPSB0aGlzLmh0dHAuZ2V0KCdkYXRhL3NsaWRlcy5qc29uJylcblx0XHRcdC5mbGF0TWFwKChyZXNwb25zZTogUmVzcG9uc2UpOiBPYnNlcnZhYmxlPFJvdXRlRGVmaW5pdGlvbj4gPT4ge1xuXG5cdFx0XHRcdHZhciBkYXRhID0gPFNsaWRlc0RlZnM+cmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHR2YXIgc2xpZGVzRGVmczogQXJyYXk8U2xpZGVEZWY+ID0gZGF0YS5zbGlkZXM7XG5cblxuXHRcdFx0XHRyZXR1cm4gemlwU3RhdGljKFxuXHRcdFx0XHRcdC8vIENyZWF0ZSBhIHN0cmVhbSBmcm9tIGludGVnZXI6ICgwLCAxLCAuLi4sIHNsaWRlc0RlZnMubGVuZ3RoIClcblx0XHRcdFx0XHRPYnNlcnZhYmxlLnJhbmdlKDAsIHNsaWRlc0RlZnMubGVuZ3RoKSxcblx0XHRcdFx0XHQvLyBDcmVhdGUgYSBzdHJlYW0gZnJvbSB0aGUgYXJyYXkgb2Ygc2xpZGVzICgge3NsaWRlMSBkYXRhfSwge3NsaWRlMiBkYXRhfSwgLi4uIClcblx0XHRcdFx0XHRPYnNlcnZhYmxlLmZyb20oc2xpZGVzRGVmcyksXG5cdFx0XHRcdFx0Ly8gQ2FsbCB0aGlzIGNhbGwgYmFjayBieSBhc3NvY2lhdGluZyBkYXRhIGZyb20gdGhlIGZpcnN0IGFuZCBzZWNvbmQgc3RyZWFtcyB0byBnZW5lcmF0ZSBvdXIgbmV3IG9ic2VydmFibGU6XG5cdFx0XHRcdFx0Ly8gKCBjYWxsYmFjaygwLCB7c2xpZGUxIGRhdGF9KSwgY2FsbGJhY2soMSwge3NsaWRlMSBkYXRhfSksIC4uLilcblx0XHRcdFx0XHQoaW5kZXg6IG51bWJlciwgc2xpZGVEZWY6IFNsaWRlRGVmKTogUm91dGVEZWZpbml0aW9uID0+IHtcblx0XHRcdFx0XHRcdHZhciBjb252ZW50aW9uczogQ29udmVudGlvblZhbHVlcyA9IHRoaXMuZ2V0Q29udmVudGlvbkluZm9zKGluZGV4LCBzbGlkZURlZik7XG5cdFx0XHRcdFx0XHR2YXIgcmVzOiBBc3luY1JvdXRlID0gbmV3IEFzeW5jUm91dGUoe1xuXHRcdFx0XHRcdFx0XHRwYXRoOiBjb252ZW50aW9ucy5wYXRoLFxuXHRcdFx0XHRcdFx0XHRsb2FkZXI6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0U3lzdGVtLmltcG9ydChkYXRhLm1haW5QYXRoICsgc2xpZGVEZWYucGF0aCkudGhlbigoaW1wb3J0ZWQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKGltcG9ydGVkW2NvbnZlbnRpb25zLm1vZHVsZU5hbWVdKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRuYW1lOiBjb252ZW50aW9ucy5uYW1lLFxuXHRcdFx0XHRcdFx0XHR1c2VBc0RlZmF1bHQ6IGluZGV4ID09PSAwXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0KDxhbnk+cmVzKS5zbGlkZVBhdGggPSBzbGlkZURlZi5wYXRoO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0pXG5cdFx0XHQvLyBWYWx1ZSByZXR1cm5zIGJ5IGZsYXRNYXAgaXMgYW4gb2JzZXJ2YWJsZSBvZiBSb3V0ZURlZmluaXRpb25cblx0XHRcdC8vIC0+ICggUm91dGVEZWYgMSwgUm91dGVEZWYyLCAuLi4gKVxuXHRcdFx0Ly8gQW5kIHdlIHdhbnQgYW4gb2JzZXJ2YWJsZSBvZiBhcnJheSBvZiBSb3V0ZURlZmluaXRpb24uLi5cblx0XHRcdC8vICggW1JvdXRlRGVmMSwgUm91dGVEZWYyLCAuLi5dIClcblx0XHRcdC50b0FycmF5KCk7XG4gICAgICAgICAgICBcblx0XHQvLyBUaGUgcm91dGUgZGVmaW5pdGlvbnMgYXJyYXkgaXMgcGFzc2VkIHRvIHRoZSBzbGlkZXNPYnNlcnZhYmxlIHN0cmVhbVxuXHRcdC8vIFNvIHRoZSBzbGlkZXNPYnNlcnZhYmxlIHN0cmVhbSB3aWxsIGp1c3QgY29udGFpbnMgdGhlIGFycmF5IG9mIHJvdXRlXG5cdFx0Ly8gZGVmaW5pdGlvbnMgYW5kIG5vdGlmeSBldmVyeSBvYnNlcnZlciB3aGljaCBzdWJzY3JpYmVkIHRvIGlkXG5cdFx0cm91dGVEZWZzT2JzLnN1YnNjcmliZSh0aGlzLnNsaWRlc09ic2VydmFibGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRNb2R1bGVOYW1lRnJvbVNsaWRlUGF0aD0gKHNsaWRlUGF0aDogc3RyaW5nKSA6IHN0cmluZyA9PiB7XG5cdFx0dmFyIGxhc3RJbmRleDogbnVtYmVyID0gc2xpZGVQYXRoLmxhc3RJbmRleE9mKCcvJyk7XG5cdFx0cmV0dXJuIHNsaWRlUGF0aC5zdWJzdHJpbmcobGFzdEluZGV4ICsgMSwgbGFzdEluZGV4ICsgMikudG9VcHBlckNhc2UoKSArIHNsaWRlUGF0aC5zdWJzdHJpbmcobGFzdEluZGV4ICsgMik7XHRcdFxuXG5cdH1cblxuXHQvLyBHZXQgUm91dGVEZWZpbml0aW9ucyB2YWx1ZXMgYmFzZWQgb24gc2xpZGVzLmpzb24gZGF0YSB3aXRoIGhlbHAgb2Ygc29tZSBjb252ZW50aW9uc1xuXHRwcml2YXRlIGdldENvbnZlbnRpb25JbmZvcz0gKGk6IG51bWJlciwgc2xpZGVEZWY/OiBTbGlkZURlZik6IENvbnZlbnRpb25WYWx1ZXMgPT4ge1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG1vZHVsZU5hbWU6IHNsaWRlRGVmPyB0aGlzLmdldE1vZHVsZU5hbWVGcm9tU2xpZGVQYXRoKHNsaWRlRGVmLnBhdGgpIDogdW5kZWZpbmVkLFxuXHRcdFx0bmFtZTogJ1NsaWRlJyArIChpICsgMSksXG5cdFx0XHRwYXRoOiAnL3NsaWRlJyArIChpICsgMSlcblx0XHR9O1xuXHR9XG5cblx0Ly8gVXNlIHRoZSByb3V0ZXIgc2VydmljZSB0byBnbyB0byBhIHNwZWNpZmljIHNsaWRlIGJhc2VkIG9uIGl0cyBpbmRleFxuXHRnb3RvPSAocm91dGVJZHg6IG51bWJlcik6dm9pZCA9PiB7XG5cdFx0dmFyIGNvbXBvbmVudE5hbWUgPSB0aGlzLnJvdXRlc0NvbmZpZ1tyb3V0ZUlkeF0ubmFtZTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vJyArIGNvbXBvbmVudE5hbWUsIHt9XSlcblx0fVxuXG5cdC8vIEdvIHRvIHRoZSBwcmV2aW91cyBzbGlkZVxuXHRwcmV2aW91c1NsaWRlPSAoKTogdm9pZCA9PiB7XG5cdFx0dmFyIGlzTWluOiBib29sZWFuID0gKHRoaXMuY3VycmVudFNsaWRlSW5kZXggPT09IDApO1xuXHRcdCFpc01pbiAmJiB0aGlzLmdvdG8odGhpcy5jdXJyZW50U2xpZGVJbmRleCAtIDEpO1xuXHR9XG5cblx0Ly8gR28gdG8gdGhlIG5leHQgc2xpZGVcblx0bmV4dFNsaWRlPSAoKTp2b2lkID0+IHtcblx0XHR2YXIgaXNNYXg6IGJvb2xlYW4gPSAodGhpcy5jdXJyZW50U2xpZGVJbmRleCA9PT0gdGhpcy5yb3V0ZXNDb25maWcubGVuZ3RoIC0gMik7XG5cdFx0IWlzTWF4ICYmIHRoaXMuZ290byh0aGlzLmN1cnJlbnRTbGlkZUluZGV4ICsgMSk7XG5cdH1cblxuXG59Il19
