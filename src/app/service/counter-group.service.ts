import { Injectable } from '@angular/core';
import { Counter } from '../models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterGroupService {

  constructor() {
    this.counters = new Array<Counter>();
    this.generateCounters();
  }
  public size: number = 5;
  public counters: Array<Counter>;
  public sum(): number {
    return this.counters.reduce((result, element) => {
      return result + element.account;
    }, 0);
  }

  public generateCounters(): void {
    for (let step = 0; step < this.size; step++) {
      this.counters.push(new Counter());
    }
  }

  public setSize(size: string): void {
    this.size = +size;
    this.counters = new Array<Counter>();
    this.generateCounters();
  }
}
