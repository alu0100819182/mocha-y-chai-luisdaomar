var expect = chai.expect;

describe("Medida", function() {
  describe("Medida.convertir", function() {
    it("Cambio de f a c", function() {
      expect(Medida.convertir("32f to c")).to.equal("0.00 Celsius");
    });
  });
});
