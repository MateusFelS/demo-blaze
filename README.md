# 🧪 Projeto de Testes - DemoBlaze  

## 📌 Introdução  
Este projeto tem como objetivo testar o fluxo de compra da plataforma **DemoBlaze**, garantindo que suas funcionalidades essenciais estejam funcionando corretamente.  

Os testes incluem **testes manuais e automatizados**, utilizando **Playwright** para automação e **Postman** para testes de API.  

---

## 📝 Sobre os Testes

### 🎯 Escopo  
As seguintes funcionalidades foram testadas:  

- **Fluxo de Autenticação**: Cadastros válidos, inválidos e mensagens de erro.  
- **Fluxo de Compra**: Adicionar itens ao carrinho, remover itens, validar carrinho vazio e mensagens de erro.  
- **Fluxo de Navegação**: Erros de direcionamento e navegação.  
- **Validação UI/UX**: Erros de design e problemas de acessibilidade.  

### ✅ Critérios de Aceitação  
- O usuário deve conseguir concluir as compras sem erros.  
- O usuário deve conseguir navegar sem problemas pelo site.  
- As mensagens de erro devem ser claras e objetivas.  

### 🛠️ Ambientes e Ferramentas  
- **Ambiente de Teste**: Produção.  
- **Ferramentas Utilizadas**: Playwright, Postman e Github (para documentação e reporte de bugs).  

---

## 🚀 Automação de Testes  

A automação foi realizada utilizando **Playwright**, garantindo a execução dos principais fluxos automaticamente.  

### 📌 Tecnologias Utilizadas  
- **Linguagem**: TypeScript  
- **Framework de Teste**: Playwright  

---

## 🧑‍💻 Testes de API  

Os testes de API foram realizados utilizando **Postman** para validar os endpoints do DemoBlaze. Abaixo estão os principais testes realizados:  

### 📌 Endpoints Testados  

1. **Login**  
   - **Endpoint**: `POST /login`  
   - **Cenários**:  
     - Login com credenciais válidas.  
     - Login com credenciais inválidas.  
     - Login com campos vazios.  

2. **Cadastro de Usuário**  
   - **Endpoint**: `POST /signup`  
   - **Cenários**:  
     - Cadastro com dados válidos.  
     - Cadastro com usuário já existente.  

3. **Adicionar Produto ao Carrinho**  
   - **Endpoint**: `POST /addtocart`  
   - **Cenários**:  
     - Adicionar produto com ID válido.  
     - Adicionar produto com ID inválido.  

4. **Visualizar Carrinho**  
   - **Endpoint**: `POST /viewcart`  
   - **Cenários**:  
     - Visualizar carrinho com itens.  
     - Visualizar carrinho vazio.  

5. **Realizar Compra**  
   - **Endpoint**: `POST /deletecart`  
   - **Cenários**:  
     - Finalizar compra com sucesso.  
     - Finalizar compra com carrinho vazio.  

6. **Listar Produtos**  
   - **Endpoint**: `GET /entries`  
   - **Cenários**:  
     - Listar todos os produtos disponíveis.  

---

## 📌 Conclusão
Este projeto garante a qualidade do DemoBlaze, identificando erros e automatizando os testes dos principais fluxos. 🚀

Se você quiser contribuir, sinta-se à vontade para abrir um Pull Request ou reportar um Issue!
