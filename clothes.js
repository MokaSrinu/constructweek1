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

var clothes=[
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010693493-Green-Olive-1000010693493-22122021_01-345.jpg",
        name:"MAX Printed Polo T-shirt",
        price:"369",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010541186-Black-Black-1000010541186-7092021_01-345.jpg",
        name:"MAX Printed Elasticated Waist Shorts",
        price:"449",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010971908-Black-BLACK-1000010971908-2022022_01-345.jpg",
        name:"MAX Textured Slim Fit Polo T-shirt",
        price:"699",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010252061-Blue-Darkblue-1000010252061-7152021_01-345.jpg",
        name:"MAX Solid Slim Fit Polo T-shirt",
        price:"599",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010923682-Yellow-MUSTARD-1000010923682-12012022_01-345.jpg",
        name:"MAX Solid Slim Fit Polo T-shirt",
        price:"449",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010748329-Blue-NAVY-1000010748329-29122021_01-345.jpg",
        name:"MAX Printed Polo T-shirt",
        price:"369",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010921733-Blue-BLUE-1000010921733-29122021_01-345.jpg",
        name:"MAX Striped Slim Fit Polo T-shirt",
        price:"499",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010422093-Yellow-Yellow-1000010422093-7292021_01-345.jpg",
        name:"MAX Solid Casual sandles",
        price:"1499",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010477366-Blue-Midblue-1000010477366-11112021_01-345.jpg",
        name:"MAX Stonewashed Carrot Fit Jeans",
        price:"1699",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010477061-Grey-GREY-1000010477061-15122021_01-345.jpg",
        name:"MAX Solid Carrot Fit Denim Jeans",
        price:"1499",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010477192-Blue-Darkblue-1000010477192-11302021_01-345.jpg",
        name:"MAX Stonewashed Carrot Fit Jeans",
        price:"1399",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010680535-Blue-Lightblue-1000010680535-9222021_01-345.jpg",
        name:"MAX Solid Buckle Detailed Sliders",
        price:"399",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010923336-Blue-BLUE-1000010923336-28012022_01-345.jpg",
        name:"MAX Textured Lace-Up Sports Shoes",
        price:"1499",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010374391-Green-GREEN-1000010374391-5012022_01-345.jpg",
        name:"MAX Solid Lace-Up Sneakers",
        price:"999",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010766661-Blue-Blue-1000010766661-11112021_01-345.jpg",
        name:"MAX Embroidered Straight Kurta",
        price:"899",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010758985-Green-Green-1000010758985-11182021_01-345.jpg",
        name:"MAX Striped Straight Kurta",
        price:"599",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010766436-Green-GREEN-1000010766436-08022022_01-345.jpg",
        name:"MAX Floral Printed Band Collar Straight kurta",
        price:"699",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010059313-Beige-Beige-1000010059313-3172021_01-345.jpg",
        name:"MAX Printed Round Neck Straight Kurta",
        price:"499",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010398094-Beige-Beige-1000010398094-9152021_01-345.jpg",
        name:"MAX Solid Woven Cropped Pants",
        price:"449",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010682861-Pink-Candypink-1000010682861-9222021_01-345.jpg",
        name:"MAX Solid Full Sleeves Sweatshirt",
        price:"499",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010544713-Pink-Pink-1000010544713-9292021_01-345.jpeg",
        name:"MAX Textured Round Neck Sweatshirt",
        price:"999",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000009948188-Yellow-Gold-1000009948188-1272021_01-345.jpg",
        name:"MAX Solid Sling Back Flat Sandals",
        price:"599",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010915736-Multicolour-M-1000010915736-28012022_01-345.jpg",
        name:"MAX Embroidered Flat Sandals",
        price:"799",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011081550-Red-CRIMSON-1000011081550-22022022_01-345.jpg",
        name:"MAX Embroidered Ethnic A-Line Dress",
        price:"999",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010775814-Multicolour-M-1000010775814-29122021_01-345.jpg",
        name:"MAX Printed Handkerchief-Hem A-line Dress",
        price:"1099",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011081589-Blue-LIGHTBLUE-1000011081589-22022022_01-345.jpg",
        name:"MAX Printed Handkerchief-Hem A-line Dress",
        price:"1099",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011081589-Blue-LIGHTBLUE-1000011081589-22022022_01-345.jpg",
        name:"MAX Printed Cinched Waist A-Line Dress",
        price:"799",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    },
    {
        image_url:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010775839-Blue-INDIGO-1000010775839-15122021_01-345.jpg",
        name:"MAX Tie & Dye Collared A-Line Dress",
        price:"1999",
        discount:"+ $0.93/5% $ Cashback",
        shipping:"Free Shipping With $99 orders",
    }
];
clothes.forEach(function(ele){
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
 document.querySelector("#clothes").append(box);
});


var tempclothes=clothes;
document.querySelector("#sort").addEventListener("change",sortfn);
function sortfn(){
    //console.log("calling");
   var res=document.querySelector("#sort").value;
   if(res=="Ascending"){
    //console.log("calling");
    tempclothes.sort(function(a,b){
         return a.price-b.price;
     });
   }else{
    tempclothes.sort(function(a,b){
        return b.price-a.price;
    });
   }
   console.log(tempclothes);
   display(tempclothes);
}
function display(tempclothes){
    document.querySelector("#clothes").innerHTML=" ";
    tempclothes.forEach(function(ele){
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
        document.querySelector("#clothes").append(box);
       });
}

document.querySelector("#lessthan500").addEventListener("click",function(){
    var alessthan500=clothes.filter(function(ele){
        return ele.price<500;
    });
    document.querySelector("#clothes").innerHTML=" ";
    alessthan500.forEach(function(ele){
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
        document.querySelector("#clothes").append(box);
       });
})

document.querySelector("#lessthan1000").addEventListener("click",function(){
    var alessthan1000=clothes.filter(function(ele){
        return ele.price<1000;
    });
    document.querySelector("#clothes").innerHTML=" ";
    alessthan1000.forEach(function(ele){
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
        document.querySelector("#clothes").append(box);
       });
})


document.querySelector("#greaterthan1000").addEventListener("click",function(){
    var greaterthan1000=clothes.filter(function(ele){
        return ele.price>1000;
    });
    document.querySelector("#clothes").innerHTML=" ";
    greaterthan1000.forEach(function(ele){
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
        document.querySelector("#clothes").append(box);
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