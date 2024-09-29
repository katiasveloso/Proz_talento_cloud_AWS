let tituloProduto = document.createElement('h1');
tituloProduto.innerHTML = 'Produtos: '
document.body.appendChild(tituloProduto);

let produto1 = document.createElement('div');
produto1.innerHTML = `
    <img src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B48141/02_accordes_des_colonia_ambiente.jpg" width="150">
    <h2>Accordes </h2>
    <p>Desodorante Colônia 80ml </br></p>
    <p>Preço: R$ 164,90</p>
`;
document.body.appendChild(produto1);

let produto2 = document.createElement('div');
produto2.innerHTML = `
    <img src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B59555/001da8fe-17b1-419a-bf46-d7ab9f6bed4d-bot-59555-her-code-touch-edp-frontal-01.jpg" width="150">
    <h2>Her Code </h2>
    <p>Touch Eau De Parfum 50ml </br></p>
    <p>Preço: R$ 199,90</p>
`;
document.body.appendChild(produto2);
