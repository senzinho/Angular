"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// atributos
class Concessionaria {
    //CONSTRUCT
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    //METODOS
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarro() {
        return this.listaDeCarros;
    }
    fornecerHorariosDeFuncionamento() {
        return 'Horário de funcionamento: De Segunda à sexta';
    }
}
exports.default = Concessionaria;
//let concessionaria = new Concessionaria('Rua Ganchinho');
