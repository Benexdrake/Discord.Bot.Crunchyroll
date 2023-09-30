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
        const anime = await instance.post(`http://localhost:3000/api/crunchyroll/GY8VEQ95Y`, '123456').then(x => { return x.data});
        return anime;
    }
}