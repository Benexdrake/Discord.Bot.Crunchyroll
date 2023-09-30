import { Colors, EmbedBuilder } from "discord.js";
import { Anime } from "../models/Crunchyroll/anime";

export class AnimeEmbed
{
    Build(anime:Anime) : EmbedBuilder
    {
        const embed = new EmbedBuilder();

        embed.setTitle(anime.title)
             .setAuthor({name: 'Crunchyroll', url: 'https://www.crunchyroll.com/de', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cib-crunchyroll_%28CoreUI_Icons_v1.0.0%29_orange.svg/2048px-Cib-crunchyroll_%28CoreUI_Icons_v1.0.0%29_orange.svg.png'})
             .setColor(Colors.Orange)
             .setURL(anime.url)
             .setDescription(anime.description || ' ')
             .setImage(anime.imageUrl);
             
        if(anime.publisher !== '')
            embed.addFields({name: 'Publisher', value: anime.publisher})
        if(anime.language !== '')
            embed.addFields({name: 'Language', value: anime.language})
        if(anime.tags.length > 0)
        {
            if(!anime.tags.includes(''))
                embed.addFields({name: 'Tags', value: anime.tags.join(', ')})
        }
        embed.addFields([
            {
                name:'Rating',
                value: anime.rating.toString() || '',
                inline: true
            },
            {
                name: 'Seasons',
                value: anime.seasons.toString() || ''
            },
            {
                name: 'Episodes',
                value: anime.episodes.toString() || ''
            }])

        return embed;
    }
}