function montarTabela() {
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
                if(vencimento != "Invalid Date"){
                    celulaValidade.textContent = vencimento.toLocaleDateString();
                }else{
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
}

function alertaDeEstoque() {
    var celula = document.getElementsByTagName("td");
    for(var i = 0; i < celula.length; i++) {
        if(celula[i].innerHTML > 5 && celula[i].innerHTML <= 15){
            celula[i].style.backgroundColor = "yellow";
        }
        else if(celula[i].innerHTML <= 5) {
            celula[i].style.backgroundColor = "red";
        }
    }
}

// GRÁFOCO DE PIZZA
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
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
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Contribuição para a receita'],
      ['Notebook Samsung S-300',     40000],
      ['Smartphone Motorola Moto G100',      25000],
      ['WePhone 4 X-men',  25000],
      ['Notebook Acer A-300', 5000],
      ['Smartphone Samsung S100',    5000]
    ]);
    var options = {
      title: 'Contribuição para a receita'
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart.draw(data, options);
}

// redimensiona o gráfico
$(window).resize(function(){
    drawChart1();
    drawChart2();
});




