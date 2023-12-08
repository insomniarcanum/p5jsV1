function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);
    
    var n = 1;
    
    for(var i=0; i<10; i++){
      for(var a=0; a<n; a++){
      
      var redVal = int(random(0, 101));
      var xPos = int(random(0, width));
      var alpha = int(random(50, 100));
        
      fill (redVal, mouseX, mouseY, alpha);
      rect(xPos, 100*a, 50, 50);
      }
      n = n + 1
    }
  }