import { Subject } from "rxjs";

export function TakeUntilDestroy( constructor : any ) {
    let originalDestroy = constructor.prototype.ngOnDestroy;

    constructor.prototype.componentDestroy = function () {
        this._takeUntilDestroy$ = new Subject();
        return this._takeUntilDestroy$.asObservable();
    };

    constructor.prototype.ngOnDestroy = function () {
        originalDestroy && typeof originalDestroy === 'function' && originalDestroy.apply(this, arguments);
        this._takeUntilDestroy$ && this._takeUntilDestroy$.complete();
    }
}
