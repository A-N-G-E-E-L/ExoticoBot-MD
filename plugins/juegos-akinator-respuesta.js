import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
const teks = '*0 - Sí*\n*1 - No*\n*2 - No sé*\n*3 - Probablemente sí*\n*4 - Probablemente no*\n*5 - Volver a la pregunta anterior*';
export async function before(m) {
  if (global.db.data.users[m.sender].banned) return;
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !0;
  const aki = global.db.data.users[m.sender].akinator;
  if (!aki.sesi || m.quoted.id != aki.soal.key.id) return;
  if (!somematch(['0', '1', '2', '3', '4', '5'], m.text)) return this.sendMessage(m.chat, {text: `᥀·࣭࣪̇˖⛔◗ 𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙙𝙢𝙞𝙩𝙚𝙣 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙘𝙤𝙣 𝙡𝙤𝙨 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚𝙨 𝙣𝙪𝙢𝙚𝙧𝙤𝙨: 0, 1, 2, 3, 4, 5.\n\n${teks}`}, {quoted: aki.soal});
  const {server, frontaddr, session, signature, question, progression, step} = aki;
  if (step == '0' && m.text == '5') return m.reply('᥀·࣭࣪̇˖🎮◗ 𝙉𝙤 𝙝𝙖𝙮 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖𝙨 𝙖𝙣𝙩𝙚𝙧𝙞𝙤𝙧𝙚𝙨, 𝙚𝙨𝙩𝙖 𝙚𝙨 𝙡𝙖 𝙥𝙧𝙞𝙢𝙚𝙧𝙖 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖.');
  let res; let anu; let soal;
  try {
    if (m.text == '5') res = await fetch(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkeysapi}&server=${server}&session=${session}&signature=${signature}&step=${step}`);
    else res = await fetch(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkeysapi}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${m.text}`);
    anu = await res.json();
    if (anu.status != '200') {
      aki.sesi = false;
      aki.soal = null;
      return m.reply('᥀·࣭࣪̇˖🎮◗ 𝙇𝙖 𝙨𝙚𝙨𝙞𝙤𝙣 𝙙𝙚 𝙖𝙠𝙞𝙣𝙖𝙩𝙤𝙧 𝙚𝙭𝙥𝙞𝙧𝙤, 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤 𝙨𝙚 𝙩𝙚𝙧𝙢𝙞𝙣𝙖.');
    }
    anu = anu.result;
    if (anu.name) {
      await this.sendMessage(m.chat, {image: {url: anu.image}, caption: `• 🎰 𝗔𝗞𝗜𝗡𝗔𝗧𝗢𝗥 🎰 •\n\n*Creo que tu personaje es: ${anu.name}*\n_${anu.description}_`, mentions: [m.sender]}, {quoted: m});
      aki.sesi = false;
      aki.soal = null;
    } else {
      const resultes = await translate(`${anu.question}`, {to: 'es', autoCorrect: true});
      soal = await this.sendMessage(m.chat, {text: `*• Progreso: ${anu.step} (${anu.progression.toFixed(2)} %)*\n\n*• Jugador: @${m.sender.split('@')[0]}*\n*• Pregunta: ${resultes.text}*\n\n${teks}`, mentions: [m.sender]}, {quoted: m});
      aki.soal = soal;
      aki.step = anu.step;
      aki.progression = anu.progression;
    }
  } catch (e) {
    aki.sesi = false;
    aki.soal = null;
    m.reply('᥀·࣭࣪̇˖🎮◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.');
  }
  return !0;
}
function somematch( data, id ) {
  const res = data.find((el) => el === id );
  return res ? true : false;
}
