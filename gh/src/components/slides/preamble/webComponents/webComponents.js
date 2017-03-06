System.register(["@angular/core", "../../slideCommon/slideCommon", "../../../../services/constants"], function (exports_1, context_1) {
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
    var core_1, slideCommon_1, constants_1, WebComponents;
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
            WebComponents = (function (_super) {
                __extends(WebComponents, _super);
                function WebComponents(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return WebComponents;
            }(slideCommon_1.SlideCommon));
            WebComponents = __decorate([
                core_1.Component({
                    selector: 'WebComponents',
                    templateUrl: 'src/components/slides/preamble/webComponents/webComponents.html',
                    styleUrls: ['src/components/slides/preamble/webComponents/webComponents.css']
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], WebComponents);
            exports_1("WebComponents", WebComponents);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9wcmVhbWJsZS93ZWJDb21wb25lbnRzL3dlYkNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUFtQyxpQ0FBVztnQkFDN0MsdUJBQVksR0FBZSxFQUFzQyxTQUFpQjtvQkFDakYsa0JBQU0sR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUNGLG9CQUFDO1lBQUQsQ0FKQSxBQUlDLENBSmtDLHlCQUFXLEdBSTdDO1lBSkQ7Z0JBTEMsZ0JBQVMsQ0FBQztvQkFDVixRQUFRLEVBQUMsZUFBZTtvQkFDeEIsV0FBVyxFQUFDLGlFQUFpRTtvQkFDN0UsU0FBUyxFQUFFLENBQUMsZ0VBQWdFLENBQUM7aUJBQzdFLENBQUM7Z0JBRTZCLFdBQUEsYUFBTSxDQUFDLHNDQUEwQixDQUFDLENBQUE7aURBQS9DLGlCQUFVOzZCQUczQjt1Q0FKWSxhQUFhO1FBSXpCLENBQUMiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2xpZGVzL3ByZWFtYmxlL3dlYkNvbXBvbmVudHMvd2ViQ29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1NsaWRlQ29tbW9ufSBmcm9tICcuLi8uLi9zbGlkZUNvbW1vbi9zbGlkZUNvbW1vbic7XG5cbmltcG9ydCB7SE9TVF9TTElERV9DT05UQUlORVJfQ0xBU1N9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOidXZWJDb21wb25lbnRzJyxcblx0dGVtcGxhdGVVcmw6J3NyYy9jb21wb25lbnRzL3NsaWRlcy9wcmVhbWJsZS93ZWJDb21wb25lbnRzL3dlYkNvbXBvbmVudHMuaHRtbCcsXG5cdHN0eWxlVXJsczogWydzcmMvY29tcG9uZW50cy9zbGlkZXMvcHJlYW1ibGUvd2ViQ29tcG9uZW50cy93ZWJDb21wb25lbnRzLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdlYkNvbXBvbmVudHMgZXh0ZW5kcyBTbGlkZUNvbW1vbntcblx0Y29uc3RydWN0b3IoZWx0OiBFbGVtZW50UmVmLCBASW5qZWN0KEhPU1RfU0xJREVfQ09OVEFJTkVSX0NMQVNTKSBob3N0Q2xhc3M6IHN0cmluZykge1xuXHRcdHN1cGVyKGVsdCwgaG9zdENsYXNzKTtcblx0fVxufSJdfQ==
