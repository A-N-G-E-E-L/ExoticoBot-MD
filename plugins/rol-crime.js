let crime = 500
let diamante = 10
const handler = async (m, {conn, usedPrefix, command, groupMetadata, participants, isPrems}) => {
const date = global.db.data.users[m.sender].crime + 3600000; //3600000 = 1 hs
if (new Date - global.db.data.users[m.sender].crime < 3600000) return m.reply(`${IDexotic.rpgTiempo}${IDexotic.Tiempo} ${timers.toTimeString()}`)
let randow
if (m.isGroup) randow = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else randow = m.chat
try {
let ps = groupMetadata.participants.map(v => v.id)
let randow = ps.getRandom()
let users = global.db.data.users[randow]
const exp = Math.floor(Math.random() * 9000)
const diamond = Math.floor(Math.random() * 150)
const money = Math.floor(Math.random() * 9000)

if (global.db.data.users[m.sender].exp < 0) return m.reply(`《💰》${pickRandom(global.robar)} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp)
if (global.db.data.users[m.sender].limit < 0) return m.reply(`《💰》${pickRandom(global.robar)} ${diamond} 💎 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨`).catch(global.db.data.users[m.sender].limit += diamond)
if (global.db.data.users[m.sender].money < 0) return m.reply(`《💰》${pickRandom(global.robar)} ${money} 🪙 𝘽𝙤𝙩𝘾𝙤𝙞𝙣𝙨`).catch(global.db.data.users[m.sender].money += money) 
  
let or = ['exo', 'exo2', 'exo3', 'exo4', 'exo5']; 
let media = or[Math.floor(Math.random() * 5)]
global.db.data.users[m.sender].crime = new Date * 1;
if (media === 'exo') return m.reply(`᥀·࣭࣪̇˖🪐◗ ${pickRandom(global.robar)} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (media === 'exo2') return m.reply(`᥀·࣭࣪̇˖💰◗ ${pickRandom(global.robmal)} ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (media === 'exo3') return m.reply(`᥀·࣭࣪̇˖🪐◗ ${pickRandom(global.robar)}\n\n${diamond} 💎 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚(𝙨)\n${money} 🪙 𝘽𝙤𝙩𝘾𝙤𝙞𝙣𝙨`).catch(global.db.data.users[m.sender].limit += diamond).catch(global.db.data.users[m.sender].money += money)
if (media === 'exo4') return m.reply(`᥀·࣭࣪̇˖💰◗ ${pickRandom(global.robmal)}\n\n${diamond} 💎 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚(𝙨)\n${money} 🪙 𝘽𝙤𝙩𝘾𝙤𝙞𝙣𝙨`).catch(global.db.data.users[m.sender].limit -= diamond).catch(global.db.data.users[m.sender].money -= money)
if (media === 'exo5') return conn.reply(m.chat, `᥀·࣭࣪̇˖⚔️◗ 𝙍𝙤𝙗𝙖𝙨𝙩𝙚 𝙖 @${randow.split`@`[0]} 𝙙𝙚 ${exp} 𝙚𝙣 XP`, m, {contextInfo: {mentionedJid: [randow]}}).catch(global.db.data.users[m.sender].exp += exp).catch(global.db.data.users[randow].exp -= crime) 
} catch (e) {
console.log(e)}}
handler.help = ['robar'];
handler.tags = ['xp'];
handler.command = /^(crime|Crime)$/i
handler.register = false
handler.group = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.robar = ['𝙀𝙣𝙩𝙧𝙖𝙨𝙩𝙚 𝙖 𝙧𝙤𝙗𝙖𝙧 𝙪𝙣 𝙗𝙖𝙣𝙠𝙥 🏦, 𝙮 𝙡𝙤𝙜𝙧𝙖𝙨𝙩𝙚 𝙧𝙤𝙗𝙖𝙧:', 'Negociarte con el jefe de la mafia y Obtuviste :', 'Casi te atrapa la policía pero lograste robar una cantidad valiosa de 💰. !Te cuidado la próxima vez! Obtuviste:', 'Los mafiosos te han pagado :', 'Le has robado al Administrador del Grupo', 'Le robarte a tu presidente una sumar de :', 'le robarte a un famoso un valor de :', 'Entraste sigilosamente en el museo y robaste una obra de arte valiosa:', 'Infiltraste una joyería y obtuviste un botín impresionante:', 'Te convertiste en el ladrón más buscado del país, obtuviste:', 'Robaste un camión lleno de productos valiosos y obtuviste', 'Asaltaste un tren y conseguiste', 'Robaste un avión cargado de mercancía y obtuviste', 'Te hiciste pasar por un millonario para robar una joya única, obtuviste', 'Entraste a la casa de un coleccionista de arte y robaste una pieza invaluable, obtuviste', 'Secuestraste a un empresario y conseguiste un rescate importante:', 'Amenazaste a un político y obtuviste una gran suma de dinero:', 'Sobornaste a un oficial de policía para obtener información valiosa, conseguiste'];
global.robmal = ['LA POLICIA TE VIO 🙀👮‍♂️ PERDISTE', 'Fuiste a robar un banco 🏦 y tu ayudante te vendio a la policía, perdiste', 'No pudiste escapar de la Policía 🚔, perdiste :', 'Intentaste robar un casino pero te descubrieron, perdiste:', 'Te atraparon tratando de robar una tienda, perdiste:', 'La alarma sonó cuando intentabas robar un almacén, perdiste:', 'El dueño del lugar te atrapó in fraganti, perdiste', 'Intentaste hackear una cuenta bancaria pero te rastrearon, perdiste', 'Fuiste descubierto tratando de sobornar a un oficial, perdiste', 'Tu plan para chantajear a un empresario salió mal, perdiste']

//by elrebelde21