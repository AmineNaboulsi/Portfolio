const li_ = [

    {title: "XXX Songs" , category : "mobile" ,desc :"ckzbzkzv" , img :"../images/coverxxx.png"},
    {title: "Landing Page" , category : "htmlcss" ,desc :"vevvsvsvs" , img :"../images/p1.jpg"},
    {title: "Landing Page 3" , category : "react" ,desc :"vcxxcvxvxx" , img :"../images/p1.jpg"},
    {title: "Walli 4k" , category : "mobile" ,desc :"vcxvxvxvvx" , img :"../images/cover_wallpaper.png"},
]

function dispaly_projetcs(txt){
    let innerlist= ``;
    const panel =  document.getElementById("panel");
    for(let i = 0 ; i< li_.length ; i++){
        if(txt == li_[i].category || txt == "all")
        innerlist+=`
        <article class="card">
        <img style="width: 266px;height:180px" src=`+ li_[i].img+` />
        <div style="width: 266;height:250" class="box ">
            <h1 class="title"> `+ li_[i].title+` </h1>
            <p class="sub-title">`+ li_[i].desc+`</p>
            <div class="flex viewmore">
                <div class="icon-github2"></div>
                <a href="#" class="flex" >more<span style="align-self: end;" class="icon-arrow-right"></span></a>
            </div>
        </div>
        
    </article>`;
    }
    panel.innerHTML = innerlist;
}
document.addEventListener("DOMContentLoaded" , function(){
    dispaly_projetcs("all");
    const currentmode= localStorage.getItem("currentmode");
    if(currentmode == "dark"){
        document.body.setAttribute("class" ,"dark");
    }else{document.body.setAttribute("class" ,"light");}
});
document.addEventListener("scroll" , function(){
if(document.documentElement.scrollTop>300){
    //floattingburronup.style.display = "none";
    document.getElementById("scrolltoup").style.opacity = 1;
    
} 
else{
    document.getElementById("scrolltoup").style.opacity = 0;
}
});

function selectTab(txt) {
    const tab1 = document.getElementById("tab1");
    tab1.setAttribute("class" ,"noactive");
    const tab2 =document.getElementById("tab2");
    tab2.setAttribute("class" ,"noactive");
    const tab3 =document.getElementById("tab3");
    tab3.setAttribute("class" ,"noactive");
    const tab4 =document.getElementById("tab4");
    tab4.setAttribute("class" ,"noactive");
    const selected = document.getElementById("tab"+txt);
    selected.setAttribute("class" ,"active");
    dispaly_projetcs(""+selected.getAttribute("value"));
}
function showmenu(){
    const itmmenu =`
    <div  class="fixed">
    <ul class="menulist">
        <li><button class="icon-close" onclick="hideMenu()"></button></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Acticles</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Speaking</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>`;
    const menuitem = document.getElementById("mn");
    menuitem.innerHTML = itmmenu;
}
function hideMenu() {
    const menuitem = document.getElementById("mn");

    // Set the inner HTML to an empty string to remove the content
    if (menuitem) {
      menuitem.innerHTML = "";
    }
  }

function currentmode(){
    if(document.body.getAttribute("class") == "dark"){
        document.body.setAttribute("class" ,"light");
        localStorage.setItem("currentmode" ,"light");
    }else{document.body.setAttribute("class" ,"dark");
    localStorage.setItem("currentmode" ,"dark");}
    
}