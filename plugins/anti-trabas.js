//
//By @NeKosmic || https://github.com/NeKosmic/
//
import * as fs from 'fs'

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, text, participants, usedPrefix }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*• ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let name = await conn.getName(m.sender)
const user = `@${m.sender.split`@`[0]}`;
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'ɢᴀᴛᴀʙᴏᴛ-ᴍᴅ', 'jpegThumbnail': null}}}
if (chat.antiTraba && m.text.length > 4000) { //Cantidad máxima de caracteres aceptados en un mensaje//
if (isAdmin) return conn.sendMessage(m.chat, { text: `El admin ha enviado un texto que contiene muchos caracteres... -_-`, mentions: [m.sender] }, { quoted: fakemek })
if (!isBotAdmin) return conn.sendMessage(m.chat, {text: `𝘕𝘰 𝘴𝘰𝘺 𝘢𝘥𝘮𝘪𝘯 𝘤𝘰𝘯̃𝘰 :𝘤`, mentions: [...groupAdmins.map(v => v.id)] }, {quoted: m})
if (isBotAdmin) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
setTimeout(() => {   
conn.sendMessage(m.chat, { text: `Mensaje con muchos caracteres...\n${"\n".repeat(400)}`, mentions: [m.sender] }, { quoted: fakemek })}, 0)
setTimeout(() => { 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)} else if (!bot.restrict) return m.reply(`𝘌𝘭 𝘤𝘳𝘦𝘢𝘥𝘰𝘳 𝘥𝘦𝘣𝘦 𝘥𝘦 𝘢𝘤𝘵𝘪𝘷𝘢𝘳 𝘭𝘢𝘴 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘤𝘪𝘰𝘯𝘦𝘴.`)
}
return !0
} 
export default handler
