var expect = chai.expect;

describe("Conversor", function() {
  describe("Medida", function() {
    it("Cambio de f a c", function() {
      expect(Medida.convertir("32f to c")).to.equal("0.00 Celsius");
    });
    it("Prueba Matching", function() {
      expect(Medida.match("32f to c")).to.equal("0");
    });
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
  });
});