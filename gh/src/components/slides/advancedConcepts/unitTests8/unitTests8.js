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
    var core_1, slideCommon_1, editor_1, editorTab_1, constants_1, UnitTests8;
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
            UnitTests8 = (function (_super) {
                __extends(UnitTests8, _super);
                function UnitTests8(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return UnitTests8;
            }(slideCommon_1.SlideCommon));
            UnitTests8 = __decorate([
                core_1.Component({
                    selector: 'UnitTests8',
                    templateUrl: 'src/components/slides/advancedConcepts/unitTests8/unitTests8.html',
                    styleUrls: ['src/components/slides/advancedConcepts/unitTests8/unitTests8.css'],
                    directives: [editor_1.Editor, editorTab_1.EditorTab]
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], UnitTests8);
            exports_1("UnitTests8", UnitTests8);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9hZHZhbmNlZENvbmNlcHRzL3VuaXRUZXN0czgvdW5pdFRlc3RzOC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQWdDLDhCQUFXO2dCQUMxQyxvQkFBWSxHQUFlLEVBQXNDLFNBQWlCO29CQUNqRixrQkFBTSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0YsaUJBQUM7WUFBRCxDQUpBLEFBSUMsQ0FKK0IseUJBQVcsR0FJMUM7WUFKRDtnQkFOQyxnQkFBUyxDQUFDO29CQUNWLFFBQVEsRUFBQyxZQUFZO29CQUNyQixXQUFXLEVBQUMsbUVBQW1FO29CQUMvRSxTQUFTLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQztvQkFDL0UsVUFBVSxFQUFFLENBQUMsZUFBTSxFQUFFLHFCQUFTLENBQUM7aUJBQy9CLENBQUM7Z0JBRTZCLFdBQUEsYUFBTSxDQUFDLHNDQUEwQixDQUFDLENBQUE7aURBQS9DLGlCQUFVOzBCQUczQjtvQ0FKWSxVQUFVO1FBSXRCLENBQUMiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2xpZGVzL2FkdmFuY2VkQ29uY2VwdHMvdW5pdFRlc3RzOC91bml0VGVzdHM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2xpZGVDb21tb259IGZyb20gJy4uLy4uL3NsaWRlQ29tbW9uL3NsaWRlQ29tbW9uJztcbmltcG9ydCB7RWRpdG9yfSBmcm9tICcuLi8uLi8uLi9lZGl0b3IvZWRpdG9yJztcbmltcG9ydCB7RWRpdG9yVGFifSBmcm9tICcuLi8uLi8uLi9lZGl0b3JUYWIvZWRpdG9yVGFiJztcblxuaW1wb3J0IHtIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTU30gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6J1VuaXRUZXN0czgnLFxuXHR0ZW1wbGF0ZVVybDonc3JjL2NvbXBvbmVudHMvc2xpZGVzL2FkdmFuY2VkQ29uY2VwdHMvdW5pdFRlc3RzOC91bml0VGVzdHM4Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnc3JjL2NvbXBvbmVudHMvc2xpZGVzL2FkdmFuY2VkQ29uY2VwdHMvdW5pdFRlc3RzOC91bml0VGVzdHM4LmNzcyddLFxuXHRkaXJlY3RpdmVzOiBbRWRpdG9yLCBFZGl0b3JUYWJdXG59KVxuZXhwb3J0IGNsYXNzIFVuaXRUZXN0czggZXh0ZW5kcyBTbGlkZUNvbW1vbntcblx0Y29uc3RydWN0b3IoZWx0OiBFbGVtZW50UmVmLCBASW5qZWN0KEhPU1RfU0xJREVfQ09OVEFJTkVSX0NMQVNTKSBob3N0Q2xhc3M6IHN0cmluZykge1xuXHRcdHN1cGVyKGVsdCwgaG9zdENsYXNzKTtcblx0fVxufSJdfQ==
