const canvas = document.getElementById("canva");
const context = canvas.getContext("2d");
console.log(context);

 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 window.addEventListener('resize', () =>
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
       // context.fillStyle = "white";
       // context.fillRect(100,50,100,50);

        context.fillStyle = "yellow";
        context.strokeStyle = "red";
        context.lineWidth = 4;
        context.beginPath();
        context.arc(200,200,80,0, Math.PI*2);
        context.fill();
        context.stroke();
    })


 /*   To draw rectangle
   context.fillStyle = "white";
   context.fillRect(100,50,100,50);
 */  


   context.fillStyle = "yellow";
   context.strokeStyle = "red";
   context.lineWidth = 4;
   context.beginPath();  // we need to call beginpath, it's like telling javascript you want to place your drawing brush on the canvas and start drawing 
   context.arc(200,200,80,0, Math.PI*2);
   context.fill();
   context.stroke();
