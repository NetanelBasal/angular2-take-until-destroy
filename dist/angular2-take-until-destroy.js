import { Subject } from 'rxjs/Subject';
export function TakeUntilDestroy(constructor) {
    var originalDestroy = constructor.prototype.ngOnDestroy;
    if (typeof originalDestroy !== 'function') {
        console.warn(constructor.name + " is using @TakeUntilDestroy but does not implement OnDestroy");
    }
    constructor.prototype.componentDestroy = function () {
        this._takeUntilDestroy$ = this._takeUntilDestroy$ || new Subject();
        return this._takeUntilDestroy$.asObservable();
    };
    constructor.prototype.ngOnDestroy = function () {
        originalDestroy && typeof originalDestroy === 'function' && originalDestroy.apply(this, arguments);
        this._takeUntilDestroy$ && this._takeUntilDestroy$.complete();
    };
}
//# sourceMappingURL=angular2-take-until-destroy.js.map