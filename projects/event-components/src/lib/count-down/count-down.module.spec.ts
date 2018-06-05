import { CountDownModule } from './count-down.module';

describe('CountDownModule', () => {
  let countDownModule: CountDownModule;

  beforeEach(() => {
    countDownModule = new CountDownModule();
  });

  it('should create an instance', () => {
    expect(countDownModule).toBeTruthy();
  });
});
