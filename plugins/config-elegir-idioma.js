let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
  let te = `Selecciona el idioma, por ejemplo: ${usedPrefix + command} es`
  if (!text) throw te
  let user = global.db.data.users[m.sender]
   if (args[0] === "es") {
       user.ExoticoLang = args[0]
       m.reply("*Español Seleccionado*\n\nAhora el bot responderá a su mensaje en Español")
      } else {
       m.reply(te)
     }
    
 }
 handler.help = ['language <es-en..>']
 handler.tags = ['main']
 handler.command = ['language', 'lenguaje', 'lang', 'idioma'] 
 
 export default handler
