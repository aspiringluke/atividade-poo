# Atividade-POO
_Atividade de Orientação a Objetos passada pelo professor Marcelo no dia 28/08_
## Autores 
- Lucas Paulino Gomes, RA: **24000580**;
- Enzo Daniel Abreu, RA: **24001463**
# Pauta
A atividade tem como objetivo revisar os 4 pilares da orientação a objetos, sendo estes Abstração, Herança, Encapsulamento e Polimorfismo, através de um player de playlists com algumas funcionalidades.
# Execução
Para executar o código, atenda aos seguintes requerimentos:
- Certifique-se de ter _Node.js_ em versões recentes.
- Abra o Visual Studio.
- Abra uma pasta no Visual Studio (Ctrl+O).
- Abra o tereminal (Ctrl+Shift+') e execute os seguintes comandos:
```bash
npm init -y
npm i typescript ts-node @types/node --save-dev
npx tsc --init
```
- Edite o arquivo "tsconfig.ts" para conter:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```
- Crie uma pasta "src/" e nela insira os arquivos .ts do projeto.
- Execute a simulação no terminal com o comando:
```bash
npx ts-node src/main.ts
```
