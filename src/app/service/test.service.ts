import { Injectable } from '@angular/core';
//import { CustomCommonModule } from '../common/custom-common.module';
@Injectable()
export class TestService {
  id: number = 0;
  name: string;
  public constructor() {
    this.id++;
    console.log('Test ' + this.id);
  }
  public logger() {
    console.log('Test ' + this.name);
  }
}
