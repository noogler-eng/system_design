import { Frames } from "./Frames";

export class Video{
    public frameTime = 10;

    private id: string;
    private frames: Frames[];
    private jsonMetaData: string;

    constructor(frames: Frames[], jsonMetaData: string, id: string){
        this.frames = frames;
        this.jsonMetaData = jsonMetaData;
        this.id = id;
    }

    public getFrame(timestamp: number){
        for(let i=0; i<this.frames.length; i++){
            if(this.frames[i].timestamp <= timestamp && this.frames[i].timestamp + this.frameTime > timestamp) return this.frames[i];
        }

        throw new Error("no frame exists at this timestamp");
    }
}