System.register(["rxjs/Observable", "rxjs/add/operator/map", "rxjs/add/operator/filter"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, KeyupListener;
    return {
        setters: [
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            // Create three observable streams to listen respectively
            //  stream1: ( keypress, keypress, keypress)
            //  stream2: stream1.filter(left keypress): (left keypress) 
            //  stream3: stream1.filter(right keypress): (left keypress)
            // This service will be used by: slideMoveLeft and slideMoveRight components
            KeyupListener = (function () {
                function KeyupListener() {
                    //Stream which observe all keydown events
                    this.keydownObservable = Observable_1.Observable.fromEvent(document.getElementsByTagName('body')[0], 'keydown')
                        .map(function (event) {
                        return event.keyCode;
                    });
                    //Filters left arrow keydown events
                    this.leftObservable = this.keydownObservable
                        .filter(function (keyCode) {
                        return (keyCode == 37);
                    });
                    // Filters right arrow keydown events
                    this.rightObservable = this.keydownObservable
                        .filter(function (keyCode) {
                        return (keyCode == 39);
                    });
                }
                return KeyupListener;
            }());
            exports_1("KeyupListener", KeyupListener);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9rZXl1cExpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztZQU9BLHlEQUF5RDtZQUN6RCw0Q0FBNEM7WUFDNUMsNERBQTREO1lBQzVELDREQUE0RDtZQUM1RCw0RUFBNEU7WUFDNUU7Z0JBS0M7b0JBQ0MseUNBQXlDO29CQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQzt5QkFDakcsR0FBRyxDQUFDLFVBQUMsS0FBb0I7d0JBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUN0QixDQUFDLENBQUMsQ0FBQztvQkFFSCxtQ0FBbUM7b0JBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjt5QkFDMUMsTUFBTSxDQUFDLFVBQUMsT0FBZTt3QkFDdkIsTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUN4QixDQUFDLENBQUMsQ0FBQztvQkFFSixxQ0FBcUM7b0JBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjt5QkFDNUMsTUFBTSxDQUFFLFVBQUMsT0FBZTt3QkFDeEIsTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUN4QixDQUFDLENBQUMsQ0FBQztnQkFFSixDQUFDO2dCQUVGLG9CQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTs7UUFBQSxDQUFDIiwiZmlsZSI6InNyYy9zZXJ2aWNlcy9rZXl1cExpc3RlbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5cblxuLy8gQ3JlYXRlIHRocmVlIG9ic2VydmFibGUgc3RyZWFtcyB0byBsaXN0ZW4gcmVzcGVjdGl2ZWx5XG4vLyAgc3RyZWFtMTogKCBrZXlwcmVzcywga2V5cHJlc3MsIGtleXByZXNzKVxuLy8gIHN0cmVhbTI6IHN0cmVhbTEuZmlsdGVyKGxlZnQga2V5cHJlc3MpOiAobGVmdCBrZXlwcmVzcykgXG4vLyAgc3RyZWFtMzogc3RyZWFtMS5maWx0ZXIocmlnaHQga2V5cHJlc3MpOiAobGVmdCBrZXlwcmVzcylcbi8vIFRoaXMgc2VydmljZSB3aWxsIGJlIHVzZWQgYnk6IHNsaWRlTW92ZUxlZnQgYW5kIHNsaWRlTW92ZVJpZ2h0IGNvbXBvbmVudHNcbmV4cG9ydCBjbGFzcyBLZXl1cExpc3RlbmVye1xuXHRwcml2YXRlIGtleWRvd25PYnNlcnZhYmxlOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cdGxlZnRPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cdHJpZ2h0T2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0Ly9TdHJlYW0gd2hpY2ggb2JzZXJ2ZSBhbGwga2V5ZG93biBldmVudHNcblx0XHR0aGlzLmtleWRvd25PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSwgJ2tleWRvd24nKVxuXHRcdC5tYXAoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA6IGFueSA9PiB7XG5cdFx0XHRyZXR1cm4gZXZlbnQua2V5Q29kZTtcblx0XHR9KTtcblxuXHRcdC8vRmlsdGVycyBsZWZ0IGFycm93IGtleWRvd24gZXZlbnRzXG5cdFx0dGhpcy5sZWZ0T2JzZXJ2YWJsZSA9IHRoaXMua2V5ZG93bk9ic2VydmFibGVcblx0XHRcdC5maWx0ZXIoKGtleUNvZGU6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuXHRcdFx0XHRyZXR1cm4gKGtleUNvZGUgPT0gMzcpO1xuXHRcdFx0fSk7XG5cblx0XHQvLyBGaWx0ZXJzIHJpZ2h0IGFycm93IGtleWRvd24gZXZlbnRzXG5cdFx0dGhpcy5yaWdodE9ic2VydmFibGUgPSB0aGlzLmtleWRvd25PYnNlcnZhYmxlXG5cdFx0LmZpbHRlciggKGtleUNvZGU6IG51bWJlcik6IGJvb2xlYW4gID0+IHtcblx0XHRcdHJldHVybiAoa2V5Q29kZSA9PSAzOSk7XG5cdFx0fSk7XG5cblx0fVxuXG59Il19
