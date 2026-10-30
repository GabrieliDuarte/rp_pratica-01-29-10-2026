create table cliente(
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
nome TEXT NOT NULL,
telefone VARCHAR(20) NOT NULL,
dt_nascimento DATE NOT NULL,
email TEXT NOT NULL
)    
