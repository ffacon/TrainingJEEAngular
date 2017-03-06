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
    var core_1, slideCommon_1, editor_1, editorTab_1, constants_1, Observables2;
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
            Observables2 = (function (_super) {
                __extends(Observables2, _super);
                function Observables2(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return Observables2;
            }(slideCommon_1.SlideCommon));
            Observables2 = __decorate([
                core_1.Component({
                    selector: 'Observables2',
                    templateUrl: 'src/components/slides/ecosystem/observables2/observables2.html',
                    styleUrls: ['src/components/slides/ecosystem/observables2/observables2.css'],
                    directives: [editor_1.Editor, editorTab_1.EditorTab]
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], Observables2);
            exports_1("Observables2", Observables2);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9lY29zeXN0ZW0vb2JzZXJ2YWJsZXMyL29ic2VydmFibGVzMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQWtDLGdDQUFXO2dCQUM1QyxzQkFBWSxHQUFlLEVBQXNDLFNBQWlCO29CQUNqRixrQkFBTSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0YsbUJBQUM7WUFBRCxDQUpBLEFBSUMsQ0FKaUMseUJBQVcsR0FJNUM7WUFKRDtnQkFOQyxnQkFBUyxDQUFDO29CQUNWLFFBQVEsRUFBQyxjQUFjO29CQUN2QixXQUFXLEVBQUMsZ0VBQWdFO29CQUM1RSxTQUFTLEVBQUUsQ0FBQywrREFBK0QsQ0FBQztvQkFDNUUsVUFBVSxFQUFFLENBQUMsZUFBTSxFQUFFLHFCQUFTLENBQUM7aUJBQy9CLENBQUM7Z0JBRTZCLFdBQUEsYUFBTSxDQUFDLHNDQUEwQixDQUFDLENBQUE7aURBQS9DLGlCQUFVOzRCQUczQjtzQ0FKWSxZQUFZO1FBSXhCLENBQUMiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2xpZGVzL2Vjb3N5c3RlbS9vYnNlcnZhYmxlczIvb2JzZXJ2YWJsZXMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2xpZGVDb21tb259IGZyb20gJy4uLy4uL3NsaWRlQ29tbW9uL3NsaWRlQ29tbW9uJztcbmltcG9ydCB7RWRpdG9yfSBmcm9tICcuLi8uLi8uLi9lZGl0b3IvZWRpdG9yJztcbmltcG9ydCB7RWRpdG9yVGFifSBmcm9tICcuLi8uLi8uLi9lZGl0b3JUYWIvZWRpdG9yVGFiJztcblxuaW1wb3J0IHtIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTU30gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6J09ic2VydmFibGVzMicsXG5cdHRlbXBsYXRlVXJsOidzcmMvY29tcG9uZW50cy9zbGlkZXMvZWNvc3lzdGVtL29ic2VydmFibGVzMi9vYnNlcnZhYmxlczIuaHRtbCcsXG5cdHN0eWxlVXJsczogWydzcmMvY29tcG9uZW50cy9zbGlkZXMvZWNvc3lzdGVtL29ic2VydmFibGVzMi9vYnNlcnZhYmxlczIuY3NzJ10sXG5cdGRpcmVjdGl2ZXM6IFtFZGl0b3IsIEVkaXRvclRhYl1cbn0pXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZXMyIGV4dGVuZHMgU2xpZGVDb21tb257XG5cdGNvbnN0cnVjdG9yKGVsdDogRWxlbWVudFJlZiwgQEluamVjdChIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTUykgaG9zdENsYXNzOiBzdHJpbmcpIHtcblx0XHRzdXBlcihlbHQsIGhvc3RDbGFzcyk7XG5cdH1cbn0iXX0=
