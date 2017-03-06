System.register(["@angular/core", "@angular/common", "../../services/slidesDefs", "../../services/slidesHelper", "../slideLink/slideLink", "../slideMove/slideMoveLeft", "../slideMove/slideMoveRight"], function (exports_1, context_1) {
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
    var core_1, common_1, slidesDefs_1, slidesHelper_1, slideLink_1, slideMoveLeft_1, slideMoveRight_1, Menu;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (slidesDefs_1_1) {
                slidesDefs_1 = slidesDefs_1_1;
            },
            function (slidesHelper_1_1) {
                slidesHelper_1 = slidesHelper_1_1;
            },
            function (slideLink_1_1) {
                slideLink_1 = slideLink_1_1;
            },
            function (slideMoveLeft_1_1) {
                slideMoveLeft_1 = slideMoveLeft_1_1;
            },
            function (slideMoveRight_1_1) {
                slideMoveRight_1 = slideMoveRight_1_1;
            }
        ],
        execute: function () {
            // The menu allows both to  display a progress bar depending on the current slide
            // and allows to navigate to a slide by clicking on the progress bar
            Menu = (function () {
                function Menu(slidesHelper) {
                    var _this = this;
                    // The current slide index (so it's easy to set previous slide links
                    // in red and next slide links in red in the progress bar)
                    this.slidesIndex = 0;
                    //Navigate to the given slide based on its index, provided by the link
                    // which has been clicked
                    this.goto = function (routeIndex) {
                        _this.slidesHelper.goto(routeIndex);
                        return false;
                    };
                    // Use the progress-done class on links untill current index, and progress-todo for
                    // links after current index
                    this.getProgressClass = function (nextIndex) {
                        return (nextIndex <= _this.slidesIndex ? "progress-done" : "progress-todo");
                    };
                    this.slidesHelper = slidesHelper;
                    this.links = new Array();
                    // Listen for route definitions and create links based on route definitions
                    this.slidesHelper.slidesObservable.subscribe(function (routesDefs) {
                        routesDefs.slice(0, routesDefs.length - 1)
                            .forEach(function (routeDef, index) {
                            _this.links.push(slidesDefs_1.SlideLinkModel.fromRouteAndIndex(routeDef, index));
                        });
                    });
                    // Listen for route changes and then update the index (so the green part / red part is updated)
                    this.slidesHelper.slideChangedObservable.subscribe(function (idx) {
                        _this.slidesIndex = idx;
                    });
                }
                return Menu;
            }());
            Menu = __decorate([
                core_1.Component({
                    selector: 'menu',
                    styleUrls: ['src/components/menu/menu.css'],
                    templateUrl: 'src/components/menu/menu.html',
                    directives: [common_1.NgFor, slideLink_1.SlideLink, slideMoveLeft_1.SlideMoveLeft, slideMoveRight_1.SlideMoveRight]
                }),
                __metadata("design:paramtypes", [slidesHelper_1.SlidesHelper])
            ], Menu);
            exports_1("Menu", Menu);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21lbnUvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQSxpRkFBaUY7WUFDakYsb0VBQW9FO1lBQ3BFO2dCQVVDLGNBQVksWUFBMEI7b0JBQXRDLGlCQWlCQztvQkFyQkQsb0VBQW9FO29CQUNwRSwwREFBMEQ7b0JBQzFELGdCQUFXLEdBQVcsQ0FBQyxDQUFDO29CQXFCeEIsc0VBQXNFO29CQUN0RSx5QkFBeUI7b0JBQ3pCLFNBQUksR0FBRSxVQUFDLFVBQWtCO3dCQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDZCxDQUFDLENBQUE7b0JBRUQsbUZBQW1GO29CQUNuRiw0QkFBNEI7b0JBQzVCLHFCQUFnQixHQUFFLFVBQUMsU0FBaUI7d0JBQ25DLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxLQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsR0FBRyxlQUFlLENBQUMsQ0FBQztvQkFDNUUsQ0FBQyxDQUFBO29CQTVCQSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztvQkFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBcUIsQ0FBQztvQkFFNUMsMkVBQTJFO29CQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBRSxVQUFDLFVBQWtDO3dCQUNoRixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQzs2QkFDeEMsT0FBTyxDQUFDLFVBQUMsUUFBeUIsRUFBRSxLQUFhOzRCQUNqRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywyQkFBYyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNwRSxDQUFDLENBQUMsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztvQkFFSCwrRkFBK0Y7b0JBQy9GLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFFLFVBQUMsR0FBVTt3QkFDOUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ3hCLENBQUMsQ0FBRSxDQUFDO2dCQUNMLENBQUM7Z0JBZ0JGLFdBQUM7WUFBRCxDQTNDQSxBQTJDQyxJQUFBO1lBM0NEO2dCQVJDLGdCQUFTLENBQUM7b0JBQ1YsUUFBUSxFQUFDLE1BQU07b0JBQ2YsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7b0JBQzNDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFVBQVUsRUFBRSxDQUFDLGNBQUssRUFBRSxxQkFBUyxFQUFFLDZCQUFhLEVBQUUsK0JBQWMsQ0FBQztpQkFDN0QsQ0FBQztpREFheUIsMkJBQVk7b0JBaUN0Qzs4QkEzQ1ksSUFBSTtRQTJDZixDQUFDIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcdFxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuLy8gaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcdFxuaW1wb3J0IHtSb3V0ZXJMaW5rLCBSb3V0ZURlZmluaXRpb259IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7U2xpZGVMaW5rTW9kZWxJdGYsIFNsaWRlTGlua01vZGVsfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zbGlkZXNEZWZzJztcbmltcG9ydCB7IFNsaWRlc0hlbHBlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NsaWRlc0hlbHBlcic7XG5pbXBvcnQgeyBTbGlkZUxpbmsgfSBmcm9tICcuLi9zbGlkZUxpbmsvc2xpZGVMaW5rJztcbmltcG9ydCB7U2xpZGVNb3ZlTGVmdH0gZnJvbSAnLi4vc2xpZGVNb3ZlL3NsaWRlTW92ZUxlZnQnO1xuaW1wb3J0IHtTbGlkZU1vdmVSaWdodH0gZnJvbSAnLi4vc2xpZGVNb3ZlL3NsaWRlTW92ZVJpZ2h0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOidtZW51Jyxcblx0c3R5bGVVcmxzOiBbJ3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jc3MnXSxcblx0dGVtcGxhdGVVcmw6ICdzcmMvY29tcG9uZW50cy9tZW51L21lbnUuaHRtbCcsIFxuXHRkaXJlY3RpdmVzOiBbTmdGb3IsIFNsaWRlTGluaywgU2xpZGVNb3ZlTGVmdCwgU2xpZGVNb3ZlUmlnaHRdIFxufSlcbi8vIFRoZSBtZW51IGFsbG93cyBib3RoIHRvICBkaXNwbGF5IGEgcHJvZ3Jlc3MgYmFyIGRlcGVuZGluZyBvbiB0aGUgY3VycmVudCBzbGlkZVxuLy8gYW5kIGFsbG93cyB0byBuYXZpZ2F0ZSB0byBhIHNsaWRlIGJ5IGNsaWNraW5nIG9uIHRoZSBwcm9ncmVzcyBiYXJcbmV4cG9ydCBjbGFzcyBNZW51e1xuXHQvL1RoZSBwcm9ncmVzcyBiYXIgaXMgZG9uZSBvZiBsaW5rc1xuXHRsaW5rczogQXJyYXk8U2xpZGVMaW5rTW9kZWxJdGY+O1xuXHQvL1RoZSBzbGlkZUhlbHBlciBzZXJ2aWNlLCB0byBsaXN0ZW4gZm9yIHJvdXRlIGNoYW5nZXNcblx0Ly8gYW5kIHRvIG5hdmlnYXRlIHRvIGEgZ2l2ZW4gc2xpZGVcblx0c2xpZGVzSGVscGVyOiBTbGlkZXNIZWxwZXI7XG5cdC8vIFRoZSBjdXJyZW50IHNsaWRlIGluZGV4IChzbyBpdCdzIGVhc3kgdG8gc2V0IHByZXZpb3VzIHNsaWRlIGxpbmtzXG5cdC8vIGluIHJlZCBhbmQgbmV4dCBzbGlkZSBsaW5rcyBpbiByZWQgaW4gdGhlIHByb2dyZXNzIGJhcilcblx0c2xpZGVzSW5kZXg6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3Ioc2xpZGVzSGVscGVyOiBTbGlkZXNIZWxwZXIpIHtcdFxuXG5cdFx0dGhpcy5zbGlkZXNIZWxwZXIgPSBzbGlkZXNIZWxwZXI7XG5cdFx0dGhpcy5saW5rcyA9IG5ldyBBcnJheTxTbGlkZUxpbmtNb2RlbEl0Zj4oKTtcblxuXHRcdC8vIExpc3RlbiBmb3Igcm91dGUgZGVmaW5pdGlvbnMgYW5kIGNyZWF0ZSBsaW5rcyBiYXNlZCBvbiByb3V0ZSBkZWZpbml0aW9uc1xuXHRcdHRoaXMuc2xpZGVzSGVscGVyLnNsaWRlc09ic2VydmFibGUuc3Vic2NyaWJlKCAocm91dGVzRGVmczogQXJyYXk8Um91dGVEZWZpbml0aW9uPik6IHZvaWQgPT4ge1xuXHRcdFx0cm91dGVzRGVmcy5zbGljZSgwLCByb3V0ZXNEZWZzLmxlbmd0aCAtMSlcblx0XHRcdC5mb3JFYWNoKChyb3V0ZURlZjogUm91dGVEZWZpbml0aW9uLCBpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdFx0XHRcdHRoaXMubGlua3MucHVzaChTbGlkZUxpbmtNb2RlbC5mcm9tUm91dGVBbmRJbmRleChyb3V0ZURlZiwgaW5kZXgpKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gTGlzdGVuIGZvciByb3V0ZSBjaGFuZ2VzIGFuZCB0aGVuIHVwZGF0ZSB0aGUgaW5kZXggKHNvIHRoZSBncmVlbiBwYXJ0IC8gcmVkIHBhcnQgaXMgdXBkYXRlZClcblx0XHR0aGlzLnNsaWRlc0hlbHBlci5zbGlkZUNoYW5nZWRPYnNlcnZhYmxlLnN1YnNjcmliZSggKGlkeDpudW1iZXIpIDogdm9pZD0+IHtcblx0XHRcdHRoaXMuc2xpZGVzSW5kZXggPSBpZHg7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly9OYXZpZ2F0ZSB0byB0aGUgZ2l2ZW4gc2xpZGUgYmFzZWQgb24gaXRzIGluZGV4LCBwcm92aWRlZCBieSB0aGUgbGlua1xuXHQvLyB3aGljaCBoYXMgYmVlbiBjbGlja2VkXG5cdGdvdG89IChyb3V0ZUluZGV4OiBudW1iZXIpOiBib29sZWFuID0+IHtcblx0XHR0aGlzLnNsaWRlc0hlbHBlci5nb3RvKHJvdXRlSW5kZXgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIFVzZSB0aGUgcHJvZ3Jlc3MtZG9uZSBjbGFzcyBvbiBsaW5rcyB1bnRpbGwgY3VycmVudCBpbmRleCwgYW5kIHByb2dyZXNzLXRvZG8gZm9yXG5cdC8vIGxpbmtzIGFmdGVyIGN1cnJlbnQgaW5kZXhcblx0Z2V0UHJvZ3Jlc3NDbGFzcz0gKG5leHRJbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gKG5leHRJbmRleCA8PSB0aGlzLnNsaWRlc0luZGV4ID8gXCJwcm9ncmVzcy1kb25lXCIgOiBcInByb2dyZXNzLXRvZG9cIik7XG5cdH1cblxuXG59ICJdfQ==
