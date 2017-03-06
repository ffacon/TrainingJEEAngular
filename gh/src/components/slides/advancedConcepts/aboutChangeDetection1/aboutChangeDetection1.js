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
    var core_1, slideCommon_1, editor_1, editorTab_1, constants_1, AboutChangeDetection1;
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
            AboutChangeDetection1 = (function (_super) {
                __extends(AboutChangeDetection1, _super);
                function AboutChangeDetection1(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return AboutChangeDetection1;
            }(slideCommon_1.SlideCommon));
            AboutChangeDetection1 = __decorate([
                core_1.Component({
                    selector: 'AboutChangeDetection1',
                    templateUrl: 'src/components/slides/advancedConcepts/aboutChangeDetection1/aboutChangeDetection1.html',
                    styleUrls: ['src/components/slides/advancedConcepts/aboutChangeDetection1/aboutChangeDetection1.css'],
                    directives: [editor_1.Editor, editorTab_1.EditorTab]
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], AboutChangeDetection1);
            exports_1("AboutChangeDetection1", AboutChangeDetection1);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9hZHZhbmNlZENvbmNlcHRzL2Fib3V0Q2hhbmdlRGV0ZWN0aW9uMS9hYm91dENoYW5nZURldGVjdGlvbjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUEyQyx5Q0FBVztnQkFDckQsK0JBQVksR0FBZSxFQUFzQyxTQUFpQjtvQkFDakYsa0JBQU0sR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUNGLDRCQUFDO1lBQUQsQ0FKQSxBQUlDLENBSjBDLHlCQUFXLEdBSXJEO1lBSkQ7Z0JBTkMsZ0JBQVMsQ0FBQztvQkFDVixRQUFRLEVBQUMsdUJBQXVCO29CQUNoQyxXQUFXLEVBQUMseUZBQXlGO29CQUNyRyxTQUFTLEVBQUUsQ0FBQyx3RkFBd0YsQ0FBQztvQkFDckcsVUFBVSxFQUFFLENBQUMsZUFBTSxFQUFFLHFCQUFTLENBQUM7aUJBQy9CLENBQUM7Z0JBRTZCLFdBQUEsYUFBTSxDQUFDLHNDQUEwQixDQUFDLENBQUE7aURBQS9DLGlCQUFVO3FDQUczQjsrQ0FKWSxxQkFBcUI7UUFJakMsQ0FBQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zbGlkZXMvYWR2YW5jZWRDb25jZXB0cy9hYm91dENoYW5nZURldGVjdGlvbjEvYWJvdXRDaGFuZ2VEZXRlY3Rpb24xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2xpZGVDb21tb259IGZyb20gJy4uLy4uL3NsaWRlQ29tbW9uL3NsaWRlQ29tbW9uJztcbmltcG9ydCB7RWRpdG9yfSBmcm9tICcuLi8uLi8uLi9lZGl0b3IvZWRpdG9yJztcbmltcG9ydCB7RWRpdG9yVGFifSBmcm9tICcuLi8uLi8uLi9lZGl0b3JUYWIvZWRpdG9yVGFiJztcblxuaW1wb3J0IHtIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTU30gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6J0Fib3V0Q2hhbmdlRGV0ZWN0aW9uMScsXG5cdHRlbXBsYXRlVXJsOidzcmMvY29tcG9uZW50cy9zbGlkZXMvYWR2YW5jZWRDb25jZXB0cy9hYm91dENoYW5nZURldGVjdGlvbjEvYWJvdXRDaGFuZ2VEZXRlY3Rpb24xLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnc3JjL2NvbXBvbmVudHMvc2xpZGVzL2FkdmFuY2VkQ29uY2VwdHMvYWJvdXRDaGFuZ2VEZXRlY3Rpb24xL2Fib3V0Q2hhbmdlRGV0ZWN0aW9uMS5jc3MnXSxcblx0ZGlyZWN0aXZlczogW0VkaXRvciwgRWRpdG9yVGFiXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENoYW5nZURldGVjdGlvbjEgZXh0ZW5kcyBTbGlkZUNvbW1vbntcblx0Y29uc3RydWN0b3IoZWx0OiBFbGVtZW50UmVmLCBASW5qZWN0KEhPU1RfU0xJREVfQ09OVEFJTkVSX0NMQVNTKSBob3N0Q2xhc3M6IHN0cmluZykge1xuXHRcdHN1cGVyKGVsdCwgaG9zdENsYXNzKTtcblx0fVxufSJdfQ==
