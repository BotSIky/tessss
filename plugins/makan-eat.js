const Sbakso = 1
const Sseblak = 1
const Snaspad = 1
const Ssate = 1
const Ssayur = 1
const Scapcai = 1
const Sayambakar = 1
const Spindang = 1
const Stahu= 1
const Specel = 1
const Sgeprek = 1
const Smartabak = 1
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kaine = `
${usedPrefix}eat yumm (nama makanan) (jumlah)
`.trim()

    try {
        if (/eat/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            switch (jualbeli) {
            case 'yumm':
                switch (_type) {
                    case 'bakso':
                        if (global.db.data.users[m.sender].bakso >= count * 1) {
                            global.db.data.users[m.sender].bakso -= count * 1
                                                        global.db.data.users[m.sender].money += Sbakso * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Bakso Mu 😎`, m)
                        } else conn.reply(m.chat, `bakso anda tidak cukup`, m)
                        break
 case 'martabak':
                        if (global.db.data.users[m.sender].martabak >= count * 1) {
                            global.db.data.users[m.sender].martabak -= count * 1
                            global.db.data.users[m.sender].money += Smartabak * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Marta ak Mu 😎`, m)
                        } else conn.reply(m.chat, `martabak anda tidak cukup`, m)
                        break
case 'geprek':
                        if (global.db.data.users[m.sender].geprek >= count * 1) {
                            global.db.data.users[m.sender].geprek -= count * 1
                            global.db.data.users[m.sender].money += Sgeprek * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Geprek Mu 😎`, m)
                        } else conn.reply(m.chat, `geprek anda tidak cukup`, m)
                        break
                    case 'seblak':
                        if (global.db.data.users[m.sender].seblak >= count * 1) {
                            global.db.data.users[m.sender].seblak -= count * 1
                            global.db.data.users[m.sender].money += Sseblak * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Seblak Mu 😎`, m)
                        } else conn.reply(m.chat, `seblak anda tidak cukup`, m)
                        break
                    case 'naspad':
                        if (global.db.data.users[m.sender].naspad >= count * 1) {
                            global.db.data.users[m.sender].naspad -= count * 1
                            global.db.data.users[m.sender].money += Snaspad * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Naspad Mu 😎`, m)
                        } else conn.reply(m.chat, `naspad anda tidak cukup`, m)
                        break
                    case 'sate':
                        if (global.db.data.users[m.sender].sate >= count * 1) {
                            global.db.data.users[m.sender].sate -= count * 1
                            global.db.data.users[m.sender].money += Ssate * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Sate Mu 😎`, m)
                        } else conn.reply(m.chat, `sate anda tidak cukup`, m)
                        break
                    case 'sayur':
                        if (global.db.data.users[m.sender].sayur >= count * 1) {
                            global.db.data.users[m.sender].sayur -= count * 1
                            global.db.data.users[m.sender].money += Ssayur * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Sayur Mu 😎`, m)
                        } else conn.reply(m.chat, `sayur anda tidak cukup`, m)
                        break
                    case 'capcai':
                        if (global.db.data.users[m.sender].capcai >= count * 1) {
                            global.db.data.users[m.sender].capcai -= count * 1
                            global.db.data.users[m.sender].money += Scapcai * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Capcai Mu 😎`, m)
                        } else conn.reply(m.chat, `capcai anda tidak cukup`, m)
                        break
                    case 'ayambakar':
                        if (global.db.data.users[m.sender].ayambakar >= count * 1) {
                            global.db.data.users[m.sender].ayambakar -= count * 1
                            global.db.data.users[m.sender].money += Sayambakar * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Ayambakar Mu 😎`, m)
                        } else conn.reply(m.chat, `ayambakar anda tidak cukup`, m)
                        break
                    case 'pindang':
                        if (global.db.data.users[m.sender].pindang >= count * 1) {
                            global.db.data.users[m.sender].pindang -= count * 1
                            global.db.data.users[m.sender].money += Spindang * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Pindang Mu 😎`, m)
                        } else conn.reply(m.chat, `pindang anda tidak cukup`, m)
                        break
                    case 'tahu':
                        if (global.db.data.users[m.sender].tahu>= count * 1) {
                            global.db.data.users[m.sender].tahu-= count * 1
                            global.db.data.users[m.sender].money += Stahu* count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Tahu Mu 😎`, m)
                        } else conn.reply(m.chat, `tahu anda tidak cukup`, m)
                        break
                    case 'pecel':
                        if (global.db.data.users[m.sender].pecel >= count * 1) {
                            global.db.data.users[m.sender].pecel -= count * 1
                            global.db.data.users[m.sender].money += Specel * count
                            conn.reply(m.chat, `Yum Yum Yum anda telah memakan ${count} Pecel Mu 😎`, m)
                        } else conn.reply(m.chat, `pecel² anda tidak cukup`, m)
                        break                    
               default:
                        return conn.reply(m.chat, Kaine, m)
                }
            break
        default:
                return conn.reply(m.chat, Kaine, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kaine, m)
        console.log(e)
    }
}

handler.help = ['eat nama makanan jumlah']
handler.tags = ['makan']
    
handler.command = /^(eat)$/i
handler.limit = true
handler.group = true
module.exports = handler



