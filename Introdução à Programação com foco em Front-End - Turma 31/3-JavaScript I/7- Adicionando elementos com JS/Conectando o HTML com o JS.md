## Adicionando elementos com JS

### Instruções do projeto

Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.

Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico.

<!-- Código HTML-->

### Código HTML

```html

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Projeto de Produto</title>
        <script defer src="script.js"></script>
    </head>
    <body>

    </body>
</html>

```

[Clique para acessar o arquivo HTML](index.html)

<!-- Código JavaScript -->

### Código JavaScript

```javascript

let produto1 = document.createElement('div');
produto1.innerHTML = `
    <img src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B48141/02_accordes_des_colonia_ambiente.jpg" width="200">
    <h2>Accordes </h2>
    <p>Desodorante Colônia 80ml </br></p>
    <p>Preço: R$ 164,90</p>
`;
document.body.appendChild(produto1);

let produto2 = document.createElement('div');
produto2.innerHTML = `
    <img src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B59555/001da8fe-17b1-419a-bf46-d7ab9f6bed4d-bot-59555-her-code-touch-edp-frontal-01.jpg" width="200">
    <h2>Her Code </h2>
    <p>Touch Eau De Parfum 50ml </br></p>
    <p>Preço: R$ 199,90</p>
`;
document.body.appendChild(produto2);
```

[Clique para acessar o arquivo JavaScript](script.js)

### Resultado

<!-- Imagem -->

![Resultado](image.png)
