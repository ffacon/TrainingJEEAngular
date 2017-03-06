System.register(["@angular/core", "../slideCommon/slideCommon", "../../../services/constants"], function (exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, slideCommon_1, constants_1, Todo;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slideCommon_1_1) {
                slideCommon_1 = slideCommon_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            Todo = (function (_super) {
                __extends(Todo, _super);
                function Todo(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return Todo;
            }(slideCommon_1.SlideCommon));
            Todo = __decorate([
                core_1.Component({
                    selector: 'todo',
                    templateUrl: 'src/components/slides/todo/todo.html'
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], Todo);
            exports_1("Todo", Todo);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy90b2RvL3RvZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUEwQix3QkFBVztnQkFDcEMsY0FBWSxHQUFlLEVBQXNDLFNBQWlCO29CQUNqRixrQkFBTSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBTUYsV0FBQztZQUFELENBVEEsQUFTQyxDQVR5Qix5QkFBVyxHQVNwQztZQVREO2dCQUpDLGdCQUFTLENBQUM7b0JBQ1YsUUFBUSxFQUFDLE1BQU07b0JBQ2YsV0FBVyxFQUFDLHNDQUFzQztpQkFDbEQsQ0FBQztnQkFFNkIsV0FBQSxhQUFNLENBQUMsc0NBQTBCLENBQUMsQ0FBQTtpREFBL0MsaUJBQVU7b0JBUTNCOzhCQVRZLElBQUk7UUFTaEIsQ0FBQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zbGlkZXMvdG9kby90b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2xpZGVDb21tb259IGZyb20gJy4uL3NsaWRlQ29tbW9uL3NsaWRlQ29tbW9uJztcblxuaW1wb3J0IHtIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTU30gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6J3RvZG8nLFxuXHR0ZW1wbGF0ZVVybDonc3JjL2NvbXBvbmVudHMvc2xpZGVzL3RvZG8vdG9kby5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUb2RvIGV4dGVuZHMgU2xpZGVDb21tb257XG5cdGNvbnN0cnVjdG9yKGVsdDogRWxlbWVudFJlZiwgQEluamVjdChIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTUykgaG9zdENsYXNzOiBzdHJpbmcpIHtcblx0XHRzdXBlcihlbHQsIGhvc3RDbGFzcyk7XG5cdH1cdFxuXHQvLyB0bXAoKTogdm9pZHtcblx0Ly8gXHR2YXIgdj0gbmV3IFZpZXcoe30pO1xuXG5cdC8vIH1cblx0XG59Il19
