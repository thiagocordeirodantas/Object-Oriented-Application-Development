import Personagem from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import Mago from "./modules/mago.js";
import Arqueiro from "./modules/arqueiro.js";
import ArqueiroMago from "./modules/arqueiro-mago.js";
import Guerreiro from "./modules/guerreiro.js";


const arqueiroMaaago = new ArqueiroMago('Weverton',230,122,'ar',121,80)
const magolouco = new Mago('Thiago',333,'gelo',3,3)
const thiaguito = new Guerreiro('Eduardo',5,12,23)
//arqueiroMaaago.#level = 15
const personagens =  [arqueiroMaaago,magolouco,thiaguito]





new PersonagemView(personagens).render()

console.log(arqueiroMaaago)
//console.log(Personagem.verificarVencedor(arqueiroMaaago,magolouco))