export async function before(m) {
const username = conn.getName(m.sender)
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
let user = global.db.data.users[m.sender]
if (new Date() - user.pc < 21600000) return
await m.reply(`
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃ ⧏❪̣࣭̇࣪𝆭·ฺ۪۟𖡎𝆭｡𝆹𝅥𝘌ฺ𝙭𝆭𝙤𝘵ฺ𝘪𝘤𝆭𝙤𝘉𝆭𝙤ฺ𝙩-𝗠ฺ𝖣𝆹𝅥𖣠ᮬ𝆭·̣̇͜᭺⧐
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰────────────────────────•

᥀·࣭࣪̇˖👋🏻◗ 𝙃𝙤𝙡𝙖 ${username} 𝙘𝙤𝙢𝙤 𝙚𝙨𝙩𝙖𝙨?
𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤(𝙖) 𝙖: ${wm}


᥀·࣭࣪̇˖✨◗ 𝙂𝙧𝙖𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙚𝙨𝙩𝙖𝙧 𝙖𝙦𝙪𝙞!!!
𝙨𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙙𝙪𝙙𝙖𝙨, 𝙥𝙪𝙚𝙙𝙚𝙨 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙖𝙧𝙢𝙚 𝙖𝙦𝙪𝙞:
wa.me/5493873232212


᥀·࣭࣪̇˖☁️◗ 𝙋𝙖𝙧𝙖 𝙫𝙚𝙧 𝙚𝙡 𝙢𝙚𝙣𝙪 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤
𝙪𝙨𝙚 𝙚𝙡 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:
#allmenu
`)
user.pc = new Date * 1
}
