function calcular() {
    var valor1 = parseFloat(document.getElementById('input1').value);
    var valor2 = parseFloat(document.getElementById('input2').value);
    var valor3 = parseFloat(document.getElementById('input3').value);
    var valor4 = parseFloat(document.getElementById('input4').value);
    var valor5 = parseFloat(document.getElementById('input5').value);
    var valor6 = parseFloat(document.getElementById('input6').value);
    var valor7 = parseFloat(document.getElementById('input7').value);
    var valor8 = parseFloat(document.getElementById('input8').value);
    
    var resultado1 = valor8 - valor3;
    var resultado2 = valor5 - valor6;
    var resultado3 = resultado2 - valor1;
    var resultado4 = resultado3 / valor2;
    var resultado5 = valor7 / resultado4;
    var resultado6 = resultado5 / ((100 + valor8) * 100);
    var resultado7 = resultado6 / valor4;
    
    document.getElementById('input9').value = resultado1;
    document.getElementById('input10').value = resultado2;
    document.getElementById('input11').value = resultado3;
    document.getElementById('input12').value = resultado4;
    document.getElementById('input13').value = resultado5;
    document.getElementById('input14').value = resultado6;
    document.getElementById('input15').value = resultado7;
  }
  