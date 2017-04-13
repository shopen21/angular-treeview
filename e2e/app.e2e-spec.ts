import { AngularTreeviewPage } from './app.po';

describe('angular-treeview App', () => {
  let page: AngularTreeviewPage;

  beforeEach(() => {
    page = new AngularTreeviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
