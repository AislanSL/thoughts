# 🧠 Thoughts App

Aplicação Node.js com padrão MVC e template engine Handlebars para o front, se conectada a um banco de dados MySQL via Sequelize. O banco roda em um container Docker.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- Handlebars
- MySQL (via Docker)
- Docker + Docker Compose

---

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## ⚙️ Configuração do ambiente

### 1. Clone o projeto

```bash
git clone https://github.com/AislanSL/thoughts.git
cd thoughts
```

### 2. 📂 Instale as dependências
```bash
npm install
```

### 3.Copie o arquivo .env.example e crie seu .env
```bash
cp .env.example .env
```

### 3. 🐳 Suba container do banco
```bash
docker compose up -d
```

### 3. 🚀 Rode o projeto
```bash
npm start
```

