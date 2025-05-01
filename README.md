# 🏩 Dashboard de Produtos

Este é um projeto de API REST desenvolvida com Spring Boot que realiza operações CRUD (Create, Read, Update, Delete) em produtos, persistindo os dados em um banco MongoDB. A API está configurada para permitir requisições CORS de um frontend hospedado em `http://localhost:5173`.

## 🚀 Tecnologias Utilizadas

- Java 17+
- Spring Boot
- Spring Data MongoDB
- MongoDB
- Lombok
- Maven

## 📁 Estrutura do Projeto

- `entities/Product.java`: Modelo de dados para produtos.
- `repository/ProductRepository.java`: Interface para comunicação com o MongoDB.
- `services/ProductService.java`: Regras de negócio e manipulação dos dados.
- `resources/ProductResource.java`: Endpoints da API REST.
- `exceptions/ResourceNotFoundException.java`: Exceção personalizada para recursos não encontrados.
- `config/CorsConfig.java`: Configuração de CORS para permitir requisições do frontend.
- `DashboardApplication.java`: Classe principal da aplicação Spring Boot.

## 🧪 Endpoints da API

| Método | Rota               | Descrição                  |
|--------|--------------------|----------------------------|
| GET    | `/products`        | Lista todos os produtos    |
| GET    | `/products/{id}`   | Retorna um produto por ID  |
| POST   | `/products`        | Cria um novo produto       |
| PUT    | `/products/{id}`   | Atualiza um produto        |
| DELETE | `/products/{id}`   | Remove um produto          |

## 🔧 Executando o Projeto

1. Certifique-se de ter o MongoDB em execução localmente (`localhost:27017`).
2. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
3. Execute o projeto com o Maven:
   ```bash
   ./mvnw spring-boot:run
   ```
4. A API estará disponível em: `http://localhost:8080/products`

## 📅 Exemplo de Produto

```json
{
  "name": "Teclado Mecânico",
  "stock": 20,
  "price": 199.99
}
```

## 📦 Requisições Frontend

O projeto está configurado para aceitar requisições CORS do endereço:
```
http://localhost:5173
```

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.
