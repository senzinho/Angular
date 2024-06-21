"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = __importDefault(require("./carro"));
const concessionaria_1 = __importDefault(require("./concessionaria"));
const pessoa_1 = __importDefault(require("./pessoa"));
let carroaA = new carro_1.default('Fusca', 4);
let carroB = new carro_1.default('Camaro', 2);
let carroC = new carro_1.default('Mini cooper', 2);
/*montar lista de carro da concessionaria*/
let listaDeCarros = [carroaA, carroB, carroC];
let concessionaria = new concessionaria_1.default('R. São José', listaDeCarros);
//console.log(concessionaria.mostrarListaDeCarro())
/*compra do carro*/
let cliente = new pessoa_1.default('Heliusen', 'Fusca');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarro().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // se o retorno == true -> compra o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroTem());
