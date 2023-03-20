import Personagem from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import Mago from "./modules/mago.js";
import Arqueiro from "./modules/arqueiro.js";


const ArqueiroThiago = new Arqueiro('Thiago',23,54)

const personagens =  [ArqueiroThiago]

new PersonagemView(personagens).render()

