import { CounterGroupService } from './../service/counter-group.service';
import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  constructor(private counterGroupService: CounterGroupService) {
  }
  public size: number = 5;
  public get counters(): Array<Counter>{
    return this.counterGroupService.counters;
  }
  ngOnInit(): void {
  }
  public sum(): number {
    return this.counterGroupService.sum();
  }
  public setSize(size: string): void {
    return this.counterGroupService.setSize(size);
  }
  public resetAll(): void {
    this.counterGroupService.resetAll();
  }
}
