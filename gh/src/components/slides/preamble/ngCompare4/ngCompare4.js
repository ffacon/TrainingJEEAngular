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
    var core_1, slideCommon_1, editor_1, editorTab_1, constants_1, NgCompare4;
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
            NgCompare4 = (function (_super) {
                __extends(NgCompare4, _super);
                function NgCompare4(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return NgCompare4;
            }(slideCommon_1.SlideCommon));
            NgCompare4 = __decorate([
                core_1.Component({
                    selector: 'NgCompare4',
                    templateUrl: 'src/components/slides/preamble/ngCompare4/ngCompare4.html',
                    styleUrls: ['src/components/slides/preamble/ngCompare4/ngCompare4.css'],
                    directives: [editor_1.Editor, editorTab_1.EditorTab]
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], NgCompare4);
            exports_1("NgCompare4", NgCompare4);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9wcmVhbWJsZS9uZ0NvbXBhcmU0L25nQ29tcGFyZTQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFnQyw4QkFBVztnQkFDMUMsb0JBQVksR0FBZSxFQUFzQyxTQUFpQjtvQkFDakYsa0JBQU0sR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUNGLGlCQUFDO1lBQUQsQ0FKQSxBQUlDLENBSitCLHlCQUFXLEdBSTFDO1lBSkQ7Z0JBTkMsZ0JBQVMsQ0FBQztvQkFDVixRQUFRLEVBQUMsWUFBWTtvQkFDckIsV0FBVyxFQUFDLDJEQUEyRDtvQkFDdkUsU0FBUyxFQUFFLENBQUMsMERBQTBELENBQUM7b0JBQ3ZFLFVBQVUsRUFBRSxDQUFDLGVBQU0sRUFBRSxxQkFBUyxDQUFDO2lCQUMvQixDQUFDO2dCQUU2QixXQUFBLGFBQU0sQ0FBQyxzQ0FBMEIsQ0FBQyxDQUFBO2lEQUEvQyxpQkFBVTswQkFHM0I7b0NBSlksVUFBVTtRQUl0QixDQUFDIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3NsaWRlcy9wcmVhbWJsZS9uZ0NvbXBhcmU0L25nQ29tcGFyZTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtTbGlkZUNvbW1vbn0gZnJvbSAnLi4vLi4vc2xpZGVDb21tb24vc2xpZGVDb21tb24nO1xuaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uLy4uLy4uL2VkaXRvci9lZGl0b3InO1xuaW1wb3J0IHtFZGl0b3JUYWJ9IGZyb20gJy4uLy4uLy4uL2VkaXRvclRhYi9lZGl0b3JUYWInO1xuXG5pbXBvcnQge0hPU1RfU0xJREVfQ09OVEFJTkVSX0NMQVNTfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjonTmdDb21wYXJlNCcsXG5cdHRlbXBsYXRlVXJsOidzcmMvY29tcG9uZW50cy9zbGlkZXMvcHJlYW1ibGUvbmdDb21wYXJlNC9uZ0NvbXBhcmU0Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnc3JjL2NvbXBvbmVudHMvc2xpZGVzL3ByZWFtYmxlL25nQ29tcGFyZTQvbmdDb21wYXJlNC5jc3MnXSxcblx0ZGlyZWN0aXZlczogW0VkaXRvciwgRWRpdG9yVGFiXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0NvbXBhcmU0IGV4dGVuZHMgU2xpZGVDb21tb257XG5cdGNvbnN0cnVjdG9yKGVsdDogRWxlbWVudFJlZiwgQEluamVjdChIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTUykgaG9zdENsYXNzOiBzdHJpbmcpIHtcblx0XHRzdXBlcihlbHQsIGhvc3RDbGFzcyk7XG5cdH1cbn0iXX0=
