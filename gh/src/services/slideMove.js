System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SlideMove;
    return {
        setters: [],
        execute: function () {
            // IS NOT A SERVICE
            // Abstract class for SlideMoveLeft and SlideMoveRight components
            // See their comments for details
            SlideMove = (function () {
                function SlideMove(slidesHelper, keyupListener) {
                    var _this = this;
                    this.label = 'default';
                    // Subscribe to a stream and call the goToSlide method each time
                    // an event is received in this stream
                    this.keyupSubscribe = function () {
                        var that = _this;
                        _this.getObservable()
                            .subscribe(function (val) {
                            that.goToSlide();
                        });
                    };
                    this.slidesHelper = slidesHelper;
                    this.keyupListener = keyupListener;
                    this.keyupSubscribe();
                }
                return SlideMove;
            }());
            exports_1("SlideMove", SlideMove);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9zbGlkZU1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUlBLG1CQUFtQjtZQUNuQixpRUFBaUU7WUFDakUsaUNBQWlDO1lBQ2pDO2dCQUtDLG1CQUFZLFlBQTBCLEVBQUUsYUFBNEI7b0JBQXBFLGlCQUlDO29CQU5TLFVBQUssR0FBVyxTQUFTLENBQUM7b0JBV3BDLGdFQUFnRTtvQkFDaEUsc0NBQXNDO29CQUN0QyxtQkFBYyxHQUFFO3dCQUNmLElBQUksSUFBSSxHQUFjLEtBQUksQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLGFBQWEsRUFBRTs2QkFDbkIsU0FBUyxDQUFFLFVBQUMsR0FBVzs0QkFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNsQixDQUFDLENBQUUsQ0FBQTtvQkFDSixDQUFDLENBQUE7b0JBaEJBLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO29CQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQWVGLGdCQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTs7UUFBQSxDQUFDIiwiZmlsZSI6InNyYy9zZXJ2aWNlcy9zbGlkZU1vdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1NsaWRlc0hlbHBlcn0gZnJvbSAnLi9zbGlkZXNIZWxwZXInO1xuaW1wb3J0IHtLZXl1cExpc3RlbmVyfSBmcm9tICcuL2tleXVwTGlzdGVuZXInO1xuXG4vLyBJUyBOT1QgQSBTRVJWSUNFXG4vLyBBYnN0cmFjdCBjbGFzcyBmb3IgU2xpZGVNb3ZlTGVmdCBhbmQgU2xpZGVNb3ZlUmlnaHQgY29tcG9uZW50c1xuLy8gU2VlIHRoZWlyIGNvbW1lbnRzIGZvciBkZXRhaWxzXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2xpZGVNb3ZlIHtcblx0cHJvdGVjdGVkIHNsaWRlc0hlbHBlcjogU2xpZGVzSGVscGVyO1xuXHRwcm90ZWN0ZWQga2V5dXBMaXN0ZW5lcjogS2V5dXBMaXN0ZW5lcjtcblx0cHJvdGVjdGVkIGxhYmVsOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG5cblx0Y29uc3RydWN0b3Ioc2xpZGVzSGVscGVyOiBTbGlkZXNIZWxwZXIsIGtleXVwTGlzdGVuZXI6IEtleXVwTGlzdGVuZXIpIHtcblx0XHR0aGlzLnNsaWRlc0hlbHBlciA9IHNsaWRlc0hlbHBlcjtcblx0XHR0aGlzLmtleXVwTGlzdGVuZXIgPSBrZXl1cExpc3RlbmVyO1xuXHRcdHRoaXMua2V5dXBTdWJzY3JpYmUoKTtcblx0fVxuXG5cdGFic3RyYWN0IGdldE9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXHRhYnN0cmFjdCBnb1RvU2xpZGUoKTogdm9pZDtcblxuXHQvLyBTdWJzY3JpYmUgdG8gYSBzdHJlYW0gYW5kIGNhbGwgdGhlIGdvVG9TbGlkZSBtZXRob2QgZWFjaCB0aW1lXG5cdC8vIGFuIGV2ZW50IGlzIHJlY2VpdmVkIGluIHRoaXMgc3RyZWFtXG5cdGtleXVwU3Vic2NyaWJlPSAoKTogdm9pZCA9Pntcblx0XHR2YXIgdGhhdDogU2xpZGVNb3ZlID0gdGhpcztcblx0XHR0aGlzLmdldE9ic2VydmFibGUoKVxuXHRcdC5zdWJzY3JpYmUoICh2YWw6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRcdFx0dGhhdC5nb1RvU2xpZGUoKTtcblx0XHR9IClcblx0fVxuXG59Il19
