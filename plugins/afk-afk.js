import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
let name = m.pushName || conn.getName(m.sender)

let user = global.db.data.users[m.sender]
let wibu = `https://telegra.ph/file/97361559236a7591cf908.jpg`    
let thumb = await(await fetch(wibu)).buffer()
user.afk = + new Date
user.afkReason = text
 conn.sendButtonDoc(m.chat, `${conn.getName(m.sender)} Telah Afk Karena Ingin ${text ? ': ' + text : ''}`, wm, 'Okeh👌', 'Bilek', m,  { contextInfo: { externalAdReply: { showAdAttribution: true,
        mediaUrl: "https://youtube.com/channel/UCJdVJDRUImyBoEp_jdvJAvQ",
        mediaType: "PHOTO",
        description: "https://youtube.com/channel/UCJdVJDRUImyBoEp_jdvJAvQ", 
        title: 'Subscribe My YouTube',
        body: 'PICK FORD',
        thumbnail: thumb,
        sourceUrl: sig
    }
    } })
            }
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
