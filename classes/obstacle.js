function obstacle(){
	this.col = floor(random(0,3));
	this.width = 50;
	this.height = 50;
	this.x;
	this.y = -10;
	this.speed = 1;
	this.acc = 5;
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);

	this.update = function(){
		this.y += this.speed * this.acc;
		if(this.y>height){
			this.y = -10;
			this.col = floor(random(0,3));
			this.r = random(255);
			this.g = random(255);
			this.b = random(255);
			myCar.gave = 0;
		}
	}

	this.show = function(){
		if(this.col == gld.col && this.y == -10 && gld.y < 0)
			this.col = floor(random(0,3));

		this.x = this.col * width/3 + 75;

		stroke(255);
		fill(this.r, this.g, this.b);
		rect(this.x, this.y, this.width, this.height);
	}
}