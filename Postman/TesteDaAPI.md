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
### Exemplo no Postman
![image](https://github.com/user-attachments/assets/c4334b52-3c0f-4680-9969-ccd945a20ce9)

## Produtos
 | Método | Endpoint      | Descrição |
 |--------|-------------|-----------|
 | GET  | /entries  | Retorna a lista de produtos disponíveis na loja. |

 ### Exemplo de resposta da lista de produtos
 ```json
{
    "Items": [
        {
            "cat": "phone",
            "desc": "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ",
            "id": 1,
            "img": "imgs/galaxy_s6.jpg",
            "price": 360.0,
            "title": "Samsung galaxy s6"
        },
    ]
}
 ```
### Exemplo no Postman
![image](https://github.com/user-attachments/assets/15a4c49b-b49d-4efd-b586-57582c3021b5)

## Carrinho
| Método | Endpoint       | Descrição |
 |--------|--------------|-----------|
 | POST | /addtocart | Adiciona um item ao carrinho. |
 | GET  | /viewcart  | Retorna os itens do carrinho do usuário. |
 | DELETE | /deletecart | Remove um item do carrinho. |

 ### Exemplo de visualizar o carrinho
 ```json
{
  "cookie": "id_sessão_usuário", 
  "flag": "true"
}
 ```
 ### Exemplo de resposta ao visualizar o carrinho
 ```json
{
    "Items": [
        {
            "cookie": "newuser123123312",
            "id": 1,
            "prod_id": 1
        }
    ]
}
 ```
### Exemplo no Postman
![image](https://github.com/user-attachments/assets/2874ccdd-5b0a-4dde-85eb-e1665094a27e)
