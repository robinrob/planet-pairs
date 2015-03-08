var Tile = CompositeSprite.extend({
    _tag: null,
    _isTurned: null,
    _isLocked: null,

    showAction: null,

    ctor:function(num) {
        this._super([mrrobinsmith.res.tile_bg, mrrobinsmith.res.tile_cover])

        this._tag = num
        this._isTurned = false
        this._isLocked = false

        var frame1 = new cc.SpriteFrame(
            mrrobinsmith.res["tile" + this._tag],
            cc.rect(this.x - 32, this.y - 32, this.x + 32, this.y + 32)
        )
        var frame2 = new cc.SpriteFrame(
            mrrobinsmith.res["tile_cover.png"],
            cc.rect(this.x - 32, this.y - 32, this.x + 32, this.y + 32)
        )
        var animation = new cc.Animation([frame1, frame2], 0.2);

        this.showAction = new cc.RepeatForever(new cc.Animate(animation));
        this.showAction.retain()
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
        cc.log("AnimationLayer.init ...")

        //this.animate()

        this.runAction(cc.shaky3D(1.0, cc.size(15,10), 5, false ))

        //this.setChildren([mrrobinsmith.res["tile" + this._tag]])
        //this.setOpacity(0)
    },

    animate: function() {
        cc.spriteFrameCache.addSpriteFrames(mrrobinsmith.res.tile_show_plist);
        var spriteSheet = new cc.SpriteBatchNode(mrrobinsmith.res.tile_show_png);

        var animFrames = [];
        for (var i = 1; i < 4; i++) {
            var str = "tile_show" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = new cc.Animation(animFrames, 0.1);

        var winSize = cc.director.getWinSize()
        var center = cc.p(winSize.width / 2, winSize.height / 2)

        this.getChildren()[0].runAction(cc.animate(animation));
    },

    isLocked: function() {
        return this._isLocked
    },

    lock: function() {
        this._isLocked = true
    }
});