import { ExtranetPage } from './app.po';

describe('extranet App', () => {
  let page: ExtranetPage;

  beforeEach(() => {
    page = new ExtranetPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
