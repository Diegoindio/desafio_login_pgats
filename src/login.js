//Declare um vetor contendo informações sobre usuários de um site, contendo as 
// propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). 
// Adicione ao menos um dos usuarios como expirado sendo true.
const usuarios = [
    {
        id: 1,
        nome: "João Silva",
        email: "joao.silva@gmail.com",
        senha: "senha123",
        expirado: false
    },
    {
        id: 2,
        nome: "Maria Oliveira",
        email: "maria.oliveira@gmail.com",
        senha: "senha456",
        expirado: true
    },
    {
        id: 3,
        nome: "Carlos Santos",
        email: "carlos.santos@gmail.com",
        senha: "senha789",
        expirado: false
    }
];      

//Construa uma função de para realizar login.
//  Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso 
// caso exista um usuário com email e senha iguais aos informados.
//  A função deve dizer que as credenciais expiraram caso expirado for true. 
// A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou 
// a senha esteja incorreta para aquele email.

export function login(email, senha) {
   for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].email === email) {
            if(usuarios[i].senha === senha) {
                if(usuarios[i].expirado) {
                    throw new Error("As credenciais expiraram.");
                } else {
                    return "Login realizado com sucesso.";
                }
            } else {
                throw new Error("As credenciais estão incorretas.");
            } 
        }
    }
    throw new Error("As credenciais estão incorretas.");
}   
