import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from "fs"
import path, { join } from 'path'

  let handler  = async (m, { conn, usedPrefix, command}, args) => {
    let parentw = conn
      let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let uniqid = `${who.split`@`[0]}`
          let userS = `${conn.getName(who)}`
    
          if (global.conn.user.jid !== conn.user.jid) {
        return conn.sendMessage(m.chat, {text: IDexotic.serbotSub + `*• https://api.whatsapp.com/send/?phone=${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}&type=phone_number&app_absent=0*`}, { quoted: m }) 
} else {
try {
  await fs.rmdir("./MultiBotOFC/" + uniqid, { recursive: true, force: true })
    await conn.sendMessage(m.chat, { text: '᥀·࣭࣪̇˖🌐◗ 𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙣𝙙𝙤 𝙡𝙖 𝙨𝙚𝙨𝙞𝙤𝙣...' }, { quoted: m })
      await conn.sendMessage(m.chat, { text : '᥀·࣭࣪̇˖🌐◗ 𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!' } , { quoted: m })
} catch(err) {
if (err.code === 'ENOENT' && err.path === `./MultiBotOFC/${uniqid}`) {
await conn.sendMessage(m.chat, { text: "Usted no es Sub Bot" }, { quoted: m })
} else {
console.error(userS + ' ' + '᥀·࣭࣪̇˖🌐◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤.', err)
}
}
}
}

handler.command = /^(deletesess?ion|eliminarsesion|borrarsesion|delsess?ion|cerrarsesion)$/i
handler.private = true
handler.fail = null

export default handler

