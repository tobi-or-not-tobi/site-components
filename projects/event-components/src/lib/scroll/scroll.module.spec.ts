import { ScrollModule } from './scroll.module';

describe('ScrollModule', () => {
  let scrollModule: ScrollModule;

  beforeEach(() => {
    scrollModule = new ScrollModule();
  });

  it('should create an instance', () => {
    expect(scrollModule).toBeTruthy();
  });
});
