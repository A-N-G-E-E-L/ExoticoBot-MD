import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let user = db.data.users[m.sender]
  let time = user.lastmining + 10000 //tiempo de espera en min
if (new Date - user.lastmiming < 10000) return await conn.reply(m.chat, '᥀·࣭࣪̇˖⏱️◗ 𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙘𝙧𝙚𝙖𝙧 𝙤𝙩𝙧𝙤 𝙨𝙩𝙞𝙘𝙠𝙚𝙧.',  m)
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('᥀·࣭࣪̇˖🎥◗ 𝙀𝙡 𝙫𝙞𝙙𝙚𝙤 𝙣𝙤 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙙𝙪𝙧𝙖𝙧 𝙢𝙖𝙨 𝙙𝙚 10 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨...')
      let img = await q.download?.()
      if (!img) throw IDexotic.respoVIG;
      let out
      try {
        stiker = await sticker(img, false, global.packname, global.author)
      } catch (e) {
        console.error(e)
      } finally {
      await conn.reply(m.chat, '᥀·࣭࣪̇˖🪐◗ 𝘾𝙧𝙚𝙖𝙣𝙙𝙤 𝙚𝙡 𝙨𝙩𝙞𝙘𝙠𝙚𝙧, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...', m)
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('᥀·࣭࣪̇˖🔄◗ 𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙤 𝙫𝙞𝙙𝙚𝙤.')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: '🌌 𝘾𝙍𝙀𝘼𝙍 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 🌌', body: '𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋', mediaType: 2, sourceUrl: exoticoAll, thumbnail: imgAdvs}}}, { quoted: m })
    else throw '᥀·࣭࣪̇˖🎨◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙤 𝙫𝙞𝙙𝙚𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.'
  }
user.lastmiming = new Date * 1
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker'] 

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
