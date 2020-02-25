const block4 = document.querySelector(".Block-4");
block4.addEventListener("click", runEvent);

//Mouseup und Hallo Welt

function runEvent(e) {
  block4.innerHTML = `<h1 style="color:red"> Hallo Welt </h1>`;
  console.log(`Tipo de evento: ${e.type}`);
}

// //Change styling

// //

// // document.querySelector(
// //   ".Block-4"
// // ).innerHTML = `<span style="color:red"> Hallo Welt </span>`;

// //Change menu styling

// document.getElementById("main-menu").style.background = "fff";

// let links = document.links;

// let linksArr = Array.from(links);

// linksArr.forEach(function(links) {
//   console.log(links.getAttribute("href"));
// })
