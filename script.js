function buttonClick(){
    var menu = document.getElementById('navID');
    if(menu.className === 'navBar menuoff'){
        menu.className = 'navBar menuon';
    } else{
        menu.className = 'navBar menuoff';
    }
}