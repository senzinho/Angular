import { Daointerface } from "./Daointerface";
import Concessionaria from "./concessionaria";

export class ConcessionariaDao implements Daointerface{

    nomeTabela: string = 'tb_concessionaria'

    inserir(object : Concessionaria): boolean{
        //lógica de insert / recuperaria / tratativa / retornaria verdade ou f dependendendo do funcionamento
        console.log('lógica insert')
        return true
    }
    atualizar(object : Concessionaria): boolean{
        console.log('Lógica atualizar')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('Lógica delete')
        return new Concessionaria('', [])
    }
    selecionar(id: number): Concessionaria{
        console.log('Lógica Select')
        return new Concessionaria('',[])
    }
    selecionarTodos(): [any]{
        console.log('GetAll')
        return [new Concessionaria('', [])]
    }
}