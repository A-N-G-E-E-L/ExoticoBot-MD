const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion} = (await import('@whiskeysockets/baileys'))
import qrcode from 'qrcode'
import NodeCache from 'node-cache'
import fs from 'fs'
import path from 'path'
import pino from 'pino'
import util from 'util' 
import * as ws from 'ws'
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'

let check1 = 'NjBhZGVmZWI4N2M2'
let check2 = 'ZThkMmNkOGVlMDFmZD'
let check3 = 'UzYTI1MTQgIGluZ'
let check4 = 'm8tZG9uYXIuanMK'
let check5 = 'NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO'
let check6 = 'DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz'
let check8 = 'NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo'

let crm1 = 'Y2QgcGx1Z2lucy'
let crm2 = 'A7IG1kNXN1b'
let crm3 = 'SBpbmZvLWRvbmFyLmpz'
let crm4 = 'IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz'
let drm1 = ''
let drm2 = ''
let rtx = IDexoticserbotQR
let rtx2 = IDexoticserbotCode 

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
let parentw = conn
if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, `${IDexoticserbotSub}• wa.me/${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}`, fkontak) 
const mcode = args[0] && args[0].includes('--code') ? true : args[1] && args[1].includes('--code') ? true : false


let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (mcode) {
args[0] = args[0].replace('--code', '').trim()
if (args[1]) args[1] = args[1].replace('--code', '').trim()
if (args[0] == '') args[0] = undefined
console.log(args[0])}
if (!fs.existsSync('./MultiBotOFC/'+ id)){
fs.mkdirSync('./MultiBotOFC/'+ id, { recursive: true })}
args[0] && args[0] != undefined ? fs.writeFileSync('./MultiBotOFC/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, '\t')) : ''

if (fs.existsSync('./MultiBotOFC/' + id + '/creds.json')) {
let creds = JSON.parse(fs.readFileSync("./MultiBotOFC/" + id + "/creds.json"))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync('./MultiBotOFC/' + id + '/creds.json')
}}}

const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, 'base64')
exec(comb.toString('utf-8'), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)
async function jddt() {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (!fs.existsSync('./MultiBotOFC/'+ id)){
fs.mkdirSync('./MultiBotOFC/'+ id, { recursive: true })
}
args[0] ? fs.writeFileSync('./MultiBotOFC/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, `\t`)) : ''

let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState("./MultiBotOFC/" + id)

const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
browser: mcode ? ['Ubuntu', 'Chrome', '110.0.5585.95'] : ['ExoticoBot-SubBot', 'Opera', '5.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'ExoticoBot-MD',
}}}

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) conn.isInit = false
if (qr && !mcode) return parentw.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx + drmer.toString('utf-8')}, { quoted: fkontak})
if (qr && mcode) {
parentw.sendMessage(m.chat, {text : rtx2 + drmer.toString('utf-8')}, { quoted: fkontak })
await sleep(5000)
let secret = await conn.requestPairingCode((m.sender.split`@`[0]))
await m.reply(secret)}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
const endSesion = async (loaded) => {
if (!loaded) {
try {
conn.ws.close()
} catch {
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
await fs.unlinkSync('./MultiBotOFC/' + id + '/creds.json')

return await conn.reply(m.chat, IDexoticserbotClose, fkontak)
}
if (reason === DisconnectReason.restartRequired) {
jddt()
return console.log(IDexoticserbotConect)
} else if (reason === DisconnectReason.loggedOut) {
sleep(4000)
return conn.reply(m.chat, IDexotic.serbotConect(usedPrefix), fkontak)
} else if (reason == 428) {
await endSesion(false)
return conn.reply(m.chat, IDexotic.serbotClear, fkontak)
} else if (reason === DisconnectReason.connectionLost) {
await jddt()
return console.log(IDexotic.serbotserver)
} else if (reason === DisconnectReason.badSession) {
return await conn.reply(m.chat, IDexotic.serbotClear(usedPrefix), fkontak)
} else if (reason === DisconnectReason.timedOut) {
await endSesion(false)
return console.log(IDexotic.serbotTime)
} else {
console.log(`${IDexotic.serbotDesco} ${reason || ""} >> ${connection || ""}`)
}}
if (global.db.data == null) loadDatabase()
if (connection == `open`) {
conn.isInit = true
global.conns.push(conn)
await parentw.sendMessage(m.chat, {text : args[0] ? `${IDexotic.serbotExitoA}` : `${IDexotic.serbotExitoB}`}, { quoted: fkontak })
await parentw.sendMessage(m.chat, {text : `${IDexotic.serbotOn}`}, { quoted: fkontak })
await sleep(5000)
if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + ' ' + Buffer.from(fs.readFileSync('./MultiBotOFC/' + id + '/creds.json'), 'utf-8').toString('base64')}, { quoted: fkontak })    

}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close() } catch (e) {      
console.log(await creloadHandler(true).catch(console.error))
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler

} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = conn.chats
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
conn.welcome = `${IDexotic.mainLog}${IDexotic.mainUserB} @user ${IDexotic.mainBotWell} @subject ${IDexotic.mainBotWelll}${String.fromCharCode(8206).repeat(850)}\n@desc`
conn.bye = `${IDexotic.mainLog}${IDexotic.mainUserA} @user ${IDexotic.mainBotBye} @user`
conn.spromote = `${IDexotic.mainLog}${IDexotic.mainUserA} @user ${IDexotic.mainBotPromote}`
conn.sdemote = `${IDexotic.mainLog}${IDexotic.mainUserA} @user ${IDexotic.mainBotDemote}` 
conn.sDesc = `${IDexotic.mainLog}${IDexotic.mainUserA} @user ${IDexotic.mainBotDescrip} @desc`
conn.sSubject = `${IDexotic.mainLog}${IDexotic.mainUserA} @user ${IDexotic.mainBotName} @subject`
conn.sIcon = `${IDexotic.mainLog}${IDexotic.mainBotFoto}` 
conn.sRevoke = `${IDexotic.mainLog}${IDexotic.mainBotLink} @revoke` 

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.onCall = handler.callUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

const currentDateTime = new Date()
const messageDateTime = new Date(conn.ev * 1000)
if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) {
console.log('Leyendo mensaje entrante:', conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = false
})
} else {
console.log(conn.chats, `${IDexotic.serbotSms}`, conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = true
})
}

conn.ev.on(`messages.upsert`, conn.handler)
conn.ev.on(`group-participants.update`, conn.participantsUpdate)
conn.ev.on(`groups.update`, conn.groupsUpdate)
conn.ev.on(`message.delete`, conn.onDelete)
conn.ev.on(`call`, conn.onCall)
conn.ev.on(`connection.update`, conn.connectionUpdate)
conn.ev.on(`creds.update`, conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
})

} 
handler.help = [`jadibot`, `exotico`, `exoticoqr`, `rentbot`]
handler.tags = [`jadibot`]
handler.command = /^(exoticoqr|exotico|rentbot)/i
handler.register = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}