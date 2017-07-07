function score(){
	this.val = 0;

	this.update = function(val){
		this.val += val;
	}

	this.show = function(){
		var scr = "Score\n" + this.val;
		textSize(20);
		fill(255);
		text(scr,30,30);
	}
}