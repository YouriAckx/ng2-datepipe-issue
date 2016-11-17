import { DateformatPage } from './app.po';

describe('dateformat App', function() {
  let page: DateformatPage;

  beforeEach(() => {
    page = new DateformatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
