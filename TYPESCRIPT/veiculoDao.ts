import { Daointerface } from "./Daointerface";
import Veiculo from "./veiculo";

export class veiculoDao implements Daointerface{

    nomeTabela: string = 'tb_veiculo'

    inserir(object : Veiculo): boolean{
        //lógica de insert / recuperaria / tratativa / retornaria verdade ou f dependendendo do funcionamento
        console.log('lógica insert')
        return true
    }
    atualizar(object : Veiculo): boolean{
        console.log('Lógica atualizar')
        return true
    }
    remover(id: number): Veiculo {
        console.log('Lógica delete')
        return new Veiculo()
    }
    selecionar(id: number): Veiculo{
        console.log('Lógica Select')
        return new Veiculo()
    }
    selecionarTodos(): [any]{
        console.log('GetAll')
        return [new Veiculo()]
    }
}