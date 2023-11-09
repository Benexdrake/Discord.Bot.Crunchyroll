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
             .setImage(anime.imageUrl_banner);
             
        if(anime.publisher !== '')
            embed.addFields({name: 'Publisher', value: anime.publisher})
        if(anime.audios.length > 0)
            embed.addFields({name: 'Language', value: anime.audios.join(', ')})
            if(anime.subTitles.length > 0)
            embed.addFields({name: 'Language', value: anime.subTitles.join(', ')})

        if(anime.tags?.length > 0 && anime.tags)
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

function base64Decode(input:string) {
    // Replace non-url compatible chars with base64 standard chars
    input = input
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    // Pad out with standard base64 required padding characters
    var pad = input.length % 4;
    if(pad) {
      if(pad === 1) {
        throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
      }
      input += new Array(5-pad).join('=');
    }

    return input;
}