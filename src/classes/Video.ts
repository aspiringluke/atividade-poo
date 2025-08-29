import type { Playable } from "./Playable";
import type { Describable} from "./Describable";

export class Video implements Describable
{
    constructor(
        public id: string, private titulo: string,
        private duration: number, private author: string,
        private views: number
    ){}

    public info(): string
    {
        return `ID: ${this.id},
                Título: ${this.titulo},
                Duração: ${this.duration},
                Autor: ${this.author}
                Visualizações: ${this.views}`
    }
}