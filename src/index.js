// const personagemPedrinho = {
//     nome: 'Pedrinho',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     tipo: 'Mago',
// }

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

class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao
}

const personagemPedrinho = new Personagem();

personagemPedrinho.nome = "Pedrinho"
personagemPedrinho.mana = 5
personagemPedrinho.vida = 10
personagemPedrinho.level = 3
personagemPedrinho.tipo  = "Cavaleiro"
personagemPedrinho.descricao = "Cavaleiro destruidor"
