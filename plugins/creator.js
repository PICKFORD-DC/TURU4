let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦wa.me/6283806211924✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

//------------ BIO
let ppown = 'https://telegra.ph/file/cce9ab4551f7150f1970d.jpg'
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : PICKFORD
${htjava} *✉️ Nama RL* : Rahasia🗿
${htjava} *♂️ Gender* : LAKI LAKI
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : 16 Agustus 2007
${htjava} *🎨 Umur* : 15
${htjava} *🧮 Kelas* : 9
${htjava} *🧩 Hobby* : Programing, Recode script bot
${htjava} *💬 Sifat* : Idiot, Tidak Ramah, Bilek, Prik, Nolep
${htjava} *🗺️ Tinggal* : Indonesia, jawabarat, Indramayu, TENAJAR lor
${htjava} *❤️ Suka* : kamu🗿
${htjava} *💔 Benci* : KPop🗿👆

${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : Pick_Ford867
${htjava} *🇫  ғᴀᴄᴇʙᴏᴏᴋ* : https://www.facebook.com/profile.php?id=100077142458119
${htjava} *🐈 ɢɪᴛʜᴜʙ*: https://github.com/PICKFORD-DC
•·––––––––––––––––––––––––––·•
`
  let teks = 'INFORMASI TENTANG OWNER'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • Nomor", rowId: ".owner nomor"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
