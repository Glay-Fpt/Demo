
        function kiemtra(){ 
            var sten=document.getElementById("ten");
            var spass= document.getElementById("pass");
            sten.style.backgroundColor="white";
            spass.style.backgroundColor="white";
            if (sten.value==""){
                alert("Bạn chưa nhập tên");
                sten.style.backgroundColor="yellow";
                sten.focus();
                return false;
            }
            if (spass.value==""){
                alert("Bạn chưa nhập mật khẩu");
                spass.style.backgroundColor="yellow";
                spass.focus();
                return false;
            }else if(spass.value.length <=8){
                alert("Mật khẩu phải dài hơn 8 ký tự");
                spass.style.backgroundColor="yellow";
                spass.focus();  //đưa trỏ vào spass
                return false;
            }
            
            sten.style.backgroundColor="white";
            spass.style.backgroundColor="white";
            return true;
        }
