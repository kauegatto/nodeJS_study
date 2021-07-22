
# O que este repositório é?

Este repositório é basicamente uma documentação dos meus estudos que envolvem o node.js, bibliotecas, frameworks, pacotes como um todo. 
## Teoria :
Esse repositório conta com uma teoria que escrevo para ajudar a me organizar em assuntos mais complicados ou que são core:
https://ossified-bard-00f.notion.site/JS-ae0c33f505e1462cb3352fd0f3ff4c4a
## Módulos / Partes

### Módulo 1 e 2
 
Os primeiros 2 módulos tem como ênfase introduzir conceitos novos e trabalhá-los superficialmente, no segundo trato mais o express e tento criar um template pra uso dele c/ webpack, csurf, helmet e outras coisas que envolvem segurança e configurações do express como um todo
### Módulo 3 -> **Projeto Agenda**
Esse módulo é um CRUD para uma agenda de contatos feitos com o EXPRESS. Utilizo EJS na visualização das páginas. Diferente do template final no módulo 2 (última pasta), divido melhor o trabalho lá, criando pastas como services, db, e models melhores (classes que representam entidades)
### Módulo 4 -> Api RestFul
Esse módulo usa os conceitos do módulo 3 (só que melhor organizado e arquiteturado) para criar uma api restful, vou usar MySQL como banco de dados e o sequelize de ORM (que tá sendo mt chato de configurar)

Roda esse projeto usando:
```python
npm run dev
```
Roda assim por causa do sacarase, que é tipo um mini-babel
## Como posso usar esse repositório ?
Esse repo é útil para ver diferentes implementações e soluções que aprendi ao longo da jornada estudando js
### Usar os projetos
De maneira geral a maior parte dos projetos podem ser rodados usando o npm, nodemon e webpack
```python
npm i
```
Adiciona os pacotes que vou usar 
```
webpack -w
```
roda o webpack (npm dev normalmente usa isso)
```
nodemon server.js
```
roda o server com o nodemon

## Contribua
Contribua com o aprendizado, faça pull requests ou forks!
