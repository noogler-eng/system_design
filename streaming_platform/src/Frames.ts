export class Frames{

    private bytes: [];
    public timestamp: number;
    private endTimestamp: number;

    constructor(bytes: any, timestamp: number, endTimestamp: number){
        this.bytes = bytes;
        this.timestamp = timestamp;
        this.endTimestamp = endTimestamp
    }
}