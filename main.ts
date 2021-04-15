namespace SpriteKind {
    export const item = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.over(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (camera == true) {
        scene.cameraFollowSprite(downsider)
        camera = false
    } else {
        scene.cameraFollowSprite(upsider)
        camera = true
    }
})
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false)
})
let camera = false
let downsider: Sprite = null
let upsider: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`level1`))
upsider = sprites.create(img`
    . . . . . e e . e e e . . . . . 
    . . . . . . 8 . 8 8 . . . . . . 
    . . . . . . e . e e . . . . . . 
    . . . . 3 . e e e e . 3 . . . . 
    . . . . d . 4 4 4 4 . d . . . . 
    . . . . d b 4 4 4 4 b d . . . . 
    . . . . d b 4 4 4 4 b d . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . 8 6 6 9 6 8 . . . . . 
    . . . . . 8 6 9 6 9 8 . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 5 . 5 . 5 . . . . . 
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
let keyspeed = 10
tiles.placeOnRandomTile(upsider, assets.tile`myTile3`)
tiles.placeOnRandomTile(downsider, assets.tile`myTile4`)
camera = true
game.onUpdate(function () {
    if (spriteutils.distanceBetween(upsider, downkey1) < 10) {
        spriteutils.setVelocityAtAngle(downkey1, spriteutils.angleFrom(upsider, downkey1), keyspeed)
    }
    if (spriteutils.distanceBetween(downsider, downkey1) < 10) {
        spriteutils.setVelocityAtAngle(downkey1, spriteutils.angleFrom(downsider, downkey1), keyspeed)
    }
})
