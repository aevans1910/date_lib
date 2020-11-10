const months = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December']

const months_abrv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
'Sep', 'Oct', 'Nov', 'Dec']

class D {
    constructor(...args) {
        this.date = new Date(...args)
        this.chars = {
            "Y": this.year,
            "y": this.year % 100,
            "M": months[this.month],
            "m": months_abrv[this.month],
            "D": pad(this.day), //have to pad
            "d": this.day,
            "H": pad(this.hours), //have to pad
            "h": this.hours,
            "I": pad(this.mins), //have to pad
            "i": this.mins, 
            "S": pad(this.secs), //have to pad
            "s": this.secs
        }
    }

    get year() {
        return this.date.getFullYear()
    } 
    
    get month() {
        return this.date.getMonth()
    }

    get day() {
        return this.date.getDate()
    }

    get hours() {
        return this.date.getHours()
    }
    
    get mins() {
        return this.date.getMinutes()
    }
    
    get secs() {
        return this.date.getSeconds()
    }

    format(f=false) {
        if (f === false) {
          return `${this.year} ${this.month} ${this.day}`
        }
        else {
          let time = ""
          for (let i = 0; i < f.length; i += 1) {
            if ((/[a-zA-Z]/).test(f[i])) {
              time += this.chars[f[i]]
            }
            else {
              time += f[i]
            }
          }
          return time
        }
    }
}

// D.prototype.year = function() {
//     return this.date.getFullYear()
// }

// D.prototype.month = function() {
//     return this.date.getMonth()
// }

// D.prototype.day = function() {
//     return this.date.getDate()
// }


// D.prototype.hours = function() {
//     return this.date.getHours()
// }

// D.prototype.mins = function() {
//     return this.date.getMinutes()
// }

// D.prototype.secs = function() {
//     return this.date.getSeconds()
// }

// D.prototype.format = function() {
//     return `${this.year()} ${this.month()} ${this.day()}`
// }

function pad(num) {
    if (num < 10) {
        return `0${num}`
    }
    return `${num}`
}

// function format(f=false) {
//     if (f === false) {
//       return `${this.year} ${months_f[this.month]} ${this.day}`
//     }
//     else {
//       let time = ""
//       for (let i = 0; i < f.length; i += 1) {
//         if ((/[a-zA-Z]/).test(f[i])) {
//           time += this.chars[f[i]]
//         }
//         else {
//           time += f[i]
//         }
//       }
//       return time
//     }
// }

const d = new D(2017, 0, 2, 3, 4, 5)
// console.log(d.chars["D"])
// console.log(pad(d.dat))
console.log(d.format())              // 2017 January 02
console.log(d.format('y/m/d'))       // 17/Jan/2
console.log(d.format('H:I:S'))       // 03:04:05
console.log(d.format('h:i:s'))       // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 