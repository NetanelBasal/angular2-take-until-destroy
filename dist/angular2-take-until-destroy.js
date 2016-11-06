import { Subject } from "rxjs";
export function TakeUntilDestroy(constructor) {
    var original = constructor.prototype.ngOnDestroy;
    var subject;
    constructor.prototype.componentDestroy = function () {
        subject = new Subject();
        return subject.asObservable();
    };
    constructor.prototype.ngOnDestroy = function () {
        original && typeof original === 'function' && original.apply(this, arguments);
        subject.next('ngOnDestroy');
        subject.unsubscribe();
    };
}
//# sourceMappingURL=angular2-take-until-destroy.js.map