function adicionar(){
    var nome= document.getElementById('nome').value;
    var sobrenome= document.getElementById('sobrenome').value;
    var email= document.getElementById('email').value;
    var email= document.getElementById('email2').value;

    linha=document.createElement("tr");
    celula1 = document.createElement("td");
    celula1.textContent=(nome);
    celula2 = document.createElement("td");
    celula2.textContent=(sobrenome);
    celula3 = document.createElement("td"); 
    celula3.textContent=(email);
    celula4 = document.createElement("td"); 
    celula4.textContent=(email2);
    
    

    linha.appendChild(celula1);
    linha.appendChild(celula2);
    linha.appendChild(celula3);
    linha.appendChild(celula4);
  

  tabela=document.getElementById("fornecedores").appendChild(linha);
}