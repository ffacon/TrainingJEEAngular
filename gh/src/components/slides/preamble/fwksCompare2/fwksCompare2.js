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
    var core_1, slideCommon_1, editor_1, editorTab_1, constants_1, FwksCompare2;
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
            FwksCompare2 = (function (_super) {
                __extends(FwksCompare2, _super);
                function FwksCompare2(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return FwksCompare2;
            }(slideCommon_1.SlideCommon));
            FwksCompare2 = __decorate([
                core_1.Component({
                    selector: 'fwksCompare2',
                    templateUrl: 'src/components/slides/preamble/fwksCompare2/fwksCompare2.html',
                    styleUrls: ['src/components/slides/preamble/fwksCompare2/fwksCompare2.css'],
                    directives: [editor_1.Editor, editorTab_1.EditorTab]
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], FwksCompare2);
            exports_1("FwksCompare2", FwksCompare2);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9wcmVhbWJsZS9md2tzQ29tcGFyZTIvZndrc0NvbXBhcmUyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBa0MsZ0NBQVc7Z0JBQzVDLHNCQUFZLEdBQWUsRUFBc0MsU0FBaUI7b0JBQ2pGLGtCQUFNLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFDRixtQkFBQztZQUFELENBSkEsQUFJQyxDQUppQyx5QkFBVyxHQUk1QztZQUpEO2dCQU5DLGdCQUFTLENBQUM7b0JBQ1YsUUFBUSxFQUFDLGNBQWM7b0JBQ3ZCLFdBQVcsRUFBQywrREFBK0Q7b0JBQzNFLFNBQVMsRUFBRSxDQUFDLDhEQUE4RCxDQUFDO29CQUMzRSxVQUFVLEVBQUUsQ0FBQyxlQUFNLEVBQUUscUJBQVMsQ0FBQztpQkFDL0IsQ0FBQztnQkFFNkIsV0FBQSxhQUFNLENBQUMsc0NBQTBCLENBQUMsQ0FBQTtpREFBL0MsaUJBQVU7NEJBRzNCO3NDQUpZLFlBQVk7UUFJeEIsQ0FBQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zbGlkZXMvcHJlYW1ibGUvZndrc0NvbXBhcmUyL2Z3a3NDb21wYXJlMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1NsaWRlQ29tbW9ufSBmcm9tICcuLi8uLi9zbGlkZUNvbW1vbi9zbGlkZUNvbW1vbic7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vLi4vLi4vZWRpdG9yL2VkaXRvcic7XG5pbXBvcnQge0VkaXRvclRhYn0gZnJvbSAnLi4vLi4vLi4vZWRpdG9yVGFiL2VkaXRvclRhYic7XG5cbmltcG9ydCB7SE9TVF9TTElERV9DT05UQUlORVJfQ0xBU1N9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOidmd2tzQ29tcGFyZTInLFxuXHR0ZW1wbGF0ZVVybDonc3JjL2NvbXBvbmVudHMvc2xpZGVzL3ByZWFtYmxlL2Z3a3NDb21wYXJlMi9md2tzQ29tcGFyZTIuaHRtbCcsXG5cdHN0eWxlVXJsczogWydzcmMvY29tcG9uZW50cy9zbGlkZXMvcHJlYW1ibGUvZndrc0NvbXBhcmUyL2Z3a3NDb21wYXJlMi5jc3MnXSxcblx0ZGlyZWN0aXZlczogW0VkaXRvciwgRWRpdG9yVGFiXVxufSlcbmV4cG9ydCBjbGFzcyBGd2tzQ29tcGFyZTIgZXh0ZW5kcyBTbGlkZUNvbW1vbntcblx0Y29uc3RydWN0b3IoZWx0OiBFbGVtZW50UmVmLCBASW5qZWN0KEhPU1RfU0xJREVfQ09OVEFJTkVSX0NMQVNTKSBob3N0Q2xhc3M6IHN0cmluZykge1xuXHRcdHN1cGVyKGVsdCwgaG9zdENsYXNzKTtcblx0fVxufSJdfQ==
