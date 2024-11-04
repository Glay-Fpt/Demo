function laytt(x){
    localStorage.setItem('ten',x.parentElement.children[1].children[0].innerHTML)
    localStorage.setItem('gia',x.parentElement.children[3].innerHTML)
    localStorage.setItem('hinh',x.children[0].getAttribute('src'))
}
