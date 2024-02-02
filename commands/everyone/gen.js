const { MessageEmbed } = require('discord.js');
const crypto = require('crypto');
const axios = require('axios')

module.exports = {
	name: "gen",
	/**
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message, args) => {
		const data2 = "72090a1027b1eb9a7f58898311c038c2fd8bfc6ed0f72cabf5e4ad923b1d66a3";
		const hashResult = generateHash(data2);

		const url = "https://api.discord.gx.games/v1/direct-fulfillment";
		const headers = {
			"authority": "api.discord.gx.games",
			"accept": "*/*",
			"accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
			"content-type": "application/json",
			"origin": "https://www.opera.com",
			"referer": "https://www.opera.com/",
			"sec-ch-ua": '"Opera GX";v="105", "Chromium";v="119", "Not?A_Brand"; v="24"',
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": '"Windows"',
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "cross-site",
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0",
		};

		const data = {
			"partnerUserId": hashResult
		};

		axios.post(url, data, { headers })
			.then(response => {
				const embed = new MessageEmbed()
				.setTitle("Discord Nitro")
				.setDescription(`[Click here to claim your nitro link](https://discord.com/billing/partner-promotions/1180231712274387115/${response.data.token})`)
				.setThumbnail("https://cdn.iconscout.com/icon/free/png-256/free-discord-nitro-6823191-5582775.png")
				.setAuthor({ name: "Nitro Generator © SudryDev", iconURL: "https://cdn.iconscout.com/icon/free/png-256/free-discord-nitro-6823191-5582775.png" })
				.setTimestamp()
				.setColor("2F3136")
				.setFooter({ text: "Nitro Generator © SudryDev" })
				message.channel.send({ embeds: [embed] })
			})
			.catch(error => {
				message.channel.send("Une erreur est survenue, merci de contacter le développeur\nNitro Generator © SudryDev")
				console.error("Error:", error);
			});


		function generateHash(data) {
			const hash = crypto.createHash('sha256');

			hash.update(data);

			return hash.digest('hex').slice(0, 64);
		}
	}
}