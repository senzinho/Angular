"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = __importDefault(require("./veiculo"));
class Carro extends veiculo_1.default {
    constructor(modelo, numeroDePortas) {
        super();
        // atributos
        this.numeDePortas = 0;
        this.modelo = modelo;
        this.numeDePortas = numeroDePortas;
    }
}
exports.default = Carro;
