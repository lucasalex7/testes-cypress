# testes-cypress

Este projeto é encarregado de testar diferentes funcionalidades do Google Drive, tais como 'favoritar' arquivos, checar arquivos compartilhados, enviar um arquivo para lixeira.  
Para o mesmo, foi utilizado o seguinte usuário:  
gmail: jenkinsleorio@gmail.com  
senha: burger2003  

## Instalação do projeto:
Para instalar esse arquivo, faça o download desse repositório:
```
https://github.com/lucasalex7/testes-cypress.git
```
É necessário possuir o software de automatização Cypress instalado. A versão utilizada foi 13.3.2 e configurado para testes E2E.
Para isso, basta seguir as instruções em https://docs.cypress.io/guides/getting-started/installing-cypress

## Execução do projeto:
para executar o arquivo de testes, utilizaremos como exemplo a linha de código para rodar o primeiro teste. Utilize o comando:
```
npx cypress run --spec "cypress/e2e/teste01 - login google/cenario001spec.cy.js"
```
