import { Playlist } from "./Playlist.js";

export class Player
{
    constructor(
        public playlist: Playlist
    ){ }

    private state: "stopped" | "playing" | "paused" = "stopped";

    public play()
    {
        this.state = "playing";
    }

    public pause()
    {
        this.state = "paused";
    }

    public stop()
    {
        this.state = "stopped";
    }

    public next()
    {

    }

    public previous()
    {

    }
    
    public setLoop(on: boolean)
    {

    }

    public setShuffle(on: boolean)
    {

    }

    private shuffleOrder(): number[]{
        return [];
    }
}