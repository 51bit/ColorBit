# 51bit ColorBit driver

ColorBit is a 5x5 WS2812B RGB LED matrix for micro:bit, the makecode extension code is based on https://github.com/Microsoft/pxt-neopixel and developed for 51bit ColorBit board.

I am selling ColorBit on https://51bit.taobao.com/ , only ship mainland of China at present, if you are out of mainland of China, you need to send me email to buy it: 648952046@qq.com .


**ColorBit:**

![Alt text](https://github.com/51bit/ColorBit/raw/master/icon.png?raw=true "ColorBit picture")

## Basic Usage

```blocks
let colorbit_51bit: colorbit.Strip = null
input.onButtonPressed(Button.A, function () {
    colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    colorbit_51bit.setMultiColor(false)
})
input.onButtonPressed(Button.B, function () {
    colorbit_51bit.showScrollStringColor("ABC#$123", colorbit.colors(BitColors.Red))
})
colorbit_51bit = colorbit.initColorBit(DigitalPin.P0, BitColorMode.RGB)
basic.forever(function () {

})
```

Use ``||initColorBit||`` to init ColorBit.

Use ``||showColorIcon||`` to show ColorBit icons.

Use ``||setMultiColor||`` to set multiple color per light.

Use ``||showScrollStringColor||`` to show scroll colorful string in ColorBit. 

![Alt text](https://github.com/51bit/ColorBit/raw/master/GIF0.gif?raw=true "Basic Usage")
![Alt text](https://github.com/51bit/ColorBit/raw/master/ku0.PNG?raw=true "showColorIcon")
![Alt text](https://github.com/51bit/ColorBit/raw/master/ku.PNG?raw=true "showColorIcon")

## Gif demo

### Show single color string
![Alt text](https://github.com/51bit/ColorBit/raw/master/GIF1.gif?raw=true "Demo 1")

### Show multiple color string
![Alt text](https://github.com/51bit/ColorBit/raw/master/GIF2.gif?raw=true "Demo 2")

## Supported targets

* for PXT/microbit

## License

MIT
