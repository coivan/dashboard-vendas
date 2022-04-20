$(document).ready(function () {
    $.getJSON("db/vendas-04-22.json", function (data) {
        let vendas = data.produtos.vendas;
        let instanteDaVenda;

        for (let i = 0; i < vendas.length; i++) {
            linha = document.createElement("tr");
            celulaNome = document.createElement("td");
            celulaNome.textContent = (vendas[i].nome);
            celulaQuantidade = document.createElement("td");
            celulaQuantidade.textContent = (vendas[i].quantidade);
            celulaValor = document.createElement("td");
            celulaValor.textContent = (vendas[i].valor);
            instanteDaVenda = new Date((vendas[i].data));
            celulaData = document.createElement("td");
            celulaData.textContent = instanteDaVenda.toLocaleString();
            linha.appendChild(celulaNome);
            linha.appendChild(celulaQuantidade);
            linha.appendChild(celulaValor);
            linha.appendChild(celulaData);

            tabela = document.getElementById("tabela-desempenho").appendChild(linha);
        }
    });
});

$(document).ready(function () {
    $.getJSON("db/vendas-04-22-destaques.json", function (data) {
        let vendas = data.produtos.vendas;
        let instanteDaVenda;

        for (let i = 0; i < vendas.length; i++) {
            linha = document.createElement("tr");
            celulaNome = document.createElement("td");
            celulaNome.textContent = (vendas[i].nome);
            celulaQuantidade = document.createElement("td");
            celulaQuantidade.textContent = (vendas[i].quantidade);
            celulaValor = document.createElement("td");
            celulaValor.textContent = (vendas[i].valor);
            instanteDaVenda = new Date((vendas[i].data));
            celulaData = document.createElement("td");
            celulaData.textContent = instanteDaVenda.toLocaleString();
            linha.appendChild(celulaNome);
            linha.appendChild(celulaQuantidade);
            linha.appendChild(celulaValor);
            linha.appendChild(celulaData);

            tabela = document.getElementById("tabela-destaques").appendChild(linha);
        }
    });
});

$(document).ready(function () {
    $.getJSON("db/vendas-04-22-atencao.json", function (data) {
        let vendas = data.produtos.vendas;
        let instanteDaVenda;

        for (let i = 0; i < vendas.length; i++) {
            linha = document.createElement("tr");
            celulaNome = document.createElement("td");
            celulaNome.textContent = (vendas[i].nome);
            celulaQuantidade = document.createElement("td");
            celulaQuantidade.textContent = (vendas[i].quantidade);
            celulaValor = document.createElement("td");
            celulaValor.textContent = (vendas[i].valor);
            instanteDaVenda = new Date((vendas[i].data));
            celulaData = document.createElement("td");
            celulaData.textContent = instanteDaVenda.toLocaleString();
            linha.appendChild(celulaNome);
            linha.appendChild(celulaQuantidade);
            linha.appendChild(celulaValor);
            linha.appendChild(celulaData);

            tabela = document.getElementById("tabela-atencao").appendChild(linha);
        }
    });
});

$(document).ready(function () {
    $.getJSON("db/vendas-04-22-em-falta.json", function (data) {
        let vendas = data.produtos.vendas;
        let instanteDaVenda;

        for (let i = 0; i < vendas.length; i++) {
            linha = document.createElement("tr");
            celulaNome = document.createElement("td");
            celulaNome.textContent = (vendas[i].nome);
            celulaQuantidade = document.createElement("td");
            celulaQuantidade.textContent = (vendas[i].quantidade);
            celulaValor = document.createElement("td");
            celulaValor.textContent = (vendas[i].valor);
            instanteDaVenda = new Date((vendas[i].data));
            celulaData = document.createElement("td");
            celulaData.textContent = instanteDaVenda.toLocaleString();
            linha.appendChild(celulaNome);
            linha.appendChild(celulaQuantidade);
            linha.appendChild(celulaValor);
            linha.appendChild(celulaData);

            tabela = document.getElementById("tabela-em-falta").appendChild(linha);
        }
    });
});