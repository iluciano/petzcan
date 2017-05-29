import { PetzcanPage } from './app.po';

describe('petzcan App', function() {
  let page: PetzcanPage;

  beforeEach(() => {
    page = new PetzcanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
