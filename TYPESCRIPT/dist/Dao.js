"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = '';
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
        return Object();
    }
    selecionar(id) {
        console.log('Lógica Select');
        return Object();
    }
    selecionarTodos() {
        console.log('GetAll');
        return [Object()];
    }
}
exports.Dao = Dao;
