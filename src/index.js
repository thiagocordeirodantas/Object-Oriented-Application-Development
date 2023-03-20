import Personagem from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import Mago from "./modules/mago.js";

const personagemThiago = new Personagem('Thiago', 5, 'Mago')
const personagemJose = new Personagem('Jose', 2 , 'Arqueiro')

const personagens =  [personagemJose, personagemThiago]

new PersonagemView(personagens).render()

