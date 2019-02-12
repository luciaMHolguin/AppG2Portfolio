import { AppPortfolioG2Page } from './app.po';

describe('app-portfolio-g2 App', function() {
  let page: AppPortfolioG2Page;

  beforeEach(() => {
    page = new AppPortfolioG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
