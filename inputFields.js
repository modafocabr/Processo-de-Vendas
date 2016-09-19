function inputFields(form) {
	
	$(".idSolicitante").attr("value", getValue("WKUser"));
	
    //#INICIO BUSCA_EMP_USER
	//var c1 = DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
    //var constraints   = new Array(c1);	
	//var colaborador = DatasetFactory.getDataset("colleague", null, constraints, null);
	
	//var hue1 = colaborador.getValue(0, "colleagueName");
	//var hue2 = "HIJO DE PUTA MAL PARIDO";
	
	//form.setValue('textbox2', hue2);
	//form.setValue('', hue2);
	
	
	if (form.getValue("date0").match(
			"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("date0").split('/');
		form.setValue("date0", split[2] + '-' + split[1] + '-' + split[0]);
	}
	if (form.getValue("date25").match(
			"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("date25").split('/');
		form.setValue("date25", split[2] + '-' + split[1] + '-' + split[0]);
	}
	if (form.getValue("date29").match(
			"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("date29").split('/');
		form.setValue("date29", split[2] + '-' + split[1] + '-' + split[0]);
	}
	if (form.getValue("date34").match(
			"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("date34").split('/');
		form.setValue("date34", split[2] + '-' + split[1] + '-' + split[0]);
	}
	if (form.getValue("date38").match(
			"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("date38").split('/');
		form.setValue("date38", split[2] + '-' + split[1] + '-' + split[0]);
	}
	if (form.getValue("date56").match(
			"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("date56").split('/');
		form.setValue("date56", split[2] + '-' + split[1] + '-' + split[0]);
	}
	if (form.getValue("date62").match(
			"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("date62").split('/');
		form.setValue("date62", split[2] + '-' + split[1] + '-' + split[0]);
	}
	if (form.getValue("date68").match(
			"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("date68").split('/');
		form.setValue("date68", split[2] + '-' + split[1] + '-' + split[0]);
	}
	if (form.getValue("date74").match(
			"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("date74").split('/');
		form.setValue("date74", split[2] + '-' + split[1] + '-' + split[0]);
	}
	if (form.getValue("date81").match(
			"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("date81").split('/');
		form.setValue("date81", split[2] + '-' + split[1] + '-' + split[0]);
	}
}