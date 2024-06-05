import fetch from 'node-fetch'
import { facebook } from '@xct007/frieren-scraper'

var handler = async (m, { conn, args, command, usedPrefix, text }) => {

let vid
const isCommand7 = /^(facebook2|fb2|facebookdl2|fbdl2)$/i.test(command)
async function reportError(e) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🚫◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤 𝙚𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`, fkontak, m)
console.log(`᥀·࣭࣪̇˖⚠️◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙛𝙖𝙡𝙡𝙖𝙙𝙤 𝙥𝙤𝙧 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.`)
console.log(e)
}
  
switch (true) {   
case isCommand7:
if (!text) return conn.reply(m.chat, `᥀·࣭࣪̇˖☁️◗ 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz*`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g)) return conn.reply(m.chat, '᥀·࣭࣪̇˖☁️◗ 𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙨𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠.', fkontak, m)
await conn.reply(m.chat, '᥀·࣭࣪̇˖🍁◗ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊... ✨', fkontak, m)
//m.react(done)
let messageType = checkMessageType(args[0])
let message = ''
switch (messageType) {
case 'groups':
message = '᥀·࣭࣪̇˖🍁◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿... ✨'
break
case 'reel':
message = '᥀·࣭࣪̇˖🪐◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿... ✨'
break
case 'stories':
message = '᥀·࣭࣪̇˖☁️◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿... ✨'
break
case 'posts':
message = '᥀·࣭࣪̇˖🍃◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿... ✨'
break
default:
message = '᥀·࣭࣪̇˖🗿◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿... ✨'
break
}
try {
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=BrunoSobrino&url=${args[0]}`)
let _json = await res.json()
vid = _json.result[0]
if (vid == '' || !vid || vid == null) vid = _json.result[1]
await conn.sendFile(m.chat, vid, 'error.mp4', `*${message}*`, m)
} catch (error1) {
try {
const d2ata = await facebook.v1(args[0])
let r2es = ''
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`
}
await conn.sendFile(m.chat, r2es, 'error.mp4', `*${message}*`, m)
} catch (error2) {
try {
var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`)
var js = await get.json()
await conn.sendFile(m.chat, js.result.HD, 'error.mp4', `*${message}*`, m)
} catch (e) {
reportError(e)}
}}}

}
handler.help = ['fb']
handler.tags = ['descargas']
handler.command = /^(facebook2|fb2|facebookdl2|fbdl2)$/i

handler.register = true
handler.diamond = true

export default handler
  
function checkMessageType(url) {
if (url.includes('www.facebook.com')) {
if (url.includes('/groups/')) {
return 'groups'
} else if (url.includes('/reel/')) {
return 'reel'
} else if (url.includes('/stories/')) {
return 'stories'
} else if (url.includes('/posts/')) {
return 'posts'
}}
return 'default'
}
