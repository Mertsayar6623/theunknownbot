const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  
  .setTitle("Bot Komutları")
  .setAuthor("Ghoul Bot | Yapımcı Meriç", "")
  .setColor("RANDOM")
  .setDescription('s!davet • Botun davet linkini atar.\nYeni Kodlar Gelicek\ns!bug • Bottaki bugu bildirmenizi sağlar.\ns!ping • Botun pingini gösterir.\ns!sunucubilgi • Bu komutu hangi sunucuda kullanıysanız oranın bilgisini verir.\ns!tavsiye • Botun sahibine verdiğiniz tavsiyeyi gönderir.\n')
  .setFooter("")
  .setThumbnail("")
  .setTimestamp()
  
  .addField("Moderasyon Komutları", "s!ban • Belirttiğiniz kişiyi sunucudan banlar.\ns!kick • Belirttiğiniz kişiyi sunucudan atar.\ns!sustur • Belirttiğin kişiyi susturur.\ns!temizle • Sohbeti belirttiğin sayı kadar siler.\ns!unban • Belirttiğin kişinin sunucudaki yasağını kaldırır.\ns!oylama • Oylama Açarsınız.\ns!hastebin • Hastebine Kod Ekler.\n")
  .addField("Eğlence Komutları", "s!alkış • Etiketlediğiniz kişiyi alkışlar.\ns!söv • Etiketlediğiniz kişiye Feci Şekilde Söver.\ns!yaz • Bota istediğiniz şeyi yazdırır.\ns!discrim • Discrimleri aratır.\ns!8ball • Dene Ve Gör.\ns!ağla • Botu Ağlatır.\ns!pcaç • Bilgisayarı Açar.\ns!çekiç • Birisini etkietle ve çekiç at.\ns!kedi • Kedi Gifleri Atar.\ns!espri • Güzel Bir Espri Patlatır.\ns!çayiç • Çay İçersiniz.\ns!banned • Dene Ve Gör.\ns!köpek • Köpek Gifleri Atar.\ns!korkut • Dene Ve Gör\ns!token • Botun Tokenini Verir.\ns!nicegif • Dene Ve Gör", true)
  .addBlankField(true)
  .addField(" Kullanıcı Komutları", "• Yeni Kodlar Gelicek\ns!kurucu • Sunucunun kurucusunu gösterir.\ns!kullanıcıbilgim • Bu komutu kullanan her kimse hakkında bilgi verir.\n", true)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bot ile ilgili komut listesini verir.',
  usage: 'yardım'
};