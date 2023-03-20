import Personagem from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import Mago from "./modules/mago.js";


const magoThiago = new Mago('Thiago',30,'fogo',23,43)

const personagens =  [magoThiago]

new PersonagemView(personagens).render()

