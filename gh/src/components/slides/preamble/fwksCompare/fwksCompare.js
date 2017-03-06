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
    var core_1, slideCommon_1, constants_1, FwksCompare;
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
            FwksCompare = (function (_super) {
                __extends(FwksCompare, _super);
                function FwksCompare(elt, hostClass) {
                    _super.call(this, elt, hostClass);
                }
                return FwksCompare;
            }(slideCommon_1.SlideCommon));
            FwksCompare = __decorate([
                core_1.Component({
                    selector: 'FwksCompare',
                    templateUrl: 'src/components/slides/preamble/fwksCompare/fwksCompare.html',
                    styleUrls: ['src/components/slides/preamble/fwksCompare/fwksCompare.css']
                }),
                __param(1, core_1.Inject(constants_1.HOST_SLIDE_CONTAINER_CLASS)),
                __metadata("design:paramtypes", [core_1.ElementRef, String])
            ], FwksCompare);
            exports_1("FwksCompare", FwksCompare);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NsaWRlcy9wcmVhbWJsZS9md2tzQ29tcGFyZS9md2tzQ29tcGFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBQWlDLCtCQUFXO2dCQUMzQyxxQkFBWSxHQUFlLEVBQXNDLFNBQWlCO29CQUNqRixrQkFBTSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0Ysa0JBQUM7WUFBRCxDQUpBLEFBSUMsQ0FKZ0MseUJBQVcsR0FJM0M7WUFKRDtnQkFMQyxnQkFBUyxDQUFDO29CQUNWLFFBQVEsRUFBQyxhQUFhO29CQUN0QixXQUFXLEVBQUMsNkRBQTZEO29CQUN6RSxTQUFTLEVBQUUsQ0FBQyw0REFBNEQsQ0FBQztpQkFDekUsQ0FBQztnQkFFNkIsV0FBQSxhQUFNLENBQUMsc0NBQTBCLENBQUMsQ0FBQTtpREFBL0MsaUJBQVU7MkJBRzNCO3FDQUpZLFdBQVc7UUFJdkIsQ0FBQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zbGlkZXMvcHJlYW1ibGUvZndrc0NvbXBhcmUvZndrc0NvbXBhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtTbGlkZUNvbW1vbn0gZnJvbSAnLi4vLi4vc2xpZGVDb21tb24vc2xpZGVDb21tb24nO1xuXG5pbXBvcnQge0hPU1RfU0xJREVfQ09OVEFJTkVSX0NMQVNTfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjonRndrc0NvbXBhcmUnLFxuXHR0ZW1wbGF0ZVVybDonc3JjL2NvbXBvbmVudHMvc2xpZGVzL3ByZWFtYmxlL2Z3a3NDb21wYXJlL2Z3a3NDb21wYXJlLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnc3JjL2NvbXBvbmVudHMvc2xpZGVzL3ByZWFtYmxlL2Z3a3NDb21wYXJlL2Z3a3NDb21wYXJlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZ3a3NDb21wYXJlIGV4dGVuZHMgU2xpZGVDb21tb257XG5cdGNvbnN0cnVjdG9yKGVsdDogRWxlbWVudFJlZiwgQEluamVjdChIT1NUX1NMSURFX0NPTlRBSU5FUl9DTEFTUykgaG9zdENsYXNzOiBzdHJpbmcpIHtcblx0XHRzdXBlcihlbHQsIGhvc3RDbGFzcyk7XG5cdH1cbn0iXX0=
