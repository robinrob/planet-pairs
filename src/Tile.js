var Tile = CompositeSprite.extend({
    _tag: null,
    _isTurned: null,
    _isLocked: null,

    ctor:function(num) {
        this._super([mrrobinsmith.res.tile_bg, mrrobinsmith.res.tile_cover])

        this._tag = num
        this._isTurned = false
        this._isLocked = false
    },

    tag: function() {
        return this._tag
    },

    isTurned: function() {
        return this._isTurned
    },

    toggleIsTurned: function() {
        this._isTurned = !this._isTurned
    },

    toggle: function() {
        this.toggleIsTurned()

        if (this.isTurned()) {
            this.cover()
        }
        else {
            this.show()
        }
    },

    cover: function() {
        this.setChildren([mrrobinsmith.res.tile_cover])
        this.setOpacity(255)
    },

    show: function() {
        this.setChildren([mrrobinsmith.res["tile" + this._tag]])
        this.setOpacity(0)
    },

    isLocked: function() {
        return this._isLocked
    },

    lock: function() {
        this._isLocked = true
    }
});