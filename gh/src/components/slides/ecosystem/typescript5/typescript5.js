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
    var core_1, slideCommon_1, editor_1, editorTab_1, constants_1, Typescript5;
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
            Typescript5 = (function (_super) {
                __extends(Typescript5, _super);
                function Typescript5(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return Typescript5;
            }(slideCommon_1.SlideCommon));
            Typescript5 = __decorate([
                core_1.Component({
                    selector: 'Typescript5',
                    templateUrl: 'src/components/slides/ecosystem/typescript5/typescript5.html',
                    styleUrls: ['src/components/slides/ecosystem/typescript5/typescript5.css'],
                    directives: [editor_1.Editor, editorTab_1.EditorTab]
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], Typescript5);
            exports_1("Typescript5", Typescript5);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9lY29zeXN0ZW0vdHlwZXNjcmlwdDUvdHlwZXNjcmlwdDUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFBaUMsK0JBQVc7Z0JBQzNDLHFCQUFZLEdBQWUsRUFBc0MsU0FBaUI7b0JBQ2pGLGtCQUFNLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFDRixrQkFBQztZQUFELENBSkEsQUFJQyxDQUpnQyx5QkFBVyxHQUkzQztZQUpEO2dCQU5DLGdCQUFTLENBQUM7b0JBQ1YsUUFBUSxFQUFDLGFBQWE7b0JBQ3RCLFdBQVcsRUFBQyw4REFBOEQ7b0JBQzFFLFNBQVMsRUFBRSxDQUFDLDZEQUE2RCxDQUFDO29CQUN2RSxVQUFVLEVBQUUsQ0FBQyxlQUFNLEVBQUUscUJBQVMsQ0FBQztpQkFDbEMsQ0FBQztnQkFFNkIsV0FBQSxhQUFNLENBQUMsc0NBQTBCLENBQUMsQ0FBQTtpREFBL0MsaUJBQVU7MkJBRzNCO3FDQUpZLFdBQVc7UUFJdkIsQ0FBQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zbGlkZXMvZWNvc3lzdGVtL3R5cGVzY3JpcHQ1L3R5cGVzY3JpcHQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2xpZGVDb21tb259IGZyb20gJy4uLy4uL3NsaWRlQ29tbW9uL3NsaWRlQ29tbW9uJztcbmltcG9ydCB7RWRpdG9yfSBmcm9tICcuLi8uLi8uLi9lZGl0b3IvZWRpdG9yJztcbmltcG9ydCB7RWRpdG9yVGFifSBmcm9tICcuLi8uLi8uLi9lZGl0b3JUYWIvZWRpdG9yVGFiJztcblxuXG5pbXBvcnQge0hPU1RfU0xJREVfQ09OVEFJTkVSX0NMQVNTfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjonVHlwZXNjcmlwdDUnLFxuXHR0ZW1wbGF0ZVVybDonc3JjL2NvbXBvbmVudHMvc2xpZGVzL2Vjb3N5c3RlbS90eXBlc2NyaXB0NS90eXBlc2NyaXB0NS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ3NyYy9jb21wb25lbnRzL3NsaWRlcy9lY29zeXN0ZW0vdHlwZXNjcmlwdDUvdHlwZXNjcmlwdDUuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW0VkaXRvciwgRWRpdG9yVGFiXVxufSlcbmV4cG9ydCBjbGFzcyBUeXBlc2NyaXB0NSBleHRlbmRzIFNsaWRlQ29tbW9ue1xuXHRjb25zdHJ1Y3RvcihlbHQ6IEVsZW1lbnRSZWYsIEBJbmplY3QoSE9TVF9TTElERV9DT05UQUlORVJfQ0xBU1MpIGhvc3RDbGFzczogc3RyaW5nKSB7XG5cdFx0c3VwZXIoZWx0LCBob3N0Q2xhc3MpO1xuXHR9XG59Il19
