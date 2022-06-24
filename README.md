Rotas

Usuario

GET - api/usuario/<br>
POST - api/usuario/login<br>
PODT - api/usuario/cadastro<br>
PUT - api/usuario/atualizar/:id - preicsa de autentição<br>
DELETE - api/usuario/aparagr/:id - preicsa de autentição<br>

Finanças

GET - api/financa/<br>
POST - api/usuario/cadastro - preicsa de autentição<br>
PUT - api/usuario/atualizar/:id - preicsa de autentição<br>
DELETE - api/usuario/aparagr/:id - preicsa de autentição<br>

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
