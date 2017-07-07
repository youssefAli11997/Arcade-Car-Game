function gold(){
	this.col = floor(random(0,3));
	this.diameter = 50;
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
		}
	}

	this.reset = function(){
		this.y = -10;
		this.col = floor(random(0,3));
		this.r = random(255);
		this.g = random(255);
		this.b = random(255);
	}

	this.show = function(){
		/*if(abs(this.y - (obs.y - obs.diameter/2)) < 50 && this.col == obs.col && this.y == -10)
			this.col = floor(random(0,3));*/

		this.x = this.col * width/3 + 100;

		stroke(255);
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
}