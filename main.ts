let num1 = 0
let num2 = 0
let resultado = 0

input.onButtonPressed(Button.A, function () {
    num1 = randint(1, 200)
    num2 = randint(1, 200)
    resultado = num1 * num2
    basic.showString(num1 + "x" + num2)
})

input.onButtonPressed(Button.B, function () {
    basic.showString("Adivinaste?")
})

input.onGesture(Gesture.Shake, function () {
    basic.showString("Exacto! " + resultado)
})
