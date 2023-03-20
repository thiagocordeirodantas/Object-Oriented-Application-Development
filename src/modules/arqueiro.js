import Personagem from "./personagem.js"

export default class Arqueiro extends Personagem {
    destreza 
    tipo = 'Arqueiro'

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