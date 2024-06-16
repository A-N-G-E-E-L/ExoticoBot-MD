const colors = [
    0xff26c4dc, 0xff792138,
    0xff8b6990, 0xfff0b330,
    0xffae8774, 0xff5696ff,
    0xffff7b6b, 0xff57c9ff,
    0xff243640, 0xffb6b327,
    0xffc69fcc, 0xff54c265,
    0xff6e257e, 0xffc1a03f,
    0xff90a841, 0xff7acba5,
    0xff8294ca, 0xffa62c71,
    0xffff8a8c, 0xff7e90a3,
    0xff74676a
] 
let handler = async (m, { conn, text }) => {
    let _m = Promise.resolve({ key: { id: '' }})
    if (!m.quoted && !text) throw '᥀·࣭࣪̇˖🧰◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙤 𝙢𝙪𝙡𝙩𝙞𝙢𝙚𝙙𝙞𝙖 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.'
    if (m.quoted && m.quoted.mtype !== 'conversation' && !text) _m = m.quoted.forward('status@broadcast')
    if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = conn.sendMessage('status@broadcast', {
        text: m.quoted.text,
        textArgb: 0xffffffff,
        backgroundArgb: pickRandom(colors)
    }, 'extendedTextMessage')
    if (!m.quoted && text) _m = conn.sendMessage('status@broadcast', {
        text,
        textArgb: 0xffffffff,
        backgroundArgb: pickRandom(colors)
    }, 'extendedTextMessage')
    if (m.quoted && text) _m = conn.forwardMessage('status@broadcast', await m.quoted.cMod('status@broadcast', text))
    //m.reply((await _m).key.id)
    m.reply('᥀·࣭࣪̇˖✅◗ 𝙀𝙨𝙩𝙖𝙙𝙤 𝙨𝙪𝙗𝙞𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤, 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙤𝙨 𝙚𝙨𝙩𝙖𝙙𝙤𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩, 𝙙𝙚𝙗𝙚𝙧𝙖𝙣 𝙖𝙜𝙚𝙣𝙙𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙤𝙨 𝙚𝙨𝙩𝙖𝙙𝙤𝙨.')
    }
handler.help = ['subirestado']
handler.tags = ['General']
handler.command = /^subirestado$/i
handler.register = false
export default handler

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
