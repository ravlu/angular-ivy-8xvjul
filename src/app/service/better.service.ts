export class BetterService {
  id: number = 0;
  name: string = ' test';
  public constructor() {
    this.id++;
    console.log('Better: ' + this.id);
  }
  public logger() {
    console.log('Better' + this.name);
  }
}
