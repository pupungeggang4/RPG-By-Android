function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText(`${dataLang[lang[langIndex]]['gameTitle']}`, UI.textTitle[0], UI.textTitle[1])

    context.fillStyle = 'White'
    context.fillRect(UI.title.buttonArea[0], UI.title.buttonArea[1], UI.title.buttonArea[2], UI.title.buttonArea[3])
    context.fillStyle = 'Black'

    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText(`${dataLang[lang[langIndex]]['textStart']}`, UI.title.textStart[0], UI.title.textStart[1])
    context.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    context.fillText(`${dataLang[lang[langIndex]]['textErase']}`, UI.title.textErase[0], UI.title.textErase[1])
    context.strokeRect(UI.title.buttonLang[0], UI.title.buttonLang[1], UI.title.buttonLang[2], UI.title.buttonLang[3])
    context.fillText(`${dataLang[lang[langIndex]]['textLang']}`, UI.title.textLang[0], UI.title.textLang[1])
}

function mouseUpTitle(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonLang)) {
                    langIndex = (langIndex + 1) % lang.length
                }
            }
        }
    }
}

function keyDownTitle(key) {

}

function keyUpTitle(key) {

}