WEB_SERVER_PORT = 9888;

//use zombie.js as headless browser
var Browser = require('zombie');
var assert = require('assert');
var app = null
describe( 
  'Modal Page Dialog', 
  function() {
  
    before( 
      function() {
        app = require('../../examples/page-message');
        //this.server = http.createServer(app).listen(3000);
        // initialize the browser using the same port as the test application
        this.browser = new Browser({ site: 'http://localhost:'+WEB_SERVER_PORT+'/' });
      } 
    );
    
    // load the contact page
    before(
      function( done ) {
        this.browser.visit( '/demo/', done);
      }
    );
    
    it( 'should show the header and footer', 
      function() {
        this.browser.assert.success();
        this.browser.assert.text( 'h1', 'Modal Message Demo' );
        this.browser.assert.element( 'div.copyright-div' );
      }
    );  
    
    it( 'should show modal dialog', 
      function() {
        this.browser.assert.success();
        this.browser.assert.element( '.ui-dialog' );
        this.browser.assert.element( '#PgMesgDlg' );
      }
    );
    it( 'should show Okey Dokey button', 
        function() {
          this.browser.assert.element( '.ui-dialog-buttonpane .ui-button-text' )
        }
      );
    }
);