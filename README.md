[![Build Status](https://travis-ci.org/NetanelBasal/angular2-take-until-destroy.svg?branch=master)](https://travis-ci.org/NetanelBasal/angular2-take-until-destroy)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
# Angular 2+ - Unsubscribe for pros

##### Declarative way to unsubscribe from observables when the component destroyed

## Installation
`npm install angular2-take-until-destroy --save`

## Usage
```js
import { TakeUntilDestroy } from "angular2-take-until-destroy";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html'
})
@TakeUntilDestroy
export class InboxComponent implements OnDestroy {
  componentDestroy;
  constructor( ) {
    const timer$ = Observable.interval(1000)
      .takeUntil(this.componentDestroy())
      .subscribe(val => console.log(val))
  }

  // If you work with AOT this method must be present, even if empty! 
  // Otherwise 'ng build --prod' will optimize away any calls to ngOnDestroy, 
  // even if the method is added by the @TakeUntilDestroy decorator
  ngOnDestroy() {
    // You can also do whatever you need here
  }

}
```

