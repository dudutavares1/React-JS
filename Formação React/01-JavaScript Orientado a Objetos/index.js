

class Cliente {
    nome;
    cpf;


}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Dudu";
cliente1.cpf = 34658877744;

const cliente2 = new Cliente();
cliente2.nome = "Mirella";
cliente2.cpf = 34658445455;

const contaCorrenteDudu = new ContaCorrente()
contaCorrenteDudu.saldo = 0
contaCorrenteDudu.agencia = 1001








console.log(contaCorrenteDudu.saldo)
contaCorrenteDudu.saldo = 100
console.log(contaCorrenteDudu.saldo)
contaCorrenteDudu.sacar(50);





//*
console.log(cliente1)
console.log(cliente2)