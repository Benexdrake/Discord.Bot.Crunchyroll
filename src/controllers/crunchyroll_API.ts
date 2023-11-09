import axios from "axios";
import https from 'https'
import { Anime } from "../models/Crunchyroll/anime";
import {baseUrl} from "../../config.json";

export class Crunchyroll_API
{
    async GetAnimeByUrl(url:string) : Promise<Anime>
    {
        const instance = axios.create({
            httpsAgent: new https.Agent({
              rejectUnauthorized: false
            })
          });

        const id = url.split('/')[5];
        console.log(id)
        const anime = await instance.get(`http://localhost:3000/api/crunchyroll/${id}`).then(x => { return x.data});
        return anime;
    }
}