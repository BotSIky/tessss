let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`Limit Mu Hanya Tersisa {global.db.data.users[who].limit} Lagi`)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = new RegExp
handler.command = /^(limit)$/i
module.exports = handler