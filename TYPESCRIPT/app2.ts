import  Carro  from './carro'
import  Concessionaria  from './concessionaria'
import  Pessoa  from './pessoa'

let carroaA = new Carro('Fusca', 4)
let carroB = new Carro('Camaro', 2)
let carroC = new Carro('Mini cooper', 2 )

/*montar lista de carro da concessionaria*/

let listaDeCarros: Array<Carro> = [carroaA, carroB, carroC]

let concessionaria = new Concessionaria('R. São José', listaDeCarros)

//console.log(concessionaria.mostrarListaDeCarro())

/*compra do carro*/


let cliente = new Pessoa('Heliusen','Fusca')
//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarro().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()){
        // se o retorno == true -> compra o carro
        cliente.comprarCarro(carro)
    }
})


console.log(cliente.dizerCarroTem())