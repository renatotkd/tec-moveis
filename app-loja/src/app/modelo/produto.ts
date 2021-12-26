export class Produto {
    nome: string;
    descricao: string;
    quantidade: number;
    valor: number;
    constructor(nome: string, descricao: string,quantidade: number, valor: number){
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor =valor;
    }
}
