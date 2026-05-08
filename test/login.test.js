import { login } from "../src/login.js";
import assert from "node:assert";

//Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

describe("Teste de Login", function () {
    it("Realizar login com sucesso", function () {
        const resultado = login("carlos.santos@gmail.com", "senha789");
        assert.strictEqual(resultado, "Login realizado com sucesso.");
    });
    it('Realizar login com credenciais expiradas', function () {
        assert.throws(
            function () {
                login("maria.oliveira@gmail.com", "senha456");
            },
            {
                message: "As credenciais expiraram."
            });
    });

    it('Realizar login com usuário incorreto', function () {
        assert.throws(
            function() {
            login("email.incorreto@gmail.com", "senha123");
        }, 
        {            message: "As credenciais estão incorretas."
        });
    });
    it('Realizar login com senha incorreta para usuário encontrado', function () {
        assert.throws(
            function() {
            login("joao.silva@gmail.com", "senhaErrada");
        }, 
        {            message: "As credenciais estão incorretas."
        });
    });
});
