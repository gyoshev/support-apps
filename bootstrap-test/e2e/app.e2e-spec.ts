import { BootstrapTestPage } from './app.po';

describe('bootstrap-test App', () => {
  let page: BootstrapTestPage;

  beforeEach(() => {
    page = new BootstrapTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
