let handler = async (m, { conn, usedPrefix }) => {
         let bakso = global.db.data.users[m.sender].bakso 
         let seblak = global.db.data.users[m.sender].seblak
         let naspad = global.db.data.users[m.sender].naspad
         let sate = global.db.data.users[m.sender].sate
         let sayur = global.db.data.users[m.sender].sayur 
         let capcai = global.db.data.users[m.sender].capcai
         let ayambakar = global.db.data.users[m.sender].ayambakar
         let pindang = global.db.data.users[m.sender].pindang 
         let tahu = global.db.data.users[m.sender].tahu
         let pecel = global.db.data.users[m.sender].pecel
         let geprek = global.db.data.users[m.sender].geprek
         let martabak = global.db.data.users[m.sender].martabak
         let aineh = `
[ S T O K  M A K A N A N ]
┏━┳━━┳━┳┓┏━┳┓
┃┳┫┏┓┃╋┃┃┗┓┃┃
   IKY-BOT-GAME
┃┻┫┣┫┃┓┫┗┳┻┓┃
┗━┻┛┗┻┻┻━┻━━┛ 

➩ • Kamu Memiliki [ ${bakso} ] Bakso Lagi 🍲
➩ • Kamu Memiliki [ ${seblak} ] Seblak Lagi 🥫
➩ • Kamu Memiliki [ ${naspad} ] Nasi Padang Lagi 🍛
➩ • Kamu Memiliki [ ${sate} ] Sate Lagi 🍢
➩ • Kamu Memiliki [ ${sayur} ] Sayur Lagi 🥗
➩ • Kamu Memiliki [ ${capcai} ] Capcai Lagi 🍜
➩ • Kamu Memiliki [ ${ayambakar} ] Ayam Bakar Lagi 🥘
➩ • Kamu Memiliki [ ${pindang} ] Pindang Lagi 🍝
➩ • Kamu Memiliki [ ${tahu} ] Tahu Lagi 🍥
➩ • Kamu Memiliki [ ${pecel} ] Pecel Lagi 🥙
➩ • Kamu Memiliki [ ${geprek} ] Geprek Lagi 🍱
➩ • Kamu Memiliki [ ${martabak} ] Martabak Lagi 🧇

Wah Makanan Mu Masi Kamu Simpan Banyak\n\n ingin memakan nya? ketik .eat <makanan> <jumlah>
`.trim()

conn.reply(m.chat, aineh, m)
}

handler.help = ['stokmakanan']
handler.tags = ['makan']
handler.command = /^(stokmakanan)$/i
handler.limit = true
handler.group = true
module.exports = handler

