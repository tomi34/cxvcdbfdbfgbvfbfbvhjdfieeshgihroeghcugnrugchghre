function edfdfdfyy3wqqqq (a: number) {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, a)
        basic.pause(100)
    }
    if (a == 4) {
        work = true
    }
}
input.onGesture(Gesture.Shake, function () {
    if (!(work)) {
        return
    }
    basic.clearScreen()
    basic.showString("Never gonna give you up", 70)
basic.pause(100)
    basic.showString("Never gonna let you down", 70)
basic.pause(100)
    basic.showString("Never gonna turn around and desert you", 70)
basic.pause(100)
    basic.showString("Never gonna make you cry", 70)
basic.pause(100)
    basic.showString("Never gonna say goodbye", 70)
basic.pause(100)
    basic.showString("Never gonna tell a lie and hurt you", 70)
basic.pause(100)
})
let work = false
for (let index2 = 0; index2 <= 4; index2++) {
    edfdfdfyy3wqqqq(index2)
    basic.pause(1000)
}
