function layGioHangTuLocalStorage(){
    var giohang =  new Array();
    var JsonGioHang=localStorage.getItem('gioHang');
    if(jsonGioHang != null){
        gioHang=JSON.parse(jsonGioHang);

    }
    return gioHang;
}