import { ErgaPage } from './app.po';

describe('erga App', () => {
  let page: ErgaPage;

  beforeEach(() => {
    page = new ErgaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
