let linke_hand = 0
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
    music.playTone(294, music.beat(BeatFraction.Double))
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    linke_hand = 1
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # #
        . # # # #
        `)
    basic.pause(200)
    basic.clearScreen()
    for (let index = 0; index < 3; index++) {
        basic.setLedColor(0xff0000)
        basic.pause(1000)
        basic.turnRgbLedOff()
        basic.pause(100)
    }
    for (let index = 0; index < 3; index++) {
        basic.setLedColor(0xff0000)
        basic.pause(500)
        basic.turnRgbLedOff()
        basic.pause(100)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let index = 0; index < 10; index++) {
        basic.setLedColor(0xff0000)
        basic.pause(100)
        basic.setLedColor(0xff8000)
        basic.pause(100)
        basic.setLedColor(0xffff00)
        basic.pause(100)
        basic.setLedColor(0xff9da5)
        basic.pause(100)
        basic.setLedColor(0x00ff00)
        basic.pause(100)
        basic.setLedColor(0xb09eff)
        basic.pause(100)
        basic.setLedColor(0x0000ff)
        basic.pause(100)
        basic.turnRgbLedOff()
    }
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
    music.playTone(262, music.beat(BeatFraction.Double))
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # # # . .
        # . . . .
        . # # # .
        `)
    music.playTone(330, music.beat(BeatFraction.Double))
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # # # . .
        # . . . .
        # . . . .
        `)
    music.playTone(349, music.beat(BeatFraction.Double))
})
basic.forever(function () {
    if (linke_hand > 0) {
        for (let index = 0; index < 5; index++) {
            basic.setLedColor(0xff0000)
            basic.pause(100)
            basic.setLedColor(0xff8000)
            basic.pause(100)
            basic.setLedColor(0xffff00)
            basic.pause(100)
            basic.setLedColor(0xff9da5)
            basic.pause(100)
            basic.setLedColor(0x00ff00)
            basic.pause(100)
            basic.setLedColor(0xb09eff)
            basic.pause(100)
            basic.setLedColor(0x00ffff)
            basic.pause(100)
            basic.setLedColor(0x007fff)
            basic.pause(100)
            basic.setLedColor(0x65471f)
            basic.pause(100)
            basic.setLedColor(0x0000ff)
            basic.pause(100)
            basic.setLedColor(0x7f00ff)
            basic.pause(100)
            basic.setLedColor(0xff0080)
            basic.pause(100)
            basic.setLedColor(0xff00ff)
            basic.pause(100)
            basic.setLedColor(0xffffff)
            basic.pause(100)
            basic.setLedColor(0x999999)
            basic.pause(100)
            basic.setLedColor(0x000000)
            basic.turnRgbLedOff()
        }
    }
    if (linke_hand > 0) {
        linke_hand = 0
        basic.showString("Nerver gonna give you up", 65)
    }
})
