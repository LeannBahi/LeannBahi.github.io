// Get the modal
var modal0 = document.getElementById('modal0');
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img0 = document.getElementById('img0');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var modalImg0 = document.getElementById("img0_mod");
var modalImg1 = document.getElementById("img1_mod");
var modalImg2 = document.getElementById("img2_mod");
var modalImg3 = document.getElementById("img3_mod");
var modalImg4 = document.getElementById("img4_mod");

img0.onclick = function(){
  modal0.style.display = "block";
  modalImg0.src = this.src;
}
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
}
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
}
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
}
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
}
// Get the <span> element that closes the modal
var span0 = document.getElementById("close0");
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");

// When the user clicks on <span> (x), close the modal
span0.onclick = function() { 
  modal0.style.display = "none";
}
span1.onclick = function() { 
  modal1.style.display = "none";
}
span2.onclick = function() { 
  modal2.style.display = "none";
}
span3.onclick = function() { 
  modal3.style.display = "none";
}
span4.onclick = function() { 
  modal4.style.display = "none";
}