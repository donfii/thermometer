input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("ºC")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature() + 32)
    basic.showString("ºF")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() + 273)
    basic.showString("K")
    basic.clearScreen()
})
radio.setGroup(1)
basic.forever(function () {
	
})
