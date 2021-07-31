import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()
export class BaseService {
  name = 'Base';
  id = 0;
  public constructor() {
    this.id++;
    console.log('Basecons:' + this.name);
  }
  public DoWork() {
    console.log('Base:Work' + this.name);
    console.log('BaseWork:' + this.id);
  }
}

@Injectable()
export class UpperService extends BaseService {
  name = 'upper';
  public constructor() {
    super();
    console.log('UpperCons:' + this.name);
  }
  public DoWork() {
    // super.name = super.name.toUpperCase();
    this.name = this.name.toUpperCase();
    // super.DoWork();
  }
}
@Injectable()
export class LowerService extends BaseService {
  name = 'LOWER';
  public constructor() {
    super();
    console.log('LowerCons:' + this.name);
  }
  public DoWork() {
    //super.name = super.name.toLowerCase();
    this.name = this.name.toLowerCase();
    // super.DoWork();
  }
}

@Component({
  selector: 'cmp-complex',
  template: '<h1>{{name}}</h1><cmp-complex-ext></cmp-complex-ext>',
  providers: [
    UpperService,
    {
      provide: BaseService,
      useExisting: UpperService
    }
  ]
})
export class ComplexComponent implements OnInit {
  name = '';
  public constructor(
    private baseService: BaseService,
    private upperService: UpperService
  ) {}
  ngOnInit() {
    this.name = this.baseService.name;

    // this.baseService.DoWork(this.baseService.name);
    this.upperService.DoWork();
    console.log('Comp1: ' + this.baseService.name);
    this.baseService.DoWork();

    console.log('Comp2: ' + this.upperService.name);
  }
}
@Component({
  selector: 'cmp-complex-ext',
  template: '<h1>{{name}}</h1>',
  providers: [
    LowerService,
    {
      provide: BaseService,
      useClass: LowerService
    }
  ]
})
export class ComplexExtComponent implements OnInit {
  name = '';
  public constructor(
    private baseService: BaseService,
    private lowerService: LowerService
  ) {}
  ngOnInit() {
    this.name = this.baseService.name;

    //this.baseService.DoWork(this.baseService.name);
    this.lowerService.DoWork();
    console.log('Comp1:' + this.baseService.name);
    this.baseService.DoWork();

    console.log('Comp2: ' + this.lowerService.name);
  }
}
