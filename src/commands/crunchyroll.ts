import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../client/Command";
import { CrunchyrollLogic } from "../logic/crunchyrollLogic";

export default new Command(
{
    name: "crunchyroll",
    description: "show a anime from crunchyroll",
    options: [
        {
            name: 'url',
            description:'enter a crunchyroll url like https://www.crunchyroll.com/de/series/G63K98PZ6/one-punch-man',
            type: ApplicationCommandOptionType.String,
            required: true
        }],
        
    run: async ({ interaction }) => 
    {
        await new CrunchyrollLogic().Crunchyroll(interaction);
    }
});