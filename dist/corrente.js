import Conta from "./conta.js";
class Corrente extends Conta {
    taxaManutencao;
    constructor(_saldo, _titular, _taxaManutencao) {
        super(_titular, _saldo);
        this.taxaManutencao = _taxaManutencao;
    }
    getTaxaManutencao() {
        return this.taxaManutencao;
    }
    setTaxaManutencao(_taxaManutencao) {
        this.taxaManutencao = _taxaManutencao;
    }
    cobrarTaxa() {
        let taxa = this.getSaldo() * this.taxaManutencao;
        console.log(`O ${this.getTitular()} foi cobrado ${this.taxaManutencao}% da sua conta corrente.`);
        this.setSaldo((this.getSaldo() - taxa));
    }
}
export default Corrente;
//# sourceMappingURL=corrente.js.map