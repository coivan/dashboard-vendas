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

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Fornecedor por fornecimentos'],
      ['Motorola',     10],
      ['Samsung',      20],
      ['Acer',  2],
      ['Editora Amanda Beijo e Abraços', 13],
      ['Gravadora Noisedeam',    5]
    ]);

    var options = {
      title: ''
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}




