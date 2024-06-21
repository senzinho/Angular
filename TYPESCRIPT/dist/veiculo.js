"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor() {
        this.velocidade = 0;
    }
    //metodos
    acelerar() {
        this.velocidade = this.velocidade + 10;
    } // void significa que a função não terá retorno
    parar() {
        this.velocidade = 0;
    } // void significa que a função não terá retorno
    velocidadeAtual() {
        return this.velocidade;
    }
}
exports.default = Veiculo;
