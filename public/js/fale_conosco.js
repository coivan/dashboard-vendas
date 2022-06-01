function adicionar(){
    var nome= document.getElementById('nome').value;
    var sobrenome= document.getElementById('sobrenome').value;
    var email= document.getElementById('email_nome').value;

    linha=document.createElement("tr");
    celula1 = document.createElement("td");
    celula1.textContent=(nome);
    celula2 = document.createElement("td");
    celula2.textContent=(sobrenome);
    celula3 = document.createElement("td"); 
    celula3.textContent=(email);
    

    linha.appendChild(celula1);
    linha.appendChild(celula2);
    linha.appendChild(celula3);

  tabela=document.getElementById("fornecedores").appendChild(linha);
}

function adicionar(){
    var estilo= document.getElementById('estilo').value;
    var contato= document.getElementById('contato').value;
    var contato3= document.getElementById('contato3').value;

    linha=document.createElement("tr");
    celula4 = document.createElement("td");
    celula4.textContent=(estilo);
    celula5 = document.createElement("td");
    celula5.textContent=(contato);
    celula6 = document.createElement("td"); 
    celula6.textContent=(contato3);
    

    linha.appendChild(celula4);
    linha.appendChild(celula5);
    linha.appendChild(celula6);

  tabela=document.getElementById("ctt").appendChild(linha);
}

function adicionar(){
    var textareamsg= document.getElementById('textareamsg').value;

    linha=document.createElement("tr");
    celula7 = document.createElement("td");
    celula7.textContent=(textareamsg);

    linha.appendChild(celula7);

    tabela=document.getElementById("msgText").appendChild(linha);
}