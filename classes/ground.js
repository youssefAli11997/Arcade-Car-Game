function ground(){
	this.cols = 3;
	this.lines = [];

	for(var i=0; i<=600; i+=60){
		this.lines.push(i);
	}

	this.update = function(){
		for(var i=0; i<this.lines.length; i++){
			if(this.lines[i] + 5 > 660)
				this.lines[i] = 0;
			else 
				this.lines[i] += 5;
		}
	}

	this.show = function(){
		stroke(255);
		strokeWeight(2);
		line(width/3,0,width/3,height);
		line(2*width/3,0,2*width/3,height);
		strokeWeight(1);
		for(var k=1; k<6; k+=2){
			for(var i=0; i<this.lines.length; i++){
				line(k*width/6, this.lines[i]-60, k*width/6, this.lines[i]-10);
			}
		}
	}
}