const Bbakso = 10000
const Sbakso = 10
const Bseblak = 12000
const Sseblak = 10
const Bnaspad = 20000
const Snaspad = 10
const Bsate = 24000
const Ssate = 10
const Bsayur = 8000
const Ssayur = 10
const Bcapcai = 7000
const Scapcai = 10
const Bayambakar = 14000
const Sayambakar = 10
const Bpindang = 18000
const Spindang = 10
const Btahu= 5000
const Stahu= 10
const Bpecel = 11000
const Specel = 10
const Bgeprek = 15000
const Sgeprek = 10

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kaine = `
${usedPrefix}shopanimal <buy|sell> <item> <jumlah>

Contoh penggunaan: *${usedPrefix}shopanimal buy bakso 1*

============================

*Animal | Harga Beli*
bakso: ${Bbakso}
seblak: ${Bseblak}
naspad: ${Bnaspad}
sate: ${Bsate}
sayur: ${Bsayur}
capcai: ${Bcapcai}
ayambakar: ${Bayambakar}
pindang: ${Bpindang}
tahu: ${Btahu}
pecel²: ${Bpecel}


*Animal | Harga Jual*
bakso: ${Sbakso}
seblak: ${Sseblak}
naspad: ${Snaspad}
sate: ${Ssate}
sayur: ${Ssayur}
capcai: ${Scapcai}
ayambakar: ${Sayambakar}
pindang: ${Spindang}
tahu: ${Stahu}
pecel²: ${Specel}
`.trim()

    try {
        if (/shopanimal/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'bakso':
                            if (global.db.data.users[m.sender].money >= Bbakso * count) {
                                global.db.data.users[m.sender].bakso += count * 1
                                global.db.data.users[m.sender].money -= Bbakso * count
                                conn.reply(m.chat, `Succes membeli ${count} bakso dengan harga ${Bbakso * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bakso dengan harga ${Bbakso * count} money`.trim(), m)
                        
                    break
                    case 'seblak':
                            if (global.db.data.users[m.sender].money >= Bseblak * count) {
                                global.db.data.users[m.sender].seblak += count * 1
                                global.db.data.users[m.sender].money -= Bseblak * count
                                conn.reply(m.chat, `Succes membeli ${count} seblak dengan harga ${Bseblak * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} seblak dengan harga ${Bseblak * count} money`.trim(), m)
                        
                    break
                    case 'naspad':
                            if (global.db.data.users[m.sender].money >= Bnaspad * count) {
                                global.db.data.users[m.sender].naspad += count * 1
                                global.db.data.users[m.sender].money -= Bnaspad * count
                                conn.reply(m.chat, `Succes membeli ${count} naspad dengan harga ${Bnaspad * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} naspad dengan harga ${Bnaspad * count} money`.trim(), m)
                        
                    break
                    case 'sate':
                            if (global.db.data.users[m.sender].money >= Bsate * count) {
                                global.db.data.users[m.sender].sate += count * 1
                                global.db.data.users[m.sender].money -= Bsate * count
                                conn.reply(m.chat, `Succes membeli ${count} sate dengan harga ${Bsate * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} sate dengan harga ${Bsate * count} money`.trim(), m)
                        
                    break
                    case 'sayur':
                            if (global.db.data.users[m.sender].money >= Bsayur * count) {
                                global.db.data.users[m.sender].sayur += count * 1
                                global.db.data.users[m.sender].money -= Bsayur * count
                                conn.reply(m.chat, `Succes membeli ${count} sayur dengan harga ${Bsayur * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} sayur dengan harga ${Bsayur * count} money`.trim(), m)
                        
                    break
                    case 'capcai':
                            if (global.db.data.users[m.sender].money >= Bcapcai * count) {
                                global.db.data.users[m.sender].capcai += count * 1
                                global.db.data.users[m.sender].money -= Bcapcai * count
                                conn.reply(m.chat, `Succes membeli ${count} capcai dengan harga ${Bcapcai * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} capcai dengan harga ${Bcapcai * count} money`.trim(), m)
                        
                    break
                    case 'ayambakar':
                            if (global.db.data.users[m.sender].money >= Bayambakar * count) {
                                global.db.data.users[m.sender].ayambakar += count * 1
                                global.db.data.users[m.sender].money -= Bayambakar * count
                                conn.reply(m.chat, `Succes membeli ${count} ayambakar dengan harga ${Bayambakar * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} ayambakar dengan harga ${Bayambakar * count} money`.trim(), m)
                        
                    break
                    case 'pindang':
                            if (global.db.data.users[m.sender].money >= Bpindang * count) {
                                global.db.data.users[m.sender].pindang += count * 1
                                global.db.data.users[m.sender].money -= Bpindang * count
                                conn.reply(m.chat, `Succes membeli ${count} pindang dengan harga ${Bpindang * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pindang dengan harga ${Bpindang * count} money`.trim(), m)
                        
                    break
                    case 'tahu':
                            if (global.db.data.users[m.sender].money >= Btahu * count) {
                                global.db.data.users[m.sender].tahu += count * 1
                                global.db.data.users[m.sender].money -= Btahu * count
                                conn.reply(m.chat, `Succes membeli ${count} tahu dengan harga ${Btahu * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} tahu dengan harga ${Btahu * count} money`.trim(), m)
                        
                    break
                    case 'pecel':
                            if (global.db.data.users[m.sender].money >= Bpecel * count) {
                                global.db.data.users[m.sender].pecel += count * 1
                                global.db.data.users[m.sender].money -= Bpecel * count
                                conn.reply(m.chat, `Succes membeli ${count} pecel² dengan harga ${Bpecel * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pecel² dengan harga ${Bpecel * count} money`.trim(), m)
                        
                    break                   
               default:
                        return conn.reply(m.chat, Kaine, m)
                }
             break
            case 'sell': 
                switch (_type) {
                    case 'bakso':
                        if (global.db.data.users[m.sender].bakso >= count * 1) {
                            global.db.data.users[m.sender].bakso -= count * 1
                            global.db.data.users[m.sender].money += Sbakso * count
                            conn.reply(m.chat, `Succes menjual ${count} bakso, dan anda mendapatkan ${Sbakso * count} money`, m)
                        } else conn.reply(m.chat, `bakso anda tidak cukup`, m)
                        break
                    case 'seblak':
                        if (global.db.data.users[m.sender].seblak >= count * 1) {
                            global.db.data.users[m.sender].seblak -= count * 1
                            global.db.data.users[m.sender].money += Sseblak * count
                            conn.reply(m.chat, `Succes menjual ${count} seblak, dan anda mendapatkan ${Sseblak * count} money`, m)
                        } else conn.reply(m.chat, `seblak anda tidak cukup`, m)
                        break
                    case 'naspad':
                        if (global.db.data.users[m.sender].naspad >= count * 1) {
                            global.db.data.users[m.sender].naspad -= count * 1
                            global.db.data.users[m.sender].money += Snaspad * count
                            conn.reply(m.chat, `Succes menjual ${count} naspad, dan anda mendapatkan ${Snaspad * count} money`, m)
                        } else conn.reply(m.chat, `naspad anda tidak cukup`, m)
                        break
                    case 'sate':
                        if (global.db.data.users[m.sender].sate >= count * 1) {
                            global.db.data.users[m.sender].sate -= count * 1
                            global.db.data.users[m.sender].money += Ssate * count
                            conn.reply(m.chat, `Succes menjual ${count} sate, dan anda mendapatkan ${Ssate * count} money`, m)
                        } else conn.reply(m.chat, `sate anda tidak cukup`, m)
                        break
                    case 'sayur':
                        if (global.db.data.users[m.sender].sayur >= count * 1) {
                            global.db.data.users[m.sender].sayur -= count * 1
                            global.db.data.users[m.sender].money += Ssayur * count
                            conn.reply(m.chat, `Succes menjual ${count} sayur, dan anda mendapatkan ${Ssayur * count} money`, m)
                        } else conn.reply(m.chat, `sayur anda tidak cukup`, m)
                        break
                    case 'capcai':
                        if (global.db.data.users[m.sender].capcai >= count * 1) {
                            global.db.data.users[m.sender].capcai -= count * 1
                            global.db.data.users[m.sender].money += Scapcai * count
                            conn.reply(m.chat, `Succes menjual ${count} capcai, dan anda mendapatkan ${Scapcai * count} money`, m)
                        } else conn.reply(m.chat, `capcai anda tidak cukup`, m)
                        break
                    case 'ayambakar':
                        if (global.db.data.users[m.sender].ayambakar >= count * 1) {
                            global.db.data.users[m.sender].ayambakar -= count * 1
                            global.db.data.users[m.sender].money += Sayambakar * count
                            conn.reply(m.chat, `Succes menjual ${count} ayambakar, dan anda mendapatkan ${Sayambakar * count} money`, m)
                        } else conn.reply(m.chat, `ayambakar anda tidak cukup`, m)
                        break
                    case 'pindang':
                        if (global.db.data.users[m.sender].pindang >= count * 1) {
                            global.db.data.users[m.sender].pindang -= count * 1
                            global.db.data.users[m.sender].money += Spindang * count
                            conn.reply(m.chat, `Succes menjual ${count} pindang, dan anda mendapatkan ${Spindang * count} money`, m)
                        } else conn.reply(m.chat, `pindang anda tidak cukup`, m)
                        break
                    case 'tahu':
                        if (global.db.data.users[m.sender].tahu >= count * 1) {
                            global.db.data.users[m.sender].tahu -= count * 1
                            global.db.data.users[m.sender].money += Stahu * count
                            conn.reply(m.chat, `Succes menjual ${count} tahu, dan anda mendapatkan ${Stahu * count} money`, m)
                        } else conn.reply(m.chat, `tahu anda tidak cukup`, m)
                        break
                    case 'pecel':
                        if (global.db.data.users[m.sender].pecel >= count * 1) {
                            global.db.data.users[m.sender].pecel -= count * 1
                            global.db.data.users[m.sender].money += Specel * count
                            conn.reply(m.chat, `Succes menjual ${count} pecel², dan anda mendapatkan ${Specel * count} money`, m)
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

handler.help = ['shopmakan <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shopmakan)$/i
handler.limit = true
handler.group = true
module.exports = handler



