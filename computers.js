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
var auto=[
    {
        image_url:"https://img.shop.com/Image/220000/226800/226851/products/559024614.jpg?size=500x500",
        name:"Autoworks™ Fuel Enhancer",
        price:"23.95",
        discount:"+ $0.48/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/220000/226800/226851/products/559024616.jpg?size=500x500",
        name:"Friction Free 3000™ Engine Treatment",
        price:"23.95",
        discount:"+ $0.48/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/220000/226800/226851/products/559024612.jpg?size=500x500",
        name:"Autoworks™ High Performance Auto Care Shimmering Polish",
        price:"20.95",
        discount:"+ $0.42/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    }, 
    {
        image_url:"https://img.shop.com/Image/260000/265300/265380/products/1904318537.jpg?size=400x400",
        name:"Carb Rebuild Kit - for Yamaha fits 2005-2006 WR450F - Carburetor Repair Kit",
        price:"32.59",
        discount:"+ $1.30/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/260000/265300/265380/products/1892238555.jpg?size=400x400",
        name:"Raider Universal Motorcycle Cover XL Most 1500cc Fits Suzuki for Harley",
        price:"15.79",
        discount:"+ $0.63/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/280000/280600/280604/products/1868191189.jpg?size=400x400",
        name:"Isotoner Women's Unlined Leather Palm Driving Gloves",
        price:"23.95",
        discount:"+ $0.48/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/1891191903.jpg?size=400x400",
        name:"Wise 3338-0033 Baja XL Bucket Seat, Brite White & Hot Teal",
        price:"313.64",
        discount:"+ $15.68/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/280000/284200/284287/products/1921117101.jpg?size=400x400",
        name:"Auto Nexen N'Priz RH7 225/55R18 97H SL A/S Touring Tire",
        price:"148.64",
        discount:"+ $8.92/6% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/260000/265300/265380/products/1756593783.jpg?size=400x400",
        name:"Fulmer Adult Open Face Helmet Motorcycle Bobber Chopper DOT Approved 353 EON",
        price:"44.95",
        discount:"+ $1.80/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/260000/265300/265380/products/1894399420.jpg?size=400x400",
        name:"SPI Left Side Lower A-Arm fits Polaris Snowmobiles Replaces OEM # 2203021",
        price:"119.95",
        discount:"+ $4.80/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/1598236906.jpg?size=400x400",
        name:"Spec-D Tuning MFCAT3-G35032 Dual Catback Exhaust System Burnt Tip for 03 to 07 Infiniti G35, 11 x 30 x 44 in.",
        price:"306.67",
        discount:"+ $15.33/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/280000/281900/281909/products/1840586031.jpg?size=400x400",
        name:"Noco GB40 1,000 Amp UltraSafe Lithium Jump Starter",
        price:"99.95",
        discount:"+ $2.00/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/248300/248358/products/1885070694.jpg?size=400x400",
        name:"PAC PAC Locpro 2CH Line Output Converter with Remote Turn-on",
        price:"22.21",
        discount:"+ $0.89/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/1887624458.jpg?size=400x400",
        name:"Martin Wheel 274424 215x60-8 Load Range C Trailer Tire",
        price:"64.55",
        discount:"+ $3.23/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/280000/281900/281909/products/1840384568.jpg?size=400x400",
        name:"Metra 4ONI22 Antenna Adapter for Nissan/Infiniti Vehicles",
        price:"14.99",
        discount:"+ $0.30/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/260000/269300/269358/products/1850455446.jpg?size=400x400",
        name:"Captain America Shield Logo Car Cup Holder Coaster 2-Pack",
        price:"13.99",
        discount:"+ $0.56/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
];
auto.forEach(function(ele){
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
 document.querySelector("#auto").append(box);
});


var tempauto=auto;
document.querySelector("#sort").addEventListener("change",sortfn);
function sortfn(){
    console.log("calling");
   var res=document.querySelector("#sort").value;
   if(res=="Ascending"){
    console.log("calling");
     tempauto.sort(function(a,b){
         return a.price-b.price;
     });
   }else{
    tempauto.sort(function(a,b){
        return b.price-a.price;
    });
   }
   console.log(tempauto);
   display(tempauto);
}
function display(tempauto){
    document.querySelector("#auto").innerHTML=" ";
    tempauto.forEach(function(ele){
        console.log("calling auto");
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
        document.querySelector("#auto").append(box);
       });
}

document.querySelector("#lessthan30").addEventListener("click",function(){
    var alessthan30=auto.filter(function(ele){
        return ele.price<30;
    });
    document.querySelector("#auto").innerHTML=" ";
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
        document.querySelector("#auto").append(box);
       });
})

document.querySelector("#lessthan100").addEventListener("click",function(){
    var alessthan100=auto.filter(function(ele){
        return ele.price<100;
    });
    document.querySelector("#auto").innerHTML=" ";
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
        document.querySelector("#auto").append(box);
       });
})


document.querySelector("#greaterthan100").addEventListener("click",function(){
    var greaterthan100=auto.filter(function(ele){
        return ele.price>100;
    });
    document.querySelector("#auto").innerHTML=" ";
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
        document.querySelector("#auto").append(box);
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