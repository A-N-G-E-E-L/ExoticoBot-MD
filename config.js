import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"

global.wm = "⬩ٜ࣭݊𑁍ٜ࣭݊⬩𝇏𝆺𝅥𝙀𝙭𝆭𝙤𝙩𝙞𝙘๋𝆭𝙤⬩𝘽𝆭𝙤𝙩ە𝙈𝘿𝆹𝅥𝇏⬩ٜ࣭݊𑁍ٜ࣭݊⬩"
global.igfg = "🧧 𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋 🧧"
global.nomorown = "5493873232221"
global.gt = "🌌 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 🌌"
global.packname = `𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿`
global.author = `𝙈𝙪𝙡𝙩𝙞𝘽𝙤𝙩-𝙊𝙁𝘾`

global.owner = [["5493873232221", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩', true], ["5493873232212", '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙁𝘾 ╱ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩 2', true], ["15108672308"], ["51929838430"], ["527421168105"], ["5491133979238"]]

global.mods = []
global.prems = []

global.obtenerQrWeb = 0; 
global.keepAliveRender = 0; 
global.botNumberCode = ""
global.confirmCode = "" 

global.Key360 = ["Gata_Dios"] 
global.openai_key = 'sk-0' // Api New: https://platform.openai.com/account/api-keys 
global.openai_org_id = 'org-3' // Api New: https://platform.openai.com/account/org-settings */
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "Gata_Dios"
global.itsrose = ["4b146102c4d500809da9d1ff"]
global.baileys = "@whiskeysockets/baileys"

global.APIs = { 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
fgmods: 'https://api.fgmods.xyz', 
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site'
},
   
global.APIKeys = { 
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren'
}
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment
global.official = [["5493873232221", 'ExoticoBot : 𝘊𝘳𝘦𝘢𝘥𝘰𝘳', 1], ["5493873232212", 'ExoticoBot : 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 2', 1]]

global.mail = ''
global.desc = '' 
global.desc2 = '' 
global.country = ''

global.vs = "2.0.0"
global.vs2 = "2.5"
global.vs3 = "3.5.0"

global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"]
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='];

global.cmenut = "┏•──•═════•𑁍 "
global.cmenub = "┋〤 "
global.cmenuf = "┗•──•═════•𑁍 \n"
global.cmenua = "\n⊹ •──•━•『 𝙀𝙭𝙤𝙩𝙞𝙘𝙤_𝙫2 』•━•──• ⊹\n     "
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"
global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"
global.comienzo = "• • ◕◕════"
global.fin = " • •"
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
key: {
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Hmm`,
'seconds': '999999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': fs.readFileSync('./Multi_Imagen/Menu3.jpg')
}}}

global.multiplier = 85
global.rpg = {
emoticon(string) {
string = string.toLowerCase();
let emot = {
level: '🧬 Nivel : Level',
limit: IDexotic.eDiamante,
exp: IDexotic.eExp,
bank: '🏦 Banco : Bank',
diamond: IDexotic.eDiamantePlus,
health: '❤️ Salud : Health',
kyubi: IDexotic.eMagia,
joincount: IDexotic.eToken,
emerald: IDexotic.eEsmeralda,
stamina: IDexotic.eEnergia,
role: '💪 Rango | Role',
premium: '🎟️ Premium',
pointxp: '📧 Puntos Exp : Point Xp',
gold: IDexotic.eOro,
trash: IDexotic.eBasura,
crystal: '🔮 Cristal : Crystal',
intelligence: '🧠 Inteligencia : Intelligence',
string: IDexotic.eCuerda,
keygold: '🔑 Llave de Oro : Key Gold',
keyiron: '🗝️ Llave de Hierro : Key Iron',
emas: IDexotic.ePinata,
fishingrod: '🎣 Caña de Pescar : Fishing Rod',
gems: '🍀 Gemas : Gemas',
magicwand: '⚕️ Varita Mágica : Magic Wand',
mana: '🪄 Hechizo : Spell',
agility: '🤸‍♂️ Agilidad : Agility',
darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
iron: IDexotic.eHierro,
rock: IDexotic.eRoca,
potion: IDexotic.ePocion,
superior: '💼 Superior : Superior',
robo: '🚔 Robo : Robo',
upgrader: '🧰 Aumentar Mejora : Upgrade',
wood: IDexotic.eMadera,
strength: '🦹‍ ♀️ Fuerza : Strength',
arc: '🏹 Arco : Arc',
armor: '🥼 Armadura : Armor',
bow: '🏹 Super Arco : Super Bow',
pickaxe: '⛏️ Pico : Peak',
sword: IDexotic.eEspada,
common: IDexotic.eCComun,
uncoommon: IDexotic.ePComun,
mythic: IDexotic.eCMistica,
legendary: IDexotic.eClegendaria,
petFood: IDexotic.eAMascots,
pet: IDexotic.eCMascota,
bibitanggur: IDexotic.eSUva,
bibitapel: IDexotic.eSManzana,
bibitjeruk: IDexotic.eSNaranja,
bibitmangga: IDexotic.eSMango,
bibitpisang: IDexotic.eSPlatano,
ayam: '🐓 Pollo : Chicken',
babi: '🐖 Puerco : Pig',
Jabali: '🐗 Jabalí : Wild Boar',
bull: '🐃 Toro : Bull',    
buaya: '🐊 Cocodrilo : Alligator',    
cat: IDexotic.eGato(),    
centaur: IDexotic.eCentauro,
chicken: '🐓 Pollo : Chicken',
cow: '🐄 Vaca : Cow', 
dog: IDexotic.ePerro,
dragon: IDexotic.eDragon,
elephant: '🐘 Elefante : Elephant',
fox: IDexotic.eZorro,
giraffe: '🦒 Jirafa : Giraffe',
griffin: IDexotic.eAve, //Mascota : Griffin',
horse: IDexotic.eCaballo,
kambing: '🐐 Cabra : Goat',
kerbau: '🐃 Búfalo : Buffalo',
lion: '🦁 León : Lion',
money: IDexotic.eBotCoins,
monyet: '🐒 Mono : Monkey',
panda: '🐼 Panda',
snake: '🐍 Serpiente : Snake',
phonix: '🕊️ Fénix : Phoenix',
rhinoceros: '🦏 Rinoceronte : Rhinoceros',
wolf: IDexotic.eLobo,
tiger: '🐅 Tigre : Tiger',
cumi: '🦑 Calamar : Squid',
udang: '🦐 Camarón : Shrimp',
ikan: '🐟 Pez : Fish',
fideos: '🍝 Fideos : Noodles',
ramuan: '🧪 Ingrediente NOVA : Ingredients',
knife: '🔪 Cuchillo : Knife'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]];
}}

global.rpgg = {
emoticon(string) {
string = string.toLowerCase();
let emott = {
level: '🧬',
limit: '💎',
exp: '⚡',
bank: '🏦',
diamond: '💎',
health: '❤️',
kyubi: '🌀',
joincount: '🧧',
emerald: '☘️',
stamina: '✨',
role: '💪',
premium: '🎟️',
pointxp: '📧',
gold: '👑',
trash: '🗑',
crystal: '🔮',
intelligence: '🧠',
string: '🕸️',
keygold: '🔑',
keyiron: '🗝️',
emas: '🪅',
fishingrod: '🎣',
gems: '🍀',
magicwand: '⚕️',
mana: '🪄',
agility: '🤸‍♂️',
darkcrystal: '♠️',
iron: '⛓️',
rock: '🪨',
potion: '🥤',
superior: '💼',
robo: '🚔',
upgrader: '🧰',
wood: '🪵',
strength: '🦹‍ ♀️',
arc: '🏹',
armor: '🥼',
bow: '🏹',
pickaxe: '⛏️',
sword: '⚔️',
common: '📦',
uncoommon: '🥡',
mythic: '🗳️',
legendary: '🎁',
petFood: '🍖',
pet: '🍱',
bibitanggur: '🍇',
bibitapel: '🍎',
bibitjeruk: '🍊',
bibitmangga: '🥭',
bibitpisang: '🍌',
ayam: '🐓',
babi: '🐖',
Jabali: '🐗',
bull: '🐃',
buaya: '🐊',
cat: '🐈',      
centaur: '🐐',
chicken: '🐓',
cow: '🐄',
dog: '🐕',
dragon: '🐉',
elephant: '🐘',
fox: '🦊',
giraffe: '🦒',
griffin: '🦅', //Mascota : Griffin',
horse: '🐎',
kambing: '🐐',
kerbau: '🐃',
lion: '🦁',
money: '🪙',
monyet: '🐒',
panda: '🐼',
snake: '🐍',
phonix: '🕊️',
rhinoceros: '🦏',
wolf: '🐺',
tiger: '🐅',
cumi: '🦑',
udang: '🦐',
ikan: '🐟',
fideos: '🍝',
ramuan: '🧪',
knife: '🔪'
}
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emott[results[0][0]];
}}

global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase();
let emottt = {
exp: IDexotic.eExp,
limit: IDexotic.eDiamante,
diamond: IDexotic.eDiamantePlus,
joincount: IDexotic.eToken,
emerald: IDexotic.eEsmeralda,
berlian: IDexotic.eJoya,
kyubi: IDexotic.eMagia,
gold: IDexotic.eOro,
money: IDexotic.eBotCoins,
tiketcoin: IDexotic.eBotTickers,
stamina: IDexotic.eEnergia,
potion: IDexotic.ePocion,
aqua: IDexotic.eAgua,
trash: IDexotic.eBasura,
wood: IDexotic.eMadera,
rock: IDexotic.eRoca,
batu: IDexotic.ePiedra,
string: IDexotic.eCuerda,
iron: IDexotic.eHierro,
coal: IDexotic.eCarbon,
botol: IDexotic.eBotella,
kaleng: IDexotic.eLata,
kardus: IDexotic.eCarton,
eleksirb: IDexotic.eEletric,
emasbatang: IDexotic.eBarraOro,
emasbiasa: IDexotic.eOroComun,
rubah: IDexotic.eZorroG,
sampah: IDexotic.eBasuraG,
serigala: IDexotic.eLoboG,
kayu: IDexotic.eMaderaG,
sword: IDexotic.eEspada,
umpan: IDexotic.eCarnada,
healtmonster: IDexotic.eBillete,
emas: IDexotic.ePinata,
pancingan: IDexotic.eGancho,
pancing: IDexotic.eCanaPescar,      
common: IDexotic.eCComun,
uncoommon: IDexotic.ePComun,
mythic: IDexotic.eCMistica,
pet: IDexotic.eCMascota,
gardenboxs: IDexotic.eCJardineria,
legendary: IDexotic.eClegendaria,
anggur: IDexotic.eUva,
apel: IDexotic.eManzana,
jeruk: IDexotic.eNaranja,
mangga: IDexotic.eMango,
pisang: IDexotic.ePlatano,
bibitanggur: IDexotic.eSUva,
bibitapel: IDexotic.eSManzana,
bibitjeruk: IDexotic.eSNaranja,
bibitmangga: IDexotic.eSMango,
bibitpisang: IDexotic.eSPlatano,
centaur: IDexotic.eCentauro,
griffin: IDexotic.eAve,
kucing: IDexotic.eGato,
naga: IDexotic.eDragon,
fox: IDexotic.eZorro,
kuda: IDexotic.eCaballo,
phonix: IDexotic.eFenix,
wolf: IDexotic.eLobo,
anjing: IDexotic.ePerro,
petFood: IDexotic.eAMascots,
makanancentaur: IDexotic.eCCentauro,
makanangriffin: IDexotic.eCAve,
makanankyubi: IDexotic.eCMagica,
makanannaga: IDexotic.eCDragon,
makananpet: IDexotic.eACaballo,
makananphonix: IDexotic.eCFenix
}
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emottt[results[0][0]];
}}

global.rpgshopp = { 
emoticon(string) {
string = string.toLowerCase();
let emotttt = {
exp: '⚡',
limit: '💎',
diamond: '💎',
joincount: '🧧',
emerald: '☘️',
berlian: '♦️',
kyubi: '🌀',
gold: '👑',
money: '🪙',
tiketcoin: '🎫',
stamina: '✨',
potion: '🥤',
aqua: '💧',
trash: '🗑',
wood: '🪵',
rock: '🪨',
batu: '🥌',
string: '🕸️',
iron: '⛓️',
coal: '⚱️',
botol: '🍶',
kaleng: '🥫',
kardus: '🪧',
eleksirb: '💡',
emasbatang: '〽️',
emasbiasa: '🧭',
rubah: '🦊🌫️',
sampah: '🗑🌫️',
serigala: '🐺🌫️',
kayu: '🛷',
sword: '⚔️',
umpan: '🪱',
healtmonster: '💵',
emas: '🪅',
pancingan: '🪝',
pancing: '🎣',
common: '📦',
uncoommon: '🥡',
mythic: '🗳️',
pet: '📫',
gardenboxs: '💐',
legendary: '🎁',
anggur: '🍇',
apel: '🍎',
jeruk: '🍊',
mangga: '🥭',
pisang: '🍌',
bibitanggur: '🌾🍇',
bibitapel: '🌾🍎',
bibitjeruk: '🌾🍊',
bibitmangga: '🌾🥭',
bibitpisang: '🌾🍌',
centaur: '🐐',
griffin: '🦅',
kucing: '🐈',
naga: '🐉',
fox: '🦊',
kuda: '🐎',
phonix: '🕊️',
wolf: '🐺',
anjing: '🐶',
petFood: '🍖',
makanancentaur: '🐐🥩',
makanangriffin: '🦅🥩',
makanankyubi: '🌀🥩',
makanannaga: '🐉🥩',
makananpet: '🍱🥩',
makananphonix: '🕊️🥩'  
}
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emotttt[results[0][0]];
}}

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
unwatchFile(file);
console.log(chalk.redBright("Update 'config.js'"));
import(`${file}?update=${Date.now()}`);
})
