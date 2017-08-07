import { Subject } from "rxjs";
export function TakeUntilDestroy(constructor) {
    var originalDestroy = constructor.prototype.ngOnDestroy;
    constructor.prototype.componentDestroy = function () {
        this._takeUntilDestroy$ = new Subject();
        return this._takeUntilDestroy$.asObservable();
    };
    constructor.prototype.ngOnDestroy = function () {
        originalDestroy && typeof originalDestroy === 'function' && originalDestroy.apply(this, arguments);
        this._takeUntilDestroy$ && this._takeUntilDestroy$.complete();
    };
}
//# sourceMappingURL=angular2-take-until-destroy.js.map