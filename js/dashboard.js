$(document).ready(function () {
    $.getJSON("../db/vendas-04-22-atencao.json", function (data) {
        let vendas = data.vendas;
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
    $.getJSON("../db/estoque-04-22.json", function (data) {
        let estoque = data.estoque;
        let vencimento;

        for (let i = 0; i < estoque.length; i++) {
            linha = document.createElement("tr");
            celulaNome = document.createElement("td");
            celulaNome.textContent = (estoque[i].nome);
            celulaQuantidade = document.createElement("td");
            celulaQuantidade.textContent = (estoque[i].quantidade);
            celulaValor = document.createElement("td");
            celulaValor.textContent = (estoque[i].valor);
            celulaValidade = document.createElement("td");
            vencimento = new Date(estoque[i].validade);
            if (vencimento != "Invalid Date") {
                celulaValidade.textContent = vencimento.toLocaleDateString();
            } else {
                celulaValidade.textContent = estoque[i].validade;
            }
            celulaLote = document.createElement("td");
            celulaLote.textContent = estoque[i].lote;
            linha.appendChild(celulaNome);
            linha.appendChild(celulaQuantidade);
            linha.appendChild(celulaValor);
            linha.appendChild(celulaValidade);
            linha.appendChild(celulaLote);

            tabela = document.getElementById("tabela-estoque").appendChild(linha);
        }
    });
});

// GRÁFICO COLUNAS
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Vendas');
    data.addRows(
        [
            ['Janeiro', 78],
            ['Fevereiro', 178],
            ['Março', 147],
            ['Abril', 566],
            ['Maio', 187],
            ['Junho', 338],
            ['Julho', 338],
            ['Agosto', 70],
            ['Setembro', 50],
            ['Outubro', 225],
            ['Novembro', 400],
            ['Dezembro', 500]
        ]
    );
    var options = {
        'title': 'Vendas mensais de 2022',
        // 'width': 600,
        // 'height': 500,
        colors: ['#529EE6', '#435566']
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

// GRÁFICO LINHAS
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Ano');
    data.addColumn('number', 'Desempenho');
    data.addColumn('number', 'Em falta');
    data.addRows(
        [
            ['2018', 780, 630],
            ['2019', 1000, 470],
            ['2020', 1170, 560],
            ['2021', 690, 1120],
            ['2022', 780, 630],
        ]
    );
    var options = {
        'title': 'Fluxo',
        // 'width': 600,
        // 'height': 500,
        colors: ['#435566', '#407BB3']
    };
    var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

// redimensiona os gráficos
$(window).resize(function(){
    drawChart1();
    drawChart2();
});
