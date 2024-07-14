import { Song } from "./Song";

export interface Album {
    id: string;
    title: string;
    artistID: string;
    songs: Song[];
    description: string;
}