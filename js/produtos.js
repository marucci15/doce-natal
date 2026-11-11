// 50 produtos da Doce Natal
const produtos = [
 {
  "id": 1,
  "nome": "Panetone Trufado",
  "categoria": "Panetones",
  "preco": 59.9,
  "imagem": "img/produtos/panetone-trufado.jpg",
  "descricao": "Panetone Trufado. Feito com fermentação lenta para a sua ceia.",
  "destaque": true
 },
 {
  "id": 2,
  "nome": "Panetone de Frutas",
  "categoria": "Panetones",
  "preco": 39.9,
  "imagem": "img/produtos/panetone-de-frutas.jpg",
  "descricao": "Panetone de Frutas. Feito com fermentação lenta para a sua ceia.",
  "destaque": true
 },
 {
  "id": 3,
  "nome": "Chocotone Clássico",
  "categoria": "Panetones",
  "preco": 44.9,
  "imagem": "img/produtos/chocotone-classico.jpg",
  "descricao": "Chocotone Clássico. Feito com fermentação lenta para a sua ceia.",
  "destaque": false
 },
 {
  "id": 4,
  "nome": "Panetone de Doce de Leite",
  "categoria": "Panetones",
  "preco": 49.9,
  "imagem": "img/produtos/panetone-de-doce-de-leite.jpg",
  "descricao": "Panetone de Doce de Leite. Feito com fermentação lenta para a sua ceia.",
  "destaque": false
 },
 {
  "id": 5,
  "nome": "Chocotone Gotas Duplo",
  "categoria": "Panetones",
  "preco": 52.9,
  "imagem": "img/produtos/chocotone-gotas-duplo.jpg",
  "descricao": "Chocotone Gotas Duplo. Feito com fermentação lenta para a sua ceia.",
  "destaque": false
 },
 {
  "id": 6,
  "nome": "Panetone de Pistache",
  "categoria": "Panetones",
  "preco": 69.9,
  "imagem": "img/produtos/panetone-de-pistache.jpg",
  "descricao": "Panetone de Pistache. Feito com fermentação lenta para a sua ceia.",
  "destaque": false
 },
 {
  "id": 7,
  "nome": "Panetone Mini",
  "categoria": "Panetones",
  "preco": 14.9,
  "imagem": "img/produtos/panetone-mini.jpg",
  "descricao": "Panetone Mini. Feito com fermentação lenta para a sua ceia.",
  "destaque": false
 },
 {
  "id": 8,
  "nome": "Chocotone de Laranja",
  "categoria": "Panetones",
  "preco": 47.9,
  "imagem": "img/produtos/chocotone-de-laranja.jpg",
  "descricao": "Chocotone de Laranja. Feito com fermentação lenta para a sua ceia.",
  "destaque": false
 },
 {
  "id": 9,
  "nome": "Panetone Integral",
  "categoria": "Panetones",
  "preco": 42.9,
  "imagem": "img/produtos/panetone-integral.jpg",
  "descricao": "Panetone Integral. Feito com fermentação lenta para a sua ceia.",
  "destaque": false
 },
 {
  "id": 10,
  "nome": "Panetone de Nozes",
  "categoria": "Panetones",
  "preco": 54.9,
  "imagem": "img/produtos/panetone-de-nozes.jpg",
  "descricao": "Panetone de Nozes. Feito com fermentação lenta para a sua ceia.",
  "destaque": false
 },
 {
  "id": 11,
  "nome": "Biscoito de Gengibre",
  "categoria": "Biscoitos",
  "preco": 12.5,
  "imagem": "img/produtos/biscoito-de-gengibre.jpg",
  "descricao": "Biscoito de Gengibre. Biscoito crocante assado na hora, com cheirinho de Natal.",
  "destaque": true
 },
 {
  "id": 12,
  "nome": "Biscoito Árvore de Natal",
  "categoria": "Biscoitos",
  "preco": 13.9,
  "imagem": "img/produtos/biscoito-arvore-de-natal.jpg",
  "descricao": "Biscoito Árvore de Natal. Biscoito crocante assado na hora, com cheirinho de Natal.",
  "destaque": true
 },
 {
  "id": 13,
  "nome": "Biscoito Papai Noel",
  "categoria": "Biscoitos",
  "preco": 14.5,
  "imagem": "img/produtos/biscoito-papai-noel.jpg",
  "descricao": "Biscoito Papai Noel. Biscoito crocante assado na hora, com cheirinho de Natal.",
  "destaque": false
 },
 {
  "id": 14,
  "nome": "Biscoito de Canela",
  "categoria": "Biscoitos",
  "preco": 11.9,
  "imagem": "img/produtos/biscoito-de-canela.jpg",
  "descricao": "Biscoito de Canela. Biscoito crocante assado na hora, com cheirinho de Natal.",
  "destaque": false
 },
 {
  "id": 15,
  "nome": "Cookies de Chocolate",
  "categoria": "Biscoitos",
  "preco": 16.9,
  "imagem": "img/produtos/cookies-de-chocolate.jpg",
  "descricao": "Cookies de Chocolate. Biscoito crocante assado na hora, com cheirinho de Natal.",
  "destaque": false
 },
 {
  "id": 16,
  "nome": "Biscoito Floco de Neve",
  "categoria": "Biscoitos",
  "preco": 15.5,
  "imagem": "img/produtos/biscoito-floco-de-neve.jpg",
  "descricao": "Biscoito Floco de Neve. Biscoito crocante assado na hora, com cheirinho de Natal.",
  "destaque": false
 },
 {
  "id": 17,
  "nome": "Amanteigado de Baunilha",
  "categoria": "Biscoitos",
  "preco": 12.9,
  "imagem": "img/produtos/amanteigado-de-baunilha.jpg",
  "descricao": "Amanteigado de Baunilha. Biscoito crocante assado na hora, com cheirinho de Natal.",
  "destaque": false
 },
 {
  "id": 18,
  "nome": "Biscoito Casinha",
  "categoria": "Biscoitos",
  "preco": 24.9,
  "imagem": "img/produtos/biscoito-casinha.jpg",
  "descricao": "Biscoito Casinha. Biscoito crocante assado na hora, com cheirinho de Natal.",
  "destaque": false
 },
 {
  "id": 19,
  "nome": "Biscoito de Mel",
  "categoria": "Biscoitos",
  "preco": 13.5,
  "imagem": "img/produtos/biscoito-de-mel.jpg",
  "descricao": "Biscoito de Mel. Biscoito crocante assado na hora, com cheirinho de Natal.",
  "destaque": false
 },
 {
  "id": 20,
  "nome": "Biscoito Estrela Dourada",
  "categoria": "Biscoitos",
  "preco": 14.9,
  "imagem": "img/produtos/biscoito-estrela-dourada.jpg",
  "descricao": "Biscoito Estrela Dourada. Biscoito crocante assado na hora, com cheirinho de Natal.",
  "destaque": false
 },
 {
  "id": 21,
  "nome": "Bolo Floresta de Natal",
  "categoria": "Bolos e Tortas",
  "preco": 89.9,
  "imagem": "img/produtos/bolo-floresta-de-natal.jpg",
  "descricao": "Bolo Floresta de Natal. Sobremesa fofinha para brilhar na mesa de Natal.",
  "destaque": true
 },
 {
  "id": 22,
  "nome": "Torta de Nozes",
  "categoria": "Bolos e Tortas",
  "preco": 64.9,
  "imagem": "img/produtos/torta-de-nozes.jpg",
  "descricao": "Torta de Nozes. Sobremesa fofinha para brilhar na mesa de Natal.",
  "destaque": true
 },
 {
  "id": 23,
  "nome": "Bolo de Cenoura Natalino",
  "categoria": "Bolos e Tortas",
  "preco": 54.9,
  "imagem": "img/produtos/bolo-de-cenoura-natalino.jpg",
  "descricao": "Bolo de Cenoura Natalino. Sobremesa fofinha para brilhar na mesa de Natal.",
  "destaque": false
 },
 {
  "id": 24,
  "nome": "Bolo Red Velvet",
  "categoria": "Bolos e Tortas",
  "preco": 79.9,
  "imagem": "img/produtos/bolo-red-velvet.jpg",
  "descricao": "Bolo Red Velvet. Sobremesa fofinha para brilhar na mesa de Natal.",
  "destaque": false
 },
 {
  "id": 25,
  "nome": "Torta de Maçã e Canela",
  "categoria": "Bolos e Tortas",
  "preco": 59.9,
  "imagem": "img/produtos/torta-de-maca-e-canela.jpg",
  "descricao": "Torta de Maçã e Canela. Sobremesa fofinha para brilhar na mesa de Natal.",
  "destaque": false
 },
 {
  "id": 26,
  "nome": "Bolo Rolê de Natal",
  "categoria": "Bolos e Tortas",
  "preco": 49.9,
  "imagem": "img/produtos/bolo-role-de-natal.jpg",
  "descricao": "Bolo Rolê de Natal. Sobremesa fofinha para brilhar na mesa de Natal.",
  "destaque": false
 },
 {
  "id": 27,
  "nome": "Torta de Limão Gelada",
  "categoria": "Bolos e Tortas",
  "preco": 57.9,
  "imagem": "img/produtos/torta-de-limao-gelada.jpg",
  "descricao": "Torta de Limão Gelada. Sobremesa fofinha para brilhar na mesa de Natal.",
  "destaque": false
 },
 {
  "id": 28,
  "nome": "Bolo Neve de Coco",
  "categoria": "Bolos e Tortas",
  "preco": 69.9,
  "imagem": "img/produtos/bolo-neve-de-coco.jpg",
  "descricao": "Bolo Neve de Coco. Sobremesa fofinha para brilhar na mesa de Natal.",
  "destaque": false
 },
 {
  "id": 29,
  "nome": "Cheesecake de Frutas Vermelhas",
  "categoria": "Bolos e Tortas",
  "preco": 84.9,
  "imagem": "img/produtos/cheesecake-de-frutas-vermelhas.jpg",
  "descricao": "Cheesecake de Frutas Vermelhas. Sobremesa fofinha para brilhar na mesa de Natal.",
  "destaque": false
 },
 {
  "id": 30,
  "nome": "Bolo de Gengibre",
  "categoria": "Bolos e Tortas",
  "preco": 52.9,
  "imagem": "img/produtos/bolo-de-gengibre.jpg",
  "descricao": "Bolo de Gengibre. Sobremesa fofinha para brilhar na mesa de Natal.",
  "destaque": false
 },
 {
  "id": 31,
  "nome": "Cesta Noite Feliz",
  "categoria": "Cestas e Kits",
  "preco": 149.9,
  "imagem": "img/produtos/cesta-noite-feliz.jpg",
  "descricao": "Cesta Noite Feliz. Presente caprichado, pronto para entregar com laço.",
  "destaque": true
 },
 {
  "id": 32,
  "nome": "Cesta do Papai Noel",
  "categoria": "Cestas e Kits",
  "preco": 199.9,
  "imagem": "img/produtos/cesta-do-papai-noel.jpg",
  "descricao": "Cesta do Papai Noel. Presente caprichado, pronto para entregar com laço.",
  "destaque": true
 },
 {
  "id": 33,
  "nome": "Kit Café da Manhã Natalino",
  "categoria": "Cestas e Kits",
  "preco": 119.9,
  "imagem": "img/produtos/kit-cafe-da-manha-natalino.jpg",
  "descricao": "Kit Café da Manhã Natalino. Presente caprichado, pronto para entregar com laço.",
  "destaque": false
 },
 {
  "id": 34,
  "nome": "Kit Chocolate Quente",
  "categoria": "Cestas e Kits",
  "preco": 74.9,
  "imagem": "img/produtos/kit-chocolate-quente.jpg",
  "descricao": "Kit Chocolate Quente. Presente caprichado, pronto para entregar com laço.",
  "destaque": false
 },
 {
  "id": 35,
  "nome": "Cesta Mini Natal",
  "categoria": "Cestas e Kits",
  "preco": 79.9,
  "imagem": "img/produtos/cesta-mini-natal.jpg",
  "descricao": "Cesta Mini Natal. Presente caprichado, pronto para entregar com laço.",
  "destaque": false
 },
 {
  "id": 36,
  "nome": "Kit Biscoitos Decorados",
  "categoria": "Cestas e Kits",
  "preco": 69.9,
  "imagem": "img/produtos/kit-biscoitos-decorados.jpg",
  "descricao": "Kit Biscoitos Decorados. Presente caprichado, pronto para entregar com laço.",
  "destaque": false
 },
 {
  "id": 37,
  "nome": "Cesta Premium Ceia",
  "categoria": "Cestas e Kits",
  "preco": 289.9,
  "imagem": "img/produtos/cesta-premium-ceia.jpg",
  "descricao": "Cesta Premium Ceia. Presente caprichado, pronto para entregar com laço.",
  "destaque": false
 },
 {
  "id": 38,
  "nome": "Kit Amigo Secreto",
  "categoria": "Cestas e Kits",
  "preco": 39.9,
  "imagem": "img/produtos/kit-amigo-secreto.jpg",
  "descricao": "Kit Amigo Secreto. Presente caprichado, pronto para entregar com laço.",
  "destaque": false
 },
 {
  "id": 39,
  "nome": "Cesta Vermelha e Verde",
  "categoria": "Cestas e Kits",
  "preco": 129.9,
  "imagem": "img/produtos/cesta-vermelha-e-verde.jpg",
  "descricao": "Cesta Vermelha e Verde. Presente caprichado, pronto para entregar com laço.",
  "destaque": false
 },
 {
  "id": 40,
  "nome": "Kit Panetone e Espumante",
  "categoria": "Cestas e Kits",
  "preco": 159.9,
  "imagem": "img/produtos/kit-panetone-e-espumante.jpg",
  "descricao": "Kit Panetone e Espumante. Presente caprichado, pronto para entregar com laço.",
  "destaque": false
 },
 {
  "id": 41,
  "nome": "Chocolate Quente Cremoso",
  "categoria": "Bebidas e Chocolates",
  "preco": 24.9,
  "imagem": "img/produtos/chocolate-quente-cremoso.jpg",
  "descricao": "Chocolate Quente Cremoso. Doce momento para aquecer a noite de inverno.",
  "destaque": true
 },
 {
  "id": 42,
  "nome": "Trufas de Natal (caixa)",
  "categoria": "Bebidas e Chocolates",
  "preco": 34.9,
  "imagem": "img/produtos/trufas-de-natal-caixa.jpg",
  "descricao": "Trufas de Natal (caixa). Doce momento para aquecer a noite de inverno.",
  "destaque": true
 },
 {
  "id": 43,
  "nome": "Barra Chocolate ao Leite",
  "categoria": "Bebidas e Chocolates",
  "preco": 18.9,
  "imagem": "img/produtos/barra-chocolate-ao-leite.jpg",
  "descricao": "Barra Chocolate ao Leite. Doce momento para aquecer a noite de inverno.",
  "destaque": false
 },
 {
  "id": 44,
  "nome": "Barra Chocolate Amargo",
  "categoria": "Bebidas e Chocolates",
  "preco": 19.9,
  "imagem": "img/produtos/barra-chocolate-amargo.jpg",
  "descricao": "Barra Chocolate Amargo. Doce momento para aquecer a noite de inverno.",
  "destaque": false
 },
 {
  "id": 45,
  "nome": "Suco de Uva Natalino",
  "categoria": "Bebidas e Chocolates",
  "preco": 21.9,
  "imagem": "img/produtos/suco-de-uva-natalino.jpg",
  "descricao": "Suco de Uva Natalino. Doce momento para aquecer a noite de inverno.",
  "destaque": false
 },
 {
  "id": 46,
  "nome": "Licor de Chocolate",
  "categoria": "Bebidas e Chocolates",
  "preco": 49.9,
  "imagem": "img/produtos/licor-de-chocolate.jpg",
  "descricao": "Licor de Chocolate. Doce momento para aquecer a noite de inverno.",
  "destaque": false
 },
 {
  "id": 47,
  "nome": "Bombons Recheados",
  "categoria": "Bebidas e Chocolates",
  "preco": 29.9,
  "imagem": "img/produtos/bombons-recheados.jpg",
  "descricao": "Bombons Recheados. Doce momento para aquecer a noite de inverno.",
  "destaque": false
 },
 {
  "id": 48,
  "nome": "Café Especial de Natal",
  "categoria": "Bebidas e Chocolates",
  "preco": 32.9,
  "imagem": "img/produtos/cafe-especial-de-natal.jpg",
  "descricao": "Café Especial de Natal. Doce momento para aquecer a noite de inverno.",
  "destaque": false
 },
 {
  "id": 49,
  "nome": "Chá de Canela e Maçã",
  "categoria": "Bebidas e Chocolates",
  "preco": 17.9,
  "imagem": "img/produtos/cha-de-canela-e-maca.jpg",
  "descricao": "Chá de Canela e Maçã. Doce momento para aquecer a noite de inverno.",
  "destaque": false
 },
 {
  "id": 50,
  "nome": "Bengalas Doces",
  "categoria": "Bebidas e Chocolates",
  "preco": 9.9,
  "imagem": "img/produtos/bengalas-doces.jpg",
  "descricao": "Bengalas Doces. Doce momento para aquecer a noite de inverno.",
  "destaque": false
 }
];