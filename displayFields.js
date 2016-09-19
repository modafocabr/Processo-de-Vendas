function displayFields(form, customHTML) {
	
	var atividade = getValue('WKNumState');
	form.setValue("atividade", atividade);
	
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
	var constraints = new Array(c1);
	var colaborador = DatasetFactory.getDataset("colleague", null, constraints, null);
	
	if(atividade == 0 || atividade == 1){

		//id do usuário
		form.setValue("textbox2",getValue("WKUser"));
		//nome do usuário		
		form.setValue('textbox3', colaborador.getValue(0, "colleagueName"));

	} else if(atividade > 1) {
			
	
	}

	
}