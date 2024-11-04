        let gioHang = [];
        let tongCong = 0;

        function hienThiGioHang() {
            const gioHangElement = document.getElementById("gioHang");
            gioHangElement.innerHTML = "";
            gioHang.forEach(item => {
                gioHangElement.innerHTML += `<div>${item.tenSanPham} - ${item.soLuong} cái - ${item.gia * item.soLuong} VND <button onclick="giamSanPham('${item.tenSanPham}', ${item.gia})">Giảm</button></div>`;
            });
            document.getElementById("tongCong").innerText = tongCong;
        }

        function themSanPham(tenSanPham, gia) {
            let index = gioHang.findIndex(item => item.tenSanPham === tenSanPham);
            if (index !== -1) {
                gioHang[index].soLuong++;
            } else {
                gioHang.push({ tenSanPham, gia, soLuong: 1 });
            }
            tongCong += gia;
            hienThiGioHang();
        }

        function giamSanPham(tenSanPham, gia) {
            let index = gioHang.findIndex(item => item.tenSanPham === tenSanPham);
            if (gioHang[index].soLuong > 1) {
                gioHang[index].soLuong--;
                tongCong -= gia;
            } else {
                gioHang.splice(index, 1);
                tongCong -= gia;
            }
            hienThiGioHang();
        }

        function xoaGioHang() {
            gioHang = [];
            tongCong = 0;
            hienThiGioHang();
        }

        function thanhToan() {
            alert(`Bạn đã thanh toán thành công tổng cộng ${tongCong} VND`);
            xoaGioHang();
        }

        // function addToCart(productId) {
        //     let cartItems = localStorage.getItem('cartItems');
        //     if (!cartItems) {
        //         cartItems = [];
        //     } else {
        //         cartItems = JSON.parse(cartItems);
        //     }

        //     if (cartItems[productId]) {
        //         cartItems[productId]++;
        //     } else {
        //         cartItems[productId] = 1;
        //     }

        //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
        //     updateCartCount();
        // }

        // function updateCartCount() {
        //     let cartItems = localStorage.getItem('cartItems');
        //     let cartCount = 0;
        //     if (cartItems) {
        //         // cartItems = JSON.parse(cartItems);
        //         for (let productId in cartItems) {          
        //             cartCount += cartItems[productId];
        //         }
        //     }
        //     document.getElementById('cartCount').innerHTML = "<p>Số lượng trong giỏ hàng: " + cartCount + "</p>";
        // }

        // // Update cart count when page loads
        // window.onload = function() {
        //     updateCartCount();
        // };