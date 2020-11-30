import { Counter } from './counter';

describe('Counter', () => {
  it('should set account when create an instance', () => {
    // given
    const account = 10;

    // when
    const counter = new Counter(account);

    // then
    expect(counter.account).toBe(10);
  });

  it('should increase account by 1 when call increase', () => {
    // given
    const account = 10;

    // when
    const counter = new Counter(account);
    counter.increase();

    // then
    expect(counter.account).toBe(account + 1);
  });

  it('should decrease account by 1 when call decrease', () => {
    // given
    const account = 10;

    // when
    const counter = new Counter(account);
    counter.decrease();

    // then
    expect(counter.account).toBe(account - 1);
  });
});
