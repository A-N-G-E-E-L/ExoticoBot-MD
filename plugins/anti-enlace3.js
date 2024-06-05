// Codigo de GataNina-Li
import fetch from 'node-fetch'  
const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /telegram.com|t.me/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 
const isLinkTw = /twitter.com|x.com/i 
const isLinkDc = /discord.com|discord.gg/i 
const isLinkTh = /threads.net/i 
const isLinkTch = /twitch.tv/i
let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (isAdmin || isOwner || isROwner || m.fromMe) return
if (m.isBaileys && m.fromMe) return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkTw = isLinkTw.exec(m.text)
const isAntiLinkDc = isLinkDc.exec(m.text)
const isAntiLinkTh = isLinkTh.exec(m.text)
const isAntiLinkTch = isLinkTch.exec(m.text)
if (chat.antiTiktok && isAntiLinkTik) {  
if (chat.delete) return m.reply('᥀·࣭࣪̇˖🚫◗ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞 𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨.')   
if (isBotAdmin) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🌐◗ 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙡𝙞𝙣𝙠.\n\n𝙎𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤(𝙖): *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
} else if (!isBotAdmin) {
return m.reply('᥀·࣭࣪̇˖👑◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚...')
}}
if (chat.antiYoutube && isAntiLinkYt) {
if (chat.delete) return m.reply('᥀·࣭࣪̇˖🚫◗ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞 𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨.')   
if (isBotAdmin) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🌐◗ 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙡𝙞𝙣𝙠.\n\n𝙎𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤(𝙖): *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
} else if (!isBotAdmin) {
return m.reply('᥀·࣭࣪̇˖👑◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚...')
}}
if (chat.antiTelegram && isAntiLinkTel) {
if (chat.delete) return m.reply('᥀·࣭࣪̇˖🚫◗ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞 𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨.')   
if (isBotAdmin) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🌐◗ 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙡𝙞𝙣𝙠.\n\n𝙎𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤(𝙖): *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
} else if (!isBotAdmin) {
return m.reply('᥀·࣭࣪̇˖👑◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚...')
}}  
if (chat.antiFacebook && isAntiLinkFb) {
if (chat.delete) return m.reply('᥀·࣭࣪̇˖🚫◗ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞 𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨.')   
if (isBotAdmin) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🌐◗ 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙡𝙞𝙣𝙠.\n\n𝙎𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤(𝙖): *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return 
} else if (!isBotAdmin) {
return m.reply('᥀·࣭࣪̇˖👑◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚...')
}}   
if (chat.antiInstagram && isAntiLinkIg) {
if (chat.delete) return m.reply('᥀·࣭࣪̇˖🚫◗ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞 𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨.')   
if (isBotAdmin) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🌐◗ 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙡𝙞𝙣𝙠.\n\n𝙎𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤(𝙖): *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return 
} else if (!isBotAdmin) {
return m.reply('᥀·࣭࣪̇˖👑◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚...')
}} 
if (chat.antiTwitter && isAntiLinkTw) {
if (chat.delete) return m.reply('᥀·࣭࣪̇˖🚫◗ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞 𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨.')   
if (isBotAdmin) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🌐◗ 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙡𝙞𝙣𝙠.\n\n𝙎𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤(𝙖): *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
} else if (!isBotAdmin) {
return m.reply('᥀·࣭࣪̇˖👑◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚...')
}}
if (chat.antiDiscord && isAntiLinkDc) {
if (chat.delete) return m.reply('᥀·࣭࣪̇˖🚫◗ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞 𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨.')   
if (isBotAdmin) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🌐◗ 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙡𝙞𝙣𝙠.\n\n𝙎𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤(𝙖): *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
} else if (!isBotAdmin) {
return m.reply('᥀·࣭࣪̇˖👑◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚...')
}}
if (chat.antiThreads && isAntiLinkTh) {
if (chat.delete) return m.reply('᥀·࣭࣪̇˖🚫◗ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞 𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨.')   
if (isBotAdmin) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🌐◗ 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙡𝙞𝙣𝙠.\n\n𝙎𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤(𝙖): *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
} else if (!isBotAdmin) {
return m.reply('᥀·࣭࣪̇˖👑◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚...')
}}
if (chat.antiTwitch && isAntiLinkTch) {
if (chat.delete) return m.reply('᥀·࣭࣪̇˖🚫◗ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞 𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨.')   
if (isBotAdmin) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🌐◗ 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙡𝙞𝙣𝙠.\n\n𝙎𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤(𝙖): *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
} else if (!isBotAdmin) {
return m.reply('᥀·࣭࣪̇˖👑◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚...')
}}
return !0
}
export default handler
