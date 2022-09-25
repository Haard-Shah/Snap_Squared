// -----JS CODE-----
// Cards
//@input Asset.Texture ace_of_spades;
//@input Asset.Texture two_of_clubs;
//@input Asset.Texture five_of_hearts;
//@input Asset.Texture six_of_clubs;
//@input Asset.Texture seven_of_diamonds;
//@input Asset.Texture eigth_of_spades;
//@input Asset.Texture ten_of_hearts;
//@input Asset.Texture jack_of_clubs;
//@input Asset.Texture queen_of_dimonds;
//@input Asset.Texture king_of_hearts;
//@input Asset.Texture snap_image;
//@input Asset.Texture clear_image;
//@input Component.Text player_1_score;
//@input Component.Text player_2_score;

// Players
// @input Component.Image player_1_card;
// @input Component.Image player_2_card;
// @input Component.Image Snap_banner;

// @input bool first_taken = false;

// Global Parameters
//var cards = [script.ace_of_spades, script.two_of_clubs, script.five_of_hearts, script.six_of_clubs, script.seven_of_diamonds, script.eigth_of_spades, script.ten_of_hearts, script.jack_of_clubs, script.queen_of_dimonds, script.king_of_hearts];
var cards = [script.ace_of_spades, script.two_of_clubs, script.five_of_hearts];
var player_1_card_index = 0;
var player_2_card_index = 1;


function pick_card(){
    return Math.floor(Math.random()*cards.length);
}

function update_player_cards() {
    player_1_card_index = pick_card();  
    player_2_card_index = pick_card();
    
    script.player_1_card.mainPass.baseTex = cards[player_1_card_index];
    script.player_2_card.mainPass.baseTex = cards[player_2_card_index];
    
    // Clear the snap banner
    script.Snap_banner.mainPass.baseTex = script.clear_image;
}


function check_snap(){
    return (player_1_card_index === player_2_card_index)
}

script.api.check_snap = check_snap;

script.createEvent("BrowsRaisedEvent").bind(update_player_cards);
//script.createEvent("TapEvent").bind(update_player_cards);
script.createEvent("MouthOpenedEvent").bind(check_snap);