import { MyChoicesPage } from './app.po';

describe('my-choices App', () => {
  let page: MyChoicesPage;

  beforeEach(() => {
    page = new MyChoicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
