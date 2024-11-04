function laytt(x){
    localStorage.setItem('ten',x.parentElement.children[1].children[0].innerHTML)
    localStorage.setItem('gia',x.parentElement.children[3].innerHTML)
    localStorage.setItem('hinh',x.children[0].getAttribute('src'))
}

// function addToCart(x){
//     var aten = x.parentElement.children[0].innerHTML
//     var agia = x.parentElement.children[5].value
//     var aid = x.parentElement.children[4].value
//     var aten = x.parentElement.children[1].children[0].getAttribute("src")
//     var pt = {'ten':aten, 'gia' : agia, 'hinh': ahinh , 'id': aid , 'sl':1}

//     var arr=JSON.parse(localStorage.getItem('cart'))
//     if(arr !=null){
//         var manggh = arr
//     } else {
//         var manggh = []
//     }
//     manggh.push(pt)
// }

// function laytt(x) {
//     localStorage.setItem('ten',x.parentElement.children[0].innerHTML)
   
//     localStorage.setItem('gia', x.parentElement.children[3].innerHTML)

//     localStorage.setItem('hinh',x.children[0].getAttribute('src'))     
// }

function addToCart(x){
    var aten= x.parentElement.children[0].innerHTML
    var agia= x.parentElement.children[5].value
    var aid= x.parentElement.children[4].value
    var ahinh= x.parentElement.children[1].children[0].getAttribute("src")
    var pt={'ten': aten, 'gia': agia, 'hinh': ahinh, 'id': aid, 's1': 1}


    var arr=JSON.parse(localStorage.getItem('cart'))
    if(arr != null){
            var manggh=arr
    }else {
            var manggh={}
    }
    var fl=0
    for (let i=0; i<manggh.length; i++){
            if(manggh[i]['id'] == aid) {
                    manggh[i]['sl']++
                    fl=1
            }
    }
    


    if(fl==0){
      manggh.push(pt)
    }
    localStorage.setItem('cart', JSON.stringify(manggh))
}