const databar = document.querySelectorAll('.data');

async function createData() {
    const res = await fetch("./data.json");
    const data = await res.json();

      
  for(let i = 0; i< databar.length; i++){
    databar[i].getElementsByClassName("bar")[0].style.height = (data[i].amount) * 2 +"px";
    databar[i].getElementsByClassName("value")[0].innerHTML = "$"+(data[i].amount);
    if (i==2) {
        databar[i].getElementsByClassName("bar")[0].style.background = "#76b5bc";
    }
  }
}

createData();


for(let i= 0;i<databar.length;i++){
    databar[i].addEventListener("mouseover",function(){
      this.getElementsByClassName("value")[0].style.opacity = "1";
    })
    databar[i].addEventListener("mouseout",function(){
      this.getElementsByClassName("value")[0].style.opacity = "0";
    })
  }
