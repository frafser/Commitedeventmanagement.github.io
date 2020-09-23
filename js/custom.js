function sidebarONOFF(){
    let sidebarID= $('#sidebarChange');
    let overlayID= $('#sidebarOverlay')
    if(sidebarID.hasClass('sidebarClose')){
        sidebarID.removeClass('sidebarClose')
        sidebarID.addClass('sidebarOpen')
        overlayID.removeClass('sidebar-overlayCLOSE')
        overlayID.addClass('sidebar-overlayOPEN')
        document.querySelector('.navbar-nav').style.display = 'block';
    }else{
        sidebarID.removeClass('sidebarOpen')
        sidebarID.addClass('sidebarClose')
        overlayID.removeClass('sidebar-overlayOPEN')
        overlayID.addClass('sidebar-overlayCLOSE')
        document.querySelector('.navbar-nav').style.display = 'none';
    }  
}
$('#sidemenubar').click(function(){
    sidebarONOFF();
});
$('#sidebarOverlay').click(function(){
    sidebarONOFF();
});
// 
var dt = new Date();
var year = dt.getFullYear();
document.getElementById("years").innerHTML = year;
// footer year