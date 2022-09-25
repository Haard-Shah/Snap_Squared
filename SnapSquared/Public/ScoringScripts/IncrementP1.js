// -----JS CODE-----
// IncrementScore.js
// Version: 0.0.1
// Event: Tapped
// Description: Calls the increment score api on Tapped

// @input Component.ScriptComponent highScoreController
// @input Component.ScriptComponent CardGen

//@input Asset.Texture snap_image;
//@input Asset.Texture clear_image;
// @input Component.Image Snap_banner;

// @input int faceIndex = 0

function callback() {
    print("p1")

    if (script.CardGen.api.check_snap()) {
        print("Snap");
        script.Snap_banner.mainPass.baseTex = script.snap_image;
        
        // update score
        script.highScoreController.api.incrementP1();
    }
}

var event = script.createEvent("MouthOpenedEvent");
event.faceIndex = script.faceIndex;
event.bind(callback)