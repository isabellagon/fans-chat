# 🐍 FURIA Fans Chat

Bem-vindo ao **FURIA Fans Chat**, um projeto interativo para engajar torcedores da FURIA, um dos maiores times de CS do Brasil! 🎮🔥

Este projeto une um **chatbot para Telegram** com uma **landing page moderna em React**, proporcionando uma experiência imersiva para a comunidade da torcida.

---

## 🚀 Funcionalidades

### 🤖 Chatbot (Telegram)
- Comandos interativos:
  - `/grito`: Grito de guerra da torcida
  - `/provoca`: Provocações contra times rivais
  - `/jogo`: Informações sobre o próximo jogo
  - `/mvp`: Votação do melhor jogador
- Simulação de torcida e resposta a mensagens numéricas para votar no MVP

### 🖥️ Landing Page (React + Tailwind)
- Design responsivo com cores da FURIA
- Informações ao vivo da próxima partida
- Explicação dos comandos disponíveis no chat
- Link direto para entrar no chat oficial da torcida

---

## 🧱 Estrutura de Pastas

```
furia-fans-chat/
├── index.js            # Bot Telegram (Node.js)
└── landing/
    └── App.jsx         # Interface React com Tailwind
```

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** + `node-telegram-bot-api` – para o bot Telegram
- **React** com **Tailwind CSS** – para a landing page
- HTML5, CSS3 e JavaScript moderno

---

## 💡 Como Usar

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/furia-fans-chat.git
cd furia-fans-chat
```

### 2. Rodar o Bot Telegram
```bash
cd furia-fans-chat
npm install
node index.js
```
> Não esqueça de substituir `SEU_TOKEN_DO_TELEGRAM` com o token do seu bot criado via [@BotFather](https://t.me/BotFather).

### 3. Rodar a Landing Page
```bash
cd landing
npm install
npm start
```
> Para habilitar o Tailwind, siga [este guia oficial](https://tailwindcss.com/docs/guides/create-react-app)

---

## 📣 Autor

Projeto criado por **Isabella Rodrigues Gon** — Fã da FURIA e entusiasta de tecnologia e esportes eletrônicos.
