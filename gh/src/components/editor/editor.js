System.register(["@angular/core", "@angular/common", "../editorTab/editorTab", "../../services/constants"], function (exports_1, context_1) {
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
    var core_1, common_1, editorTab_1, constants_1, Editor;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (editorTab_1_1) {
                editorTab_1 = editorTab_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            // The editor allows to manage a set of editortabs
            // Either to display one specific tab, either to 
            // retrieve the code of several tabs and submit it
            // to different services (plunker for example, or fiddle)
            Editor = (function () {
                function Editor(prettyPrint, jquery, eltRef, cdr) {
                    var _this = this;
                    this.prettyPrint = prettyPrint;
                    this.jquery = jquery;
                    this.fiddle = false;
                    this.plunker = false;
                    this.ng2 = false;
                    this.localExec = false;
                    this.title = 'sample';
                    this.description = 'sample';
                    this.framework = 'library';
                    this.version = 'pure';
                    this.wrap = 'domReady';
                    this.fiddleUrl = 'http://jsfiddle.net/api/post/' + this.framework + '/' + this.version + '/';
                    this.plunkerUrl = 'http://plnkr.co/edit/';
                    this.plunkerData = [];
                    this.isViewInit = false;
                    this.tabs = [];
                    //Make one editortab visible and hide others
                    this.displayTab = function (index) {
                        _this.getTabs()
                            .forEach(function (currentEditor, currentIndex) {
                            currentEditor.visible = false;
                            if (currentIndex === index) {
                                currentEditor.visible = true;
                            }
                        });
                    };
                    // Concatenate and return the code by filetype
                    //For example, if your editor contains 2 tabs of
                    // filetype js and 2 tabs of filetype html,
                    // getcode('js') will concatenate the two js
                    // tabs and return it
                    this.getCode = function (filteType) {
                        var res = "";
                        _this.getTabs()
                            .forEach(function (tab, index) {
                            if (tab.fileType === filteType) {
                                res += tab.getCode();
                            }
                        });
                        return res;
                    };
                    // Returns an array of objects which will be used into
                    // hidden input fields (look at editor.html) and which are appropriated for the
                    // plunker service
                    this.getPlunkerData = function () {
                        //Clear array
                        _this.plunkerData.splice(0);
                        _this.plunkerData.push({ name: 'description', value: _this.description });
                        _this.getTabs()
                            .forEach(function (tab, index) {
                            _this.plunkerData.push({ name: 'files[' + tab.title + ']', value: tab.getCode() });
                        });
                        return _this.plunkerData;
                    };
                    //Submit the form available, which can be used for fiddle or plunker
                    // depending on the parameters you set
                    this.submit = function (e) {
                        e.preventDefault();
                        _this.formElement[0].submit();
                    };
                    // Will concat all js files in the editor and evaluate it
                    this.execJs = function () {
                        _this.getTabs().forEach(function (tab, index) {
                            if (tab.fileType === 'js') {
                                console.log('Eval ' + tab.title);
                                eval(tab.getCode());
                            }
                        });
                    };
                    this.elt = eltRef.nativeElement;
                    this.cdr = cdr;
                }
                //Get all EditorTabs components
                Editor.prototype.getTabs = function () {
                    var _this = this;
                    if (this.isViewInit) {
                        return this.tabs;
                    }
                    this.tabs.splice(0);
                    (this.viewTabs === undefined ? [] : this.viewTabs.toArray())
                        .concat(this.contentTabs.toArray())
                        .forEach(function (value, index) {
                        if (!_this.ng2 && index === 0) {
                            value.visible = true;
                        }
                        else if (_this.ng2 && index === 2) {
                            value.visible = true;
                        }
                        else {
                            value.visible = false;
                        }
                        _this.tabs.push(value);
                    });
                    return this.tabs;
                };
                // When the view is ready, call prettyprint and
                // call change detection on the editor and its tabs
                // to avoid some problems
                Editor.prototype.ngAfterViewInit = function () {
                    this.prettyPrint();
                    this.formElement = this.jquery(this.elt).find('form');
                    this.cdr.detectChanges();
                    this.isViewInit = true;
                    this.getTabs().forEach(function (tab, index) {
                        tab.cdr.detectChanges();
                    });
                };
                ;
                return Editor;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Boolean)
            ], Editor.prototype, "fiddle", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Boolean)
            ], Editor.prototype, "plunker", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Boolean)
            ], Editor.prototype, "ng2", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Boolean)
            ], Editor.prototype, "localExec", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], Editor.prototype, "title", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], Editor.prototype, "description", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], Editor.prototype, "framework", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], Editor.prototype, "version", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], Editor.prototype, "wrap", void 0);
            __decorate([
                core_1.ViewChildren(editorTab_1.EditorTab),
                __metadata("design:type", core_1.QueryList)
            ], Editor.prototype, "viewTabs", void 0);
            __decorate([
                core_1.ContentChildren(editorTab_1.EditorTab),
                __metadata("design:type", core_1.QueryList)
            ], Editor.prototype, "contentTabs", void 0);
            Editor = __decorate([
                core_1.Component({
                    selector: 'editor', inputs: ['localexec'],
                    templateUrl: 'src/components/editor/editor.html',
                    directives: [Editor, editorTab_1.EditorTab, common_1.NgIf],
                    styleUrls: ['src/components/editor/editor.css']
                }),
                __param(0, core_1.Inject(constants_1.GPRETTIFYER)),
                __param(1, core_1.Inject(constants_1.JQUERY)),
                __metadata("design:paramtypes", [Object, Object, core_1.ElementRef,
                    core_1.ChangeDetectorRef])
            ], Editor);
            exports_1("Editor", Editor);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkEsa0RBQWtEO1lBQ2xELGlEQUFpRDtZQUNqRCxrREFBa0Q7WUFDbEQseURBQXlEO1lBQ3pEO2dCQThCQyxnQkFDOEIsV0FBZ0IsRUFDckIsTUFBVyxFQUNuQyxNQUFrQixFQUNaLEdBQXNCO29CQUo3QixpQkFRQztvQkFQNkIsZ0JBQVcsR0FBWCxXQUFXLENBQUs7b0JBQ3JCLFdBQU0sR0FBTixNQUFNLENBQUs7b0JBOUIzQixXQUFNLEdBQVksS0FBSyxDQUFDO29CQUN4QixZQUFPLEdBQVksS0FBSyxDQUFDO29CQUN0QixRQUFHLEdBQVcsS0FBSyxDQUFDO29CQUN2QixjQUFTLEdBQVksS0FBSyxDQUFDO29CQUMzQixVQUFLLEdBQVcsUUFBUSxDQUFDO29CQUN6QixnQkFBVyxHQUFXLFFBQVEsQ0FBQztvQkFDL0IsY0FBUyxHQUFXLFNBQVMsQ0FBQztvQkFDOUIsWUFBTyxHQUFXLE1BQU0sQ0FBQztvQkFDekIsU0FBSSxHQUFXLFVBQVUsQ0FBQztvQkFFNUIsY0FBUyxHQUFHLCtCQUErQixHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO29CQUN4RixlQUFVLEdBQUcsdUJBQXVCLENBQUM7b0JBRWpDLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztvQkFNcEMsZUFBVSxHQUFFLEtBQUssQ0FBQztvQkFNbEIsU0FBSSxHQUFvQixFQUFFLENBQUM7b0JBMkNuQyw0Q0FBNEM7b0JBQy9DLGVBQVUsR0FBRyxVQUFDLEtBQWE7d0JBRXBCLEtBQUksQ0FBQyxPQUFPLEVBQUU7NkJBQ25CLE9BQU8sQ0FBQyxVQUFDLGFBQXdCLEVBQUUsWUFBb0I7NEJBQ3ZELGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOzRCQUM5QixFQUFFLENB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IHtcblx0Q29tcG9uZW50LCBcblx0SW5wdXQsXG5cdEluamVjdCwgXG4gICAgVmlld0NoaWxkcmVuLFxuXHRDb250ZW50Q2hpbGRyZW4sIFxuXHRBZnRlclZpZXdJbml0LCBcblx0UXVlcnlMaXN0LCBcblx0RWxlbWVudFJlZixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZlxufVxuZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtFZGl0b3JUYWJ9IGZyb20gJy4uL2VkaXRvclRhYi9lZGl0b3JUYWInO1xuaW1wb3J0IHtHUFJFVFRJRllFUiwgSlFVRVJZfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuXG5cbmludGVyZmFjZSBQbHVua2VyRGF0YXtcbiAgICBuYW1lOnN0cmluZztcbiAgICB2YWx1ZTpzdHJpbmc7IFxufVxuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjonZWRpdG9yJywgaW5wdXRzOlsnbG9jYWxleGVjJ10sXG5cdHRlbXBsYXRlVXJsOidzcmMvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmh0bWwnLFxuXHRkaXJlY3RpdmVzOltFZGl0b3IsIEVkaXRvclRhYiwgTmdJZl0sXG5cdHN0eWxlVXJsczogWydzcmMvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNzcyddXG59KVxuLy8gVGhlIGVkaXRvciBhbGxvd3MgdG8gbWFuYWdlIGEgc2V0IG9mIGVkaXRvcnRhYnNcbi8vIEVpdGhlciB0byBkaXNwbGF5IG9uZSBzcGVjaWZpYyB0YWIsIGVpdGhlciB0byBcbi8vIHJldHJpZXZlIHRoZSBjb2RlIG9mIHNldmVyYWwgdGFicyBhbmQgc3VibWl0IGl0XG4vLyB0byBkaWZmZXJlbnQgc2VydmljZXMgKHBsdW5rZXIgZm9yIGV4YW1wbGUsIG9yIGZpZGRsZSlcbmV4cG9ydCBjbGFzcyBFZGl0b3IgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKSBmaWRkbGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgcGx1bmtlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIG5nMjogYm9vbGVhbj0gZmFsc2U7XG5cdEBJbnB1dCgpIGxvY2FsRXhlYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJ3NhbXBsZSc7XG5cdEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnc2FtcGxlJztcblx0QElucHV0KCkgZnJhbWV3b3JrOiBzdHJpbmcgPSAnbGlicmFyeSc7XG5cdEBJbnB1dCgpIHZlcnNpb246IHN0cmluZyA9ICdwdXJlJztcblx0QElucHV0KCkgd3JhcDogc3RyaW5nID0gJ2RvbVJlYWR5JztcblxuXHRwdWJsaWMgZmlkZGxlVXJsID0gJ2h0dHA6Ly9qc2ZpZGRsZS5uZXQvYXBpL3Bvc3QvJyArIHRoaXMuZnJhbWV3b3JrICsgJy8nICsgdGhpcy52ZXJzaW9uICsgJy8nO1xuXHRwdWJsaWMgcGx1bmtlclVybCA9ICdodHRwOi8vcGxua3IuY28vZWRpdC8nO1xuICAgIFxuICAgIHByaXZhdGUgcGx1bmtlckRhdGE6IEFycmF5PFBsdW5rZXJEYXRhPj0gW107XG4gICAgXG4gICAgcHJpdmF0ZSBlbHQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZjtcblx0cHJpdmF0ZSBmb3JtRWxlbWVudDogYW55O1xuICAgIFxuICAgIHByaXZhdGUgaXNWaWV3SW5pdD0gZmFsc2U7XG5cbiAgICAvL1JldHJpZXZlIHRoZSBFZGl0b3JUYWIgY29tcG9uZW50cyB3aGljaCBhcmUgaW4gb3VyIGVkaXRvci5odG1sIHRlbXBsYXRlXG4gICAgQFZpZXdDaGlsZHJlbihFZGl0b3JUYWIpIHZpZXdUYWJzOiBRdWVyeUxpc3Q8RWRpdG9yVGFiPjsgXG4gICAgLy9SZXRyaWV2ZSB0aGUgRWRpdG9yVGFiIGNvbXBvbmVudHMgd2hpY2ggYXJlIGluIHRoZSB2aWV3IChhZGRlZCBieSB0aGUgdXNlcilcblx0QENvbnRlbnRDaGlsZHJlbihFZGl0b3JUYWIpIGNvbnRlbnRUYWJzOiBRdWVyeUxpc3Q8RWRpdG9yVGFiPjtcbiAgICBwcml2YXRlIHRhYnM6IEFycmF5PEVkaXRvclRhYj49IFtdO1xuICBcbiAgXG5cdGNvbnN0cnVjdG9yKCBcblx0XHRASW5qZWN0KEdQUkVUVElGWUVSKSBwcml2YXRlIHByZXR0eVByaW50OiBhbnksXG5cdFx0QEluamVjdChKUVVFUlkpIHByaXZhdGUganF1ZXJ5OiBhbnksIFxuXHRcdGVsdFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHtcblx0XHR0aGlzLmVsdCA9IGVsdFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmNkcj0gY2RyO1xuXHR9XG4gICAgXG4gICAgLy9HZXQgYWxsIEVkaXRvclRhYnMgY29tcG9uZW50c1xuICAgIGdldFRhYnMoKXtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzVmlld0luaXQpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFicztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy50YWJzLnNwbGljZSgwKTtcblxuICAgICAgICAodGhpcy52aWV3VGFicyA9PT0gdW5kZWZpbmVkPyBbXSA6IHRoaXMudmlld1RhYnMudG9BcnJheSgpKVxuXHRcdC5jb25jYXQodGhpcy5jb250ZW50VGFicy50b0FycmF5KCkpXG4gICAgICAgIC5mb3JFYWNoKCAoIHZhbHVlOiBFZGl0b3JUYWIsIGluZGV4OiBudW1iZXIgKSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCF0aGlzLm5nMiAmJiBpbmRleCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgdmFsdWUudmlzaWJsZT0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblx0XHRcdGVsc2UgaWYgKHRoaXMubmcyICYmIGluZGV4ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHZhbHVlLnZpc2libGU9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRhYnMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gKTtcbiBcblxuICAgICAgICByZXR1cm4gdGhpcy50YWJzO1xuICAgIH1cblxuICAgIC8vTWFrZSBvbmUgZWRpdG9ydGFiIHZpc2libGUgYW5kIGhpZGUgb3RoZXJzXG5cdGRpc3BsYXlUYWIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nZXRUYWJzKClcblx0XHQuZm9yRWFjaCgoY3VycmVudEVkaXRvcjogRWRpdG9yVGFiLCBjdXJyZW50SW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0Y3VycmVudEVkaXRvci52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHRpZiAoY3VycmVudEluZGV4ID09PSBpbmRleCl7XG5cdFx0XHRcdGN1cnJlbnRFZGl0b3IudmlzaWJsZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gV2hlbiB0aGUgdmlldyBpcyByZWFkeSwgY2FsbCBwcmV0dHlwcmludCBhbmRcblx0Ly8gY2FsbCBjaGFuZ2UgZGV0ZWN0aW9uIG9uIHRoZSBlZGl0b3IgYW5kIGl0cyB0YWJzXG5cdC8vIHRvIGF2b2lkIHNvbWUgcHJvYmxlbXNcblx0bmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXHRcdHRoaXMucHJldHR5UHJpbnQoKTtcblx0XHR0aGlzLmZvcm1FbGVtZW50PSB0aGlzLmpxdWVyeSh0aGlzLmVsdCkuZmluZCgnZm9ybScpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuaXNWaWV3SW5pdD0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRUYWJzKCkuZm9yRWFjaCgodGFiOkVkaXRvclRhYiwgaW5kZXg6IG51bWJlcik9Pntcblx0XHRcdHRhYi5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcblx0fTtcblxuXHQvLyBDb25jYXRlbmF0ZSBhbmQgcmV0dXJuIHRoZSBjb2RlIGJ5IGZpbGV0eXBlXG5cdC8vRm9yIGV4YW1wbGUsIGlmIHlvdXIgZWRpdG9yIGNvbnRhaW5zIDIgdGFicyBvZlxuXHQvLyBmaWxldHlwZSBqcyBhbmQgMiB0YWJzIG9mIGZpbGV0eXBlIGh0bWwsXG5cdC8vIGdldGNvZGUoJ2pzJykgd2lsbCBjb25jYXRlbmF0ZSB0aGUgdHdvIGpzXG5cdC8vIHRhYnMgYW5kIHJldHVybiBpdFxuXHRnZXRDb2RlPSAoZmlsdGVUeXBlOiBzdHJpbmcpOnN0cmluZyA9PiB7XG5cdFx0bGV0IHJlcz0gXCJcIjtcbiAgICAgICAgdGhpcy5nZXRUYWJzKCkgICAgICAgIFxuXHRcdC5mb3JFYWNoKCAodGFiOkVkaXRvclRhYiwgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKHRhYi5maWxlVHlwZSA9PT0gZmlsdGVUeXBlKXtcblx0XHRcdFx0cmVzICs9IHRhYi5nZXRDb2RlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHJlcztcblx0fVxuICAgIFxuICAgIC8vIFJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aGljaCB3aWxsIGJlIHVzZWQgaW50b1xuICAgIC8vIGhpZGRlbiBpbnB1dCBmaWVsZHMgKGxvb2sgYXQgZWRpdG9yLmh0bWwpIGFuZCB3aGljaCBhcmUgYXBwcm9wcmlhdGVkIGZvciB0aGVcbiAgICAvLyBwbHVua2VyIHNlcnZpY2VcbiAgICBnZXRQbHVua2VyRGF0YT0gKCk6QXJyYXk8UGx1bmtlckRhdGE+ID0+IHtcbiAgICAgICAgLy9DbGVhciBhcnJheVxuICAgICAgICB0aGlzLnBsdW5rZXJEYXRhLnNwbGljZSgwKTsgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5wbHVua2VyRGF0YS5wdXNoKHtuYW1lOidkZXNjcmlwdGlvbicsIHZhbHVlOiB0aGlzLmRlc2NyaXB0aW9ufSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdldFRhYnMoKVxuXHRcdC5mb3JFYWNoKCAodGFiOkVkaXRvclRhYiwgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVua2VyRGF0YS5wdXNoKHtuYW1lOidmaWxlc1snICsgdGFiLnRpdGxlICsgJ10nLCB2YWx1ZTogdGFiLmdldENvZGUoKX0pO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzLnBsdW5rZXJEYXRhO1xuICAgIH07XG4gICAgXG4gICAgLy9TdWJtaXQgdGhlIGZvcm0gYXZhaWxhYmxlLCB3aGljaCBjYW4gYmUgdXNlZCBmb3IgZmlkZGxlIG9yIHBsdW5rZXJcbiAgICAvLyBkZXBlbmRpbmcgb24gdGhlIHBhcmFtZXRlcnMgeW91IHNldFxuXHRzdWJtaXQ9IChlOkV2ZW50KTogdm9pZCA9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5mb3JtRWxlbWVudFswXS5zdWJtaXQoKTtcblx0fVxuXG5cdC8vIFdpbGwgY29uY2F0IGFsbCBqcyBmaWxlcyBpbiB0aGUgZWRpdG9yIGFuZCBldmFsdWF0ZSBpdFxuXHRleGVjSnM9ICgpOiB2b2lkID0+IHtcblx0XHR0aGlzLmdldFRhYnMoKS5mb3JFYWNoKCh0YWI6IEVkaXRvclRhYiwgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgXG5cdFx0XHRpZiAodGFiLmZpbGVUeXBlID09PSAnanMnKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFdmFsICcgKyB0YWIudGl0bGUpO1xuXHRcdFx0XHRldmFsKHRhYi5nZXRDb2RlKCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn0iXX0=
