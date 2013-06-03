var endianbuffer = require('index');


describe('endianbuffer', function() {
    
  it('should export Buffer', function() {
    expect(endianbuffer.Buffer).to.be.a('function');
  });
  
});
