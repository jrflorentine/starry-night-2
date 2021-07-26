function Advanced2 () {
    while (true) {
        led.toggle(randint(0, 4), randint(0, 4))
        for (let index = 0; index <= 5; index++) {
            led.setBrightness(51 * index)
            basic.pause(100)
        }
        for (let index2 = 0; index2 <= 5; index2++) {
            led.setBrightness(255 - 51 * index2)
            basic.pause(100)
        }
        basic.pause(randint(0, 2000))
        basic.clearScreen()
    }
}
function Basic () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
}
function Advanced1 () {
    led.setBrightness(0)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    while (true) {
        for (let index3 = 0; index3 <= 10; index3++) {
            led.setBrightness(25.5 * index3)
            basic.pause(100)
        }
        for (let index4 = 0; index4 <= 10; index4++) {
            led.setBrightness(255 - 25.5 * index4)
            basic.pause(100)
        }
        basic.pause(randint(0, 4000))
    }
}
function Moderate1 () {
    while (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
basic.forever(function () {
    if (input.lightLevel() < 1) {
        Basic()
    } else {
        basic.clearScreen()
    }
})
