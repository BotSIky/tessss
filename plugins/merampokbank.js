
// let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 200000))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  let __timers = (new Date - global.db.data.users[m.sender].lastmit)
  let _timers = (3600000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastmit > 3600000){
  if (10000 > users[who].bank) throw 'Target Gada Tabungan Bank'
  users[who].bank -= dapat * 1
  users[m.sender].bank += dapat * 1
  global.db.data.users[m.sender].lastmit = new Date * 1
  conn.reply(m.chat, `Berhasil Merampok bank Target Sebesar ${dapat}`, m)

}else conn.reply(m.chat, `Anda Sudah Curi bank dan berhasil sembunyi , tunggu ${timers} untuk mencuri lagi`, m)
}
handler.help = ['merampokbank *@tag*']
handler.tags = ['rpg']
handler.command = /^merampokbank$/
handler.limit = true
handler.group = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
} 