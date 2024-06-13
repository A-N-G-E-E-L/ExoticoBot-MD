const handler = async (m, {conn, usedPrefix, text}) => {
  if (isNaN(text) && !text.match(/@/g)) {

  } else if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  if (!text && !m.quoted) return conn.reply(m.chat, `᥀·࣭࣪̇˖🪐◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙤 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙦𝙪𝙞𝙩𝙖𝙧𝙡𝙧 𝙖𝙙𝙢𝙞𝙣.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix}quitaradmin @${global.owner[0][0]}*`, fkontak, m);
  if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `᥀·࣭࣪̇˖🚫◗ 𝙀𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙤 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙙𝙖 𝙚𝙨 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙧 𝙖 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣.`, fkontak, m);

  try {
    if (text) {
      var user = number + '@s.whatsapp.net';
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + '@s.whatsapp.net';
    }
  } catch (e) {
  } finally {
    conn.groupParticipantsUpdate(m.chat, [user], 'demote');
    conn.reply(m.chat, `᥀·࣭࣪̇˖✅◗ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙮𝙖 𝙣𝙤 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.`, fkontak, m);
  }
};
handler.help = ['*@usuario*', '*responder chat*'].map((v) => 'demote ' + v);
handler.tags = ['group'];
handler.command = /^(demote|quitarpoder|quitaradmin)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.fail = null;
export default handler;

/*
let handler = async (m, { conn,usedPrefix, text, command }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if (!text && !m.quoted) return conn.sendButton(m.chat, wm, '᥀·࣭࣪̇˖🪐◗ 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:' + `*${usedPrefix + command} @${global.owner[0][0]}*`, null, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], fkontak, m)
if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.sendButton(m.chat, wm, '᥀·࣭࣪̇˖🪐◗ 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: ' + `*${usedPrefix + command} @${global.owner[0][0]}*`, null, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], fkontak, m)
  
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.reply(m.chat, '᥀·࣭࣪̇˖✅◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤, 𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙮𝙖 𝙣𝙤 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.', fkontak, m)
}}
handler.command = /^(demote|quitarpoder|quitaradmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
*/
