import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adicionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)

    }
    lista(): Array<Negociacao> {
        return this.negociacoes
    }
}

