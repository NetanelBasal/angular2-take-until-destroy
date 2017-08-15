"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function TakeUntilDestroy(constructor) {
    var originalDestroy = constructor.prototype.ngOnDestroy;
    constructor.prototype.componentDestroy = function () {
        this._takeUntilDestroy$ = this._takeUntilDestroy$ || new rxjs_1.Subject();
        return this._takeUntilDestroy$.asObservable();
    };
    constructor.prototype.ngOnDestroy = function () {
        originalDestroy && typeof originalDestroy === 'function' && originalDestroy.apply(this, arguments);
        this._takeUntilDestroy$ && this._takeUntilDestroy$.complete();
    };
}
exports.TakeUntilDestroy = TakeUntilDestroy;
//# sourceMappingURL=angular2-take-until-destroy.js.map