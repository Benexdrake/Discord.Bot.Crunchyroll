import { Crunchyroll_API } from "../controllers/crunchyroll_API";
import { AnimeEmbed } from "../embeds/animeEmbed";
import { ExtendedInteraction } from "../interfaces/ExtendedInteraction";

export class CrunchyrollLogic
{
    async Crunchyroll(interaction:ExtendedInteraction)
    {
        const value = interaction.options.data[0].value as string;
        if(!value.includes('https://www.crunchyroll.com/de/'))
        {
            interaction.deleteReply();
            return;
        }

            const api = new Crunchyroll_API();
            
            const anime = await api.GetAnimeByUrl(value)
            if(anime !== undefined)
            {
                const embed = new AnimeEmbed().Build(anime);
                await interaction.followUp({embeds:[embed]})
            }
            else
            await interaction.followUp('Something was wrong with the Url')
        
    }
}