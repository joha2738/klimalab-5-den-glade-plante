fugt = 0
LEDmap = 0
strip = neopixel.create(DigitalPin.P2, 20, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.show_icon(IconNames.YES)
basic.pause(100)
basic.clear_screen()

def on_forever():
    global fugt, LEDmap
    fugt = pins.analog_read_pin(AnalogPin.P1)
    if fugt > 600:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.SAD)
    LEDmap = Math.map(fugt, 0, 1023, 0, 19)
    indeks = 0
    while indeks <= LEDmap:
        strip.set_pixel_color(indeks, neopixel.colors(NeoPixelColors.RED))
        indeks2 = LEDmap
        while indeks2 <= 21:
            strip.set_pixel_color(indeks2, neopixel.colors(NeoPixelColors.BLACK))
            indeks2 += 1
        strip.show()
        indeks += 1
basic.forever(on_forever)
