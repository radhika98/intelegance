var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gamebox', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('nia', 'Nia.png');
    
    game.load.image('background','varbckg.png');
    game.load.image('nbmini','nbmini.png');
    game.load.image('nbpopup', 'nb.png');
    game.load.image('xout','redb.png');
    game.load.image('winpage','goodjob.png');
    
   /* game.load.image('jennybox','jennybox.png');
    game.load.image('amandabox','amandabox.png');
    game.load.image('canitabox','canitabox.png');
    game.load.image('elianabox','elianabox.png');
    game.load.image('hannabox','hannabox.png');*/
    
    //Load Images of Boxes
        game.load.image('jennybox','jennybox.png');
        game.load.image('amandabox','amandabox.png');
        game.load.image('canitabox','canitabox.png');
        game.load.image('hannabox','hannabox.png');
        game.load.image('sambox','sambox.png');
        game.load.image('mariabox', 'mariabox.png');
        
    //Load images of presents for boxes    
        game.load.image('guitar','guitar.png');
        game.load.image('headphones', 'headphones.png');
        game.load.image('soccerball', 'soccerball.png');
        game.load.image('coal', 'coal.png');
        game.load.image('dog', 'bulldog.png');
        game.load.image('banana' ,'banana.png');
        
        game.load.image('check', 'check.png');
        game.load.image('x', 'x.png');
        
    this.scale.pageAlignHorizontally = true;
   /* this.game.load.image('hueso', huesoURI);
    this.game.load.image('flecha', flechaURI);*/
    

}
//Boxes 
    var jenbox;
    var manbox;
    var nitabox;
    var marbox;
    var hanbox;
    var sambox1;
  
 //Presents
    var guitar1;
    var headphones1;
    var soccerball1;
    var coal1;
    var dog1;
    var banana1;

//Other Shit
    var text;
    var button;
    var popup;
    var tween = null;
    var win;
    
    var checkjen;
    var checkman;
    var checksam;
    var checkmar;
    var checkhan;
    var checknita;
    
    var xjen;
    var xman;
    var xsam;
    var xmar;
    var xhan;
    var xnita;
function create() {

    game.add.image(0, 0, 'background');
    
     text = game.add.text(16, 58, 'Match the gift with the box!', { fill: '#2f4f4f' });
//TODO: 
    //Make a "You won!" page for xmas tree game
    //Add our photos and about us to Page``````````
    //Take code from codehighlands to make images circles
    //Make dolls of us on shelf??
    
    
    guitar1 = game.add.sprite(20, 380, 'guitar');
    headphones1 = game.add.sprite(600,215,'headphones');
    soccerball1 = game.add.sprite(380,260,'soccerball');
    coal1 = game.add.sprite(400,180,'coal');
    dog1 = game.add.sprite(80,500,'dog');
    banana1 = game.add.sprite(580,80,'banana');
    
    //Allowing the presents to be dragged
    guitar1.inputEnabled = true;
    guitar1.input.enableDrag();
    headphones1.inputEnabled = true;
    headphones1.input.enableDrag();
    soccerball1.inputEnabled = true;
    soccerball1.input.enableDrag();
    coal1.inputEnabled = true;
    coal1.input.enableDrag();
    dog1.inputEnabled = true;
    dog1.input.enableDrag();
    banana1.inputEnabled = true;
    banana1.input.enableDrag();
    

    jenbox = game.add.sprite(620, 500, 'jennybox');
    manbox = game.add.sprite(710, 500, 'amandabox');
    nitabox = game.add.sprite (220, 500, 'canitabox');
    marbox = game.add.sprite(320,500, 'mariabox');
    hanbox = game.add.sprite(420, 500, 'hannabox');
    sambox1 = game.add.sprite(520, 500, 'sambox');
    
    checkjen = game.add.sprite(620,500,'check');
    checkman = game.add.sprite(710,500,'check');
    checksam = game.add.sprite(520,500,'check');
    checknita= game.add.sprite(220,500,'check');
    checkmar = game.add.sprite(320,500,'check');
    checkhan = game.add.sprite(420,500,'check');
    
    xjen = game.add.sprite(620,500,'x');
    xman = game.add.sprite(710,500,'x');
    xsam = game.add.sprite(520,500,'x');
    xnita= game.add.sprite(220,500,'x');
    xmar = game.add.sprite(320,500,'x');
    xhan = game.add.sprite(420,500,'x');
    
    win = game.add.image(100, 100, 'winpage');
    win.visible = false;
    
    checkjen.visible = false;
    checkman.visible = false;
    checksam.visible = false;
    checkjen.visible = false;
    checkman.visible = false;
    checksam.visible = false;
    
    xjen.visible = false;
    xman.visible = false;
    xsam.visible = false;
    xjen.visible = false;
    xman.visible = false;
    xsam.visible = false;

    button = game.add.button(715, 50, 'nbmini', openWindow, this, 2, 1, 0);
    button.input.useHandCursor = true;

   // this.popup.showOnTouch = true;

    popup = game.add.sprite(game.world.centerX, game.world.centerY, 'nbpopup');
    popup.alpha = 0.8;
    popup.anchor.set(0.5);
    popup.visible=false;

    //  Position the close button to the top-right of the popup sprite (minus 8px for spacing)
    var pw = (popup.width / 2) - 30;
    var ph = (popup.height / 2) - 8;

    //  And click the close button to close it down again
    var closeButton = game.make.sprite(pw, -ph, 'xout');
    closeButton.inputEnabled = true;
    closeButton.input.priorityID = 1;
    closeButton.input.useHandCursor = true;
    closeButton.events.onInputDown.add(closeWindow, this);

    //  Add the "close button" to the popup window image
    popup.addChild(closeButton);

    //  Hide it awaiting a click
    popup.scale.set(0.1);

   


    }
    
 
    
    /*Check if present is in box
    if (guitar.position.x < jennybox.position.x + 50 && guitar.position.x > jennybox.position.x - 50) {
            alert("Correct");*/
    
    
    


