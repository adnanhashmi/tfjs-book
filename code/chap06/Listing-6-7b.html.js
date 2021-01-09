function loadVideo() {
   const fileElement = document.getElementById("VideoSource");
   const vdoElement = document.getElementById("VideoElement");

   fileElement.src = "../../videos/JF17-sm.mp4";
   vdoElement.load();
   vdoElement.style.display = 'block';
}