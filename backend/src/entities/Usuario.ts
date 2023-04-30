import { uuid } from "uuidv4";

export class Usuario {
    public readonly id: string;

    public chave: string;

    constructor(props: Omit<Usuario, 'id'>, id?: string) {
        this.chave = props.chave;

        if(!id) {
            this.id = (uuid);
        }
    }
}