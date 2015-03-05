var ui = {}

ui.button = function(sprites) {
    var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, sprites[0], sprites[1]])
    btn.setColor(mrrobinsmith.g.buttonOuterColor)
    btn.setChildColor(0, mrrobinsmith.g.buttonInnerColor)
    btn.setChildColor(1, mrrobinsmith.g.buttonTextColor)
    return btn
}

ui.buttons = function(sprites) {
    var buttons = {
        normal: ui.button(sprites[0]),
        selected: ui.button(sprites[1])
    }

    return buttons
}

ui.restartButton = function() {
    return ui.buttons(
        [
            [mrrobinsmith.res.button_n_inner_png, mrrobinsmith.res.restart_n_text_png],
            [mrrobinsmith.res.button_s_inner_png, mrrobinsmith.res.restart_s_text_png]
        ]
    )
}

ui.startButton = function() {
    return ui.buttons(
        [
            [mrrobinsmith.res.button_n_inner_png, mrrobinsmith.res.start_n_text_png],
            [mrrobinsmith.res.button_s_inner_png, mrrobinsmith.res.start_s_text_png]
        ]
    )
}