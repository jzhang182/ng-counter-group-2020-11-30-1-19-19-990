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

  it('should set size when create instance', () => {
    expect(component.size).toBe(5);
  });

  it('should contain counters when create instance', () => {
    expect(component.counters.length).toBe(component.size);
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
    let expectedSum = 0;
    component.counters.forEach(element => {
      expectedSum += element.account;
    });
    // when
    component.setSize('10');
    // then
    expect(component.counters.length).toBe(10);
  });
});
