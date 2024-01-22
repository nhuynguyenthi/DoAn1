var animationElements = document.querySelectorAll(".show-on-scroll");

function toggleAnimationElementInWindow(element) {
    //1 item
    var rect = element.getClientRects()[0];
    var heightScreen = window.innerHeight;

    //check xem khoi nay co ben trong man hinh hay khong
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        //ben trong thi vao day
        element.classList.add("start");
    } else {
        //ngoai thi vao day
        element.classList.remove("start");
    }
}

function checkAnimation() {
    animationElements.forEach((el) => {
        toggleAnimationElementInWindow(el);
    });
}
window.onscroll = checkAnimation;

// xóa cart 
// var remove_cart = document.getElementsByClassName("cart-add");
// for (var i = 0; i < remove_cart.length; i++) {
//   var button = remove_cart[i]
//   button.addEventListener("click", function () {
//     var button_remove = event.target
//     button_remove.parentElement.parentElement.remove()
//   })
// }
// // thay đôủ hàng trong cart
// function updatecart() {
//     var cart_item = document.getElementsByClassName("cart-items")[0];
//     var cart_rows = cart_item.getElementsByClassName("cart-row");
//     var total = 0;
//     for (var i = 0; i < cart_rows.length; i++) {
//       var cart_row = cart_rows[i]
//       var price_item = cart_row.getElementsByClassName("normal")[0]
//       var quantity_item = cart_row.getElementsByClassName("normal")[0]
//       var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
//       var quantity = quantity_item.value // lấy giá trị trong thẻ input
//       total = total + (price * quantity)
//     }
//     document.getElementsByClassName("normal")[0].innerText = total + 'VNĐ'
//     // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
//   }
//   // thay đổi số lượng sản phẩm
// var quantity_input = document.getElementsByClassName("cart-quantity-input");
// for (var i = 0; i < quantity_input.length; i++) {
//   var input = quantity_input[i];
//   input.addEventListener("change", function (event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1;
//     }
//     updatecart()
//   })
// }
// // Và đây là kết quả khi chúng ta thay đổi số lượng sản phẩm trong giỏ hàng:
// // Thêm vào giỏ
// var add_cart = document.getElementsByClassName("normal");
// for (var i = 0; i < add_cart.length; i++) {
//   var add = add_cart[i];
//   add.addEventListener("click", function (event) {

//     var button = event.target;
//     var product = button.parentElement.parentElement;
//     var img = product.parentElement.getElementsByClassName("pro-container")[0].src
//     var title = product.getElementsByClassName("pro-container")[0].innerText
//     var price = product.getElementsByClassName("price")[0].innerText
//     addItemToCart(title, price, img)
//     // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
//     modal.style.display = "block";
    
//     updatecart()
//   })
// }

// function addItemToCart(title, price, img) {
//   var cartRow = document.createElement('div')
//   cartRow.classList.add('cart-row')
//   var cartItems = document.getElementsByClassName('cart-items')[0]
//   var cart_title = cartItems.getElementsByClassName('cart-item-title')
// //   Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông cho user.
//   for (var i = 0; i < cart_title.length; i++) {
//     if (cart_title[i].innerText == title) {
//       alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
//       return
//     }
//   }

//   var cartRowContents = `
//   <div class="cart-item cart-column">
//       <img class="cart-item-image" src="${img}" width="100" height="100">
//       <span class="cart-item-title">${title}</span>
//   </div>
//   <span class="cart-price cart-column">${price}</span>
//   <div class="cart-quantity cart-column">
//       <input class="cart-quantity-input" type="number" value="1">
//       <button class="btn btn-danger" type="button">Xóa</button>
//   </div>`
//   cartRow.innerHTML = cartRowContents
//   cartItems.append(cartRow)
//   cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
//     var button_remove = event.target
//     button_remove.parentElement.parentElement.remove()
//     updatecart()
//   })
//   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1;
//     }
//     updatecart()
//   })
// }
