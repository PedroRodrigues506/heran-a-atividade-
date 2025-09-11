class Conta {
    // atributos
    titular;
    saldo;
    constructor(_titular, _saldo) {
        this.titular = _titular;
        this.saldo = _saldo;
    }
    getTitular() {
        return this.titular;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    depositar(valor) {
        console.log(`O ${this.titular} depositou ${valor} no banco`);
        this.saldo += valor;
    }
    sacar(valor) {
        console.log(this.saldo.toFixed(2));
        if (this.saldo >= valor) {
            console.log(`O ${this.titular} sacou ${valor} do banco`);
            this.saldo -= valor;
        }
        else {
            console.log(`Você não tem saldo suficiente`);
        }
        console.log(`O saldo do cliente ${this.titular} é de R$${this.saldo}.`);
    }
    recuperarSaldo() {
        return this.saldo;
    }
}
export default Conta;
//# sourceMappingURL=conta.js.map