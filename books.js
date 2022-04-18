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

var books=[
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/1924322720.jpg?size=400x400",
        name:"Barbour Publishing 256699 Everyday Bible Promise & Devotions Book",
        price:"18.58",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243500/243545/products/1778343760.jpg?size=400x400",
        name:"Children's Board Book: one Love By Cedella Marley",
        price:"7.99",
        discount:"+ $1.60/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243500/243545/products/1908040977.jpg?size=400x400",
        name:"Children's Board Book: the Berenstain Bears Sleepy Time Book By Mike Berenstain",
        price:"7.99",
        discount:"+ $0.42/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    }, 
    {
        image_url:"https://img.shop.com/Image/210000/217300/217306/products/1775659779.jpg?size=400x400",
        name:"baby's First Bible Stories Board Book",
        price:"9.99",
        discount:"+ $0.20/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/240000/243500/243545/products/1910442061.jpg?size=400x400",
        name:"ned Dreads Bed A Story About Bedtime By Ronnie Sellers Multi",
        price:"14.95",
        discount:"+ $0.30/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/210000/217300/217306/products/1775659724.jpg?size=400x400",
        name:"Chronicle Books baby Unicorn Finger Puppet Book",
        price:"6.99",
        discount:"+ $0.14/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/1925752793.jpg?size=400x400",
        name:"Kingstone Media Group 263656 Book - The Letters Volume 2 - Graphic Novel",
        price:"11.35",
        discount:"+ $0.57/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/1927903800.jpg?size=400x400",
        name:"Kingstone Media Group 263637 Revelation Volume 1 The Vision Graphic Novel Book",
        price:"11.30",
        discount:"+ $0.56/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/210000/217300/217306/products/1775661990.jpg?size=400x400",
        name:"Chronicle Books baby Giraffe Finger Puppet Book",
        price:"6.99",
        discount:"+ $0.14/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/1035786424.jpg?size=400x400",
        name:"Leading Adult Learning Supporting Adult Development In Our Schools, Paperback",
        price:"55.88",
        discount:"+ $2.79/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/1912889003.jpg?size=400x400",
        name:"Baker Publishing Group 169087 Book - The Bride Ships No.3 a Bride of Convenience",
        price:"22.78",
        discount:"+ $1.14/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/1564844302.jpg?size=400x400",
        name:"Blackstone Audio 9781538417812 June Sparrow & the Million-Dollar Penny Audio Book",
        price:"50.05",
        discount:"+ $2.50/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/260000/268500/268595/products/1924772468.jpg?size=400x400",
        name:"Kohl's Cares The Hunger Games #3: Mockingjay by Suzanne Collins, Multicolor",
        price:"4.00",
        discount:"+ $0.36/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/998940217.jpg?size=400x400",
        name:"BSA Eight Million Ways To Die - Audiobook CD",
        price:"23.96",
        discount:"+ $1.20/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/270000/277400/277418/products/1879456729.jpg?size=400x400",
        name:"Explorer Academy: The Tiger's Nest A Novel Official shopDisney",
        price:"16.99",
        discount:"+ $1.20/2% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://img.shop.com/Image/250000/251800/251872/products/1834454543.jpg?size=400x400",
        name:"Scrub Jay Journeys 137125 Hertz to Be a Hero- Volume Two",
        price:"17.86",
        discount:"+ $0.89/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
];
books.forEach(function(ele){
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
 document.querySelector("#books").append(box);
});


var tempbooks=books;
document.querySelector("#sort").addEventListener("change",sortfn);
function sortfn(){
    //console.log("calling");
   var res=document.querySelector("#sort").value;
   if(res=="Ascending"){
    //console.log("calling");
    tempbooks.sort(function(a,b){
         return a.price-b.price;
     });
   }else{
    tempbooks.sort(function(a,b){
        return b.price-a.price;
    });
   }
   console.log(tempbooks);
   display(tempbooks);
}
function display(tempbooks){
    document.querySelector("#books").innerHTML=" ";
    tempbooks.forEach(function(ele){
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
        document.querySelector("#books").append(box);
       });
}

document.querySelector("#lessthan10").addEventListener("click",function(){
    var alessthan10=books.filter(function(ele){
        return ele.price<10;
    });
    document.querySelector("#books").innerHTML=" ";
    alessthan10.forEach(function(ele){
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
        document.querySelector("#books").append(box);
       });
})

document.querySelector("#lessthan20").addEventListener("click",function(){
    var alessthan20=books.filter(function(ele){
        return ele.price<20;
    });
    document.querySelector("#books").innerHTML=" ";
    alessthan20.forEach(function(ele){
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
        document.querySelector("#books").append(box);
       });
})


document.querySelector("#greaterthan20").addEventListener("click",function(){
    var greaterthan20=books.filter(function(ele){
        return ele.price>20;
    });
    document.querySelector("#books").innerHTML=" ";
    greaterthan20.forEach(function(ele){
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
        document.querySelector("#books").append(box);
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