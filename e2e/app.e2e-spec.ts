import { AvengersAngularPage } from './app.po';

describe('avengers-angular App', () => {
  let page: AvengersAngularPage;

  beforeEach(() => {
    page = new AvengersAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
