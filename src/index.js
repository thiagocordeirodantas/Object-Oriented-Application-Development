import Personagem from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import Mago from "./modules/mago.js";
import Arqueiro from "./modules/arqueiro.js";
import ArqueiroMago from "./modules/arqueiro-mago.js";


const arqueiroMaaago = new ArqueiroMago('Joao Matias',230,122,'ar',121,80)
const magolouco = new Mago('Thiago',32,'gelo',3,3)

const personagens =  [arqueiroMaaago,magolouco]




new PersonagemView(personagens).render()

