

var myImage = document.getElementById("img");

var imageArray= ["images/bg2.png","images/bg3.png","images/bg5.png" ];

var imageIndex = 0;

function imageSlider(){

        myImage.setAttribute("src",imageArray[imageIndex]);
        imageIndex++;
        if (imageIndex >= imageArray.length) {
        	imageIndex=0;
        }

}
setInterval(imageSlider,5000);
