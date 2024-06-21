import Veiculo from "./veiculo"

export default class Carro extends Veiculo{
    // atributos
    
    private numeDePortas: number = 0
    

    constructor(modelo:string , numeroDePortas:number){
        super()
        this.modelo = modelo 
        this.numeDePortas = numeroDePortas
    }
}