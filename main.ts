let linke_hand = 0
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
basic.forever(function () {
    if (linke_hand > 0) {
    	
    }
})
basic.forever(function () {
    if (linke_hand > 0) {
    	
    }
})
