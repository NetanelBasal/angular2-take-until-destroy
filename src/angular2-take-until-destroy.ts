import { Subject } from "rxjs";

export function TakeUntilDestroy( constructor : any ) {
  let original = constructor.prototype.ngOnDestroy;
  let subject;
  constructor.prototype.componentDestroy = function () {
    subject = new Subject();
    return subject.asObservable();
  }
  constructor.prototype.ngOnDestroy = function () {
    original && typeof original === 'function' && original.apply(this, arguments);
    subject.complete();
  }
}
