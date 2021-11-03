var names = ["J","JameN","Sumit"];

for (var i=0; i < names.length ; i++){

	var text = names[i];
	
	if (text.substring(0, 1) == "J" || text.substring(0, 1) == "j"){
		console.log("Goodbye JSomeName");
	}
	else
	{
		console.log("Goodbye SomeName");
	}
	
}