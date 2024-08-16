import {Permissao} from "./permissao";

export class Usuario {
    id?: number;
    nome?: string;
    email?: string;
    permissao?: Permissao;
    uuid?: string;
    dataCadastro?: Date;
    ativo?: boolean;
    descricao?: string;
    foto?: string;
}
