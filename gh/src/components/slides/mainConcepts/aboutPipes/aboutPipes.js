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
    var core_1, slideCommon_1, editor_1, editorTab_1, constants_1, AboutPipes;
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
            AboutPipes = (function (_super) {
                __extends(AboutPipes, _super);
                function AboutPipes(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return AboutPipes;
            }(slideCommon_1.SlideCommon));
            AboutPipes = __decorate([
                core_1.Component({
                    selector: 'aboutPipes',
                    templateUrl: 'src/components/slides/mainConcepts/aboutPipes/aboutPipes.html',
                    styleUrls: ['src/components/slides/mainConcepts/aboutPipes/aboutPipes.css'],
                    directives: [editor_1.Editor, editorTab_1.EditorTab]
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], AboutPipes);
            exports_1("AboutPipes", AboutPipes);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9tYWluQ29uY2VwdHMvYWJvdXRQaXBlcy9hYm91dFBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBZ0MsOEJBQVc7Z0JBQzFDLG9CQUFZLEdBQWUsRUFBc0MsU0FBaUI7b0JBQ2pGLGtCQUFNLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFDRixpQkFBQztZQUFELENBSkEsQUFJQyxDQUorQix5QkFBVyxHQUkxQztZQUpEO2dCQU5DLGdCQUFTLENBQUM7b0JBQ1YsUUFBUSxFQUFDLFlBQVk7b0JBQ3JCLFdBQVcsRUFBQywrREFBK0Q7b0JBQzNFLFNBQVMsRUFBRSxDQUFDLDhEQUE4RCxDQUFDO29CQUMzRSxVQUFVLEVBQUUsQ0FBRSxlQUFNLEVBQUUscUJBQVMsQ0FBQztpQkFDaEMsQ0FBQztnQkFFNkIsV0FBQSxhQUFNLENBQUMsc0NBQTBCLENBQUMsQ0FBQTtpREFBL0MsaUJBQVU7MEJBRzNCO29DQUpZLFVBQVU7UUFJdEIsQ0FBQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zbGlkZXMvbWFpbkNvbmNlcHRzL2Fib3V0UGlwZXMvYWJvdXRQaXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1NsaWRlQ29tbW9ufSBmcm9tICcuLi8uLi9zbGlkZUNvbW1vbi9zbGlkZUNvbW1vbic7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vLi4vLi4vZWRpdG9yL2VkaXRvcic7XG5pbXBvcnQge0VkaXRvclRhYn0gZnJvbSAnLi4vLi4vLi4vZWRpdG9yVGFiL2VkaXRvclRhYic7XG5cbmltcG9ydCB7SE9TVF9TTElERV9DT05UQUlORVJfQ0xBU1N9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOidhYm91dFBpcGVzJyxcblx0dGVtcGxhdGVVcmw6J3NyYy9jb21wb25lbnRzL3NsaWRlcy9tYWluQ29uY2VwdHMvYWJvdXRQaXBlcy9hYm91dFBpcGVzLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnc3JjL2NvbXBvbmVudHMvc2xpZGVzL21haW5Db25jZXB0cy9hYm91dFBpcGVzL2Fib3V0UGlwZXMuY3NzJ10sXG5cdGRpcmVjdGl2ZXM6IFsgRWRpdG9yLCBFZGl0b3JUYWJdXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0UGlwZXMgZXh0ZW5kcyBTbGlkZUNvbW1vbntcblx0Y29uc3RydWN0b3IoZWx0OiBFbGVtZW50UmVmLCBASW5qZWN0KEhPU1RfU0xJREVfQ09OVEFJTkVSX0NMQVNTKSBob3N0Q2xhc3M6IHN0cmluZykge1xuXHRcdHN1cGVyKGVsdCwgaG9zdENsYXNzKTtcblx0fVxufSJdfQ==