function update() {
    if (checkOverlap(jenbox, guitar1))
    { //If matched correctly
        checkjen.visible = true;
        xjen.visible = false;
    }
    else //If not matched correctly
    {
        checkjen.visible = false;
        xjen.visible = true;
    }
    
	if (checkOverlap(manbox, coal1))
     { //If matched correctly
        checkman.visible = true;
        xman.visible = false;
    }
    else
    {
        checkman.visible = false;
        xman.visible = true;
    }
    
    if (checkOverlap(nitabox, dog1))
    {
    checknita.visible = true;
        xnita.visible = false;
    }
    else
    {
        checknita.visible = false;
        xnita.visible = true;
    }
    
    if (checkOverlap(marbox, soccerball1))
    {
    checkmar.visible = true;
        xmar.visible = false;
    }
    else
    {
        checkmar.visible = false;
        xmar.visible = true;
    }
    
    if (checkOverlap(hanbox, banana1)) 
    {
    checkhan.visible = true;
        xhan.visible = false;
    }
    else
    {
        checkhan.visible = false;
        xhan.visible = true;
    }
    
    if (checkOverlap(sambox1, headphones1)) {
    checksam.visible = true;
        xsam.visible = false;
    }
    else
    {
        checksam.visible = false;
        xsam.visible = true;
    }
    
    if(allCheckShown(true)) {
        win.visible = true;
    }
    
    
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}

function openWindow() {

    if ((tween !== null && tween.isRunning) || popup.scale.x === 1)
    {
        return;
        
    }
    popup.visible= true;
    
    //  Create a tween that will pop-open the window, but only if it's not already tweening or open
    tween = game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

}

function closeWindow() {

    if (tween && tween.isRunning || popup.scale.x === 0.1)
    {
        return;
    }
    popup.visible=false;

    //  Create a tween that will close the window, but only if it's not already tweening or closed
    tween = game.add.tween(popup.scale).to( { x: 0.1, y: 0.1 }, 500, Phaser.Easing.Elastic.In, true);

}
function allCheckShown() {
    if( checknita.visible == true && checkmar.visible == true 
    && checkhan.visible == true 
    && checksam.visible == true 
    && checkjen.visible == true 
    && checkman.visible == true) {
    return true;
    }
}

