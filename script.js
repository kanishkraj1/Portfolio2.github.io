function buttonClick(){
    const menu = document.getElementsByClassName('navBar');
    const bttnClick =  document.getElementById('hamButton');
    if(menu.className == "menuoff"){
        menu.className = "menuOn";    
    }else    
    {    
    
        menuList.className = "menuOff";    
    }    
}