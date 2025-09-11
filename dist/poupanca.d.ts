import Conta from "./conta.js";
declare class Poupanca extends Conta {
    private taxaRendimento;
    constructor(_saldo: number, _titular: string, _taxaRendimento: number);
    getTaxaRendimento(): number;
    setTaxaRendimento(_taxaRendimento: number): void;
    renderJuros(): void;
}
export default Poupanca;
//# sourceMappingURL=poupanca.d.ts.map