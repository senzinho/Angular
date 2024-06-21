import Carro from "./carro"
export default class Pessoa{
    //atrr
    private nome: string
    private carroPreferido: string
    private carro?: Carro 
    

    //contrutor

    constructor(nome:string , carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
        
        
        
    }

    //metodos

    public dizerNome(): string{
        return this.nome
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void{
        this.carro = carro
    }

    public dizerCarroTem(): Carro | undefined{
        return this.carro
    }

    
}