# Buscador de Jogos

App em React Native + Expo (SDK 57) do minicurso. Tem duas abas:

- **Sandbox**: laboratório para testar componentes (`src/screens/SandboxScreen.js`)
- **Buscador**: busca um jogo na API RAWG e mostra um card (`src/screens/BuscadorScreen.js`)

## Como rodar

Precisa do Node.js 20.19.4 ou mais novo.

```sh
git clone https://github.com/NicolasWeber0901/buscador-jogos.git
cd buscador-jogos
npm install
npx expo start
```

Abra o app **Expo Go** no celular e escaneie o QR code que aparece no terminal.

### Se o celular não conectar

- Rede da faculdade bloqueando? Tente o modo túnel:
  ```sh
  npm install -g @expo/ngrok
  npx expo start --tunnel
  ```
- Ou rode no navegador do computador: aperte `w` no terminal do Expo.
- No PowerShell, se aparecer "a execução de scripts foi desabilitada", use o **Prompt de Comando (cmd)**.
