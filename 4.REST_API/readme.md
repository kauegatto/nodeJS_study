## What is this module?  // O que é esse módulo?

```
pt-br

Esse módulo é uma api que tenta se aproximar o máximo possível do padrão rest e usa do modelo MVC.
Nesse módulo temos um usuário que é ligado a uma tabela de tipo usuário, não tem um grande conceito de banco por trás desse software porquê a ênfase é na API com o ORM do sequelize
```
```
en-us

This module refers to an API that tries to approximate the maximum to a restful-standard project. In this module's db we simply have a user table associated with a userType to validate whether a user can or not do determined action. There's no big deal or emphasys in the database since I decided to focus on the API using Sequelize ORM.
```
## Steps to run:

###  0: 
Put your db info on your .env (you can find it in src/config/database.js)
###  1:
First of all create the db schema in your local machine (will fix this later);

Run migrations: ```npx sequelize-cli db:migrate```

Run seeds: ```npx sequelize-cli db:seed:all```
###  2: 
Run the program with sucrase ```npm run dev```

If you need to delete the db / revert migrations or seeds you can use :

```npx sequelize-cli db:migrate:undo:all```

and 
```npx sequelize-cli db:seed:undo```

