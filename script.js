$(function(){

	ocultar();

});

function ocultar(pag){
	if(pag == null){
		pag = 1;
	}

	$.each(data, function(key, value){
		if(key < 10){
			$('tbody').append('<tr id="'+value.id+'" name="'+value.first_name+'"><td>'+value.id+'</td><td>'+value.first_name+'</td><td>'+value.email+'</td><td>'+value.gender+'</td></tr>');
		}else{
			$('tbody').append('<tr  id="'+value.id+'" name="'+value.first_name+'" hidden><td>'+value.id+'</td><td>'+value.first_name+'</td><td>'+value.email+'</td><td>'+value.gender+'</td></tr>');

		}
	
	});

	if (data.length > 10) {
		var	total = data.length/10;
		for (i=1; i<=total+1;i++){

			$('.pagination').append('<li><a onclick="pagina('+i+')" href="javascript:void(0)">'+i+'</a></li>');
		}

	}
	pagina(pag);

}

function pagina(pag){

	$('#current_pag').val(pag);
	var mostrar_desde = pag-1+'0';
	var mostrar_hasta = pag-1+1+'0';
	if (pag == 1) {
		mostrar_desde = 1;
		mostrar_hasta = 10;
	}else{
		mostrar_desde = parseInt(mostrar_desde)+1;
		
	}
	$.each($('tr[name]'), function(key, value){
		$(value).hide();
	});

	for(i=mostrar_desde;i<=mostrar_hasta; i++){
		$('tr#'+i).show();
	}

}


