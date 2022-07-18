let homePage = require('../controllers/homeController');

describe('Home Test', () => {
    it('Load home page', () => {
        expect(homePage.index).toBe('<h3>Hello world Master!!! <div>You are main page</div></h3>');
    });
  
  
    it('Move to page About us', () => {
        expect(homePage.index).toBe('<h4>About us</h4>');
    });
  });