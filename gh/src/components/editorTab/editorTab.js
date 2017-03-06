System.register(["@angular/core", "../../services/constants"], function (exports_1, context_1) {
    "use strict";
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
    var core_1, constants_1, EditorTab;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            // An editortab can be used alone (to display some code whith highlighted syntax)
            // or as child of the editor component, then it's a tab of the editor
            EditorTab = (function () {
                // TODO: Mieux comprendre la nécessité de forwardRef et comment s'en affranchir:
                //  https://github.com/angular/angular/issues/2660
                function EditorTab(eltRef, cdr, jquery, prettyPrint) {
                    var _this = this;
                    this.cdr = cdr;
                    this.prettyPrint = prettyPrint;
                    this._alone = false;
                    // Is the current visible (used by the editor
                    // to hide inactive tabs)
                    this.visible = false;
                    //The active class is set on the visible editortab,
                    // whereas the inactive one is set on all other tabs
                    this.getCssClass = function () {
                        return (_this.visible ? 'active' : 'inactive');
                    };
                    // Retrieve the code for the current editortab
                    this.getCode = function () {
                        return _this.elt.text();
                    };
                    this.elt = jquery(eltRef.nativeElement);
                }
                Object.defineProperty(EditorTab.prototype, "alone", {
                    get: function () {
                        return this._alone;
                    },
                    set: function (val) {
                        this._alone = val;
                        if (val === true) {
                            this.visible = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                // When the view is "ready", call the prettyprint()
                // library which highlight the code
                EditorTab.prototype.ngAfterViewInit = function () {
                    if (this.alone) {
                        this.prettyPrint();
                    }
                    else {
                        this.cdr.detectChanges();
                    }
                };
                ;
                return EditorTab;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], EditorTab.prototype, "title", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], EditorTab.prototype, "fileType", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Boolean)
            ], EditorTab.prototype, "_alone", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Boolean),
                __metadata("design:paramtypes", [Boolean])
            ], EditorTab.prototype, "alone", null);
            EditorTab = __decorate([
                core_1.Component({
                    selector: 'editortab',
                    templateUrl: 'src/components/editorTab/editorTab.html',
                    styleUrls: ['src/components/editorTab/editorTab.css']
                }),
                __param(2, core_1.Inject(constants_1.JQUERY)),
                __param(3, core_1.Inject(constants_1.GPRETTIFYER)),
                __metadata("design:paramtypes", [core_1.ElementRef,
                    core_1.ChangeDetectorRef, Object, Object])
            ], EditorTab);
            exports_1("EditorTab", EditorTab);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2VkaXRvclRhYi9lZGl0b3JUYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkEsaUZBQWlGO1lBQ2pGLHFFQUFxRTtZQUNyRTtnQkE0QkEsZ0ZBQWdGO2dCQUNoRixrREFBa0Q7Z0JBQ2hELG1CQUNFLE1BQWtCLEVBQ1gsR0FBcUIsRUFDWixNQUFXLEVBQ0UsV0FBZ0I7b0JBSi9DLGlCQU9DO29CQUxRLFFBQUcsR0FBSCxHQUFHLENBQWtCO29CQUVDLGdCQUFXLEdBQVgsV0FBVyxDQUFLO29CQTlCdEMsV0FBTSxHQUFXLEtBQUssQ0FBQztvQkFNaEMsNkNBQTZDO29CQUM3Qyx5QkFBeUI7b0JBQ2xCLFlBQU8sR0FBVyxLQUFLLENBQUM7b0JBMkIvQixtREFBbUQ7b0JBQ25ELG9EQUFvRDtvQkFDcEQsZ0JBQVcsR0FBRTt3QkFDWCxNQUFNLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztvQkFDaEQsQ0FBQyxDQUFBO29CQUVELDhDQUE4QztvQkFDOUMsWUFBTyxHQUFFO3dCQUNQLE1BQU0sQ0FBTyxLQUFJLENBQUMsR0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNoQyxDQUFDLENBQUE7b0JBWkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQXBCRCxzQkFBSSw0QkFBSzt5QkFPVDt3QkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDckIsQ0FBQzt5QkFURCxVQUFVLEdBQVk7d0JBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO3dCQUNsQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQzs0QkFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ3RCLENBQUM7b0JBQ0gsQ0FBQzs7O21CQUFBO2dCQWVBLENBQUM7Z0JBYUYsbURBQW1EO2dCQUNuRCxtQ0FBbUM7Z0JBQ25DLG1DQUFlLEdBQWY7b0JBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7d0JBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNyQixDQUFDO29CQUNELElBQUksQ0FBQSxDQUFDO3dCQUNILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQzNCLENBQUM7Z0JBQ0gsQ0FBQztnQkFBQSxDQUFDO2dCQUVKLGdCQUFDO1lBQUQsQ0E3REEsQUE2REMsSUFBQTtZQTNEVTtnQkFBUixZQUFLLEVBQUU7MENBQWUsTUFBTTtvREFBQztZQUNyQjtnQkFBUixZQUFLLEVBQUU7MENBQWtCLE1BQU07dURBQUM7WUFDeEI7Z0JBQVIsWUFBSyxFQUFFOztxREFBd0I7WUFhaEM7Z0JBSEMsWUFBSyxFQUFFOzs7a0RBUVA7WUF0Qkg7Z0JBUEMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsV0FBVyxFQUFFLHlDQUF5QztvQkFDdEQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7aUJBQ3RELENBQUM7Z0JBb0NHLFdBQUEsYUFBTSxDQUFDLGtCQUFNLENBQUMsQ0FBQTtnQkFDZCxXQUFBLGFBQU0sQ0FBQyx1QkFBVyxDQUFDLENBQUE7aURBSFosaUJBQVU7b0JBQ1Asd0JBQWlCO3lCQTZCL0I7bUNBN0RZLFNBQVM7UUE2RHJCLENBQUMiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvZWRpdG9yVGFiL2VkaXRvclRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBEaXJlY3RpdmUsIFxuICBJbnB1dCwgSW5qZWN0LCBcbiAgSG9zdCwgZm9yd2FyZFJlZiwgLy8gQWZ0ZXJWaWV3SW5pdCwgXG4gIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dQUkVUVElGWUVSLCBKUVVFUll9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvcnRhYicsXG4gIHRlbXBsYXRlVXJsOiAnc3JjL2NvbXBvbmVudHMvZWRpdG9yVGFiL2VkaXRvclRhYi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NyYy9jb21wb25lbnRzL2VkaXRvclRhYi9lZGl0b3JUYWIuY3NzJ11cbn0pXG4vLyBBbiBlZGl0b3J0YWIgY2FuIGJlIHVzZWQgYWxvbmUgKHRvIGRpc3BsYXkgc29tZSBjb2RlIHdoaXRoIGhpZ2hsaWdodGVkIHN5bnRheClcbi8vIG9yIGFzIGNoaWxkIG9mIHRoZSBlZGl0b3IgY29tcG9uZW50LCB0aGVuIGl0J3MgYSB0YWIgb2YgdGhlIGVkaXRvclxuZXhwb3J0IGNsYXNzIEVkaXRvclRhYiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXRcbntcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBmaWxlVHlwZTogU3RyaW5nO1xuICBASW5wdXQoKSBfYWxvbmU6IGJvb2xlYW49IGZhbHNlO1xuXG4gIC8vQ29ycmVzcG9uZCB0byB0aGUgZWRpdG9ydGFiIGVsZW1lbnRcbiAgcHJpdmF0ZSBlbHQ6IEhUTUxFbGVtZW50O1xuICAvL0NvcnJlc3BvbmQgdG8gdGhlIGVkaXRvcnRhYiBjb2RlIGNvbnRlbnRcbiAgcHJpdmF0ZSBjb2RlOiBzdHJpbmc7XG4gIC8vIElzIHRoZSBjdXJyZW50IHZpc2libGUgKHVzZWQgYnkgdGhlIGVkaXRvclxuICAvLyB0byBoaWRlIGluYWN0aXZlIHRhYnMpXG4gIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICAvLyBTZXQgYWxvbmUgdG8gdHJ1ZSB0byB1c2UgdGhlIGVkaXRvcnRhYiBvdXRzaWRlXG4gIC8vIGFmIGFuIGVkaXRvciBcbiAgc2V0IGFsb25lKHZhbDogYm9vbGVhbil7XG4gICAgdGhpcy5fYWxvbmUgPSB2YWw7XG4gICAgaWYgKHZhbCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhbG9uZSgpe1xuICAgIHJldHVybiB0aGlzLl9hbG9uZTtcbiAgfVxuXG4vLyBUT0RPOiBNaWV1eCBjb21wcmVuZHJlIGxhIG7DqWNlc3NpdMOpIGRlIGZvcndhcmRSZWYgZXQgY29tbWVudCBzJ2VuIGFmZnJhbmNoaXI6XG4vLyAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjY2MFxuICBjb25zdHJ1Y3RvcihcbiAgICBlbHRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGNkcjpDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEpRVUVSWSkganF1ZXJ5OiBhbnksXG4gICAgQEluamVjdChHUFJFVFRJRllFUikgcHJpdmF0ZSBwcmV0dHlQcmludDogYW55XG4gICApIHsgIFxuICAgIHRoaXMuZWx0ID0ganF1ZXJ5KGVsdFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfTtcblxuICAvL1RoZSBhY3RpdmUgY2xhc3MgaXMgc2V0IG9uIHRoZSB2aXNpYmxlIGVkaXRvcnRhYixcbiAgLy8gd2hlcmVhcyB0aGUgaW5hY3RpdmUgb25lIGlzIHNldCBvbiBhbGwgb3RoZXIgdGFic1xuICBnZXRDc3NDbGFzcz0gKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuICh0aGlzLnZpc2libGUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZScpO1xuICB9XG5cbiAgLy8gUmV0cmlldmUgdGhlIGNvZGUgZm9yIHRoZSBjdXJyZW50IGVkaXRvcnRhYlxuICBnZXRDb2RlPSAoKTpzdHJpbmcgPT4ge1xuICAgIHJldHVybiAoPGFueT50aGlzLmVsdCkudGV4dCgpO1xuICB9XG5cbiAgLy8gV2hlbiB0aGUgdmlldyBpcyBcInJlYWR5XCIsIGNhbGwgdGhlIHByZXR0eXByaW50KClcbiAgLy8gbGlicmFyeSB3aGljaCBoaWdobGlnaHQgdGhlIGNvZGVcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFsb25lKXtcbiAgICAgIHRoaXMucHJldHR5UHJpbnQoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH07XG5cbn0iXX0=
