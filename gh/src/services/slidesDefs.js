System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SlideLinkModel;
    return {
        setters: [],
        execute: function () {
            // Just a been which contains data about a slide
            // Have a look at the SLideLink component to see
            // where it's used
            SlideLinkModel = (function () {
                function SlideLinkModel() {
                }
                SlideLinkModel.prototype.getComponentName = function () {
                    return this.componentName;
                };
                SlideLinkModel.prototype.setComponentName = function (componentName) {
                    this.componentName = componentName;
                };
                SlideLinkModel.prototype.getId = function () {
                    return this.id;
                };
                SlideLinkModel.prototype.setId = function (id) {
                    this.id = id;
                };
                SlideLinkModel.prototype.getText = function () {
                    return this.text;
                };
                SlideLinkModel.prototype.setText = function (text) {
                    this.text = text;
                };
                SlideLinkModel.prototype.getTooltip = function () {
                    return this.tooltip;
                };
                SlideLinkModel.prototype.setTooltip = function (tooltip) {
                    this.tooltip = tooltip;
                };
                // Create an instance of SlideLinkModel based on a RouteDefinition object
                // and an index (index the slide)
                SlideLinkModel.fromRouteAndIndex = function (routeDef, index) {
                    var newslide = new SlideLinkModel();
                    newslide.setId(index);
                    newslide.setComponentName(routeDef.name);
                    var slidePath = routeDef.slidePath;
                    newslide.setTooltip(slidePath);
                    newslide.setText('' + (index + 1));
                    return newslide;
                };
                return SlideLinkModel;
            }());
            exports_1("SlideLinkModel", SlideLinkModel);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9zbGlkZXNEZWZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFvQkEsZ0RBQWdEO1lBQ2hELGdEQUFnRDtZQUNoRCxrQkFBa0I7WUFDbEI7Z0JBQUE7Z0JBa0RBLENBQUM7Z0JBNUNBLHlDQUFnQixHQUFoQjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsYUFBcUI7b0JBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELDhCQUFLLEdBQUw7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ2hCLENBQUM7Z0JBRUQsOEJBQUssR0FBTCxVQUFNLEVBQVU7b0JBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCxnQ0FBTyxHQUFQO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNsQixDQUFDO2dCQUVELGdDQUFPLEdBQVAsVUFBUSxJQUFZO29CQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDbEIsQ0FBQztnQkFFRCxtQ0FBVSxHQUFWO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNyQixDQUFDO2dCQUVELG1DQUFVLEdBQVYsVUFBVyxPQUFlO29CQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCx5RUFBeUU7Z0JBQ3pFLGlDQUFpQztnQkFDMUIsZ0NBQWlCLEdBQXhCLFVBQXlCLFFBQXlCLEVBQUUsS0FBYTtvQkFDaEUsSUFBSSxRQUFRLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7b0JBQ3BELFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3RCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLElBQUksU0FBUyxHQUFTLFFBQVMsQ0FBQyxTQUFTLENBQUM7b0JBQzFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9CLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUYscUJBQUM7WUFBRCxDQWxEQSxBQWtEQyxJQUFBOztRQUFBLENBQUMiLCJmaWxlIjoic3JjL3NlcnZpY2VzL3NsaWRlc0RlZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlRGVmaW5pdGlvbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVMaW5rTW9kZWxJdGZ7XG5cblx0Z2V0Q29tcG9uZW50TmFtZSgpOiBzdHJpbmc7XG5cdHNldENvbXBvbmVudE5hbWUoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZDtcblxuXHRnZXRJZCgpOiBudW1iZXI7XG5cdHNldElkKGlkOiBudW1iZXIpOiB2b2lkO1xuXG5cdGdldFRleHQoKTogc3RyaW5nO1xuXHRzZXRUZXh0KHRleHQ6IHN0cmluZyk6IHZvaWQ7XG5cblx0Z2V0VG9vbHRpcCgpOiBzdHJpbmc7XG5cdHNldFRvb2x0aXAodG9vbHRpcDogc3RyaW5nKTogdm9pZDtcblxufVxuXG5cbi8vIEp1c3QgYSBiZWVuIHdoaWNoIGNvbnRhaW5zIGRhdGEgYWJvdXQgYSBzbGlkZVxuLy8gSGF2ZSBhIGxvb2sgYXQgdGhlIFNMaWRlTGluayBjb21wb25lbnQgdG8gc2VlXG4vLyB3aGVyZSBpdCdzIHVzZWRcbmV4cG9ydCBjbGFzcyBTbGlkZUxpbmtNb2RlbCBpbXBsZW1lbnRzIFNsaWRlTGlua01vZGVsSXRme1xuXHRwcml2YXRlIGNvbXBvbmVudE5hbWU6IHN0cmluZztcblx0cHJpdmF0ZSBpZDogbnVtYmVyO1xuXHRwcml2YXRlIHRvb2x0aXA6IHN0cmluZztcblx0cHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XG5cblx0Z2V0Q29tcG9uZW50TmFtZSgpOiBzdHJpbmd7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50TmFtZTtcblx0fVxuXG5cdHNldENvbXBvbmVudE5hbWUoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZHtcblx0XHR0aGlzLmNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lO1xuXHR9XG5cblx0Z2V0SWQoKTogbnVtYmVye1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0c2V0SWQoaWQ6IG51bWJlcik6IHZvaWR7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHR9XG5cblx0Z2V0VGV4dCgpOiBzdHJpbmd7XG5cdFx0cmV0dXJuIHRoaXMudGV4dDtcblx0fVxuXG5cdHNldFRleHQodGV4dDogc3RyaW5nKTogdm9pZHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9XG5cblx0Z2V0VG9vbHRpcCgpOiBzdHJpbmd7XG5cdFx0cmV0dXJuIHRoaXMudG9vbHRpcDtcblx0fVxuXG5cdHNldFRvb2x0aXAodG9vbHRpcDogc3RyaW5nKTogdm9pZHtcblx0XHR0aGlzLnRvb2x0aXAgPSB0b29sdGlwO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIFNsaWRlTGlua01vZGVsIGJhc2VkIG9uIGEgUm91dGVEZWZpbml0aW9uIG9iamVjdFxuXHQvLyBhbmQgYW4gaW5kZXggKGluZGV4IHRoZSBzbGlkZSlcblx0c3RhdGljIGZyb21Sb3V0ZUFuZEluZGV4KHJvdXRlRGVmOiBSb3V0ZURlZmluaXRpb24sIGluZGV4OiBudW1iZXIpOiBTbGlkZUxpbmtNb2RlbEl0ZiB7XG5cdFx0dmFyIG5ld3NsaWRlOiBTbGlkZUxpbmtNb2RlbCA9IG5ldyBTbGlkZUxpbmtNb2RlbCgpO1xuXHRcdG5ld3NsaWRlLnNldElkKGluZGV4KTtcblx0XHRuZXdzbGlkZS5zZXRDb21wb25lbnROYW1lKHJvdXRlRGVmLm5hbWUpO1xuXHRcdHZhciBzbGlkZVBhdGggPSAoPGFueT5yb3V0ZURlZikuc2xpZGVQYXRoO1xuXHRcdG5ld3NsaWRlLnNldFRvb2x0aXAoc2xpZGVQYXRoKTtcblx0XHRuZXdzbGlkZS5zZXRUZXh0KCcnICsgKGluZGV4ICsgMSkpO1xuXHRcdHJldHVybiBuZXdzbGlkZTtcblx0fVxuXG59Il19
