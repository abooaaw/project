let NAME = document.getElementById('NAME');
let CATEGORY = document.getElementById('CATEGORY');
let STOCK = document.getElementById('STOCK');
let BUYINGPRICE = document.getElementById('BUYINGPRICE');
let SELLINGPRICE= document.getElementById('SELLINGPRICE');
let DATE = document.getElementById('DATE');
let save = document.getElementById('save');
let mode = 'creat';
let tt;
//console.log(ads, discount, total,titel,price);

let data;
if (localStorage.products != null) {
    data = JSON.parse(localStorage.products);
}else{
   data =[];

}
save.onclick = function(){
    let news = {
        NAME:NAME.value.toLowerCase(),
        CATEGORY:CATEGORY.value.toLowerCase(),
        STOCK:STOCK.value,
        BUYINGPRICE:BUYINGPRICE.value,
        SELLINGPRICE:SELLINGPRICE.value,
        DATE:DATE.value,
    }
    if(mode === 'creat'){
        if(news.count > 1){
                for(i=0;i<news.count;i++)
                data.push(news);
            }else
            {
            data.push(news);
            }
 }else{
    data[    tt   ] = news;
    mood = 'create'
    save.innerHTML = 'create'
    count.style.display='block';
 }
    

    localStorage.setItem('products',   JSON.stringify(data));
    clear();
    showProduct()
}
function clear (){
    NAME.value = ''; 
    CATEGORY.value = '';
    STOCK.value = '';
    BUYINGPRICE.value = '';
    SELLINGPRICE.value = '';
    DATE.value = '';
}

function showProduct(){
    let table = '';
    for(let i=0; i<data.length; i++){
        table += 
        ` <tr>
         <td>${i}</td>
        <td>${data[i].NAME}</td>
        <td>${data[i].CATEGORY}</td>
        <td>${data[i].STOCK}</td>
        <td>$${data[i].BUYINGPRICE}</td>
        <td>$${data[i].SELLINGPRICE}</td>
        <td>${data[i].DATE }</td>
        <td><div class="31"><a onclick=update(${i}) id = "update" href="#" class="actionbtn">
        <i class='bx bx-pencil'></i>
      </a>
      <a  onclick="delate(${i})" id = "delate" href="#" class="actionbtn">
        <i class='bx bx-trash-alt' style='color:#f30000'  ></i>
      </a> </div></td>
        </tr>
        `


    }


    document.getElementById('tbody').innerHTML =table;
}

showProduct()
function delate(i){
    data.splice(i, 1);
    localStorage.products = JSON.stringify(data);
    showProduct()

}
function delleatall(){
    localStorage.clear();
    data.splice(0);
    showProduct();
}

function update(i){
    NAME.value = data[i].NAME;
    CATEGORY.value = data[i].CATEGORY;
    STOCK.value = data[i].STOCK;
    BUYINGPRICE.value = data[i].BUYINGPRICE;
    SELLINGPRICE.value = data[i].SELLINGPRICE;
    DATE.value = data[i].DATE ;
    save.innerHTML = "update";
    mode = 'update'
    tt = i;
    showProduct()
    scroll({
        top:0,
        behavior: 'smooth'

    })
};
let searchmode ='NAME';
 function getsearch(id)
 {
    let search = document.getElementById('search');
if(id == 'searchbytitel'){
    searchmode = 'NAME'; 
}else{
    searchmode='CATEGORY';
search.placeholder = 'search by '+searchmode;
search.focus();
search.value ='';
showProduct()
 }

 function searchdata(value)
 {
    let table = '';
   if(searchmode == 'NAME')
    {

        for(let i=0; i<data.length; i++)
        {
            if(data[i].NAME.includes(value.toLowerCase()))
            {
                table += 
         ` <tr>
         <td>${i}</td>
        <td>${data[i].NAME}</td>
        <td>${data[i].CATEGORY}</td>
        <td>${data[i].STOCK}</td>
        <td>${data[i].BUYINGPRICE}</td>
        <td>${data[i].SELLINGPRICE}</td>
        <td>${data[i].DATE }</td>
        <td><div class="31"><a onclick=update(${i}) id = "update" href="#" class="actionbtn">
        <i class='bx bx-pencil'></i>
      </a>
      <a  onclick="delate(${i})" id = "delate" href="#" class="actionbtn">
        <i class='bx bx-trash-alt' style='color:#f30000'  ></i>
      </a> </div></td>
        </tr>
        `
             }
          }
    }else{
        for(let i=0; i<data.length; i++)
        {
            if(data[i].CATEGORY.includes(value.toLowerCase()))
            {
                table += 
         ` <tr>
         <td>${i}</td>
        <td>${data[i].NAME}</td>
        <td>${data[i].CATEGORY}</td>
        <td>${data[i].STOCK}</td>
        <td>${data[i].BUYINGPRICE}</td>
        <td>${data[i].SELLINGPRICE}</td>
        <td>${data[i].DATE }</td>
        <td><div class="31"><a onclick=update(${i}) id = "update" href="#" class="actionbtn">
        <i class='bx bx-pencil'></i>
      </a>
      <a  onclick="delate(${i})" id = "delate" href="#" class="actionbtn">
        <i class='bx bx-trash-alt' style='color:#f30000'  ></i>
      </a> </div></td>
        </tr>
        `
             }
          }


    }
 document.getElementById('tbody').innerHTML =table;
 }
}
function openPopup() {
    // Create a new window
    var popupWindow = window.open("", "popup", "width=300,height=150");
  
    // Add a text box to the window
    var textbox = document.createElement("input");
    textbox.type = "text";
    textbox.style.width = "100%";
    popupWindow.document.body.appendChild(textbox);
  }
  
  // Add an onclick event listener to the link
  document.querySelector(".links_name").onclick = openPopup;
  