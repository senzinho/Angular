import { Daointerface } from "./Daointerface";

export class Dao<T> implements Daointerface<T>{

    
    nomeTabela: string = ''

    inserir(object : T): boolean{
        //lógica de insert / recuperaria / tratativa / retornaria verdade ou f dependendendo do funcionamento
        console.log('lógica insert')
        return true
    }
    atualizar(object : T): boolean{
        console.log('Lógica atualizar')
        return true
    }
    remover(id: number): T {
        console.log('Lógica delete')
        return Object()
    }
    selecionar(id: number): T{
        console.log('Lógica Select')
        return Object()
    }
    selecionarTodos(): [T]{
        console.log('GetAll')
        return [Object()]
    }
}
