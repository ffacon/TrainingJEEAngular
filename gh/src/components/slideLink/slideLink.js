System.register(["@angular/core"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, SlideLink;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            // Basic class which contains informations about a slide ( its name, its index)
            // These informations can be used to display a tooltip when the cursor is on the 
            // link element, and can also be used to navigate to a given slide
            SlideLink = (function () {
                function SlideLink() {
                    var _this = this;
                    this.navigate = new core_1.EventEmitter();
                    // Send an event to the parent component (menu)
                    // to trigger a change of slide
                    this.goToSlide = function () {
                        _this.navigate.next(_this.model.getId());
                        return false;
                    };
                }
                Object.defineProperty(SlideLink.prototype, "model", {
                    get: function () {
                        return this._model;
                    },
                    // Set the model informations for a slide (some text based on the component name, and the slide index)
                    set: function (model) {
                        this._model = model;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SlideLink;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", core_1.EventEmitter)
            ], SlideLink.prototype, "navigate", void 0);
            SlideLink = __decorate([
                core_1.Component({
                    selector: 'slide-link',
                    styleUrls: ['src/components/slideLink/slideLink.css'],
                    templateUrl: 'src/components/slideLink/slideLink.html',
                    inputs: ['model']
                }),
                __metadata("design:paramtypes", [])
            ], SlideLink);
            exports_1("SlideLink", SlideLink);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlTGluay9zbGlkZUxpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQSwrRUFBK0U7WUFDL0UsaUZBQWlGO1lBQ2pGLGtFQUFrRTtZQUNsRTtnQkFUQTtvQkFBQSxpQkE0QkM7b0JBakJVLGFBQVEsR0FBeUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBVzlELCtDQUErQztvQkFDL0MsK0JBQStCO29CQUMvQixjQUFTLEdBQUc7d0JBQ1gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUN2QyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNkLENBQUMsQ0FBQTtnQkFDRixDQUFDO2dCQWRBLHNCQUFJLDRCQUFLO3lCQUlUO3dCQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNwQixDQUFDO29CQVBELHNHQUFzRzt5QkFDdEcsVUFBVSxLQUF1Qjt3QkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLENBQUM7OzttQkFBQTtnQkFZRixnQkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFqQlU7Z0JBQVQsYUFBTSxFQUFFOzBDQUFXLG1CQUFZO3VEQUE4QjtZQUYvRDtnQkFUQyxnQkFBUyxDQUFDO29CQUNWLFFBQVEsRUFBQyxZQUFZO29CQUNyQixTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztvQkFDckQsV0FBVyxFQUFFLHlDQUF5QztvQkFDdEQsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO2lCQUNqQixDQUFDOzt5QkF1QkQ7bUNBbkJZLFNBQVM7UUFtQnJCLENBQUMiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2xpZGVMaW5rL3NsaWRlTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy9zZXJ2aWNlc1xuaW1wb3J0IHtTbGlkZUxpbmtNb2RlbEl0Zn0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2xpZGVzRGVmcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvcjonc2xpZGUtbGluaycsXG5cdHN0eWxlVXJsczogWydzcmMvY29tcG9uZW50cy9zbGlkZUxpbmsvc2xpZGVMaW5rLmNzcyddLFxuXHR0ZW1wbGF0ZVVybDogJ3NyYy9jb21wb25lbnRzL3NsaWRlTGluay9zbGlkZUxpbmsuaHRtbCcsXG5cdGlucHV0czogWydtb2RlbCddXG59KVxuLy8gQmFzaWMgY2xhc3Mgd2hpY2ggY29udGFpbnMgaW5mb3JtYXRpb25zIGFib3V0IGEgc2xpZGUgKCBpdHMgbmFtZSwgaXRzIGluZGV4KVxuLy8gVGhlc2UgaW5mb3JtYXRpb25zIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgYSB0b29sdGlwIHdoZW4gdGhlIGN1cnNvciBpcyBvbiB0aGUgXG4vLyBsaW5rIGVsZW1lbnQsIGFuZCBjYW4gYWxzbyBiZSB1c2VkIHRvIG5hdmlnYXRlIHRvIGEgZ2l2ZW4gc2xpZGVcbmV4cG9ydCBjbGFzcyBTbGlkZUxpbmsge1xuXHRfbW9kZWw6IFNsaWRlTGlua01vZGVsSXRmO1xuXHRAT3V0cHV0KCkgbmF2aWdhdGU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIFNldCB0aGUgbW9kZWwgaW5mb3JtYXRpb25zIGZvciBhIHNsaWRlIChzb21lIHRleHQgYmFzZWQgb24gdGhlIGNvbXBvbmVudCBuYW1lLCBhbmQgdGhlIHNsaWRlIGluZGV4KVxuXHRzZXQgbW9kZWwobW9kZWw6U2xpZGVMaW5rTW9kZWxJdGYpe1xuXHRcdHRoaXMuX21vZGVsID0gbW9kZWw7XG5cdH1cblxuXHRnZXQgbW9kZWwoKTpTbGlkZUxpbmtNb2RlbEl0Zntcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWw7XG5cdH1cblxuXHQvLyBTZW5kIGFuIGV2ZW50IHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IChtZW51KVxuXHQvLyB0byB0cmlnZ2VyIGEgY2hhbmdlIG9mIHNsaWRlXG5cdGdvVG9TbGlkZSA9ICgpOiBib29sZWFuID0+IHtcblx0XHR0aGlzLm5hdmlnYXRlLm5leHQodGhpcy5tb2RlbC5nZXRJZCgpKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0iXX0=
