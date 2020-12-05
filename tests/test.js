const date = require('../index')

const date1 = new date(2018, 0, 1, 2, 3, 4)
const date2 = new date('10/20/1910')

test('Test working', ()=> {
    // passing
})

test('Year getter', () => {
    expect(date1.year).toBe(2018)
    expect(date2.year).toBe(1910)
})

test('Month getter', () => {
    expect(date1.month).toBe(0)
    expect(date2.month).toBe(9)
})

test('Date getter', () => {
    expect(date1.day).toBe(1)
    expect(date2.day).toBe(20)
})

test('Hour getter', () => {
    expect(date1.hour).toBe(2)
    expect(date2.hour).toBe(0)
})

test('Min getter', () => {
    expect(date1.min).toBe(3)
    expect(date2.min).toBe(0)
})

test('Seconds getter', () => {
    expect(date1.secs).toBe(4)
    expect(date2.secs).toBe(0)
})

test('Format tests', () => {
    expect(date1.format()).toBe("2018 January 1")
    expect(date1.format('y/m/d')).toBe('19/Jan/1')
    expect(date1.format('H:I:S')).toBe('02:03:04')
    expect(date1.format('h:i:s')).toBe('2:3:4')
    expect(date1.format('H/I/S')).toBe('02/03/04')
    expect(date1.format('Y-M-D h:I:S')).toBe('2018-January-01 2:03:04')
    expect(date1.format('d/y/m')).toBe('1/18/Jan')
})

test('When tests', () => {
    let today = new Date()
    today.setSeconds(today.getSeconds() - 4)
    expect(new D(today).when()).toBe('4 seconds ago')

    today.setMinutes(today.getMinutes() - 4)
    expect(new D(today).when()).toBe('4 minutes ago')

    today.setHours(today.getHours() - 4)
    expect(new D(today).when()).toBe('4 hours ago')

    today.setDate(today.getDate() - 4)
    expect(new D(today).when()).toBe('4 days ago')
})