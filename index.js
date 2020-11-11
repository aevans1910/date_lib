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

    /** 
     * Year
     * @returns Number year of date instance
     */
    get year() {
        return this.date.getFullYear()
    } 
    
    /** 
     * Month
     * @returns Number month of date instance
     */
    get month() {
        return this.date.getMonth()
    }

    /** 
     * Day
     * @returns Number day of date instance
     */
    get day() {
        return this.date.getDate()
    }

    /** 
     * Hour
     * @returns Number hour of date instance
     */
    get hours() {
        return this.date.getHours()
    }
    
    /** 
     * Minute
     * @returns Number minute of date instance
     */
    get mins() {
        return this.date.getMinutes()
    }
    
    /** 
     * Second
     * @returns Number second of date instance
     */
    get secs() {
        return this.date.getSeconds()
    }

    /** 
     * Format
     * @returns String format of date instance
     */
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

    /** 
     * When
     * @returns String format of time difference between now and date instance
     */
    when() {
        const today = new Date()
        let dif = today.getTime() - this.date.getTime()
        if (dif === 0) {
            return "Today"
        }
        dif /= 1000
        dif /= 60
        dif /= 60
        dif /= 24
        if (Math.abs(dif) < 31) {
            return `${Math.abs(dif.toFixed(0))} days ` + (dif < 0 ? `from now` : `ago`)
        } 
        dif /= 30
        if (Math.abs(dif) < 12) {
            return `${Math.abs(dif.toFixed(0))} months ` + (dif < 0 ? `from now` : `ago`)
        } 
        dif /= 12
        if (Math.abs(dif) < 31) {
            return `${Math.abs(dif.toFixed(0))} years ` + (dif < 0 ? `from now` : `ago`)
        } 
    }
}

/** 
 * Pad
 * @returns Number pads single numbers of date instance
 */
function pad(num) {
    if (num < 10) {
        return `0${num}`
    }
    return `${num}`
}


// const d = new D(2019, 0, 2, 3, 4, 5)
// console.log(d.when()) // 6 months ago
// const d = new D(2019, 9, 2, 3, 4, 5)
// console.log(d.when()) // 3 months from now
const d = new D(2024, 9, 2, 3, 4, 5)
console.log(d.when()) // 5 years from now
// const d = new D(2019, 6, 30, 3, 4, 5)
// console.log(d.when()) // 3 days from now
// const d = new D()
// console.log(d.when()) // today