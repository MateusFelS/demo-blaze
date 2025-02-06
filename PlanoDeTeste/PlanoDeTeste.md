# Plano de Teste - DemoBlaze

## 1. Introdução
O objetivo deste plano de teste é verificar se as funcionalidades de fluxo de compra da plataforma DemoBlaze funcionam como o esperado.

## 2. Escopo
Funcionalidades testadas:
- **Fluxo de Autenticação** (cadastros válidos, inválidos e mensagens de erro)
- **Fluxo de Compra** (adicionar item, remover item, carrinho vazio e mensagens de erro)
- **Fluxo de Navegação** (erros de navegação/direcionamento)
- **Validação de UI/UX** (erros de design e falta de acessibilidade)

## 3. Tipos de Testes
- **Testes funcionais**
- **Testes não funcionais**
- **Testes automatizados e manuais**

## 4. Critérios de Aceitação
- O usuário deve conseguir concluir as compras sem erros
- O usuário deve conseguir navegar sem problemas pelo site
- As mensagens de erro devem ser claras e objetivas

## 5. Ambientes e Ferramentas
- **Ambiente:** Teste 
- **Ferramentas usadas:** Playwright e Postman

## 6. Casos de Teste

| ID  | Cenário | Passos | Resultado Esperado |
|-----|---------|--------|--------------------|
| 1   | Login com cadastro válido | 1. Entrar na página inicial  <br> 2. Clicar no link "Log in" <br> 3. Digitar "username" e "password" existente <br> 4. Clicar no botão "Log in" | Mensagem "Welcome (nome do usuário)" aparece no canto superior direito. |
| 2   | Login com cadastro inválido | 1. Entrar na página inicial <br> 2. Clicar no link "Log in" <br> 3. Digitar "username" e "password" inexistente <br> 4. Clicar no botão "Log in" | Mensagem de erro "User does not exist." aparece. |
| 3   | Login com campos vazios | 1. Entrar na página inicial <br> 2. Clicar no link "Log in" <br> 3. Deixar os campos "username" e "password" vazios <br> 4. Clicar no botão "Log in" | Mensagem de erro "Please fill out Username and Password." aparece. |
| 4   | Signup com cadastro válido | 1. Entrar na página inicial <br> 2. Clicar no link "Sign up" <br> 3. Digitar "username" e "password" <br> 4. Clicar no botão "Sign up" | Mensagem "Sign up successful." aparece. |
| 5   | Signup com cadastro inválido (usuário já existe) | 1. Entrar na página inicial <br> 2. Clicar no link "Sign up" <br> 3. Digitar "username" já existente e qualquer senha <br> 4. Clicar no botão "Sign up" | Mensagem de erro "This user already exist." aparece. |
| 6   | Adicionar item ao carrinho | 1. Entrar na página inicial <br> 2. Selecionar um produto <br> 3. Clicar no botão "Add to cart" | Mensagem "Product added" aparece e o item é adicionado ao carrinho. |
| 7   | Remover item do carrinho | 1. Adicionar um item ao carrinho <br> 2. Ir até a página do carrinho <br> 3. Clicar no botão de remover | O item é removido do carrinho e a lista de produtos atualiza. |
| 8   | Comprar item com sucesso | 1. Adicionar um item ao carrinho <br> 2. Ir até o carrinho <br> 3. Clicar no botão "Place Order" <br> 4. Preencher os dados de compra <br> 5. Confirmar a compra | Mensagem "Thank you for your purchase" aparece e o pedido é registrado. |
| 9   | Carrinho vazio | 1. Acessar o carrinho sem adicionar nenhum item | Mensagem "Your cart is empty" aparece. |
| 10  | Fluxo de navegação - Página de contato | 1. Clicar no link "Contact" <br> 2. Verificar se a página de contato é aberta corretamente | Página de contato carrega corretamente e é possível enviar uma mensagem. |
| 11  | Fluxo de navegação - Página "Sobre nós" | 1. Clicar no link "About us" <br> 2. Verificar se a página de informações da loja carrega | Página "About us" abre corretamente com as informações da empresa. |
| 12  | Fluxo de navegação - Página do carrinho | 1. Clicar no ícone do carrinho na barra superior <br> 2. Verificar se a página do carrinho abre corretamente | Página do carrinho abre corretamente. |
| 13  | Filtro de itens                   | 1. Escolher uma categoria no filtro de produtos <br> 2. Verificar se o filtro selecionou os produtos corretamente                              | Apenas os itens da categoria selecionada devem aparecer na listagem.           |
| 14  | UI/UX - Responsividade | 1. Acessar o site em diferentes dispositivos (mobile, tablet e desktop) <br> 2. Verificar se os elementos se ajustam corretamente | O layout do site se adapta bem a diferentes tamanhos de tela. |
| 15  | UI/UX - Acessibilidade | 1. Verificar se os botões possuem descrições alternativas <br> 2. Testar a navegação apenas com o teclado | O site é acessível e pode ser navegado sem o uso do mouse. |

## 7. Gerenciamento de Defeitos (Bugs)
- **Plataforma utilizada:** Github
- **Critérios de Prioridade:**
  - **Alta:** Erros críticos que impedem a compra ou login.
  - **Média:** Problemas de navegação ou UI que dificultam o uso do site.
  - **Baixa:** Pequenos bugs visuais ou de acessibilidade.

## 8. Riscos e Dependências
- **Possíveis problemas no teste:** ambiente instável, falhas na API de autenticação ou no banco de dados.
- **Dependências:** Servidor da DemoBlaze funcionando corretamente.
