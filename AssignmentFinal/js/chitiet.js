function hientt(){
    document.getElementById('tensp').innerHTML = localStorage.getItem('ten')
    document.getElementById('gia').innerHTML = localStorage.getItem('gia')
    document.getElementById('hinhchinh').setAttribute('src',localStorage.getItem('hinh'))
}

