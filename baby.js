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

var baby=[
    {
        image_url:"https://img.shop.com/Image/250000/250100/250199/products/1787558026.jpg?size=500x500",
        name:"DNA Miracles® 3-in-1 Shampoo, Body Wash + Bubble Bath",
        price:"15.95",
        discount:"+ $0.32/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/250100/250199/products/960258130.jpg?size=500x500",
        name:"DNA Miracles® Natural Soothing Ointment",
        price:"22.50",
        discount:"+ $0.45/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/250100/250199/products/1519464953.jpg?size=500x500",
        name:"DNA Miracles® Natural Bathtime BoxKanga Care Rumparooz Reusable One Size Pocket Cloth Diaper",
        price:"25.95",
        discount:"+ $1.56/6% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    }, 
    {
        image_url:"https://img.shop.com/Image/280000/289900/289940/products/1909111004.jpg?size=400x400",
        name:"Kanga Care Reusable Prefold Cloth Diaper",
        price:"28.95",
        discount:"+ $1.74/6% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/280000/289900/289940/products/1907775043.jpg?size=400x400",
        name:"Kanga Care Flat Cloth Diapers (6pk) - One Size",
        price:"25.95",
        discount:"+ $1.56/6% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/280000/289900/289940/products/1907775042.jpg?size=400x400",
        name:"Kanga Care Ecoposh OBV One Size Pocket Fitted Cloth Diaper",
        price:"32.99",
        discount:"+ $1.98/6% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/280000/289900/289940/products/1907250924.jpg?size=400x400",
        name:"Kanga Care Wet Bag Mini",
        price:"16.95",
        discount:"+ $1.02/6% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/280000/289900/289940/products/1907775045.jpg?size=400x400",
        name:"Kanga Care Wet Bag",
        price:"20.95",
        discount:"+ $1.26/6% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/280000/284400/284458/products/1864689839.jpg?size=400x400",
        name:"Costway 3 in 1 Cartoon Lion Baby Infant Activity Gym Play Mat w Hanging Toys Ocean Ball",
        price:"53.95",
        discount:"+ $3.24/6% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/210000/217300/217306/products/1920896318.jpg?size=400x400",
        name:"Bunnies By The Bay Skipit Puppy Silly Buddy Pacifier Holder Tan",
        price:"14.99",
        discount:"+ $0.30/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243400/243406/products/1791338025.jpg?size=400x400",
        name:"Cheeky Chompers Chewy the Hippo Teether",
        price:"19.99",
        discount:"+ $2.04/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243500/243545/products/1907808258.jpg?size=400x400",
        name:"Johnson & Johnson 22 Oz. Pure Cornstarch Baby Powder White/blue",
        price:"5.29",
        discount:"+ $0.11/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243500/243545/products/1908175703.jpg?size=400x400",
        name:"Disney Winnie The Pooh Hunny & Me Stroller Blanket In Grey",
        price:"30.99",
        discount:"+ $0.62/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/260000/269300/269358/products/1865577549.jpg?size=400x400",
        name:"Hello Kitty Teether",
        price:"16.99",
        discount:"+ $0.68/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243500/243545/products/1908154017.jpg?size=400x400",
        name:"Carter's Fire Truck 4-Piece Toddler Bedding Set In Red",
        price:"50.99",
        discount:"+ $1.02/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243500/243545/products/1918366836.jpg?size=400x400",
        name:"Veer Savanna Stroller Sidewall Kit In Green",
        price:"130.99",
        discount:"+ $1.56/4% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
];
baby.forEach(function(ele){
    console.log("calling");
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
    document.querySelector("#baby").append(box);
   });



   var tempbaby=baby;
    document.querySelector("#sort").addEventListener("change",sortfn);
    function sortfn(){
        console.log("calling");
       var res=document.querySelector("#sort").value;
       if(res=="Ascending"){
        console.log("calling");
        tempbaby.sort(function(a,b){
             return a.price-b.price;
         });
       }else{
        tempbaby.sort(function(a,b){
            return b.price-a.price;
        });
       }
       console.log(tempbaby);
       display(tempbaby);
    }
    function display(tempbaby){
        document.querySelector("#baby").innerHTML=" ";
        tempbaby.forEach(function(ele){
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
            document.querySelector("#baby").append(box);
           });
    }

    document.querySelector("#lessthan30").addEventListener("click",function(){
        var alessthan30=baby.filter(function(ele){
            return ele.price<30;
        });
        document.querySelector("#baby").innerHTML=" ";
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
            document.querySelector("#baby").append(box);
           });
    })

    document.querySelector("#lessthan100").addEventListener("click",function(){
        var alessthan100=baby.filter(function(ele){
            return ele.price<100;
        });
        document.querySelector("#baby").innerHTML=" ";
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
            document.querySelector("#baby").append(box);
           });
    })


    document.querySelector("#greaterthan100").addEventListener("click",function(){
        var greaterthan100=baby.filter(function(ele){
            return ele.price>100;
        });
        document.querySelector("#baby").innerHTML=" ";
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
            document.querySelector("#baby").append(box);
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