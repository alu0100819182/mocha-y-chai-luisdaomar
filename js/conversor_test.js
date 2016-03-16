var expect = chai.expect;

describe("Conversor", function() {

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  describe("Medida", function() {
    it("Cambio de f a c", function() {
      expect(Medida.convertir("32f to c")).to.equal("0.00 Celsius");
    });
    /*it("Prueba Matching", function() {
      expect(Medida.match("32f to c")).to.equal("0");
    });*/
  });

  describe("Temperatura", function() {
    it("Creacion de un objeto Farenheit", function() {
      var source = new Farenheit(32);
      expect(source.valor).to.equal(32);
    });
    it("Prueba de Farenheit a Celsius", function() {
      var source = new Farenheit(32);
      expect(source.toCelsius()).to.equal(0);
    });
    it("Prueba de Farenheit a Kelvin", function() {
      var source = new Farenheit(32);
      expect(source.toKelvin()).to.equal(273.15);
    });
    it("Creacion de un objeto Celsius", function() {
      var source = new Celsius(32);
      expect(source.valor).to.equal(32);
    });
    it("Prueba de Celsius a Farenheit", function() {
      var source = new Celsius(32);
      expect(source.toFarenheit()).to.equal(89.6);
    });
    it("Prueba de Celsius a Kelvin", function() {
      var source = new Celsius(32);
      expect(source.toKelvin()).to.equal(305.15);
    });
    it("Creacion de un objeto Kelvin", function() {
      var source = new Kelvin(32);
      expect(source.valor).to.equal(32);
    });
    it("Prueba de Kelvin a Farenheit", function() {
      var source = new Kelvin(32);
      expect(source.toFarenheit()).to.equal(-241.14999999999998);
    });
    it("Prueba de Kelvin a Celsius", function() {
      var source = new Kelvin(32);
      expect(source.toCelsius()).to.equal(-402.07);
    });
  });
});
