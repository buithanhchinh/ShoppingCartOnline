import { ShoppingcartonlinePage } from './app.po';

describe('shoppingcartonline App', () => {
  let page: ShoppingcartonlinePage;

  beforeEach(() => {
    page = new ShoppingcartonlinePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
