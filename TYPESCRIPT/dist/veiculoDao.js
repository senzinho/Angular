"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.veiculoDao = void 0;
const veiculo_1 = __importDefault(require("./veiculo"));
class veiculoDao {
    constructor() {
        this.nomeTabela = 'tb_veiculo';
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
        return new veiculo_1.default();
    }
    selecionar(id) {
        console.log('Lógica Select');
        return new veiculo_1.default();
    }
    selecionarTodos() {
        console.log('GetAll');
        return [new veiculo_1.default()];
    }
}
exports.veiculoDao = veiculoDao;
