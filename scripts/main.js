// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/panigalev2.jpg') {
      myImage.setAttribute('src','images/panigalev21.jpg');
    } else {
      myImage.setAttribute('src','images/panigalev2.jpg');
    }
}