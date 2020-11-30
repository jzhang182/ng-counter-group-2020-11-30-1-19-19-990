import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  public account: number = 0;

  ngOnInit(): void {
  }

  public increase(): void {
    this.account++;
  }

  public decrease(): void {
    this.account--;
  }

}
