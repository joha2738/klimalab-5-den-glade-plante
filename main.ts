let indeks = 0
let LEDmap = 0
let fugt = 0
let strip = neopixel.create(DigitalPin.P2, 20, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    let indeks2: number;
fugt = pins.analogReadPin(AnalogPin.P1)
    if (fugt > 600) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    LEDmap = Math.map(fugt, 0, 1023, 0, 19)
    while (indeks <= LEDmap) {
        strip.setPixelColor(indeks, neopixel.colors(NeoPixelColors.Red))
        indeks2 = LEDmap
        while (indeks2 <= 21) {
            strip.setPixelColor(indeks2, neopixel.colors(NeoPixelColors.Black))
            indeks2 += 1
        }
        strip.show()
        indeks += 1
    }
})
