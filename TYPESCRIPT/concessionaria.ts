import { ConcessionariaInterface } from "./concessionariainterface"
import Carro from "./carro"


    // atributos
export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Array<Carro> // utiliza-se o any para que após veja o tipo de campo que irá ali

    //CONSTRUCT

    constructor(endereco:string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    //METODOS
    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarro(): Array<Carro> {
        return this.listaDeCarros
    }

    public fornecerHorariosDeFuncionamento(): string {
        return 'Horário de funcionamento: De Segunda à sexta'
    }
    
}

   

//let concessionaria = new Concessionaria('Rua Ganchinho');
