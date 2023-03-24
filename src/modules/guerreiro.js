import Personagem from "./personagem.js"

export default class Guerreiro extends Personagem {
    static tipo = 'Guerreiro'
    static descricao = 'Você será esmagado pela fúria do Guerreiro!'
    forca = 10
    constructor(nome,level,forca){
        super(nome,level)
        this.forca = forca
    }

    obterInsigna(){
        if(this.forca >= 7){
            return 'Guerreiro furioso'
        }
        return  super.obterInsignia();

    }
}