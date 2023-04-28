

// // async function brew(){
// // let res= await fetch("https://api.openbrewerydb.org/v1/breweries/")
// // let res1=await res.json()
// // console.log(res1)

// // }

// // console.log("countryname"+data.name)


// //Final Code for the Rest countries


// var div=document.createElement("div");
// div.innerHTML="this is div";

// var container=document.createElement("div");
// container.className="container";

// var row=document.createElement("div");
// row.classList.add("row","m-3");

// div.append(container,row);
// document.body.append(div);


// async function data(){
// let result=await fetch("https://api.openbrewerydb.org/v1/breweries/")
// let data=await result.json();
// console.log(data)
// foo()
// }

// function foo(){
//     for(var i=0;i<data.length;i++){
//         row.innerHTML+=`
//         <div class="col-md-4">
//         <div class="card border-primary mb-3 " style="width: 18rem;">
//         <img src="${data[i].phone}" class="card-img-top" alt="">
//           <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         </div>
//       </div>
//       </div>`;
//     }
// }
// data()


var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","m-3");


var nametype=document.createElement("div");
nametype.style.margin="32px";
nametype.style.fontFamily="Arial";

container.append(row,nametype);





async function brew(){
var res= await fetch("https://api.openbrewerydb.org/v1/breweries/")
var res1=await res.json()
console.log(res1)
foo()

}
async function foo(){
  let result=await fetch("https://api.openbrewerydb.org/v1/breweries/")
  let result1=await result.json()
  try{
    for(var i=0;i<result1.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card border-primary mb-3 " style="width: 18rem;">
        <img src="" class="card-img-top" alt="">
          <div class="card-body">
          <h5 class="card-title">Breweries</h5>
          <p class="card-text">Name & Type: ${result1[i].name} ${result1[i].brewery_type}<br> Address :${result1[i].address_1}<br> Website url:${result1[i].website_url}<br>Phone no :${result1[i].phone}</p>
        </div>
      </div>
      </div>`;

      document.body.append(container);
      // console.log(`Name: ${result1[i].name} ${result1[i].phone} ${result1[i].address_1} ${result1[i].website_url}`)
      // getdata()

        }    
    }
    catch (err){
      console.log(err)
    }
}

// async function getdata(){
//   let gd= await fetch ("https://api.openbrewerydb.org/v1/breweries/")
//   let gd1= await gd.json()
//   for(var i=0; i<gd1.length; i++){
//     console.log(gd1[i].name)
//   }
// }
brew()
