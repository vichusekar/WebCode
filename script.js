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


        }    
    }
    catch (err){
      console.log(err)
    }
}

brew()
