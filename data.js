const card = document.querySelector('.card')


const store1 = 
    {
        id:"1",
        store: "Loja1 - Santos Praia Mar",
        lat: "-23.976896",
        long: "-46.311185",
        product:[
            "/public/image/produto1.png",
            "/public/image/produto2.png",
            "/public/image/produto3.png",
            "/public/image/produto4.png",
            "/public/image/produto5.png",
            "/public/image/produto6.png",
        ],
        nameProduct: [
            "Gorro",
            "Moletom",
            "Camiseta Calvin Klein",
            "Camiseta branca lisa",
            "Bermuda jeans",
            "Cardigan"
        ],

        description:[
           "Gorro de lã, feito de forma manual.", 
           "Casaco de moletom na cor rosa.", 
           "Camiseta Calvin Klein feminina diversas cores.", 
           "Camiseta branca lisa, diversos tamanhos", 
           "Bermuda Jeans feminina.", 
           "Cardigan feminino diversos tamanhos.", 
        ],

        stock:[
            "25",
            "75",
            "47",
            "53",
            "71",
            "12"
        ],

        priceProduct:[
            25.99,
            60.00,
            142.00,
            99.00,
            44.60,
            74,90
        ],

        priceFreight: 9.99,  
}

const store2 ={
        id:"2",
        store: "Loja2 - Santos Gonzaga",
        lat: "-23.967227",
        long: "-46.334464",
        product:[
            "/public/image/produto1.png",
            "/public/image/produto2.png",
            "/public/image/produto3.png",
            "/public/image/produto4.png",
            "/public/image/produto5.png",
            "/public/image/produto6.png",
        ],
        nameProduct: [
            "Gorro",
            "Moletom",
            "Camiseta Calvin Klein",
            "Camiseta branca lisa",
            "Bermuda jeans",
            "Cardigan"
        ],

        description:[
           "Gorro de lã, feito de forma manual.", 
           "Casaco de moletom na cor rosa.", 
           "Camiseta Calvin Klein feminina diversas cores.", 
           "Camiseta branca lisa, diversos tamanhos", 
           "Bermuda Jeans feminina.", 
           "Cardigan feminino diversos tamanhos.", 
        ],

        stock:[
            "14",
            "Sem estoque",
            "2",
            "5",
            "Sem estoque",
            "1"
        ],

        priceProduct:[
            25.99,
            60.00,
            142.00,
            99.00,
            44.60,
            74,90
        ],

        priceFreight: 9.99,  
}

const store3 = {
        id:"3",
        store: "Loja3 - Praia Grande",
        lat: "-23.997473",
        long: "-46.407459",
        product:[
            "/public/image/produto1.png",
            "/public/image/produto2.png",
            "/public/image/produto3.png",
            "/public/image/produto4.png",
            "/public/image/produto5.png",
            "/public/image/produto6.png",
        ],
        nameProduct: [
            "Gorro",
            "Moletom",
            "Camiseta Calvin Klein",
            "Camiseta branca lisa",
            "Bermuda jeans",
            "Cardigan"
        ],

        description:[
           "Gorro de lã, feito de forma manual.", 
           "Casaco de moletom na cor rosa.", 
           "Camiseta Calvin Klein feminina diversas cores.", 
           "Camiseta branca lisa, diversos tamanhos", 
           "Bermuda Jeans feminina.", 
           "Cardigan feminino diversos tamanhos.", 
        ],

        stock:[
            "2",
            "1",
            "4",
            "15",
            "23",
            "Sem estoque"
        ],

        priceProduct:[
            25.99,
            60.00,
            142.00,
            99.00,
            44.60,
            74,90
        ],
        
        priceFreight: 9.99,  
    }
    

store1.forEach(value => {
    card.innerHTML += `                   
    <img src="${value.product}" alt="">
    <div class="content">
        <h1>${value.nameProduct}</h1>
        <h2>R$ ${value.priceProduct}</h2>
    </div><!--content-->

    <div class="estoque">
        <p class="qnt_estoque">
            <i class="produtos__icone fas fa-tags"></i>
            ${value.stock}
        </p>

        <button class="button_add_car">
            <i class="produtos__icone fas fa-shopping-cart"></i>
            Adicionar
        </button>
    </div><!--estoque-->`
});
