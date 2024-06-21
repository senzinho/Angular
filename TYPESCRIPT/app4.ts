//import { ConcessionariaDao } from './concessionariaDao';
//import { PessoaDao } from './pessoaDao';
//import { veiculoDao } from './veiculoDao';


import Concessionaria from './concessionaria';
import Pessoa from './pessoa';
import { Dao } from './Dao';


//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
//let dao3: veiculoDao = new veiculoDao()

let concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('','');



let dao4 : Dao<Concessionaria> = new Dao<Concessionaria>();
let dao5 : Dao<Pessoa> = new Dao<Pessoa>();

dao4.inserir(concessionaria)
dao5.atualizar(pessoa)



