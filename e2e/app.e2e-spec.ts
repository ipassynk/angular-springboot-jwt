import { AngularSpringbootJwtPage } from './app.po';

describe('angular-springboot-jwt App', () => {
  let page: AngularSpringbootJwtPage;

  beforeEach(() => {
    page = new AngularSpringbootJwtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
