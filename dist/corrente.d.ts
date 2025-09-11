import Conta from "./conta.js";
declare class Corrente extends Conta {
    private taxaManutencao;
    constructor(_saldo: number, _titular: string, _taxaManutencao: number);
    getTaxaManutencao(): number;
    setTaxaManutencao(_taxaManutencao: number): void;
    cobrarTaxa(): void;
}
export default Corrente;
//# sourceMappingURL=corrente.d.ts.map