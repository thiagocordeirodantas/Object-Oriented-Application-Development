import Personagem from "./modules/personagem.js";

const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}

const personagemThiago = {
    nome: 'Thiago',
    vida: 10,
    mana: 5,
    level: 30,
    tipo : 'Cavaleiro'
}



const personagemPedrinho = new Personagem();

personagemPedrinho.nome = "Pedrinho"
personagemPedrinho.mana = 5
personagemPedrinho.vida = 10
personagemPedrinho.level = 3
personagemPedrinho.tipo  = "Cavaleiro"
personagemPedrinho.descricao = "Cavaleiro destruidor"


console.log(personagemPedrinho)
