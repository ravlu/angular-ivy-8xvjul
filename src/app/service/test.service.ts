import { Injectable } from '@angular/core';
import { CustomCommonModule } from '../common/custom-common.module';
@Injectable({
  providedIn: CustomCommonModule
})
export class TestService {
  id: number = 0;
  public constructor() {
    this.id++;
    console.log(this.id);
  }
}
