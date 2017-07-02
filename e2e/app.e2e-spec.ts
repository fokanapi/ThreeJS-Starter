import { ThreeJSStarterPage } from './app.po';

describe('three-js-starter App', () => {
  let page: ThreeJSStarterPage;

  beforeEach(() => {
    page = new ThreeJSStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
