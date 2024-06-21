"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const concessionaria_1 = __importDefault(require("./concessionaria"));
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = 'tb_concessionaria';
    }
    inserir(object) {
        //lógica de insert / recuperaria / tratativa / retornaria verdade ou f dependendendo do funcionamento
        console.log('lógica insert');
        return true;
    }
    atualizar(object) {
        console.log('Lógica atualizar');
        return true;
    }
    remover(id) {
        console.log('Lógica delete');
        return new concessionaria_1.default('', []);
    }
    selecionar(id) {
        console.log('Lógica Select');
        return new concessionaria_1.default('', []);
    }
    selecionarTodos() {
        console.log('GetAll');
        return [new concessionaria_1.default('', [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