var data = [{"id":1,"first_name":"Jerrome Denning","email":"jdenning0@123-reg.co.uk","gender":"Male"},
{"id":2,"first_name":"Luisa Du Pre","email":"ldu1@ftc.gov","gender":"Female"},
{"id":3,"first_name":"Floris Oxton","email":"foxton2@rediff.com","gender":"Female"},
{"id":4,"first_name":"Kayley Ferrillio","email":"kferrillio3@wufoo.com","gender":"Female"},
{"id":5,"first_name":"Bent Saiz","email":"bsaiz4@eventbrite.com","gender":"Male"},
{"id":6,"first_name":"Dallon Skellern","email":"dskellern5@wix.com","gender":"Male"},
{"id":7,"first_name":"Petra Dash","email":"pdash6@goo.gl","gender":"Female"},
{"id":8,"first_name":"Solomon Maffetti","email":"smaffetti7@deviantart.com","gender":"Male"},
{"id":9,"first_name":"Archibald Budgett","email":"abudgett8@tripadvisor.com","gender":"Male"},
{"id":10,"first_name":"Devin Fell","email":"dfell9@printfriendly.com","gender":"Male"},
{"id":11,"first_name":"Dillon Matityahu","email":"dmatityahua@yellowpages.com","gender":"Male"},
{"id":12,"first_name":"Bartholomeo Keggins","email":"bkegginsb@reddit.com","gender":"Male"},
{"id":13,"first_name":"Daryle Heaven","email":"dheavenc@yale.edu","gender":"Male"},
{"id":14,"first_name":"Tildie Cinderey","email":"tcindereyd@tripod.com","gender":"Female"},
{"id":15,"first_name":"Kirsti Grishukov","email":"kgrishukove@google.nl","gender":"Female"},
{"id":16,"first_name":"Amos Verni","email":"avernif@guardian.co.uk","gender":"Male"},
{"id":17,"first_name":"Berty Roxburch","email":"broxburchg@va.gov","gender":"Female"},
{"id":18,"first_name":"Nappy Ferber","email":"nferberh@aol.com","gender":"Male"},
{"id":19,"first_name":"Ladonna Elgar","email":"lelgari@smugmug.com","gender":"Female"},
{"id":20,"first_name":"Druci Wylie","email":"dwyliej@etsy.com","gender":"Female"},
{"id":21,"first_name":"Edmund Boosey","email":"ebooseyk@networkadvertising.org","gender":"Male"},
{"id":22,"first_name":"Blair Djorevic","email":"bdjorevicl@redcross.org","gender":"Male"},
{"id":23,"first_name":"Brena Seckom","email":"bseckomm@spiegel.de","gender":"Female"},
{"id":24,"first_name":"Maribelle Wight","email":"mwightn@studiopress.com","gender":"Female"},
{"id":25,"first_name":"Joannes Gerlack","email":"jgerlacko@army.mil","gender":"Female"},
{"id":26,"first_name":"Giordano Carff","email":"gcarffp@fastcompany.com","gender":"Male"},
{"id":27,"first_name":"Amalia Cuberley","email":"acuberleyq@who.int","gender":"Female"},
{"id":28,"first_name":"Aldo Rossant","email":"arossantr@t-online.de","gender":"Male"},
{"id":29,"first_name":"Mela Mc Cahey","email":"mmcs@elpais.com","gender":"Female"},
{"id":30,"first_name":"Oswald Cracie","email":"ocraciet@bigcartel.com","gender":"Male"},
{"id":31,"first_name":"Obed Auty","email":"oautyu@xinhuanet.com","gender":"Male"},
{"id":32,"first_name":"Lida Handrock","email":"lhandrockv@xing.com","gender":"Female"},
{"id":33,"first_name":"Rachael Flancinbaum","email":"rflancinbaumw@ezinearticles.com","gender":"Female"},
{"id":34,"first_name":"Floris Schoenrock","email":"fschoenrockx@linkedin.com","gender":"Female"},
{"id":35,"first_name":"Aylmer O' Byrne","email":"aoy@salon.com","gender":"Male"},
{"id":36,"first_name":"Celestia Thieme","email":"cthiemez@psu.edu","gender":"Female"},
{"id":37,"first_name":"Susanetta Pidgeon","email":"spidgeon10@comsenz.com","gender":"Female"},
{"id":38,"first_name":"Timmie Timbridge","email":"ttimbridge11@bloglines.com","gender":"Male"},
{"id":39,"first_name":"Packston Dumbar","email":"pdumbar12@newyorker.com","gender":"Male"},
{"id":40,"first_name":"Ruddy McIlraith","email":"rmcilraith13@networksolutions.com","gender":"Male"},
{"id":41,"first_name":"Avie Howden","email":"ahowden14@narod.ru","gender":"Female"},
{"id":42,"first_name":"Marlane MacGinley","email":"mmacginley15@dagondesign.com","gender":"Female"},
{"id":43,"first_name":"Leonelle Mathissen","email":"lmathissen16@flickr.com","gender":"Female"},
{"id":44,"first_name":"Patsy Renak","email":"prenak17@hexun.com","gender":"Male"},
{"id":45,"first_name":"Orion Farncomb","email":"ofarncomb18@altervista.org","gender":"Male"},
{"id":46,"first_name":"Piotr Kilmartin","email":"pkilmartin19@posterous.com","gender":"Male"},
{"id":47,"first_name":"Reginauld Blackburn","email":"rblackburn1a@bloomberg.com","gender":"Male"},
{"id":48,"first_name":"Julie Kerkham","email":"jkerkham1b@eepurl.com","gender":"Male"},
{"id":49,"first_name":"Augy Johnsson","email":"ajohnsson1c@microsoft.com","gender":"Male"},
{"id":50,"first_name":"Gasparo Freestone","email":"gfreestone1d@plala.or.jp","gender":"Male"},
{"id":51,"first_name":"Thedrick Kidman","email":"tkidman1e@amazon.co.jp","gender":"Male"},
{"id":52,"first_name":"Corissa Sandbach","email":"csandbach1f@walmart.com","gender":"Female"},
{"id":53,"first_name":"Lane O'Heagertie","email":"loheagertie1g@omniture.com","gender":"Male"},
{"id":54,"first_name":"Jake McAnulty","email":"jmcanulty1h@prnewswire.com","gender":"Male"},
{"id":55,"first_name":"Brandyn Sergeaunt","email":"bsergeaunt1i@shinystat.com","gender":"Male"},
{"id":56,"first_name":"Cristy Facchini","email":"cfacchini1j@xinhuanet.com","gender":"Female"},
{"id":57,"first_name":"Lamond Chaters","email":"lchaters1k@cdbaby.com","gender":"Male"},
{"id":58,"first_name":"Ruttger Brand","email":"rbrand1l@miitbeian.gov.cn","gender":"Male"},
{"id":59,"first_name":"Creighton Lukes","email":"clukes1m@nydailynews.com","gender":"Male"},
{"id":60,"first_name":"Ruthie Yelyashev","email":"ryelyashev1n@noaa.gov","gender":"Female"},
{"id":61,"first_name":"Danette Silverston","email":"dsilverston1o@alexa.com","gender":"Female"},
{"id":62,"first_name":"Doy Senior","email":"dsenior1p@meetup.com","gender":"Male"},
{"id":63,"first_name":"Gayel Phythian","email":"gphythian1q@businessinsider.com","gender":"Female"},
{"id":64,"first_name":"Wang Rangle","email":"wrangle1r@accuweather.com","gender":"Male"},
{"id":65,"first_name":"Francesco Garretts","email":"fgarretts1s@omniture.com","gender":"Male"},
{"id":66,"first_name":"Bernette Yearby","email":"byearby1t@yellowpages.com","gender":"Female"},
{"id":67,"first_name":"Celle Gaines","email":"cgaines1u@trellian.com","gender":"Female"},
{"id":68,"first_name":"Angil Streight","email":"astreight1v@seesaa.net","gender":"Female"},
{"id":69,"first_name":"Nataline Yakubov","email":"nyakubov1w@fc2.com","gender":"Female"},
{"id":70,"first_name":"Chuck Gasgarth","email":"cgasgarth1x@google.cn","gender":"Male"},
{"id":71,"first_name":"Paddie Reston","email":"preston1y@reverbnation.com","gender":"Male"},
{"id":72,"first_name":"Amery Hinckes","email":"ahinckes1z@exblog.jp","gender":"Male"},
{"id":73,"first_name":"Benedikt Whitebrook","email":"bwhitebrook20@technorati.com","gender":"Male"},
{"id":74,"first_name":"Rockey Simonyi","email":"rsimonyi21@utexas.edu","gender":"Male"},
{"id":75,"first_name":"Lynde Shawyers","email":"lshawyers22@google.com.br","gender":"Female"},
{"id":76,"first_name":"Lena Port","email":"lport23@friendfeed.com","gender":"Female"}];

