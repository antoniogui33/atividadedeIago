const user1 = "antoniogui33";
const senha1 = "leo&pimenta";
const user2 = "iagoMota";
const senha2 = "01100011 01110101 01110010 01101001 01101111 01110011 01101111 00100000 01110110 01100011 00101100 00100000 01101110 11101001 00111111 ";
const encher = "linguica";

function usuariosCorretos(user1, senha1){
    if(user1 == "antoniogui33" && senha1 == "leo&pimenta"){
       window.alert("Bem-vindo de volta!");
    }else{
        console.log("senha ou usuario incorreto!!");
    }
}

usuariosCorretos(user1, senha1)