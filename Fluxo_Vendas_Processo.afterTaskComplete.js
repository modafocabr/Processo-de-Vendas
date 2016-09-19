function afterTaskComplete(colleagueId,nextSequenceId,userList){
	var activity = getValue('WKNumState');
	if(activity == 0 || activity == 1 || activity == 4){
		try{
			
		    //Monta mapa com parâmetros do template
		    var parametros = new java.util.HashMap();
		 
		    //Este parâmetro é obrigatório e representa o assunto do e-mail
		    parametros.put("subject", "Inicio de oportunidade");
		    
		    
		    //Monta lista de destinatários
		    var destinatarios = new java.util.ArrayList();
		    destinatarios.add("matheus.rocha");
		    destinatarios.add("lucas.felipe");
		 
		    //Envia e-mail
		    notifier.notify("jean.maciel", 1552, "Inicio_venda", parametros, destinatarios, "text/html");
		    log.info("Consegui enviar o email. LucasFS")
		 
		} catch(e){
			log.info("logger->debugger=lucas.felipe");
			log.info("logger->action=afterProcessFinish");
		    log.info(e);
		}
	}
	
}