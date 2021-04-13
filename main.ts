namespace SpriteKind {
    export const item = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (upsider.isHittingTile(CollisionDirection.Top)) {
        upsider.vy += 80
    }
    if (downsider.isHittingTile(CollisionDirection.Bottom)) {
        downsider.vy += -80
    }
})
scene.onOverlapTile(SpriteKind.item, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
let downsider: Sprite = null
let upsider: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`level1`))
upsider = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
downsider = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . 6 6 6 6 6 6 . . . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
upsider.ay = -200
downsider.ay = 200
controller.moveSprite(upsider, 100, 0)
controller.moveSprite(downsider, 100, 0)
let downkey1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 5 5 5 . . . . . . . . . . . 
    . . 5 . 5 5 5 5 5 5 5 5 . . . . 
    . . 5 . 5 5 5 . . 5 . 5 . . . . 
    . . 5 5 5 . 5 . . . . 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.item)
downkey1.ay = 200
tiles.coverAllTiles(assets.tile`myTile`, assets.tile`myTile0`)
tiles.coverAllTiles(assets.tile`myTile3`, assets.tile`myTile0`)
tiles.coverAllTiles(assets.tile`myTile4`, assets.tile`myTile0`)
tiles.placeOnRandomTile(downkey1, assets.tile`myTile`)
info.setScore(0)
let keyspeed = 10
tiles.placeOnRandomTile(upsider, assets.tile`myTile3`)
tiles.placeOnRandomTile(downsider, assets.tile`myTile4`)
game.onUpdate(function () {
    if (spriteutils.distanceBetween(upsider, downkey1) < 10) {
        spriteutils.setVelocityAtAngle(downkey1, spriteutils.angleFrom(upsider, downkey1), keyspeed)
    }
    if (spriteutils.distanceBetween(downsider, downkey1) < 10) {
        spriteutils.setVelocityAtAngle(downkey1, spriteutils.angleFrom(downsider, downkey1), keyspeed)
    }
})
