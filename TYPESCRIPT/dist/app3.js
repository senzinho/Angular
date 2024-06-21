"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = __importDefault(require("./carro"));
const moto_1 = __importDefault(require("./moto"));
const concessionaria_1 = __importDefault(require("./concessionaria"));
let carro = new carro_1.default('Fusca 80', 2);
let moto = new moto_1.default();
moto.acelerar();
let concessionaria = new concessionaria_1.default('', []);
console.log(moto);
console.log(carro);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
