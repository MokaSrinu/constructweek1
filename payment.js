document.querySelector("#home").addEventListener("click",function(){
    window.location.href="./index.html";
});

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 


function departfn(){
  var res1=document.querySelector("#department").value;
  if(res1=='All Departments'){
      window.location.href="./index.html"
  }
  else if(res1=='Auto'){
      window.location.href="./auto.html";
  }
  else if(res1=='Baby'){
      window.location.href="./baby.html";
  }
  else if(res1=="Beauty"){
      window.location.href="./beauty.html"
  }
  else if(res1=="Books"){
      window.location.href="./Books.html"
  }
  else if(res1=="Clothes"){
      window.location.href="./clothes.html"
  }
  else if(res1=="Computers"){
      window.location.href="./computers.html"
  }
  else if(res1=="Electronics"){
      window.location.href="./electronics.html"
  }
  else if(res1=="Food & Drink"){
      window.location.href="./foodanddrink.html"
  }
  else if(res1=="Health & Nutrition"){
      window.location.href="./healthandnutrition.html"
  }
  else if(res1=="Jwellery"){
      window.location.href="./Jwellery.html"
  }
  else if(res1=="Shoes"){
      window.location.href="./shoes.html"
  }
  else if(res1=="Sports and fitness"){
      window.location.href="./sportsandfitness.html"
  }
  else if(res1=="Tools"){
      window.location.href="./tools.html"
  }
  else if(res1=="Toys"){
      window.location.href="./toys.html"
  }
}

 function openNav() {
  document.getElementById("mySidepanel").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function openNav1() {
  document.getElementById("mySidepanel1").style.width = "350px";
}

function closeNav1() {
  document.getElementById("mySidepanel1").style.width = "0";
}

function openNav2() {
    document.getElementById("mySidepanel2").style.width = "550px";
  }
  
  
  function closeNav2() {
    document.getElementById("mySidepanel2").style.width = "0";
  }

    var cartdata=JSON.parse(localStorage.getItem("cartdata"));
    var totalsum=cartdata.reduce(function(sum,ele,index,arr){
        return sum+Number(ele.price);
   },0);
   var totalitems=cartdata.length;
   document.querySelector("#amount").innerText="you have"+" "+totalitems+" "+"items in your cart of total"+" "+totalsum+" "+"rupees";
    cartdata.forEach(function(ele,index){
     var box=document.createElement("div");
     var img=document.createElement("img");
     img.src=ele.image_url;
     var name=document.createElement("p");
     name.textContent=ele.name;
     var price=document.createElement("p");
     price.innerText=ele.price;
     var discount=document.createElement("p");
     discount.innerText=ele.discount;
     var shipping=document.createElement("p");
     shipping.innerText=ele.shipping;
     var cartbutton=document.createElement("button");
     cartbutton.innerText="remove from cart";
     cartbutton.addEventListener("click",function(){
        cartdata.splice(index,1);
        localStorage.setItem("cartdata",JSON.stringify(cartdata));
        window.location.reload();
        //console.log(cartdata);
     });
     box.append(img,name,price,discount,shipping,cartbutton);
     document.querySelector("#cart").append(box);
    });
  

  function homepage(){
      window.location.href="./index.html"
  }


  document.querySelector("form").addEventListener('submit',paymentfn);
    function paymentfn(){
        event.preventDefault();
       var cardno= document.querySelector("#cardno").value;
       var name= document.querySelector("#name").value;
       var address= document.querySelector("#address").value;
       var country= document.querySelector("#countries").value;
       var city= document.querySelector("#city").value;
       var zipcode= document.querySelector("#zipcode").value;
       if(cardno!=undefined){
           //console.log("hi");
           document.querySelector("h1").innerText="Working";
           window.location.href="./otp.html";
       }else{
           window.alert("please enter all fields");
       }
    }