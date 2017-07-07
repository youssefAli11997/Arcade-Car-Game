function car(){
	this.width = 80;
	this.height = 150;
	this.r = random(50,255);
	this.g = random(50,255);
	this.b = random(50,255);
	this.x = width/2 - this.width/2;
	this.y = height-this.height-50;
	this.val = 0;
	this.col = 1; // 0,1,2
	this.gave = 0;

	this.show = function(){
		var x = this.x + this.val;
		stroke(255);
		fill(this.r, this.g, this.b);
		rect(x, this.y, this.width, this.height);
		fill(this.r - 50, this.g-50, this.b-50);
		rect(x, this.y + 2*this.height/6, this.width, this.height/2);
	}

	this.dir = function(direction){
		if(this.col == 0 && direction == -1) return;
		if(this.col == 2 && direction == 1) return;
		this.val += direction * width/3;
		this.col += direction;
	}

	this.hit = function(tar){
		var carPosY = height - this.height - 50;
		var tarPosY = tar.y + tar.height;

		if(tarPosY >= carPosY && tarPosY <= height){
			if(this.col == tar.col)
				return 1; // in same col, hit
			else{
				if(this.gave > 0) return 0;
				this.gave = 1;
				return 2; // not in same col, not hit
			}
		}
		return 0;
	}

	this.bonus = function(gld){
		var carPosY = height - this.height - 50;
		var gldPosY = gld.y + gld.diameter / 2;

		if((gldPosY >= carPosY && gldPosY <= height) && this.col == gld.col){
			return true;
		}
		return false;
	}
}