//Creditos a BrunoSobrino
import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/NODE_EXOTICO_JSON/node-exotico-anime/navidad.json`)).data  
let mystic = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `*_${command}_*`, wm, mystic, [['🎄 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 🎄', `${usedPrefix + command}`]], null, null, m)}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(navidad)$/i
export default handler
