import { TestBed } from '@angular/core/testing';

import { CounterGroupService } from './counter-group.service';

describe('CounterGroupService', () => {
  let service: CounterGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change count of counters when reset size', () => {
    // given
    // when
    service.setSize('10');
    // then
    expect(service.counters.length).toBe(10);
  });

  it('should set size when create instance', () => {
    expect(service.size).toBe(5);
  });

  it('should contain counters when create instance', () => {
    expect(service.counters.length).toBe(service.size);
  });

  it('should change all counter to 0 when call resetAll', () => {
    // given
    service.counters[0].account = 1;
    service.counters[1].account = 2;
    service.counters[2].account = 3;
    // when
    service.resetAll();
    // then
    expect(service.sum()).toBe(0);
    expect(service.counters[0].account).toBe(0);
    expect(service.counters[1].account).toBe(0);
    expect(service.counters[2].account).toBe(0);
  });
});
