System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SlideCommon;
    return {
        setters: [],
        execute: function () {
            SlideCommon = (function () {
                function SlideCommon(elt, hostClass) {
                    console.log('there');
                    var classes = elt.nativeElement.classList;
                    if (!classes.contains(hostClass)) {
                        classes.add(hostClass);
                    }
                }
                return SlideCommon;
            }());
            exports_1("SlideCommon", SlideCommon);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9zbGlkZUNvbW1vbi9zbGlkZUNvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUE7Z0JBRUMscUJBQVksR0FBZSxFQUFFLFNBQWlCO29CQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQixJQUFJLE9BQU8sR0FBUSxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztvQkFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDeEIsQ0FBQztnQkFDRixDQUFDO2dCQUVGLGtCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7O1FBQUEsQ0FBQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zbGlkZXMvc2xpZGVDb21tb24vc2xpZGVDb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbGlkZUNvbW1vbntcblxuXHRjb25zdHJ1Y3RvcihlbHQ6IEVsZW1lbnRSZWYsIGhvc3RDbGFzczogc3RyaW5nKSB7XG5cdFx0Y29uc29sZS5sb2coJ3RoZXJlJyk7XG5cdFx0dmFyIGNsYXNzZXM6IGFueSA9IGVsdC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcblx0XHRpZiAoIWNsYXNzZXMuY29udGFpbnMoaG9zdENsYXNzKSkge1xuXHRcdFx0Y2xhc3Nlcy5hZGQoaG9zdENsYXNzKTtcblx0XHR9XG5cdH1cblx0XG59Il19
