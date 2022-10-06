
var addItemId = 0
function addToCart(item){
    console.log(item)
    addItemId += 1
    var selectedItem = document.createElement('div')
     selectedItem.classList.add('cart_Image')
     selectedItem.setAttribute('id',addItemId)

     var img = document.createElement('img')
     img.setAttribute('src', item.children[0].currentSrc)

     var title = document.createElement('div')
     title.classList.add('pro_title')
     title.innerText = item.children[2].innerText;
    
     var cartItems = document.getElementById('title')
     selectedItem.append(img)
     selectedItem.append(title)
     cartItems.append(selectedItem)
}