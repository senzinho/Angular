import { Daointerface } from "./Daointerface";
import Pessoa from "./pessoa";

export class PessoaDao implements Daointerface{

    nomeTabela: string = 'tb_pessoa'

    inserir(object : Pessoa): boolean{
        //lógica de insert / recuperaria / tratativa / retornaria verdade ou f dependendendo do funcionamento
        console.log('lógica insert')
        return true
    }
    atualizar(object : Pessoa): boolean{
        console.log('Lógica atualizar')
        return true
    }
    remover(id: number): Pessoa {
        console.log('Lógica delete')
        return new Pessoa('', '')
    }
    selecionar(id: number): Pessoa{
        console.log('Lógica Select')
        return new Pessoa('','')
    }
    selecionarTodos(): [any]{
        console.log('GetAll')
        return [new Pessoa('', '')]
    }
}