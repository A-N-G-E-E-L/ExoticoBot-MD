//Creditos al creador de Senna Bot.
import hispamemes from 'hispamemes'
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme()  
conn.sendButton(m.chat, `😂 _${command}_ 😂`.trim(), wm, url, [['🤣 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 🤣', `/${command}`]], null, null, m)}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme|memes)$/i
export default handler
