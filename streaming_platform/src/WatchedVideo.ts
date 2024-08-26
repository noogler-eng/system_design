export class WatchedVideo{
    private id: string;
    private video_id: string;
    private userid: string;
    private seek_timestamp: number;

    constructor(id: string, video_id: string, user_id: string, seek_timestamp: number){
        this.id = id;
        this.video_id = video_id;
        this.userid = user_id;
        this.seek_timestamp = seek_timestamp;
    }

    public getSeekTimestamp(): number{
        return this.seek_timestamp;
    }
}