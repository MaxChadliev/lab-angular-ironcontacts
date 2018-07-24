import { ContactAppPage } from './app.po';

describe('contact-app App', function() {
  let page: ContactAppPage;

  beforeEach(() => {
    page = AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
