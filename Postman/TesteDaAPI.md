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
### Evidência
![image](https://github.com/user-attachments/assets/c4334b52-3c0f-4680-9969-ccd945a20ce9)

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
### Evidência
![image](https://github.com/user-attachments/assets/15a4c49b-b49d-4efd-b586-57582c3021b5)

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
### Evicência
![image](https://github.com/user-attachments/assets/2874ccdd-5b0a-4dde-85eb-e1665094a27e)

## Compras
 | Método | Endpoint      | Descrição |
 |--------|-------------|-----------|
 | POST | /placeorder | Finaliza a compra. |
 
 ### Exemplo de finalização de compra
 ```json
  {
    "cookie": "user=testuser", // Cookie de autenticação
    "flag": "true",
    "name": "João Silva", // Nome do cliente
    "country": "Brasil", // País
    "city": "São Paulo", // Cidade
    "creditCard": "1234567890123456", // Número do cartão de crédito
    "month": "12", // Mês de expiração do cartão
    "year": "2025", // Ano de expiração do cartão
    "orderId": "123456" // ID do pedido (gerado automaticamente ou manualmente)
  }
 ```
 ### Exemplo de resposta de compra finalizada
 ```json
 {
  "status": "success",
  "order_id": 98765
}
 ```
