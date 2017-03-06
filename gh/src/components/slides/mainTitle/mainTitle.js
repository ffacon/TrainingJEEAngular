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
    var core_1, slideCommon_1, constants_1, MainTitle;
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
            MainTitle = (function (_super) {
                __extends(MainTitle, _super);
                function MainTitle(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return MainTitle;
            }(slideCommon_1.SlideCommon));
            MainTitle = __decorate([
                core_1.Component({
                    selector: 'main-title',
                    templateUrl: 'src/components/slides/mainTitle/mainTitle.html',
                    styleUrls: ['src/components/slides/mainTitle/mainTitle.css']
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], MainTitle);
            exports_1("MainTitle", MainTitle);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9tYWluVGl0bGUvbWFpblRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBK0IsNkJBQVc7Z0JBQ3pDLG1CQUFZLEdBQWUsRUFBc0MsU0FBaUI7b0JBQ2pGLGtCQUFNLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFDRixnQkFBQztZQUFELENBSkEsQUFJQyxDQUo4Qix5QkFBVyxHQUl6QztZQUpEO2dCQUxDLGdCQUFTLENBQUM7b0JBQ1YsUUFBUSxFQUFDLFlBQVk7b0JBQ3JCLFdBQVcsRUFBQyxnREFBZ0Q7b0JBQzVELFNBQVMsRUFBRSxDQUFDLCtDQUErQyxDQUFDO2lCQUM1RCxDQUFDO2dCQUU2QixXQUFBLGFBQU0sQ0FBQyxzQ0FBMEIsQ0FBQyxDQUFBO2lEQUEvQyxpQkFBVTt5QkFHM0I7bUNBSlksU0FBUztRQUt0QixDQUFDIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3NsaWRlcy9tYWluVGl0bGUvbWFpblRpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2xpZGVDb21tb259IGZyb20gJy4uL3NsaWRlQ29tbW9uL3NsaWRlQ29tbW9uJztcblxuaW1wb3J0IHtIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTU30gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOidtYWluLXRpdGxlJyxcblx0dGVtcGxhdGVVcmw6J3NyYy9jb21wb25lbnRzL3NsaWRlcy9tYWluVGl0bGUvbWFpblRpdGxlLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnc3JjL2NvbXBvbmVudHMvc2xpZGVzL21haW5UaXRsZS9tYWluVGl0bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFpblRpdGxlIGV4dGVuZHMgU2xpZGVDb21tb257XG5cdGNvbnN0cnVjdG9yKGVsdDogRWxlbWVudFJlZiwgQEluamVjdChIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTUykgaG9zdENsYXNzOiBzdHJpbmcgKXtcblx0XHRzdXBlcihlbHQsIGhvc3RDbGFzcyk7XG5cdH1cbn1cbiJdfQ==
