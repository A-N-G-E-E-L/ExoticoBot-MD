let handler = async (m, { conn, usedPrefix, text }) => {
  let { key } = await conn.sendMessage(m.chat, { text: "᥀·࣭࣪̇˖👺◗ 𝘼𝙝𝙤𝙧𝙖 𝙩𝙚 𝙫𝙤𝙮 𝙖 𝙝𝙖𝙘𝙚𝙧 𝙡𝙖 𝙥𝙖𝙟𝙖." }, { quoted: m });
  const array = [
    "8==👊==D", "8===👊=D", "8=👊====D", "8=👊===D", "8==👊==D", "8===👊=D", "8====👊D", "8==👊=D", "8==👊==D", "8=👊===D", "8👊====D", "8=👊===D","8==👊==D", "8===👊=D", "8====👊D","8==👊==D", "8===👊=D", "8=👊===D", "8=👊===D", "8==👊==D", "8===👊=D", "8====👊D💦"
  ];

  for (let item of array) {
    await conn.sendMessage(m.chat, { text: `${item}`, edit: key }, { quoted: m });
    await new Promise(resolve => setTimeout(resolve, 20)); // Delay 5 seconds
  }
  return conn.sendMessage(m.chat, { text: `Oh ${text} se corrió! 😏💦`.trim() , edit: key, mentions: [m.sender] }, { quoted: m });
};

handler.help = ['pajeame'];
handler.tags = ['fun'];
handler.command = /^(sega|pajeame|fap)$/i;

export default handler;