$("document").ready(function(){
	$('.left').animate({left:"0"}, 600, function(){$('.dashboard').fadeIn("slow", function(){$('.header').fadeIn("slow", function(){$('.medium').fadeIn("slow", function(){$('.it').fadeIn("slow")})})})});;
})


var coll = document.getElementsByClassName("l-open");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
	if ((content.style.display) || (content.style.maxHeight)) {
       content.style.display = null;
		content.style.maxHeight = null;
    } else {
        content.style.display = "block";	
		content.style.maxHeight = content.scrollHeight + "px";
	}	
  });
}

var bars = document.querySelectorAll('.meter > span');

setInterval(function(){
  bars.forEach(function(bar){
    var getWidth = parseFloat(bar.dataset.progress);
    
    for(var i = 0; i < getWidth; i++) {
      bar.style.width = i + '%';
    }
  });
}, 500);

var flag = 1;

function showFilter(x) {
	if(flag == 1){
		flag = 0;
		x.parentElement.parentElement.querySelector(".filter").style.height = "auto"
		x.parentElement.parentElement.querySelector(".filter").style.transform = "scale(1, 1)"
	}else{
		flag = 1;
		x.parentElement.parentElement.querySelector(".filter").style.height = "0"
		x.parentElement.parentElement.querySelector(".filter").style.transform = "scale(0, 0)"
	}

}
var FlagRequests = 0;
let FadeOutText = ()=>{
	$( "#s-holder" ).fadeOut("slow")
	$( ".dashboard" ).fadeOut("slow")
	$( ".request" ).fadeOut("slow")
	$( ".ticket-create" ).fadeIn("slow")
	
}

$( ".request" ).slideUp(100);
let ShowRequests = ()=>{
	(FlagRequests == 0)
		FlagRequests = 1;
	$( "#s-holder" ).fadeOut("slow")
	$( ".dashboard" ).fadeOut("slow")
	$( ".request" ).fadeOut("slow")
	$( ".ticket-create" ).fadeOut("slow")
	$( ".request" ).slideDown(900);
	$( ".request-inputs" ).fadeIn("slow")	
}

let ShowDashBoard = ()=>{
	$( "#s-holder" ).fadeOut("slow")
	$( ".dashboard" ).slideDown("slow")
	$( ".request" ).fadeOut("slow")
	$( ".ticket-create" ).fadeOut("slow")
	$( ".request" ).slideUp(900);
}





//profile//
function ShowProfile(){

	$( ".profile-option" ).slideToggle("fast")
}

//profile//

function changePassword(){

	$( ".set-password" ).slideToggle("fast")
}
function showSearch() {
	$(".medium").toggleClass("show-search")
	$(".search-holder").fadeToggle("slow")
}
function specifiedUser() {
	$(".specified-user").slideToggle("fast")
}
function taskAcess() {
	$(".taskAcess-id").slideToggle("fast")
}
function approveAccess() {
	$(".approve-access").slideToggle("fast")
}
function togggleUser(x) {
	x.querySelector("span").classList.toggle("toguser")
	x.querySelector("span").classList.toggle("tog")
	x.querySelector("div").classList.toggle("tog-icon")
}

function overFlow(x) {
	x.parentElement.style.overflowY = "scroll";
	x.style.opacity = "0";
	x.style.transition = ".3s ease";
}





function requestAction(x) {
	document.querySelectorAll(".action").forEach(ele => {
		ele.classList.remove("wanted");
	})
		x.querySelector(".action").classList.add("wanted");
		$(".action").slideUp(100)
		$(".wanted").slideDown(100)
	
}
function taskDetails() {
	$(".ticket-overflow").slideToggle("fast")
	$(".fas").toggleClass("fa-arrow-up")
}

function ticketStatus() {
	
	$(".status-option").slideToggle("fast")
	$(".status-option p").fadeToggle("slow")
	$(".ticket-overflow").children.fadeToggle("slow")
}

function showChat() {
	$(".chatbox").toggleClass("chat-toggle")
}
function showUsers() {
	$(".users").fadeToggle("slow")
		$(".pannel-layer").slideUp("slow")
		$(".set-event").slideUp("slow")

}
function createUser() {
	$(".pannel-layer").slideToggle("slow")
	$(".users").fadeOut("slow")
	$(".set-event").slideUp("slow")
}
function setEvent() {
	$(".set-event").slideToggle("slow")
	$(".users").fadeOut("slow")
	$(".pannel-layer").fadeOut("slow")
}


//var myText = ' " hello, iam ahmed  iam a student at fucalty of commerce iam very interesting in numbers and functions, in late 2017 i started to learn technology languages by myself "self study", i find endless passion while designing pages and coding. "',
//	i = 0;
//setTimeout  (function() {
//	var typeWriter = setInterval(function(){
//		document.getElementById("story").textContent += myText[i];
//		i = i + 1;
//		if(i > myText.length - 1){
//			clearInterval(typeWriter);
//		}
//	}, 70) 
//}, 2000);

//var myElement = document.getElementById("myImg"),
//	myImgs = [
//		'../image/bag.jpg',
//		'../image/cable.jpg',
//		'../image/chair.jpg'
//	],
//	myRandomNum =  Math.floor(Math.random() * myImgs.length);
//
//function changeImgs(myElement, myImgs) {
//	
//	setInterval(function(){
//		myElement.src = myImgs[myRandomNum];
//	}, 1000);
//}
//changeImgs(myElement, myImgs);




















