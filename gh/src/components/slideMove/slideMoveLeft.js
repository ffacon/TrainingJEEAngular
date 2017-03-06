System.register(["@angular/core", "rxjs/add/observable/fromEvent", "../../services/slidesHelper", "../../services/keyupListener", "../../services/slideMove"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var core_1, slidesHelper_1, keyupListener_1, slideMove_1, SlideMoveLeft;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {
            },
            function (slidesHelper_1_1) {
                slidesHelper_1 = slidesHelper_1_1;
            },
            function (keyupListener_1_1) {
                keyupListener_1 = keyupListener_1_1;
            },
            function (slideMove_1_1) {
                slideMove_1 = slideMove_1_1;
            }
        ],
        execute: function () {
            // Display a button which can be clicked to navigate to the previous slide (see template)
            // Also observe the left arrow keypress to navigate to the previous slide
            SlideMoveLeft = (function (_super) {
                __extends(SlideMoveLeft, _super);
                function SlideMoveLeft(slidesHelper, keyupListener) {
                    _super.call(this, slidesHelper, keyupListener);
                    this.label = 'left';
                }
                // Return the stream which has to be obesrved and which corresponds
                // to left keypress
                SlideMoveLeft.prototype.getObservable = function () {
                    return this.keyupListener.leftObservable;
                };
                //Navigate to previous slide
                SlideMoveLeft.prototype.goToSlide = function () {
                    this.slidesHelper.previousSlide();
                };
                return SlideMoveLeft;
            }(slideMove_1.SlideMove));
            SlideMoveLeft = __decorate([
                core_1.Component({
                    selector: 'slide-move-left',
                    templateUrl: 'src/components/slideMove/slideMove.html',
                    directives: []
                }),
                __metadata("design:paramtypes", [slidesHelper_1.SlidesHelper, keyupListener_1.KeyupListener])
            ], SlideMoveLeft);
            exports_1("SlideMoveLeft", SlideMoveLeft);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlTW92ZS9zbGlkZU1vdmVMZWZ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBLHlGQUF5RjtZQUN6Rix5RUFBeUU7WUFDekU7Z0JBQW1DLGlDQUFTO2dCQUUzQyx1QkFBWSxZQUEwQixFQUFFLGFBQTRCO29CQUNuRSxrQkFBTSxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixDQUFDO2dCQUVELG1FQUFtRTtnQkFDbkUsbUJBQW1CO2dCQUNuQixxQ0FBYSxHQUFiO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCw0QkFBNEI7Z0JBQzVCLGlDQUFTLEdBQVQ7b0JBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDbkMsQ0FBQztnQkFDRixvQkFBQztZQUFELENBakJBLEFBaUJDLENBakJrQyxxQkFBUyxHQWlCM0M7WUFqQkQ7Z0JBUEMsZ0JBQVMsQ0FBQztvQkFDVixRQUFRLEVBQUMsaUJBQWlCO29CQUMxQixXQUFXLEVBQUMseUNBQXlDO29CQUNyRCxVQUFVLEVBQUMsRUFBRTtpQkFDYixDQUFDO2lEQUt5QiwyQkFBWSxFQUFpQiw2QkFBYTs2QkFlcEU7dUNBakJZLGFBQWE7UUFpQnpCLENBQUMiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2xpZGVNb3ZlL3NsaWRlTW92ZUxlZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmltcG9ydCB7U2xpZGVzSGVscGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zbGlkZXNIZWxwZXInO1xuaW1wb3J0IHtLZXl1cExpc3RlbmVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9rZXl1cExpc3RlbmVyJztcbmltcG9ydCB7U2xpZGVNb3ZlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zbGlkZU1vdmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvcjonc2xpZGUtbW92ZS1sZWZ0Jyxcblx0dGVtcGxhdGVVcmw6J3NyYy9jb21wb25lbnRzL3NsaWRlTW92ZS9zbGlkZU1vdmUuaHRtbCcsXG5cdGRpcmVjdGl2ZXM6W11cbn0pXG4vLyBEaXNwbGF5IGEgYnV0dG9uIHdoaWNoIGNhbiBiZSBjbGlja2VkIHRvIG5hdmlnYXRlIHRvIHRoZSBwcmV2aW91cyBzbGlkZSAoc2VlIHRlbXBsYXRlKVxuLy8gQWxzbyBvYnNlcnZlIHRoZSBsZWZ0IGFycm93IGtleXByZXNzIHRvIG5hdmlnYXRlIHRvIHRoZSBwcmV2aW91cyBzbGlkZVxuZXhwb3J0IGNsYXNzIFNsaWRlTW92ZUxlZnQgZXh0ZW5kcyBTbGlkZU1vdmV7XG5cblx0Y29uc3RydWN0b3Ioc2xpZGVzSGVscGVyOiBTbGlkZXNIZWxwZXIsIGtleXVwTGlzdGVuZXI6IEtleXVwTGlzdGVuZXIpIHtcblx0XHRzdXBlcihzbGlkZXNIZWxwZXIsIGtleXVwTGlzdGVuZXIpO1xuXHRcdHRoaXMubGFiZWwgPSAnbGVmdCc7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIHN0cmVhbSB3aGljaCBoYXMgdG8gYmUgb2Jlc3J2ZWQgYW5kIHdoaWNoIGNvcnJlc3BvbmRzXG5cdC8vIHRvIGxlZnQga2V5cHJlc3Ncblx0Z2V0T2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmtleXVwTGlzdGVuZXIubGVmdE9ic2VydmFibGU7XG5cdH1cblxuXHQvL05hdmlnYXRlIHRvIHByZXZpb3VzIHNsaWRlXG5cdGdvVG9TbGlkZSgpOiB2b2lkIHtcblx0XHR0aGlzLnNsaWRlc0hlbHBlci5wcmV2aW91c1NsaWRlKCk7XG5cdH1cbn0iXX0=
