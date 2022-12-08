function edfdfdfyy3wqqqq (a: number) {
    for (let index = 0; index <= 4; index++) {
        led.plotBrightness(index, a, assfa(index, a))
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
    basic.showString("Never gonna give you up", 50)
basic.pause(100)
    basic.showString("Never gonna let you down", 50)
basic.pause(100)
    basic.showString("Never gonna turn around and desert you", 50)
basic.pause(100)
    basic.showString("Never gonna make you cry", 50)
basic.pause(100)
    basic.showString("Never gonna say goodbye", 50)
basic.pause(100)
    basic.showString("Never gonna tell a lie and hurt you", 50)
basic.pause(100)
})
function assfa (x: number, y: number) {
    if (y == 0) {
        return 10 * (x + 1)
    } else if (y == 1) {
        return 51 + 10 * (x + 1)
    } else if (y == 2) {
        return 102 + 10 * (x + 1)
    } else if (y == 3) {
        return 153 + 10 * (x + 1)
    } else if (y == 4) {
        return 204 + 10 * (x + 1)
    } else {
        return 0
    }
}
let work = false
for (let index2 = 0; index2 <= 4; index2++) {
    edfdfdfyy3wqqqq(index2)
    basic.pause(1000)
}
