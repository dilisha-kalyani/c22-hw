class rope{
	constructor(body1,body2, pointA, pointB);{
    this.pointA= pointA;
	this.pointB= pointB;

	var options={
		bodyA: body1,
		bodyB:body2,
		pointB:{x:this.pointA, y:this.pointB}
	} 
	//create rope constraint here
   con= Matter.Contstraint.create({
	   pointA:{x:200,y:20},
	   bodyB: rope,
	   pointB:{x:0, y:0},
       length:100,
	   stiffness:0.1,
   })
   World.add(world,con);

   rectMode(CENTER);
   ellipseMode(RADIUS);
	}


    //create display() here 
    var pointA= this.rope.bodyA.position;
    var pointB= this.rope.bodyB.position;
	strokeWeight(2);
    
}

