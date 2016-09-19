function validateForm(form) {
	var activity = getValue('WKNumState');
	log.info("passei fera");
	log.info("o valor e" + activity);
	if(activity == 0 || activity == 1 || activity == 4){
		log.info("ola if diferentao");
		if ((form.getValue("textbox0") == null || form.getValue("textbox0") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox2") == null || form.getValue("textbox2") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox3") == null || form.getValue("textbox3") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Solicitante n\u00E3o pode ser vazio.";
		}	
		if ((form.getValue("textbox7") == null || form.getValue("textbox7") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "CNPJ n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox9") == null || form.getValue("textbox9") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Telefone n\u00E3o pode ser vazio.";
		}	
		if ((form.getValue("cep") == null || form.getValue("cep") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "CEP n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("rua") == null || form.getValue("rua") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Endere\u00E7o n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("cidade") == null || form.getValue("cidade") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Cidade n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("uf") == null || form.getValue("uf") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Estado n\u00E3o pode ser vazio.";
		}
		
		if ((form.getValue("date25") == null || form.getValue("date25") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox26") == null || form.getValue("textbox26") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hor\u00E1rio n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea27") == null || form.getValue("textarea27") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox24") == null || form.getValue("textbox24") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("zoomfield23") == null || form.getValue("zoomfield23") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Executivo n\u00E3o pode ser vazio.";
		}
	}
	
	if(activity == 10){
		if ((form.getValue("date29") == null || form.getValue("date29") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox30") == null || form.getValue("textbox30") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox31") == null || form.getValue("textbox31") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Responsavel n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox32") == null || form.getValue("textbox32") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo33") == null || form.getValue("combo33") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Processo n\u00E3o pode ser vazio.";
		}
		if (((form.getValue("visita1") == null || form.getValue("visita1") == "") && (form.getValue("visita2") == null || form.getValue("visita2") == "") && (form.getValue("visita3") == null || form.getValue("visita3") == ""))
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Precisa ter pelo menos um horario preenchido.";
		}
		if ((form.getValue("textarea36") == null || form.getValue("textarea36") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
	}
	if(activity == 34 || activity == 37){
		
		
	}
	if(activity == 14){
		if ((form.getValue("date38") == null || form.getValue("date38") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox39") == null || form.getValue("textbox39") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo40") == null || form.getValue("combo40") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Produto n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox41") == null || form.getValue("textbox41") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Responsavel n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox42") == null || form.getValue("textbox42") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea43") == null || form.getValue("textarea43") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox44") == null || form.getValue("textbox44") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome da Empresa n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox45") == null || form.getValue("textbox45") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Neg\u00F3cio da Empresa n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo46") == null || form.getValue("combo46") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Segmento n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo47") == null || form.getValue("combo47") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Subsegmento n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox48") == null || form.getValue("textbox48") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Filiais n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea52") == null || form.getValue("textarea52") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Percep\u00E7\u00E3o do EAR n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date56") == null || form.getValue("date56") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox57") == null || form.getValue("textbox57") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox59") == null || form.getValue("textbox59") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea60") == null || form.getValue("textarea60") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date62") == null || form.getValue("date62") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox63") == null || form.getValue("textbox63") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea66") == null || form.getValue("textarea66") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7oes n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date68") == null || form.getValue("date68") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox69") == null || form.getValue("textbox69") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea72") == null || form.getValue("textarea72") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date74") == null || form.getValue("date74") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox75") == null || form.getValue("textbox75") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo76") == null || form.getValue("combo76") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Venda n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea79") == null || form.getValue("textarea79") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date81") == null || form.getValue("date81") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox82") == null || form.getValue("textbox82") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox85") == null || form.getValue("textbox85") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "CDU n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox86") == null || form.getValue("textbox86") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Servi\u00E7os n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea87") == null || form.getValue("textarea87") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date0") == null || form.getValue("date0") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox222") == null || form.getValue("textbox222") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox2") == null || form.getValue("textbox2") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Solicitante n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox3") == null || form.getValue("textbox3") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo4") == null || form.getValue("combo4") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Fonte n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox6") == null || form.getValue("textbox6") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Raz\u00E3o Social n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox7") == null || form.getValue("textbox7") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "CNPJ n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox91") == null || form.getValue("textbox91") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Telefone n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo10") == null || form.getValue("combo10") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Segmento n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox11") == null || form.getValue("textbox11") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "CEP n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox12") == null || form.getValue("textbox12") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Endere\u00E7o n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox13") == null || form.getValue("textbox13") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Cidade n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox14") == null || form.getValue("textbox14") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Estado n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox18") == null || form.getValue("textbox18") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Funcion\u00E1rios n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox218") == null || form.getValue("textbox218") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Faturamento n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo17") == null || form.getValue("combo17") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Origem n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox19") == null || form.getValue("textbox19") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Cargo n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox20") == null || form.getValue("textbox20") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Ramal n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox21") == null || form.getValue("textbox21") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Celular n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox22") == null || form.getValue("textbox22") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "E-mail n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date25") == null || form.getValue("date25") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox26") == null || form.getValue("textbox26") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hor\u00E1rio n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea27") == null || form.getValue("textarea27") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date29") == null || form.getValue("date29") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox30") == null || form.getValue("textbox30") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo33") == null || form.getValue("combo33") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Processo n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea36") == null || form.getValue("textarea36") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date38") == null || form.getValue("date38") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox39") == null || form.getValue("textbox39") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo40") == null || form.getValue("combo40") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Produto n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea43") == null || form.getValue("textarea43") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox44") == null || form.getValue("textbox44") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome da Empresa n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox45") == null || form.getValue("textbox45") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Neg\u00F3cio da Empresa n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo46") == null || form.getValue("combo46") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Segmento n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo47") == null || form.getValue("combo47") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Subsegmento n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox48") == null || form.getValue("textbox48") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Filiais n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea52") == null || form.getValue("textarea52") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Percep\u00E7\u00E3o do EAR n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date56") == null || form.getValue("date56") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox57") == null || form.getValue("textbox57") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox59") == null || form.getValue("textbox59") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea60") == null || form.getValue("textarea60") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date62") == null || form.getValue("date62") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox63") == null || form.getValue("textbox63") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea66") == null || form.getValue("textarea66") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7oes n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date68") == null || form.getValue("date68") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox69") == null || form.getValue("textbox69") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea72") == null || form.getValue("textarea72") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date74") == null || form.getValue("date74") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox75") == null || form.getValue("textbox75") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo76") == null || form.getValue("combo76") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Venda n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea79") == null || form.getValue("textarea79") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date81") == null || form.getValue("date81") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox82") == null || form.getValue("textbox82") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox85") == null || form.getValue("textbox85") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "CDU n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox86") == null || form.getValue("textbox86") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Servi\u00E7os n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea87") == null || form.getValue("textarea87") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date0") == null || form.getValue("date0") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox222") == null || form.getValue("textbox222") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox2") == null || form.getValue("textbox2") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Solicitante n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox3") == null || form.getValue("textbox3") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo4") == null || form.getValue("combo4") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Fonte n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox6") == null || form.getValue("textbox6") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Raz\u00E3o Social n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox7") == null || form.getValue("textbox7") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "CNPJ n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox9") == null || form.getValue("textbox9") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Telefone n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo10") == null || form.getValue("combo10") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Segmento n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox11") == null || form.getValue("textbox11") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "CEP n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox12") == null || form.getValue("textbox12") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Endere\u00E7o n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox13") == null || form.getValue("textbox13") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Cidade n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox14") == null || form.getValue("textbox14") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Estado n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox18") == null || form.getValue("textbox18") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Funcion\u00E1rios n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox218") == null || form.getValue("textbox218") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Faturamento n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo17") == null || form.getValue("combo17") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Origem n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox19") == null || form.getValue("textbox19") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Cargo n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox20") == null || form.getValue("textbox20") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Ramal n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox21") == null || form.getValue("textbox21") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Celular n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox22") == null || form.getValue("textbox22") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "E-mail n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date25") == null || form.getValue("date25") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox26") == null || form.getValue("textbox26") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hor\u00E1rio n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea27") == null || form.getValue("textarea27") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date29") == null || form.getValue("date29") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox30") == null || form.getValue("textbox30") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo33") == null || form.getValue("combo33") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Processo n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea36") == null || form.getValue("textarea36") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date38") == null || form.getValue("date38") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox39") == null || form.getValue("textbox39") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo40") == null || form.getValue("combo40") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Produto n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea43") == null || form.getValue("textarea43") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox44") == null || form.getValue("textbox44") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome da Empresa n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox45") == null || form.getValue("textbox45") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Neg\u00F3cio da Empresa n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo46") == null || form.getValue("combo46") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Segmento n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo47") == null || form.getValue("combo47") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Subsegmento n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox48") == null || form.getValue("textbox48") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Filiais n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea52") == null || form.getValue("textarea52") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Percep\u00E7\u00E3o do EAR n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date56") == null || form.getValue("date56") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox57") == null || form.getValue("textbox57") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox59") == null || form.getValue("textbox59") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Nome n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea60") == null || form.getValue("textarea60") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date62") == null || form.getValue("date62") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox63") == null || form.getValue("textbox63") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea66") == null || form.getValue("textarea66") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7oes n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date68") == null || form.getValue("date68") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox69") == null || form.getValue("textbox69") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea72") == null || form.getValue("textarea72") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date74") == null || form.getValue("date74") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox75") == null || form.getValue("textbox75") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("combo76") == null || form.getValue("combo76") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Venda n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea79") == null || form.getValue("textarea79") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("date81") == null || form.getValue("date81") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Data n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox82") == null || form.getValue("textbox82") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Hora n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox85") == null || form.getValue("textbox85") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "CDU n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textbox86") == null || form.getValue("textbox86") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Servi\u00E7os n\u00E3o pode ser vazio.";
		}
		if ((form.getValue("textarea87") == null || form.getValue("textarea87") == "")
				&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Observa\u00E7\u00F5es n\u00E3o pode ser vazio.";
		}
	}
}