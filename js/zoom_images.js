// You can not access the DOM before it has loaded.
// Event handlers within a window.onload block
window.onload = function () {

  // for this to work, image needs a data-attribute:
  // <img id="img0" class="proj" data-modalid='modal0' src="espace0.png">
  var openImage = function() {
      var modalid = this.getAttribute("data-modalid");
      console.log(modalid);
      modal = document.getElementById(modalid);
      var modal_imgs = modal.getElementsByTagName("img");
      modal.style.display = "block";
      modal_imgs[0].src = this.src;
  };

  var closeImage = function() {
      var modalid = this.getAttribute("data-modalid");
      console.log(modalid);
      modal = document.getElementById(modalid);
      modal.style.display = "none";
  };

  var images = document.getElementsByClassName("proj");
  for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click', openImage, false);
  }

  var ixies = document.getElementsByClassName("close");
  for (var i = 0; i < ixies.length; i++) {
      ixies[i].addEventListener('click', closeImage, false);
  }

};
