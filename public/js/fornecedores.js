function adicionar(){
    var nome= document.getElementById('nome').value;
    var sobrenome= document.getElementById('sobrenome').value;
    var email= document.getElementById('email').value;

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
  var cidade= document.getElementById('cidade').value;
  var bairro= document.getElementById('bairro').value;
  var profissao= document.getElementById('profissao').value;
  var n_casa= document.getElementById('n_casa').value;

  linha=document.createElement("tr");
  celula4 = document.createElement("td");
  celula4.textContent=(estilo);
  celula5 = document.createElement("td");
  celula5.textContent=(cidade);
  celula6 = document.createElement("td"); 
  celula6.textContent=(bairro);
  celula7 = document.createElement("td");
  celula7.textContent=(profissao);
  celula8 = document.createElement("td"); 
  celula8.textContent=(n_casa);
  

  linha.appendChild(celula4);
  linha.appendChild(celula5);
  linha.appendChild(celula6);
  linha.appendChild(celula7);
  linha.appendChild(celula8);

tabela=document.getElementById("enderecoo").appendChild(linha);
}

function adicionar(){
  var estilo2= document.getElementById('estilo2').value;
  var contato= document.getElementById('contato').value;
  var contato5= document.getElementById('contato5').value;

  linha=document.createElement("tr");
  celula9 = document.createElement("td");
  celula9.textContent=(estilo2);
  celula10 = document.createElement("td");
  celula10.textContent=(contato);
  celula11 = document.createElement("td"); 
  celula11.textContent=(contato5);
  

  linha.appendChild(celula9);
  linha.appendChild(celula10);
  linha.appendChild(celula11);

tabela=document.getElementById("ctt").appendChild(linha);
}

function adicionar(){
  var empresa= document.getElementById('empresa').value;
  var estilo7= document.getElementById('estilo7').value;
  var cargo= document.getElementById('cargo').value;

  linha=document.createElement("tr");
  celula12 = document.createElement("td");
  celula12.textContent=(empresa);
  celula13 = document.createElement("td");
  celula13.textContent=(estilo7);
  celula14 = document.createElement("td"); 
  celula14.textContent=(cargo);
  

  linha.appendChild(celula12);
  linha.appendChild(celula13);
  linha.appendChild(celula14);

tabela=document.getElementById("emps").appendChild(linha);
}


