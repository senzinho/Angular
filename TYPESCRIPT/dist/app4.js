"use strict";
//import { ConcessionariaDao } from './concessionariaDao';
//import { PessoaDao } from './pessoaDao';
//import { veiculoDao } from './veiculoDao';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concessionaria_1 = __importDefault(require("./concessionaria"));
const pessoa_1 = __importDefault(require("./pessoa"));
const Dao_1 = require("./Dao");
//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
//let dao3: veiculoDao = new veiculoDao()
let concessionaria = new concessionaria_1.default('', []);
let pessoa = new pessoa_1.default('', '');
let dao4 = new Dao_1.Dao();
let dao5 = new Dao_1.Dao();
dao4.inserir(concessionaria);
dao5.atualizar(pessoa);
