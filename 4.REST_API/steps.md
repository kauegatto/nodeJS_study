## Steps:

###  0: 
Put your db info on your .env (you can find it in src/config/database.js)
###  1:
First of all create the db schema in your local machine (will fix this later)
Run migrations ```npx sequelize-cli db:migrate```
Run seeds ```npx sequelize-cli db:seed:all```
###  2: 
Run the program with sucrase ```npm run dev```

If you need to delete the db / revert migrations or seeds you can use :
```npx sequelize-cli db:migrate:undo:all```
and
```npx sequelize-cli db:seed:undo```

