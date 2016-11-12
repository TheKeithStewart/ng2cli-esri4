import { Ng2cliEsri4Page } from './app.po';

describe('ng2cli-esri4 App', function() {
  let page: Ng2cliEsri4Page;

  beforeEach(() => {
    page = new Ng2cliEsri4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
