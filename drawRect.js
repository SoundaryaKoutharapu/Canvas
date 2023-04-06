const canvas = document.getElementById("canva");
const context = canvas.getContext("2d");
console.log(context);

 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 // when the window is resized, the element will be stable
 window.addEventListener('resize', () =>
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        context.fillStyle = "pink";
        context.fillRect(100,50,100,50);
    }
 )

   // To draw rectangle
   context.fillStyle = "pink";
   context.fillRect(100,50,100,50);