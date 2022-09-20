input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() >= 71 && input.compassHeading() <= 110) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.compassHeading() >= 341 && input.compassHeading() <= 20) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.compassHeading() >= 21 && input.compassHeading() <= 70) {
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (input.compassHeading() >= 111 && input.compassHeading() <= 160) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (input.compassHeading() >= 161 && input.compassHeading() <= 200) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.compassHeading() >= 201 && input.compassHeading() <= 250) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (input.compassHeading() >= 251 && input.compassHeading() <= 290) {
        basic.showArrow(ArrowNames.West)
    }
    if (input.compassHeading() >= 291 && input.compassHeading() <= 340) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
basic.forever(function () {
	
})
