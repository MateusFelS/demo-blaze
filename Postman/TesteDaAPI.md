# 📌 Endpoints Testados - DemoBlaze

Este documento apresenta os endpoints testados manualmente no **Postman**, cobrindo diversos cenários de testes.

---

## Autenticação
 | Método | Endpoint  | Descrição |
 |--------|----------|-----------|
 | POST | /login | Realiza login no sistema. |
 | POST | /signup | Cadastra um novo usuário. |
 
 ### Exemplo de login
 ```json
 {
  "username": "usuario_teste",
  "password": "senha123"
 }
 ```
 ### Resposta de login bem-sucedido
 ```json
 {
  "Auth_token": "token_gerado_aqui"
 }
 ```
## Produtos
 | Método | Endpoint      | Descrição |
 |--------|-------------|-----------|
 | GET  | /entries  | Retorna a lista de produtos disponíveis na loja. |
 | GET  | /prod?id=1 | Retorna detalhes do produto com ID 1. |

 ### Exemplo de resposta da lista de produtos
 ```json
 {
  "Items": [
    {
      "id": 1,
      "title": "Samsung galaxy s6",
      "price": 360,
      "category": "phone",
      "desc": "Detalhes do produto...",
      "image": "url_da_imagem"
    }
  ]
 }
 ```
## Carrinho
| Método | Endpoint       | Descrição |
 |--------|--------------|-----------|
 | POST | /addtocart | Adiciona um item ao carrinho. |
 | GET  | /viewcart  | Retorna os itens do carrinho do usuário. |
 | DELETE | /deletecart | Remove um item do carrinho. |

 ### Exemplo de adição ao carrinho
 ```json
 {
  "id": 1,
  "cookie": "id_sessao_do_usuario",
  "prod_id": 1,
  "flag": true
 }
 ```
 ### Exemplo de resposta ao visualizar o carrinho
 ```json
 {
  "Items": [
    {
      "prod_id": 1,
      "title": "Samsung galaxy s6",
      "price": 360
    }
  ]
 }
 ```
## Compras
 | Método | Endpoint      | Descrição |
 |--------|-------------|-----------|
 | POST | /placeorder | Finaliza a compra. |
 
 ### Exemplo de finalização de compra
 ```json
 {
  "name": "João",
  "credit_card": "1234-5678-9101-1121",
  "address": "Rua Teste, 123",
  "cart": [
    {
      "prod_id": 1,
      "price": 360
    }
  ]
 }
 ```
 ### Exemplo de resposta de compra finalizada
 ```json
 {
  "status": "success",
  "order_id": 98765
}
 ```
