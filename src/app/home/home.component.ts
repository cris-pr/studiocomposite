import { Component, OnInit } from '@angular/core';

function setPageHeight() {
  console.log(" \nin setPageHeight\n");
  if (document.getElementById("front-page") != null) {
    try {
      var navHeight = document.getElementById('theNav').offsetHeight;
      var viewPortHeight = document.documentElement.clientHeight;
      var viewPortWidth = document.documentElement.clientWidth;
      var pageNameHeight = document.getElementById('page-name').offsetHeight;
      var result = viewPortHeight - navHeight - pageNameHeight;
      var frontPage = document.getElementById("front-page");
      var navBar = document.getElementById("navbarTogglerDemo02");
      var innerFront = document.getElementById("inner-front");
      frontPage.style.height = result + "px";
      frontPage.style.width = viewPortWidth+"px";
      innerFront.style.width = viewPortWidth+"px";
      navBar.style.width = viewPortWidth+"px";

      if (viewPortHeight >= viewPortWidth) {

        
        innerFront.style.height = viewPortWidth * .66667 + "px";
        innerFront.style.width = viewPortWidth + "px";
      }
      else {
        frontPage.style.paddingTop = "0px";
        innerFront.style.width = viewPortWidth + "px";
        innerFront.style.height = viewPortWidth * .66667 + "px";
        if (result < innerHeight) {

          innerFront.style.height = result + "px";
          innerFront.style.width = result * 1.5 + "px";
        }
        console.log("\ninnerFront.style.width: " + innerFront.style.width + "\n");
        console.log("\nviewPortWidth: " + viewPortWidth + "\n");
        console.log(typeof innerFront.style.width);
        if (parseInt(innerFront.style.width) > viewPortWidth) {
          console.log("\nhere\n");
          innerFront.style.width = viewPortWidth + "px";
          innerFront.style.height = viewPortWidth * .66667 + "px";
        }
      }
      innerFront.style.backgroundSize = "100% 100%";
      setTopPadding(innerFront);
      console.log(setTopPadding(innerFront));


    }
    catch (err) {
      console.log("Div height adjustment was not run.\n\n" + err.message);
    }
  }
  else {
    console.log("\nno front page element\n");
  }
  function setTopPadding(innerFront) {
    let frontPageTopPadding;
    frontPageTopPadding = (parseInt(frontPage.style.height) - parseInt(innerFront.style.height)) / 2;
    console.log("top padding: " + frontPageTopPadding + "\ntype: " + (typeof frontPageTopPadding));
    frontPage.style.paddingTop = frontPageTopPadding + "px";
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setPageHeight();
  }
  onResize(event){
    setPageHeight();
  }
}
