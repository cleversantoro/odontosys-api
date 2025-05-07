
# 🦷 OdontoSys API

API para gerenciamento de um sistema odontológico, incluindo funcionalidades para pacientes, profissionais, consultas, documentos, dados clínicos e muito mais.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express** – Framework minimalista para construção de APIs
- **Sequelize** – ORM para modelagem e manipulação do banco de dados
- **MySQL** – Banco de dados relacional
- **Swagger** – Documentação interativa da API
- **Helmet** – Segurança para cabeçalhos HTTP
- **JWT** – Autenticação baseada em tokens
- **Winston** – Sistema de logs estruturado
- **Multer** – Upload de arquivos

---

## 📚 Funcionalidades

- ✅ **Pacientes** – Cadastro, listagem, atualização e exclusão
- ✅ **Profissionais** – Gerenciamento de profissionais da clínica
- ✅ **Consultas** – Agendamento, listagem e gerenciamento
- ✅ **Documentos** – Upload e gerenciamento de arquivos clínicos
- ✅ **Dados Clínicos** – Histórico médico e odontológico
- ✅ **Autenticação** – Login com proteção de rotas via JWT
- ✅ **Relatórios** – Geração de relatórios em PDF
- ✅ **Notificações** – Atualizações em tempo real via `socket.io`

---

## 📂 Estrutura do Projeto

```bash
src/
├── controllers/       # Lógica dos endpoints
├── models/            # Modelos Sequelize (ORM)
├── routes/            # Definição das rotas
├── middlewares/       # Middleware de autenticação e validação
├── config/            # Configurações (DB, .env)
├── views/             # Views SQL customizadas
└── server.js          # Ponto de entrada da aplicação
```

---

## 🛠️ Pré-requisitos

- **Node.js** `v16+`
- **MySQL** `v8+`
- **NPM** ou **Yarn`

---

## ⚙️ Configuração do Ambiente

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/odontosys-api.git
cd odontosys-api
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env`:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=odontosys
JWT_SECRET=sua_chave_secreta
```

Execute as migrações do banco:

```bash
npx sequelize-cli db:migrate
```

---

## ▶️ Como Executar

Inicie o servidor:

```bash
npm start
```

Acesse a documentação Swagger:

[http://localhost:5000/api/docs](http://localhost:5000/api/docs)

---

## 🛡️ Segurança

- **Helmet** – Protege contra vulnerabilidades de cabeçalhos HTTP
- **Rate Limiting** – Restringe número de requisições por IP
- **CORS** – Liberação controlada para origens específicas

---

## 📝 Documentação da API

📖 Acesse via Swagger:

👉 [http://localhost:5000/api/docs](http://localhost:5000/api/docs)

---

## 🧪 Testes

Executar testes unitários:

```bash
npm test
```

Verificar cobertura de testes:

```bash
npm run test:coverage
```

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

---

## 👨‍💻 Contribuidores

- **Seu Nome** – [GitHub](https://github.com/seu-usuario)
- Outros colaboradores serão bem-vindos!

---

## 📞 Contato

Tem alguma dúvida ou sugestão?

- ✉️ Email: `seuemail@dominio.com`  
- 💼 LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)
