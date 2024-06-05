
const {
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion, 
    MessageRetryMap,
    makeCacheableSignalKeyStore, 
    jidNormalizedUser,
    PHONENUMBER_MCC
   } = await import('@whiskeysockets/baileys')
import moment from 'moment-timezone'
import NodeCache from 'node-cache'
import readline from 'readline'
import qrcode from "qrcode"
import crypto from 'crypto'
import fs from "fs"
import pino from 'pino';
import * as ws from 'ws';
const { CONNECTING } = ws
import { Boom } from '@hapi/boom'
import { makeWASocket } from '../lib/simple.js';

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner }) => {

  let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn
  if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
	throw `᥀·࣭࣪̇˖👺◗ 𝙎𝙤𝙡𝙤 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙣 𝙚𝙡 𝙘𝙝𝙖𝙩 𝙥𝙧𝙞𝙫𝙖𝙙𝙤.\n\n wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix}serbot`
}

	//=====
  async function bbts() {

  let authFolderB = crypto.randomBytes(10).toString('hex').slice(0, 8)
  //let authFolderB = m.sender.split('@')[0]


    if (!fs.existsSync("./MultiBotOFC/"+ authFolderB)){
        fs.mkdirSync("./MultiBotOFC/"+ authFolderB, { recursive: true });
    }
    args[0] ? fs.writeFileSync("./MultiBotOFC/" + authFolderB + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""
    
//--
const {state, saveState, saveCreds} = await useMultiFileAuthState(`./MultiBotOFC/${authFolderB}`)
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = m.sender.split('@')[0]

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

const connectionOptions = {
  logger: pino({ level: 'silent' }),
  printQRInTerminal: false,
  mobile: MethodMobile, 
  //browser: ['Chrome (Linux)', '', ''],
  browser: [ "Ubuntu", "Chrome", "20.0.04" ], 
  auth: {
  creds: state.creds,
  keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
  },
  markOnlineOnConnect: true, 
  generateHighQualityLinkPreview: true, 
  getMessage: async (clave) => {
  let jid = jidNormalizedUser(clave.remoteJid)
  let msg = await store.loadMessage(jid, clave.id)
  return msg?.message || ""
  },
  msgRetryCounterCache,
  msgRetryCounterMap,
  defaultQueryTimeoutMs: undefined,   
  version
  }

//--
let conn = makeWASocket(connectionOptions)

if (methodCode && !conn.authState.creds.registered) {
    if (!phoneNumber) {
       process.exit(0);
    }
    let cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(v => cleanedNumber.startsWith(v))) {
        process.exit(0);
    }

    setTimeout(async () => {
        let codeBot = await conn.requestPairingCode(cleanedNumber);
        codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot;
	 parent.sendButton(m.chat, `᥀·࣭࣪̇˖🤖◗ 𝘾𝙤𝙥𝙞𝙖 𝙚𝙡 𝙘𝙤𝙙𝙞𝙜𝙤 𝙮 𝙥𝙚𝙜𝙖𝙡𝙤. 𝙋𝙧𝙚𝙨𝙞𝙤𝙣𝙚 𝙡𝙖 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣.`, wm, 'https://i.ibb.co/SKKdvRb/code.jpg', [], codeBot, null, m) 
        rl.close();
    }, 3000);
}

conn.isInit = false

//---new
let isInit = true

async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin, qr } = update
    if (isNewLogin) conn.isInit = true
    // scan qr
   /* if (qr) {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', `${mssg.botqr}`, m)
  setTimeout(() => {
    parent.sendMessage(m.chat, { delete: scan.key })
  }, 50000) //50 segundos
}*/

    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
        if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
      let i = global.conns.indexOf(conn)
      if (i < 0) return console.log(await creloadHandler(true).catch(console.error))
      delete global.conns[i]
      global.conns.splice(i, 1)

     if (code !== DisconnectReason.connectionClosed){ 
        parent.sendMessage(conn.user.jid, {text : `᥀·࣭࣪̇˖⚙️◗ 𝘾𝙤𝙣𝙚𝙭𝙞𝙤𝙣 𝙥𝙚𝙧𝙙𝙞𝙙𝙖 𝙘𝙤𝙣 𝙚𝙡 𝙨𝙚𝙧𝙫𝙞𝙙𝙤𝙧, 𝙧𝙚𝙘𝙤𝙣𝙚𝙘𝙩𝙖𝙣𝙙𝙤...`}, { quoted: m }) //reconectar
    } else {
        parent.sendMessage(m.chat, {text : `᥀·࣭࣪̇˖⚠️◗ 𝙑𝙞𝙣𝙘𝙪𝙡𝙤 𝙘𝙚𝙧𝙧𝙖𝙙𝙤, 𝙩𝙚𝙣𝙙𝙧𝙖 𝙦𝙪𝙚 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: #premcode\n\n• 𝙋𝙖𝙧𝙖 𝙘𝙤𝙣𝙚𝙘𝙩𝙖𝙧𝙩𝙚 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`}, { quoted: m }) // session cerrada
    }
    }
    //----
    if (global.db.data == null) loadDatabase()

    if (connection == 'open') {
    conn.isInit = true
    global.conns.push(conn)
    await parent.sendMessage(m.chat, {text : args[0] ? `᥀·࣭࣪̇˖✅◗ 𝙔𝙖 𝙚𝙨𝙩𝙖𝙨 𝙘𝙤𝙣𝙚𝙘𝙩𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤, 𝙙𝙞𝙨𝙛𝙧𝙪𝙩𝙖 𝙙𝙚𝙡 𝙗𝙤𝙩 :𝘿` : `᥀·࣭࣪̇˖✅◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝙎𝙪𝙗 𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!`}, { quoted: m })
    await sleep(5000)
    if (args[0]) return
		await parent.sendMessage(conn.user.jid, {text : `᥀·࣭࣪̇˖✅◗ 𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙣𝙩𝙧𝙖𝙣𝙩𝙚𝙨, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...`}, { quoted: m })
		parent.sendMessage(conn.user.jid, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync("./MultiBotOFC/" + authFolderB + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
	  }
 
  }

  setInterval(async () => {
    if (!conn.user) {
      try { conn.ws.close() } catch { }
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
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
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
  
conn.welcome = global.conn.welcome + ''
conn.bye = global.conn.bye + ''
conn.spromote = global.conn.spromote + ''
conn.sdemote = global.conn.sdemote + ''

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
bbts()

}
handler.help = ['botclone']
handler.tags = ['bebot']
handler.command = ['premcode', 'serbotcode', 'codeserbot']
handler.rowner = false

export default handler

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
