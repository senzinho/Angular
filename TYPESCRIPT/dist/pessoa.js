"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    //contrutor
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    //metodos
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroTem() {
        return this.carro;
    }
}
exports.default = Pessoa;
