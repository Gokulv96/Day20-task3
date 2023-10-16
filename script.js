const items =Array.from(document.querySelectorAll('.btn'));
console.log(items);
const products =document.getElementById('products');
items.map((item)=>{
    item.addEventListener('click',(e)=>{
    e.preventDefault();
      const  category = item.getAttribute('value');
      const storeApi = fetch(`https://fakestoreapi.com/products/category/${category}`)
                        .then((response)=>response.json())
                        .then((data)=>data.map((data1)=>{
                        console.log(data1)
                        const product =document.createElement('div');
                        product.setAttribute('class','row row-cols-1 row-cols-md-3');
                        product.innerHTML = `<div class="col mb-4">
                        <div class="card">
                          <img src="${data1.image}" class="card-img-top" alt="${category}">
                          <div class="card-body">
                            <h5 class="card-title">${data1.title}</h5>
                            <p class="card-text">Price: ${data1.price}</p>
                            <p class="card-text">Rating : ${data1.rating.rate} </p>
                          </div>
                        </div>
                      </div>`
                        products.appendChild(product);
                        }));
                        products.innerHTML = " ";
                        
    })
})
