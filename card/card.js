let cart = [];
document.querySelectorAll('.add-to-cart').forEach(btn =>{
    btn.addEventListener('click', (e)=>{

        const price = parseFloat(e.target.getAttribute('price')); // rupe ka symbol render k time p
        let desc = e.target.getAttribute('desc');
        desc = document.getElementById(desc).innerText; 
        let image = e.target.getAttribute('image');
        let pdt = e.target.getAttribute('product');
        console.log(image);
        console.log(desc);
        console.log( pdt);
        console.log(price);
        
        
        if(cart.find(item => item.pdt === pdt)){
            btn.innerText =  "Add to cart";
            cart = cart.filter((item) => (item.pdt !== pdt));
        }
        else{
            cart.push({price: price, desc: desc, image: "img"+image, quantity: 1, pdt: pdt});
            btn.innerText = "Undo item";
        }
        console.log(cart);
    })
})