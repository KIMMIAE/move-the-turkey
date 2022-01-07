namespace SpriteKind {
    export const Rescued = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -300
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`start`)
