System.register(["@angular/core", "../../slideCommon/slideCommon", "../../../editor/editor", "../../../editorTab/editorTab", "../../../../services/constants"], function (exports_1, context_1) {
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
    var core_1, slideCommon_1, editor_1, editorTab_1, constants_1, MoreDI4;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slideCommon_1_1) {
                slideCommon_1 = slideCommon_1_1;
            },
            function (editor_1_1) {
                editor_1 = editor_1_1;
            },
            function (editorTab_1_1) {
                editorTab_1 = editorTab_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            MoreDI4 = (function (_super) {
                __extends(MoreDI4, _super);
                function MoreDI4(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return MoreDI4;
            }(slideCommon_1.SlideCommon));
            MoreDI4 = __decorate([
                core_1.Component({
                    selector: 'MoreDI4',
                    templateUrl: 'src/components/slides/mainConcepts/moreDI4/moreDI4.html',
                    styleUrls: ['src/components/slides/mainConcepts/moreDI4/moreDI4.css'],
                    directives: [editor_1.Editor, editorTab_1.EditorTab]
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], MoreDI4);
            exports_1("MoreDI4", MoreDI4);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9tYWluQ29uY2VwdHMvbW9yZURJNC9tb3JlREk0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQTZCLDJCQUFXO2dCQUN2QyxpQkFBWSxHQUFlLEVBQXNDLFNBQWlCO29CQUNqRixrQkFBTSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0YsY0FBQztZQUFELENBSkEsQUFJQyxDQUo0Qix5QkFBVyxHQUl2QztZQUpEO2dCQVBDLGdCQUFTLENBQUM7b0JBQ1YsUUFBUSxFQUFDLFNBQVM7b0JBQ2xCLFdBQVcsRUFBQyx5REFBeUQ7b0JBQ3JFLFNBQVMsRUFBRSxDQUFDLHdEQUF3RCxDQUFDO29CQUNsRSxVQUFVLEVBQUUsQ0FBQyxlQUFNLEVBQUUscUJBQVMsQ0FBQztpQkFFbEMsQ0FBQztnQkFFNkIsV0FBQSxhQUFNLENBQUMsc0NBQTBCLENBQUMsQ0FBQTtpREFBL0MsaUJBQVU7dUJBRzNCO2lDQUpZLE9BQU87UUFJbkIsQ0FBQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zbGlkZXMvbWFpbkNvbmNlcHRzL21vcmVESTQvbW9yZURJNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1NsaWRlQ29tbW9ufSBmcm9tICcuLi8uLi9zbGlkZUNvbW1vbi9zbGlkZUNvbW1vbic7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vLi4vLi4vZWRpdG9yL2VkaXRvcic7XG5pbXBvcnQge0VkaXRvclRhYn0gZnJvbSAnLi4vLi4vLi4vZWRpdG9yVGFiL2VkaXRvclRhYic7XG5cbmltcG9ydCB7SE9TVF9TTElERV9DT05UQUlORVJfQ0xBU1N9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOidNb3JlREk0Jyxcblx0dGVtcGxhdGVVcmw6J3NyYy9jb21wb25lbnRzL3NsaWRlcy9tYWluQ29uY2VwdHMvbW9yZURJNC9tb3JlREk0Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnc3JjL2NvbXBvbmVudHMvc2xpZGVzL21haW5Db25jZXB0cy9tb3JlREk0L21vcmVESTQuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW0VkaXRvciwgRWRpdG9yVGFiXVxuICAgIFxufSlcbmV4cG9ydCBjbGFzcyBNb3JlREk0IGV4dGVuZHMgU2xpZGVDb21tb257XG5cdGNvbnN0cnVjdG9yKGVsdDogRWxlbWVudFJlZiwgQEluamVjdChIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTUykgaG9zdENsYXNzOiBzdHJpbmcpIHtcblx0XHRzdXBlcihlbHQsIGhvc3RDbGFzcyk7XG5cdH1cbn0iXX0=
