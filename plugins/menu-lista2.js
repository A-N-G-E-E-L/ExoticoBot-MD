let handler = async (m, { conn, usedPrefix, command, text }) => {

const sections = [{
title: `🗿 𝘼𝙏𝘼𝙅𝙊𝙎 𝘿𝙀𝙇 𝘽𝙊𝙏 🥃`,
rows: [
{ header: '𝘼𝙐𝙏𝙊 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍', title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: '𝗩𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝘁𝗲 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮𝗺𝗲𝗻𝘁𝗲.', id: usedPrefix + "reg Exotico.20" }, 
{ header: '𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙀𝙓𝙊𝙏𝙄𝘾𝙊 𝘽𝙊𝙏', title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: '𝗩𝗶𝘀𝗶𝘁𝗮 𝗹𝗮𝘀 𝗰𝘂𝗲𝗻𝘁𝗮𝘀 𝗱𝗲 𝗘𝘅𝗼𝘁𝗶𝗰𝗼𝗕𝗼𝘁.', id: usedPrefix + "cuentasofc" }, 
]},]  
const messages = [[ 
'👑 𝙈𝙀𝙉𝙐 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 👑', 
'𝘔𝘦𝘯𝘶 𝘱𝘢𝘳𝘢 𝘰𝘸𝘯𝘦𝘳𝘴 𝘰 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰𝘴.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuowner']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🤖 𝙈𝙀𝙉𝙐 𝙎𝙀𝙍 𝘽𝙊𝙏 🤖', 
'𝘊𝘰𝘯𝘷𝘪𝘦𝘳𝘵𝘦𝘵𝘦 𝘦𝘯 𝘶𝘯 𝘴𝘶𝘣 𝘣𝘰𝘵.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuserbot']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🚀 𝙈𝙀𝙉𝙐 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 🚀', 
'𝘝𝘪𝘴𝘪𝘵𝘢 𝘦𝘴𝘵𝘦 𝘮𝘦𝘯𝘶 𝘴𝘪 𝘲𝘶𝘪𝘦𝘳𝘦𝘴 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘤𝘰𝘴𝘢𝘴.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menudown']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'👥 𝙈𝙀𝙉𝙐 𝙂𝙍𝙐𝙋𝘼𝙇 👥', 
'𝘌𝘥𝘪𝘵𝘢 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰 𝘤𝘰𝘯 𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menugrupal']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'☁️ 𝙈𝙀𝙉𝙐 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 ☁️', 
'𝘔𝘪𝘳𝘢 𝘭𝘢 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪𝘰𝘯 𝘥𝘦 𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuinfo']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'👤 𝙈𝙀𝙉𝙐 𝙍𝙀𝘾𝙐𝙍𝙎𝙊𝙎 👤', 
'𝘔𝘪𝘳𝘢 𝘵𝘶𝘴 𝘳𝘦𝘤𝘶𝘳𝘴𝘰𝘴 𝘢𝘲𝘶𝘪.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuperfil']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'✨ 𝙈𝙀𝙉𝙐 𝙀𝘿𝙄𝙏 𝘽𝙊𝙏 ✨', 
'𝘌𝘥𝘪𝘵𝘢 𝘦𝘭 𝘣𝘰𝘵 𝘴𝘪 𝘦𝘳𝘦𝘴 𝘶𝘯 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menueditbot']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🔍 𝙈𝙀𝙉𝙐 𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍 🔍', 
'𝘉𝘶𝘴𝘤𝘢 𝘢𝘭𝘨𝘶𝘯𝘢𝘴 𝘤𝘰𝘴𝘢𝘴 𝘤𝘰𝘮𝘰 𝘎𝘰𝘰𝘨𝘭𝘦 𝘺 𝘰𝘵𝘳𝘰𝘴.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menusearch']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🎶 𝙈𝙀𝙉𝙐 𝙀𝘿𝙄𝙏 𝘼𝙐𝘿𝙄𝙊𝙎 🎶', 
'𝘌𝘥𝘪𝘵𝘢 𝘵𝘶𝘴 𝘢𝘶𝘥𝘪𝘰𝘴 𝘦𝘯 𝘦𝘴𝘵𝘦 𝘮𝘦𝘯𝘶',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menueditaudios']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🎰 𝙈𝙀𝙉𝙐 𝙅𝙐𝙀𝙂𝙊𝙎 🎰', 
'𝘝𝘪𝘴𝘪𝘵𝘢 𝘢𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘫𝘶𝘦𝘨𝘰𝘴 𝘦𝘯 𝘦𝘭 𝘣𝘰𝘵.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menujuegos']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'💡 𝙈𝙀𝙉𝙐 𝙄𝙉𝙏𝙀𝙇𝙄𝙂𝙀𝙉𝘾𝙄𝘼 💡', 
'𝘏𝘢𝘣𝘭𝘢 𝘤𝘰𝘯 𝘪𝘯𝘵𝘦𝘯𝘭𝘪𝘨𝘦𝘯𝘤𝘪𝘢 𝘢𝘳𝘵𝘪𝘧𝘪𝘤𝘪𝘢𝘭.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuia']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🛸 𝙈𝙀𝙈𝙐 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝘽𝙊𝙏𝙎 🛸', 
'𝘐𝘯𝘴𝘵𝘢𝘭𝘢 𝘣𝘰𝘵𝘴 𝘦𝘯 𝘦𝘴𝘵𝘦 𝘮𝘦𝘯𝘶.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuinstall']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🧰 𝙈𝙀𝙉𝙐 𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎 🧰', 
'𝘏𝘦𝘳𝘳𝘢𝘮𝘪𝘦𝘯𝘵𝘢𝘴 𝘲𝘶𝘦 𝘵𝘦 𝘱𝘶𝘦𝘥𝘦𝘯 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘦𝘴.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuhrms']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🎧 𝙈𝙀𝙉𝙐 𝘼𝙐𝘿𝙄𝙊𝙎 🎧', 
'𝘌𝘴𝘤𝘶𝘤𝘩𝘢 𝘭𝘰𝘴 𝘢𝘶𝘥𝘪𝘰𝘴 𝘥𝘪𝘴𝘱𝘰𝘯𝘪𝘣𝘭𝘦𝘴.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuaudios']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🍃 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘽𝙊𝙏 🍃', 
'𝘚𝘵𝘪𝘤𝘬𝘦𝘳𝘴 𝘢𝘭𝘦𝘢𝘵𝘰𝘳𝘪𝘰𝘴 𝘦𝘯 𝘦𝘭 𝘣𝘰𝘵.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menustickbot']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🪐 𝙈𝙀𝙉𝙐 𝘽𝘼𝙉 𝙔 𝙐𝙉𝘽𝘼𝙉 🪐', 
'𝘈𝘫𝘶𝘴𝘵𝘦𝘴 𝘱𝘢𝘳𝘢 𝘨𝘳𝘶𝘱𝘰𝘴.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuban']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🎊 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 🎊', 
'𝘊𝘳𝘦𝘢 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴 𝘦𝘯 𝘦𝘴𝘵𝘦 𝘮𝘦𝘯𝘶.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menusticker']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🍷 𝙈𝙀𝙉𝙐 𝙀𝘿𝙄𝙏 𝙂𝙍𝙊𝙐𝙋 🍷', 
'𝘌𝘥𝘪𝘵𝘢 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰 𝘤𝘰𝘯 𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menueditgroup']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'⛩️ 𝙈𝙀𝙉𝙐 𝘼𝙉𝙄𝙈𝙀 𝙍𝘼𝙉𝘿𝙊𝙈 ⛩️', 
'𝘈𝘯𝘪𝘮𝘦 𝘳𝘢𝘯𝘥𝘰𝘮.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuanime']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🍇 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 🍇', 
'𝘊𝘳𝘦𝘢 𝘦𝘧𝘦𝘤𝘵𝘰𝘴.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuefectos']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🍸 𝙈𝙀𝙉𝙐 𝙀𝙓𝙊𝙏𝙄𝘾𝙊 𝘽𝙊𝙏 🍸', 
'𝘝𝘪𝘴𝘪𝘵𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuexotico']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🥃 𝙈𝙀𝙉𝙐 𝙊𝙉 𝙔 𝙊𝙁𝙁 🥃', 
'𝘈𝘤𝘵𝘪𝘷𝘢 𝘰 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢 𝘢𝘭𝘨𝘶𝘯𝘢𝘴 𝘰𝘱𝘤𝘪𝘰𝘯𝘦𝘴.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menunf']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🌌 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 🌌', 
'𝘊𝘰𝘯𝘷𝘪𝘦𝘳𝘵𝘦 𝘢𝘭𝘨𝘶𝘯𝘢𝘴 𝘤𝘰𝘴𝘢𝘴 𝘦𝘯 𝘦𝘴𝘵𝘦 𝘮𝘦𝘯𝘶.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menuconvert']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🎒 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 🎒', 
'𝘚𝘶𝘣𝘦 𝘥𝘦 𝘯𝘪𝘷𝘦𝘭 𝘦𝘯 𝘦𝘴𝘵𝘦 𝘮𝘦𝘯𝘶.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'menurpg']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
], [ 
'🗿 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 🗿',
'𝘔𝘪𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘰𝘮𝘱𝘭𝘦𝘵𝘰 𝘤𝘰𝘯 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴.',
'https://telegra.ph/file/c310e298a2e99c6a61f21.jpg',
[['𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 🍷', usedPrefix + 'allmenu']],
[['𝗔𝘁𝗮𝗷𝗼𝘀', sections]]
]] 
await conn.sendCarousel(m.chat, '᥀·࣭࣪̇˖🪐◗ 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤(𝙖) 𝙪𝙨𝙪𝙖𝙧𝙞𝙤(𝙖).', '• 𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙖𝙥𝙖𝙧𝙩𝙖𝙙𝙤.', '𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋', messages, m)            
}
handler.command = /^(menulista2|submenus2|menulist2|menu2|menú2|memu2|help2)$/i
export default handler
