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

var cartdata;
if(localStorage.getItem("cartdata")===null){
    cartdata=[];
}else{
    cartdata=JSON.parse(localStorage.getItem("cartdata"));
}

var beauty=[
    {
        image_url:"https://img.shop.com/Image/240000/243300/243388/products/559053504.jpg?size=500x500",
        name:"Royal Spa® Imperial Blend Bath & Shower Gel",
        price:"20.95",
        discount:"+ $0.42/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243384/products/575527518.jpg?size=500x500",
        name:"Pentaxyl®",
        price:"79.95",
        discount:"+ $1.60/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243396/products/559090759.jpg?size=500x500",
        name:"Ultimate Aloe® Gel",
        price:"20.95",
        discount:"+ $0.42/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    }, 
    {
        image_url:"https://img.shop.com/Image/210000/214600/214693/products/571253480.jpg?size=500x500",
        name:"Cellular Laboratories® De-Aging Sunscreen Broad Spectrum SPF 50+",
        price:"44.95",
        discount:"+ $1.30/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243389/products/559053510.jpg?size=500x500",
        name:"Skintelligence® Hydra Derm Deep Cleansing Emulsion",
        price:"21.95",
        discount:"+ $0.44/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243380/products/1896660029.jpg?size=500x500",
        name:"Motives® Makeup Remover Towelettes",
        price:"8.50",
        discount:"+ $0.17/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243388/products/559053497.jpg?size=500x500",
        name:"Royal Spa® Chamomile Shampoo",
        price:"20.95",
        discount:"+ $0.42/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243388/products/559053498.jpg?size=500x500",
        name:"Royal Spa® Ultra III Shampoo (for Chemically Treated Hair)",
        price:"20.95",
        discount:"+ $0.42/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/248600/248698/products/1902671924.jpg?size=500x500",
        name:"Lumière de Vie® Eye Revive Gels",
        price:"50.00",
        discount:"+ $1.80/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/248600/248698/products/792147156.jpg?size=500x500",
        name:"Lumière de Vie® Intense Rejuvenation Crème",
        price:"62.50",
        discount:"+ $1.25/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243389/products/559053507.jpg?size=500x500",
        name:"Skintelligence® Daily Moisture Enhancer",
        price:"27.95",
        discount:"+ $0.56/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243392/products/559053536.jpg?size=500x500",
        name:"Timeless Prescription® Face Firming Moisturizer with MDI Complex®",
        price:"56.95",
        discount:"+ $1.14/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243380/products/1871478045.jpg?size=500x500",
        name:"Motives® Cream Lipstick",
        price:"18.00",
        discount:"+ $0.36/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243380/products/1869987733.jpg?size=500x500",
        name:"Motives® Liquid Lipstick",
        price:"20.00",
        discount:"+ $0.40/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243397/products/559092929.jpg?size=500x500",
        name:"VitaShield® Vitamin C & E Liposome Intensive Moisturizer",
        price:"60.00",
        discount:"+ $1.20/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243300/243388/products/559053501.jpg?size=500x500",
        name:"Royal Spa® Structure Hair Gel",
        price:"15.75",
        discount:"+ $0.56/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
];
beauty.forEach(function(ele){
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
 cartbutton.innerText="add to cart";
 cartbutton.addEventListener("click",function(){
     cartdata.push(ele);
     localStorage.setItem("cartdata",JSON.stringify(cartdata));
     //console.log(cartdata);
 });
 box.append(img,name,price,discount,shipping,cartbutton);
 document.querySelector("#beauty").append(box);
});


var tempbeauty=beauty;
document.querySelector("#sort").addEventListener("change",sortfn);
function sortfn(){
    console.log("calling");
   var res=document.querySelector("#sort").value;
   if(res=="Ascending"){
    console.log("calling");
    tempbeauty.sort(function(a,b){
         return a.price-b.price;
     });
   }else{
    tempbeauty.sort(function(a,b){
        return b.price-a.price;
    });
   }
   //console.log(tempauto);
   display(tempbeauty);
}
function display(tempbeauty){
    document.querySelector("#beauty").innerHTML=" ";
    tempbeauty.forEach(function(ele){
        //console.log("calling auto");
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
        cartbutton.innerText="add to cart";
        cartbutton.addEventListener("click",function(){
            cartdata.push(ele);
            localStorage.setItem("cartdata",JSON.stringify(cartdata));
            //console.log(cartdata);
        });
        box.append(img,name,price,discount,shipping,cartbutton);
        document.querySelector("#beauty").append(box);
       });
}

document.querySelector("#lessthan30").addEventListener("click",function(){
    var alessthan30=beauty.filter(function(ele){
        return ele.price<30;
    });
    document.querySelector("#beauty").innerHTML=" ";
    alessthan30.forEach(function(ele){
        //console.log("calling auto");
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
        cartbutton.innerText="add to cart";
        cartbutton.addEventListener("click",function(){
            cartdata.push(ele);
            localStorage.setItem("cartdata",JSON.stringify(cartdata));
            //console.log(cartdata);
        });
        box.append(img,name,price,discount,shipping,cartbutton);
        document.querySelector("#beauty").append(box);
       });
})

document.querySelector("#lessthan100").addEventListener("click",function(){
    var alessthan100=beauty.filter(function(ele){
        return ele.price<100;
    });
    document.querySelector("#beauty").innerHTML=" ";
    alessthan100.forEach(function(ele){
        //console.log("calling auto");
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
        cartbutton.innerText="add to cart";
        cartbutton.addEventListener("click",function(){
            cartdata.push(ele);
            localStorage.setItem("cartdata",JSON.stringify(cartdata));
            //console.log(cartdata);
        });
        box.append(img,name,price,discount,shipping,cartbutton);
        document.querySelector("#beauty").append(box);
       });
})


document.querySelector("#greaterthan100").addEventListener("click",function(){
    var greaterthan100=beauty.filter(function(ele){
        return ele.price>100;
    });
    document.querySelector("#beauty").innerHTML=" ";
    greaterthan100.forEach(function(ele){
        //console.log("calling auto");
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
        cartbutton.innerText="add to cart";
        cartbutton.addEventListener("click",function(){
            cartdata.push(ele);
            localStorage.setItem("cartdata",JSON.stringify(cartdata));
            //console.log(cartdata);
        });
        box.append(img,name,price,discount,shipping,cartbutton);
        document.querySelector("#beauty").append(box);
       });
})

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

  function paymentfunction(){
    window.location.href="./payment.html";
  }
  function orderspage(){
    window.location.href="./orders.html"
  }