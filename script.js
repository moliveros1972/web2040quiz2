var title = document.createElement("h1");
title.innerHTML = "Making Ice Cream Sandwiches";
document.body.appendChild(title);

var para1 = document.createElement("p");
para1.innerHTML = "Kids and adults alike will be fighting over these big monster ice cream sandwiches! The best part about these things is that they are no bake. You don't even need to warm up your oven if you purchased cookies. Makes early to use the mini M&Ms or the large ones will fall off. As a volunteer field editor for Taste of Home magazine, I love recipes that can be assembled quickly and still make a quick presentation.";
document.body.appendChild(para1);

title.style.color = "orange";
title.style.fontsize = "16";

var navbar = document.createElement("div");
navbar.setAttribute("class", "navbox");
document.body.appendChild(navbar);


var h3 = document.createElement("h3");
h3.setAttribute("class", "ingre");
h3.innerHTML = "Ingredients";
document.body.appendChild(h3);



var ul = document.createElement("ul");
ul.setAttribute("class", "ulist");
var li1 = document.createElement("li");
li1.innerHTML = "Cookies and Cream ice cream";
var li2 = document.createElement("li");
li2.innerHTML = "Large chocolate chip cookies";
var li3 = document.createElement("li");
li3.innerHTML = "M&M's minis";
var li4 = document.createElement("li");
li4.innerHTML = "Reese's mini peanut butter cups";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
document.body.appendChild(ul);

var img1 = document.createElement("img");
img1.setAttribute("class", "cream");
img1.src = "ice-cream.jpeg";


var img2 = document.createElement("img");
img2.setAttribute("class", "cookies");
img2.src = "cookies.jpeg";


var img3 = document.createElement("img");
img3.setAttribute("class", "mms");
img3.src = "mm.jpeg";


var img4 = document.createElement("img");
img4.setAttribute("class", "mini");
img4.src = "pb.jpg";


var divA = document.createElement("div");
divA.setAttribute("class", "block");
divA.appendChild(img1);
divA.appendChild(img2);
divA.appendChild(img3);
divA.appendChild(img4);
document.body.appendChild(divA);







