#  Notification Service (Node.js)

Microserviço reutilizável para envio de notificações, desenvolvido em **Node.js**, com foco em **reuso de software**, **SOA/Microserviços** e **resiliência** (Circuit Breaker + Retry).

O serviço pode ser integrado a diferentes sistemas (e-commerce, sistemas acadêmicos, ERPs, SaaS) para envio de notificações por canais como **e-mail** (extensível para SMS e Push).

---

##  Objetivo

- Oferecer uma **API REST genérica** para envio de notificações
- Servir como **artefato reutilizável de software**
- Demonstrar o uso de **padrões de resiliência** em microserviços

---

##  Tecnologias Utilizadas

- Node.js (>= 18)
- Express
- Axios
- Opossum (Circuit Breaker)
- Swagger (OpenAPI)
- Nodemon (desenvolvimento)

---

##  Estrutura do Projeto

```
notification-service/
├── src/
│   ├── controllers/
│   │   └── notification.controller.js
│   ├── services/
│   │   ├── email.service.js
│   │   ├── circuitBreaker.js
│   │   └── retry.js
│   ├── routes/
│   │   └── notification.routes.js
│   ├── app.js
│   └── server.js
├── swagger.yaml
├── package.json
└── README.md
```

---

##  Como Executar o Projeto

### 1. Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm**

Verifique com:

```bash
node -v
npm -v
```

---

### 2️. Clonar o repositório (ou copiar o projeto)

```bash
git clone <url-do-repositorio>
cd notification-service
```

---

### 3️. Instalar as dependências

```bash
npm install
```

Ou, caso esteja criando o projeto do zero:

```bash
npm init -y
npm install express axios opossum swagger-ui-express yamljs
npm install --save-dev nodemon
```

---

### 4️. Configurar os scripts no `package.json`

Verifique se o arquivo `package.json` contém:

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

---

### 5️. Executar a aplicação

#### 🔹 Modo desenvolvimento (recomendado)

```bash
npm run dev
```

#### 🔹 Modo produção

```bash
npm start
```

Após iniciar, o serviço estará disponível em:

```
http://localhost:3000
```

---

##  Uso da API

### Endpoint principal

```
POST /api/v1/notifications
```

### Exemplo de requisição

```json
{
  "type": "EMAIL",
  "to": "usuario@email.com",
  "subject": "Confirmação",
  "message": "Seu cadastro foi realizado com sucesso."
}
```

### Exemplo de resposta

```json
{
  "status": "SENT",
  "channel": "EMAIL",
  "timestamp": "2025-12-16T14:30:00Z"
}
```

---

##  Resiliência

O serviço implementa os seguintes padrões:

- **Circuit Breaker**: evita falhas em cascata quando o provedor externo está indisponível
- **Retry**: tenta reenviar a requisição em falhas temporárias

Esses padrões tornam o serviço mais robusto e adequado para reuso em ambientes distribuídos.

---

##  Documentação da API

A documentação está definida no arquivo:

```
swagger.yaml
```

Ela pode ser integrada ao Swagger UI para visualização interativa.

---

##  Reuso e Extensibilidade

Este microserviço foi projetado para:

- Ser reutilizado por múltiplos sistemas
- Ser independente de domínio
- Facilitar a adição de novos canais (SMS, Push)
- Ser implantado como microserviço ou serviço SOA

---