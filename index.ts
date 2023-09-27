type Rating ={
    rate: number,
    count: number,
};




type Producto = {
    id :number,
    title : String,
    price : number,
    description : String,
    category: string,
    image:String,
    rating:Rating,
};


fetch('https://fakestoreapi.com/products')
            .then(function(res) {return res.json();})
            .then((products:Producto[]) => {
                let tableHtml: string ='<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
                products.forEach((p:Producto)=>{
                    tableHtml += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
                });
                tableHtml+='</tbody>';
                document.querySelector('#tableElement')!.innerHTML = tableHtml;
                const spinnerElement: HTMLElement= document.querySelector('#spinnerContainer')!;
                spinnerElement.style.display='none';
                
            });

