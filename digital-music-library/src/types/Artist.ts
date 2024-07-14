import { Album } from "./Album";

export interface Artist {
    id: string;
    name: string;
    albums: Album[];
}