var grnd;
var myCar;
var obs;
var obs2;
var gld;
var scoreVal;
var frm;
var hitStatus;
var hitStatus2;

function setup() {
	frm = 400;
	frameRate(frm);
	//createCanvas(600,600);
	var cnv = createCanvas(600, 600);
	cnv.parent('sketch-holder');
	grnd = new ground();
	myCar = new car();
	obs = new obstacle();
	obs2 = new obstacle();
	gld = new gold();
	gld2 = new gold();
	scoreVal = new score();
}

function draw() {
    frm += floor((scoreVal.val / 500) * 50);
    frameRate(frm);
    background(100);

    grnd.show();
    grnd.update();

    scoreVal.show();

    obs.show();
    obs.update();

    gld.show();
    gld.update();

    hitStatus = myCar.hit(obs);

    if(hitStatus == 1){
        background(0,0,0,200);
        fill(255,0,0);
        textSize(64);
        noStroke();
        var msg = "Game Over!\n";
        text(msg,130,300);
        textSize(30);
        var msg = "Score: " + scoreVal.val;
        text(msg,130,350);
        noLoop();
    } else if(hitStatus == 2){
        scoreVal.update(10);
    }

    if(myCar.bonus(gld)){
        scoreVal.update(20);
        gld.reset();
    }

    if(scoreVal.val > 500){
        obs2.show();
        obs2.update();

        gld2.show();
        gld2.update();

        hitStatus2 = myCar.hit(obs2);

        if(hitStatus2 == 1){
            background(0,0,0,200);
            fill(255,0,0);
            textSize(64);
            noStroke();
            var msg = "Game Over!\n";
            text(msg,130,300);
            textSize(30);
            var msg = "Score: " + scoreVal.val;
            text(msg,130,350);
            noLoop();
        } else if(hitStatus2 == 2){
            scoreVal.update(10);
        }

        if(myCar.bonus(gld2)){
            scoreVal.update(20);
            gld2.reset();
        }
    }

    myCar.show();
}

function keyPressed(){
	if(keyCode == RIGHT_ARROW)
		myCar.dir(1);
	if(keyCode == LEFT_ARROW)
		myCar.dir(-1);
}
