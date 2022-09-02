let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah money yang akan diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let money = poin
    if (money < 1) throw 'Minimal 1'
    let users = global.db.data.users
    users[who].money += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} money!`, m, { mentions: [who] }, {
        mentions: [m.sender]
    }) 
}

handler.help = ['addmoney @user <amount>']
handler.tags = ['tools']
handler.command = /^addmoney$/
handler.owner = true
handler.premium = false

module.exports = handler

