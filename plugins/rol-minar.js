let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 1000)
let info = `᥀·࣭࣪̇˖⛏️◗ 𝙇𝙤𝙜𝙧𝙖𝙨𝙩𝙚 𝙢𝙞𝙣𝙖𝙧: ${hasil} 𝙙𝙚 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖.`
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `𝙍𝙚𝙜𝙧𝙚𝙨𝙖 𝙚𝙣: ${msToTime(time - new Date())}`  
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', wm, 'status@broadcast')   
global.db.data.users[m.sender].lastmiming = new Date * 1
}
handler.help = ['minar']
handler.tags = ['rg']
handler.command = ['minar', 'miming', 'mine'] 
handler.fail = null
handler.exp = 0
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