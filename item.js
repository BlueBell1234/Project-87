var canvas = new fabric.Canvas("myCanvas");
var block_image_object = "";
block_y = 10;
block_x = 10;
function new_image(get_image) { 
    fabric.Image.fromURL(get_image, function(Img) { 
    block_image_object = Img; 
    block_image_object.scaleToWidth(50); 
    block_image_object.scaleToHeight(150); 
    block_image_object.set({ top:block_y, left:block_x}); 
    canvas.add(block_image_object); 
});
}

window.addEventListener("keydown", my_keydown); 
function my_keydown(e) { 
    keyPressed = e.keyCode;
    if(keyPressed == '82') { 
        new_image('Red.png');
        console.log("r");
    }
    if(keyPressed == '89') { 
        new_image('Yellow.png');
        console.log("y");
    }
    if(keyPressed == '80') { 
        new_image('Pink.png');
        console.log("p");
    }
    if(keyPressed == '71') { 
        new_image('Green.png');
        console.log("g");
    }
    if(keyPressed == '66') { 
        new_image('Blue.png');
        console.log("b");
    }
}
