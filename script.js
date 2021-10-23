var anos = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
var regioes = ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste'];
var regioes2 = ['Brasil (total)', 'Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste'];

var valoresSalarioMinimo = [540, 622, 678, 724, 788, 880, 937, 954, 998, 1045, 1100];
var mediasSalarioRegiao = [1711, 1539, 2585, 2499, 2498];
var percsDesempregoRegiao = [11, 10.6, 13.6, 11.4, 6.8, 9.3];

var coresRegiao = ['red', 'green', 'blue', 'yellow', 'purple'];
var coresRegiao2 = ['orange', 'red', 'green', 'blue', 'yellow', 'purple'];


var ctxSalarioMinimo = document.getElementById('chartSalarioMinimo').getContext('2d');

var configSalarioMinimo = {
  type: 'line',
  data: {
    labels: anos,
    datasets: [{
      label:'Salário minimo',
      data: valoresSalarioMinimo,
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  }
}

var chartSalarioMinimo = new Chart(ctxSalarioMinimo, configSalarioMinimo);

var ctxMediaSalario = document.getElementById('chartMediaSalario').getContext('2d');

var configMediaSalario = {
  type: 'bar',
  data: {
    labels: regioes,
    datasets: [{
      label: 'Média de salário por região',
      data: mediasSalarioRegiao,
      backgroundColor: coresRegiao,
    }]
  },
  options: {
    maintainAspectRatio:false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}

var chartMediaSalario = new Chart(ctxMediaSalario, configMediaSalario);

var ctxPercDesemprego = document.getElementById('chartPercDesemprego').getContext('2d');

var configPercDesemprego = {
  type:'pie',
  data: {
    labels: regioes2,
    datasets: [{
      label: 'Desemprego por região',
      data: percsDesempregoRegiao,
      backgroundColor: coresRegiao2
    }]
  },
  options: {
    maintainAspectRatio:false,
    scales: {
      y: {
        beginAtZero:true
      }
    }
  }
}

var chartPercDesemprego = new Chart(ctxPercDesemprego, configPercDesemprego)