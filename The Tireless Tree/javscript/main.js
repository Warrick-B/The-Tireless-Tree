/* exported play_thunder_sound */
function play_thunder_sound() {
  this.document.getElementById("thunder_sound").play();
}

/* exported play_fire_sound */
function play_fire_sound() {
  this.document.getElementById("fire_sound").play();
}

/* exported suffering_page_scroll */
function suffering_page_scroll() {

  /*Stop all sounds*/
  this.document.getElementById("fire_sound").pause();
  this.document.getElementById("tranquil_sound").pause();
  this.document.getElementById("bird_sounds").pause();

  /*scroll to next page container*/
  this.window.scroll({
    top: 1700,
    left: 0,
    behavior: 'smooth'
  });


  /*Play tranquil_sound*/
  this.document.getElementById("tranquil_sound").play();

  /*Change heading class to load animation*/
  var resilience_heading = this.document.querySelector('#resilience_heading');
  resilience_heading.classList.add('animate__animated', 'animate__zoomInDown');
}


/* exported resilience_page_scroll */
function resilience_page_scroll() { //scroll animation to the hope pages

  /*Stop all sounds*/
  this.document.getElementById("fire_sound").pause();
  this.document.getElementById("tranquil_sound").pause();
  this.document.getElementById("bird_sounds").pause();


  /*scroll to next page container*/
  this.window.scroll({
    top: 3450,
    left: 0,
    behavior: 'smooth'
  });


  /*Play bird_sounds*/
  this.document.getElementById("bird_sounds").play();

  /*Change heading class to load animation*/
  var hope_heading = this.document.querySelector('#hope_heading');
  hope_heading.classList.add('animate__animated', 'animate__bounceInDown');
}

/* exported resilience_page_back */
function resilience_page_back() {

  /*Stop all sounds*/
  this.document.getElementById("fire_sound").pause();
  this.document.getElementById("tranquil_sound").pause();
  this.document.getElementById("bird_sounds").pause();

  /*scroll to previous page container*/
  this.window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  /*Play fire_sound*/
  this.document.getElementById("fire_sound").play();
}

/* exported hope_page_back */
function hope_page_back() {

  /*Stop all sounds*/
  this.document.getElementById("fire_sound").pause();
  this.document.getElementById("tranquil_sound").pause();
  this.document.getElementById("bird_sounds").pause();

  /*scroll to previous page container*/
  this.window.scroll({
    top: 1700,
    left: 0,
    behavior: 'smooth'
  });

  /*Play tranquil_sound*/
  this.document.getElementById("tranquil_sound").play();
}
