import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../counter/counter.component';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterGroupComponent, CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return sum of all counters when call sum', () => {
    // given
    let expectedSum = 0;
    component.counters.forEach(element => {
      expectedSum += element.account;
    });
    // when
    const sum = component.sum();
    // then
    expect(sum).toBe(0);
  });

  it('should change count of counters when reset size', () => {
    // given
    // when
    component.setSize('10');
    // then
    expect(component.counters.length).toBe(10);
  });

  it('should change all counter to 0 when call resetAll', () => {
    // given
    component.counters[0].account = 1;
    component.counters[1].account = 2;
    component.counters[2].account = 3;
    // when
    component.resetAll();
    // then
    expect(component.sum()).toBe(0);
    expect(component.counters[0].account).toBe(0);
    expect(component.counters[1].account).toBe(0);
    expect(component.counters[2].account).toBe(0);
  });
});
