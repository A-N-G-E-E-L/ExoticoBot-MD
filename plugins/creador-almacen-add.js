let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw `᥀·࣭࣪̇˖💎◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙫𝙞𝙙𝙚𝙤, 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙨𝙩𝙞𝙘𝙠𝙚𝙧, 𝙤 𝙖𝙪𝙙𝙞𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`
if (!m.quoted.fileSha256) throw `᥀·࣭࣪̇˖❌◗ 𝙎𝙤𝙡𝙤 𝙥𝙪𝙚𝙙𝙚𝙨 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙞𝙢𝙖𝙜𝙚𝙣𝙚𝙨, 𝙫𝙞𝙙𝙚𝙤𝙨, 𝙖𝙪𝙙𝙞𝙤𝙨, 𝙤 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨.`
if (!text) throw `᥀·࣭࣪̇˖🌆◗ 𝘿𝙚𝙛𝙞𝙣𝙖 𝙪𝙣 𝙣𝙤𝙢𝙗𝙧𝙚, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙘𝙤𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙢𝙖𝙨 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙚.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n_${usedPrefix + command} Xddd_`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw `᥀·࣭࣪̇˖💎◗ 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙡𝙤𝙨 𝙤𝙬𝙣𝙚𝙧𝙨 𝙮 𝙚𝙡 𝙗𝙤𝙩 𝙡𝙤 𝙥𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧.`
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`᥀·࣭࣪̇˖✅◗ 𝙄𝙢𝙖𝙜𝙚𝙣 𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙖 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 𝙖 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
