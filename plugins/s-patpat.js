import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let MessageType = (await import(global.baileys)).default
let handler = async (m, { conn}) => {
try {
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://api.waifu.pics/sfw/pat')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `@${m.sender.split('@')[0]} 𝙚𝙨𝙩𝙖 𝙖𝙘𝙖𝙧𝙞𝙘𝙞𝙖𝙣𝙙𝙤 𝙖 ${m.mentionedJid.map((user)=>(user === m.sender)? '𝙖𝙡𝙜𝙪𝙞𝙚𝙣' : `@${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(pat|palmaditas|cariños|mimos|patt)$/i 
export default handler
