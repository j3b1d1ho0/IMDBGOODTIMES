
import * as mongoose from 'mongoose';

export interface IMovie extends mongoose.Document {
    title:string,
    director:string,
    picture:string
}

let movieSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    director: {
        type:String,
        required:true
    },
    picture: {
        type:String,
        required:false,
        default:"http://img11.deviantart.net/495f/i/2014/365/9/6/ghost_world_movie___raptor_shirt_by_ghostsweet-d8bo3v2.jpg" 
    }
});

export default mongoose.model<IMovie>('Movie', movieSchema);


