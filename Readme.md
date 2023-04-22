**SETUP NODEJS E TYPESCRIPT**
git init
add .gitignore
npm init -y
yarn add -D typescript @types/node
npm install -g typescript
tsc --init
git add .
git commit -m "chore: add typescript config"

**CONFIG START**
yarn add -D ts-node
yarn add -D nodemon

File package.json ...

```"scripts": {
    "start:dev":"nodemon --watch \"./src/\" --exec \"ts-node src/index.ts\" -e ts"
  }
```

**RUN**
npm run start:dev OR yarn start:dev

**ADD PRETTIER AND ESLINT**
yarn add -D prettier
yarn add -D eslint
npx eslint --init
instalar extencion prettier e eslint
yarn add -D eslint-config-prettier => ajdua a remover eventuais conflitos entro o prettier e o eslint
