import * as test from 'tape';
import { Observable } from 'rxjs/Observable';

import TakeUntilDestroy from '../src';

test('with multiple component instances', textContext1 => {
    @TakeUntilDestroy
    class Test {
        componentDestroy: () => Observable<any>;
        ngOnDestroy() {}
    }

    const component1: Test = new Test();
    const component2: Test = new Test();

    textContext1.test('when a component is destroyed', textContext2 => {
        textContext2.test('it should not destroy other instances', textContext3 => {
           textContext3.plan(1);

           component2.componentDestroy().subscribe(null, null, () => {
               textContext3.fail('Other instances should not be destroyed');
           });

           component1.ngOnDestroy();

           textContext3.pass();
       });
    });
});
