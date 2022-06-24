Rotas

Usuario
GET - api/usuario/
POST - api/usuario/login
PODT - api/usuario/cadastro
PUT - api/usuario/atualizar/:id - preicsa de autentição
DELETE - api/usuario/aparagr/:id - preicsa de autentição

Finanças

GET - api/financa/
POST - api/usuario/cadastro - preicsa de autentição
PUT - api/usuario/atualizar/:id - preicsa de autentição
DELETE - api/usuario/aparagr/:id - preicsa de autentição

MODELO JSON

USUARIO

{    
    "nomeusuario": String,
    "email": String,
    "senha": String,
    "nomecompleto": String,
    "telefone": String
}

Finanças
{
    "nome_banco": String,
    "tipo_conta": String,
    "nome_titula": String,
    "limite_cartao": String
}
