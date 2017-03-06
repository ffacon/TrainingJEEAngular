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
    var core_1, slidesHelper_1, keyupListener_1, slideMove_1, SlideMoveRight;
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
            // Display a button which can be clicked to navigate to the next slide (see template)
            // Also observe the right arrow keypress to navigate to the next slide
            SlideMoveRight = (function (_super) {
                __extends(SlideMoveRight, _super);
                function SlideMoveRight(slidesHelper, keyupListener) {
                    _super.call(this, slidesHelper, keyupListener);
                    this.label = 'right';
                }
                // Return the stream which has to be observed and which corresponds
                // to the right keypress
                SlideMoveRight.prototype.getObservable = function () {
                    return this.keyupListener.rightObservable;
                };
                //Navigate to next slide
                SlideMoveRight.prototype.goToSlide = function () {
                    this.slidesHelper.nextSlide();
                };
                return SlideMoveRight;
            }(slideMove_1.SlideMove));
            SlideMoveRight = __decorate([
                core_1.Component({
                    selector: 'slide-move-right',
                    templateUrl: 'src/components/slideMove/slideMove.html',
                    directives: []
                }),
                __metadata("design:paramtypes", [slidesHelper_1.SlidesHelper, keyupListener_1.KeyupListener])
            ], SlideMoveRight);
            exports_1("SlideMoveRight", SlideMoveRight);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlTW92ZS9zbGlkZU1vdmVSaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQSxxRkFBcUY7WUFDckYsc0VBQXNFO1lBQ3RFO2dCQUFvQyxrQ0FBUztnQkFFNUMsd0JBQVksWUFBMEIsRUFBRSxhQUE0QjtvQkFDbkUsa0JBQU0sWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDdEIsQ0FBQztnQkFFRCxtRUFBbUU7Z0JBQ25FLHdCQUF3QjtnQkFDeEIsc0NBQWEsR0FBYjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUQsd0JBQXdCO2dCQUN4QixrQ0FBUyxHQUFUO29CQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0YscUJBQUM7WUFBRCxDQWpCQSxBQWlCQyxDQWpCbUMscUJBQVMsR0FpQjVDO1lBakJEO2dCQVBDLGdCQUFTLENBQUM7b0JBQ1YsUUFBUSxFQUFDLGtCQUFrQjtvQkFDM0IsV0FBVyxFQUFDLHlDQUF5QztvQkFDckQsVUFBVSxFQUFDLEVBQUU7aUJBQ2IsQ0FBQztpREFLeUIsMkJBQVksRUFBaUIsNkJBQWE7OEJBZXBFO3dDQWpCWSxjQUFjO1FBaUIxQixDQUFDIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3NsaWRlTW92ZS9zbGlkZU1vdmVSaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xuaW1wb3J0IHtTbGlkZXNIZWxwZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NsaWRlc0hlbHBlcic7XG5pbXBvcnQge0tleXVwTGlzdGVuZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2tleXVwTGlzdGVuZXInO1xuaW1wb3J0IHtTbGlkZU1vdmV9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NsaWRlTW92ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOidzbGlkZS1tb3ZlLXJpZ2h0Jyxcblx0dGVtcGxhdGVVcmw6J3NyYy9jb21wb25lbnRzL3NsaWRlTW92ZS9zbGlkZU1vdmUuaHRtbCcsXG5cdGRpcmVjdGl2ZXM6W11cbn0pXG4vLyBEaXNwbGF5IGEgYnV0dG9uIHdoaWNoIGNhbiBiZSBjbGlja2VkIHRvIG5hdmlnYXRlIHRvIHRoZSBuZXh0IHNsaWRlIChzZWUgdGVtcGxhdGUpXG4vLyBBbHNvIG9ic2VydmUgdGhlIHJpZ2h0IGFycm93IGtleXByZXNzIHRvIG5hdmlnYXRlIHRvIHRoZSBuZXh0IHNsaWRlXG5leHBvcnQgY2xhc3MgU2xpZGVNb3ZlUmlnaHQgZXh0ZW5kcyBTbGlkZU1vdmV7XG5cblx0Y29uc3RydWN0b3Ioc2xpZGVzSGVscGVyOiBTbGlkZXNIZWxwZXIsIGtleXVwTGlzdGVuZXI6IEtleXVwTGlzdGVuZXIpIHtcblx0XHRzdXBlcihzbGlkZXNIZWxwZXIsIGtleXVwTGlzdGVuZXIpO1xuXHRcdHRoaXMubGFiZWwgPSAncmlnaHQnO1xuXHR9XHRcblxuXHQvLyBSZXR1cm4gdGhlIHN0cmVhbSB3aGljaCBoYXMgdG8gYmUgb2JzZXJ2ZWQgYW5kIHdoaWNoIGNvcnJlc3BvbmRzXG5cdC8vIHRvIHRoZSByaWdodCBrZXlwcmVzc1xuXHRnZXRPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMua2V5dXBMaXN0ZW5lci5yaWdodE9ic2VydmFibGU7XG5cdH1cblxuXHQvL05hdmlnYXRlIHRvIG5leHQgc2xpZGVcblx0Z29Ub1NsaWRlKCk6IHZvaWQge1xuXHRcdHRoaXMuc2xpZGVzSGVscGVyLm5leHRTbGlkZSgpO1xuXHR9XG59Il19
