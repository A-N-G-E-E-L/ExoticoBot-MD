let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text, usedPrefix, command}) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `᥀·࣭࣪̇˖💰◗ 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙡𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 𝙎𝙚𝙧𝙫𝙚𝙧𝘾𝙤𝙞𝙣𝙨 𝙥𝙖𝙧𝙖 𝙙𝙖𝙧𝙡𝙚 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤.`
if (isNaN(txt)) throw `᥀·࣭࣪̇˖🚫◗ 𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙙𝙢𝙞𝙩𝙚𝙣 𝙣𝙪𝙢𝙚𝙧𝙤𝙨, 𝙣𝙤 𝙨𝙞𝙢𝙗𝙤𝙡𝙤𝙨...\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} @${global.owner[0][0]} 50`
try {
let dmt = parseInt(txt)
let exoticocoins = dmt
let pjk = Math.ceil(dmt * pajak)
exoticocoins += pjk
if (exoticocoins < 60000) throw `᥀·࣭࣪̇˖⚠️◗ 𝙀𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚 𝙎𝙚𝙧𝙫𝙚𝙧𝘾𝙤𝙞𝙣𝙨 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙡𝙞𝙢𝙞𝙩𝙚 𝙙𝙚 *60.000*, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`
let users = global.db.data.users
users[who].exoticocoins += dmt
conn.reply(m.chat,  `𝗖𝗢𝗠𝗣𝗥𝗔 𝗗𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢: *${text}*\n\n𝗦𝗘𝗥𝗩𝗘𝗥 𝗖𝗢𝗜𝗡𝗦 𝗔𝗡̃𝗔𝗗𝗜𝗗𝗢𝗦:\n• *${dmt} ServerCoins* ☁️✨`, m, {contextInfo: {mentionedJid: conn.parseMention(text)}})
} catch (e) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖⚠️◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙛𝙖𝙡𝙡𝙖𝙙𝙤, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.`, m)
console.log(`᥀·࣭࣪̇˖🚫◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`)
console.log(e)}}
handler.help = ['addservercoins <@user>']
handler.tags = ['xp']
handler.command = ['recargarcoins', 'addservercoins', 'darservercoins'] 
handler.group = true
handler.rowner = true
export default handler
