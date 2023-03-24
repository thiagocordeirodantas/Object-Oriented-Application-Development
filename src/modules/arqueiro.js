import Personagem from "./personagem.js"

export default class Arqueiro extends Personagem {
    destreza 
    static tipo = 'Arqueiro'
    static descricao = 'Você tem o meu arco!'

    constructor(nome,level,destreza){
        super(nome,level)
        this.destreza = destreza
    }

    obterInsigna(){
        if(this.destreza >= 5){
            return `Dominador de Flechas`
        } 
        return super.obterInsigna();
    }
}


