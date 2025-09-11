import Conta from "./conta.js";
class Poupanca extends Conta {
    taxaRendimento;
    constructor(_saldo, _titular, _taxaRendimento) {
        super(_titular, _saldo);
        this.taxaRendimento = _taxaRendimento;
    }
    getTaxaRendimento() {
        return this.taxaRendimento;
    }
    setTaxaRendimento(_taxaRendimento) {
        this.taxaRendimento = _taxaRendimento;
    }
    renderJuros() {
        let saldo = this.recuperarSaldo();
        this.setSaldo(saldo + (saldo * this.taxaRendimento));
        console.log(`Jurous renderam ${this.recuperarSaldo()}.`);
    }
}
export default Poupanca;
//# sourceMappingURL=poupanca.js.map