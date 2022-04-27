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
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
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

// GRÁFICO TREEMAP
google.charts.load('current', {'packages':['treemap']});
google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
        ['Global',               null,                 0,                               0],
        ['Informática',          'Global',             0,                               0],
        ['Eletroeletrônicos',    'Global',             0,                               0],
        ['Telefonia',            'Global',             0,                               0],
        ['Outros',               'Global',             0,                               0],
        ['Livros',               'Global',             0,                               0],
        ['Impressoras',          'Informática',            11,                              10],
        ['Notebooks',            'Informática',            52,                              31],
        ['Monitores',            'Informática',            24,                              12],
        ['Mouses',               'Informática',            16,                              -23],
        ['TVs',                  'Eletroeletrônicos',             42,                              -11],
        ['Concoles',             'Eletroeletrônicos',             31,                              -2],
        ['Caixas de som',        'Eletroeletrônicos',             22,                              -13],
        ['Geladeiras',           'Eletroeletrônicos',             17,                              4],
        ['Fogões',               'Eletroeletrônicos',             21,                              -5],
        ['Smartphones Android',  'Telefonia',               36,                              4],
        ['iPhones',              'Telefonia',               40,                              63],
        ['Acessorios',           'Telefonia',               4,                               34],
        ['Teelefones fixos',     'Telefonia',               1,                               -5],
        ['Peliculas',            'Telefonia',               12,                              24],
        ['Romance',              'Livros',             21,                              0],
        ['Biografias',           'Livros',             10,                              12],
        ['Tecnico',              'Livros',             8,                               10]
      ]);
    tree = new google.visualization.TreeMap(document.getElementById('chart_div3'));
    tree.draw(data, {
        minColor: '#f00',
        midColor: '#ddd',
        maxColor: '#0d0',
        headerHeight: 15,
        fontColor: 'black',
        showScale: true
    });
}

// GRÁFOCO DE PIZZA
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart4);
function drawChart4() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Fornecedor por fornecimentos'],
      ['Motorola',     10],
      ['Samsung',      20],
      ['Acer',  10],
      ['Editora Armando Bagunça', 13],
      ['Gravadora Noisedeam',    5]
    ]);
    var options = {
      title: 'Produtos por fornecedor'
    };
    var chart = new google.visualization.PieChart(document.getElementById('chart_div4'));
    chart.draw(data, options);
}

// redimensiona os gráficos
$(window).resize(function(){
    drawChart1();
    drawChart2();
    drawChart3();
    drawChart4();
});
