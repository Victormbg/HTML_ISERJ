function somente_numero(e){
	tecla = (window.event)?event.keyCode:e.which;
	if((tecla > 47 && tecla <58)){
		return true;
	}
	else{
		if((tecla > 95 && tecla <106)){
			return true;
		}
	else{
		if(tecla == 8 || tecla == 46){
			return true;
		}
		else{
			return false;
		}
	
		}
	}
}

function mascara_chegada(objeto){
	if(objeto.value.length == 2){
		objeto.value = objeto.value + '/';
	}
	if(objeto.value.length == 5
	  ){
		objeto.value = objeto.value + '/';
	}
}
	function mascara_saida(objeto){
	if(objeto.value.length == 2){
		objeto.value = objeto.value + '/';
	}
	if(objeto.value.length == 5
	  ){
		objeto.value = objeto.value + '/';
	}
}

function mascara_tel(objeto){
	if(objeto.value.length == 0){
		objeto.value = objeto.value + '(';
	}
	if(objeto.value.length == 3){
		objeto.value = objeto.value + ')';
	}
	if(objeto.value.length == 8){
		objeto.value = objeto.value + '-';
	}
}

function mascara_cel(objeto){
	if(objeto.value.length == 0){
		objeto.value = objeto.value + '(';
	}
	if(objeto.value.length == 3){
		objeto.value = objeto.value + ')';
	}
	if(objeto.value.length == 9){
		objeto.value = objeto.value + '-';
	}
}

function mascara_cpf(objeto){
	if(objeto.value.length == 3){
		objeto.value = objeto.value + '.';
	}
	if(objeto.value.length == 7){
		objeto.value = objeto.value + '.';
	}
	if(objeto.value.length == 11){
		objeto.value = objeto.value + '-';
	}
}
	
function mascara_rg	(objeto){
	if(objeto.value.length == 2){
		objeto.value = objeto.value + '.';
	}
	if(objeto.value.length == 6){
		objeto.value = objeto.value + '.';
	}
	if(objeto.value.length == 10){
		objeto.value = objeto.value + '-';
	}
}
	
	
	
	function data(){
		
		var chegada = document.form1.dChegada.value;
		var dia_che, mes_che, ano_che;
		
		dia_che = chegada.slice(0,2);
		mes_che = chegada.slice(3,5);
		ano_che = chegada.slice(6,10);
		
		var saida = document.form1.dSaida.value;
		var dia_sai, mes_sai, ano_sai;
		
		dia_sai = saida.slice(0,2);
		mes_sai = saida.slice(3,5);
		ano_sai = saida.slice(6,10);
		
		
		
		if(mes_che == mes_sai){
			dias = dia_sai - dia_che;

		
		}else{
			if(mes_sai!=mes_che){
				 dias = parseInt(dia_sai) + ( 30 - parseInt(dia_che));
			}
		}
		
		
		if(document.form1.hoteis.value=='1'){
			
			if(document.form1.apt.value=='1'){
				valor = dias*150;
			}else{
				if(document.form1.apt.value=='2'){
					valor = dias*250;
				}else{
					if(document.form1.apt.value=='3'){
					valor = dias*320;
					}
				}
			}
		}
		else{
			if(document.form1.hoteis.value=='2'){
				if(document.form1.apt.value=='1'){
					valor = dias*90;
				}else{
					if(document.form1.apt.value=='2'){
						valor = dias*120;
					}else{
						if(document.form1.apt.value=='3'){
						valor = dias*160;
						}
					}
				}
			}
		}
		
		

		if(document.form1.nome.value=='' || document.form1.cpf.value=='' || document.form1.endereco.value=='' || document.form1.email.value=='' || document.form1.rg.value=='' || document.form1.tel.value=='' || document.form1.cel.value=='' || document.form1.hoteis.value=='0' || document.form1.apt.value=='0' || document.form1.dChegada.value=='' || document.form1.dSaida.value==''){
			
		alert('Todos os campos precisam ser preenchidos');
	}else{
		if(dias>15){
			alert('O número de dias tem q ser inferior a 15');
		}else{
		alert('Sr(a) ' + document.form1.nome.value + ', vc tem ' + dias + ' dias de reserva e o preço da reserva é de ' + valor);
		}
	}
	
}
