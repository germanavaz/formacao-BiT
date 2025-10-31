//como armazenamos uma info no JS:
// VARIAVEL
//uma varivael comum armazena apenas 1 valor
let vendedor = "Miriã";

// [] colchetes array
// Array - listas
let vendedores = ["Germana", "Fernanda", "Sofia"];
//                    0           1           2

console.log(vendedores);
console.log(vendedores[0]);
console.log(vendedores[3]); //indefinido

// variavel = caixa onde vc vai armazenar 1 inf
// array = armario

//manipulando os dados:
let carrinhoDeCompras = [
  "kindle",
  "pisca-pisca",
  "PS5",
  "Fiat",
  "airfryer",
  "monitor ultrawide",
  "placa de vídeo",
  "GTA-6",
];

//Métodos de Array

carrinhoDeCompras.push("Tênis Adidas"); // Push: Adiciona no final

carrinhoDeCompras.unshift("Lava e Seca"); // Unshift: adiciona como primeiro item

// Splice: adicionar, remover e substituir
// array.splice(posição, quantidadeParaRemover, item);
carrinhoDeCompras.splice(1, 0, "Whey Protein"); //Como botou 0 na segunda posição, ão removeu nada, apenas adicionou na posição 1
carrinhoDeCompras.splice(3, 2); //Removeu 2 itens a partir da posição 3
carrinhoDeCompras.splice(2, 1, "Livro"); //Substituiu a posição 2 por "Livro"
