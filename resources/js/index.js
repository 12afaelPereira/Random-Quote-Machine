const button = document.getElementsByClassName("quote-button");


button[0].addEventListener('click', quoteRequest);

function quoteRequest(event){

	const ajax = new XMLHttpRequest();
	ajax.withCredentials = true;

	ajax.addEventListener('readystatechange', function(){
		if(this.readyState === this.DONE){
			const response = JSON.parse(this.responseText)[0];

			renderResponse(response);
		}
	});

	ajax.open('GET', 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=1');

	ajax.setRequestHeader("x-rapidapi-host", "andruxnet-random-famous-quotes.p.rapidapi.com");
	ajax.setRequestHeader("x-rapidapi-key", "mk2PX13lDQmshzxOUSQKML2aBkgvp1F3MaljsnZeRnBSUVNRpl");	

	ajax.send(null);

}

function renderResponse(response){
	const text = document.getElementsByClassName("quote-text");
	const author = document.getElementsByClassName("quote-author");

	text[0].innerHTML = response.quote;
	author[0].innerHTML = response.author;
}