const canvas = document.getElementById("canva");
const context = canvas.getContext("2d");
console.log(context);


 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 const particleArray = [];
 let hue  = 0;

// when the window is resized, the element will be stable
 window.addEventListener('resize', () =>
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

       // context.fillStyle = "white";
       // context.fillRect(100,50,100,50);

        /*context.fillStyle = "yellow";
        context.strokeStyle = "red";
        context.lineWidth = 4;
        context.beginPath();
        context.arc(200,200,80,0, Math.PI*2);
        context.fill();
        context.stroke();
      */
    })


 /*   
   To draw rectangle
   context.fillStyle = "white";
   context.fillRect(100,50,100,50);
 */  


   const mouse = {
        x: undefined,
        y: undefined
   }

   //whenever/wherever  we click on the screen circle will get displayed
   canvas.addEventListener('click', function(event)
   {
       mouse.x = event.x;
       mouse.y = event.y;
      //drawCircle();
   /*   
      for(let i =0; i<15; i++)
      {
      particleArray.push(new Particle());
      }
  */

      console.log(event);
   })

// mousemove - when the mouse moves on screen circle will get displayed
   canvas.addEventListener('mousemove', function(event)
   {
      mouse.x = event.x;
      mouse.y = event.y

      for(let i =0; i<15; i++)
      {
      particleArray.push(new Particle());
      }
      //drawCircle();
   })

/*
  //to draw circle
   function drawCircle()
   {
   context.fillStyle = "yellow";
   context.strokeStyle = "red";
   context.lineWidth = 4;
   context.beginPath();  // we need to call beginpath, it's like telling javascript you want to place your drawing brush on the canvas and start drawing 
   context.arc(mouse.x, mouse.y, 50, 0, Math.PI*2);
   context.fill();
   context.stroke();
   }
*/


// particle system with js classes
class Particle
{
  constructor()
  {
      this.x = mouse.x;
      this.y = mouse.y;
     // this.x = Math.random() * canvas.width;
      //this.y = Math.random() * canvas.height;
      this.size = Math.random() *20+1;
      this.speedX = Math.random()*3 - 1.5;
      this.speedY  = Math.random()*3 - 1.5;
      this.color = 'hsl(' +hue + ', 100%, 50% )';
  }

  update()
  {
     this.x += this.speedX;
     this.y += this.speedY;

     // to shrink the circle size
     if(this.size>0.5)
     {
      this.size -= 0.1;
     }
  }

  draw()
  {   
    context.fillStyle = this.color;
    //context.strokeStyle = "red";
    //context.lineWidth = 4;
    context.beginPath();  // we need to call beginpath, it's like telling javascript you want to place your drawing brush on the canvas and start drawing 
    context.arc(this.x, this.y, this.size, 0, Math.PI*2);
    context.fill();
    //context.stroke();
  }
}

/*
function init()
{
  for(let i =0; i<100; i++)
  {
      particleArray.push(new Particle());
  }
}
*/

//init();
//console.log(particleArray);

function handleParticles()
{
  for(let i = 0; i<particleArray.length; i++)
  {
    particleArray[i].update();
    particleArray[i].draw();
  
    if(particleArray[i].size<=0.3)
    {
      particleArray[i].splice(i,1);
      i--;
    }

  }
}


// clear the old paint & iterate in a loop
function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height)
    //context.fillStyle = 'rgba(0,0,0,0.2)';
   //context.fillRect(0, 0, canvas.width, canvas.height );
 //drawCircle();
 handleParticles();
 hue+=8;
 requestAnimationFrame(animate);
}

animate();


