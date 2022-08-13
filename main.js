let kutu = document.querySelectorAll('th'); //console.log(kutu); ------> console'da nodelist olarak dizdim
kutu = Array.from(kutu); //console'da array olarak dizdim
console.log(kutu);


let oyuncu = "X";

let kombinasyon = [ //kazanabilecek kombinasyonlar, sayıları yukarıdaki kodumla öğrendim
	[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

function renk(kombinasyon){ //kazanan kombinasyonun rengini değiştirdim
	kombinasyon.forEach(function(id){
		kutu[id].classList.add("renk");
	})
}

function kazanan(){
	kombinasyon.forEach(function(kombinasyon){
		let kontrol = kombinasyon.every(id => kutu[id].innerText.trim() == oyuncu); //eşleştirdim
		if (kontrol) {
			alert(oyuncu + "  " + "kazandı"); //yazdırdım
			renk(kombinasyon);
		}
	});
}


kutu.forEach(function(th){
	th.addEventListener('click', function(){
		new Audio('media/click.mp3').play(); //her tıklamaya çok tatlı bi ses ekledim
		//alert("tıklandı"); ------> her th tıklandığında alertte tıklandı yazdırdım
		//th.innerText = "X"; ------> manual olarak th içindeki yazıyı X ile değiştirdim 
		//th.innerText = oyuncuX; -----> değişken ile th içindeki yazı X ile değiştirdim ama sabit bir değeri bir değişkene atamış oldum, yine manual
		if(th.innerText.trim() != ""){return;} // ----> değer atanmış olan kutucuğua tekrar değer atanmasını engelledim. kowalski analiz!!
		th.innerText = oyuncu; 
		oyuncu = oyuncu == "X" ? "O" : "X"; //----> değişkene otomatik değer attım
		kazanan();


	});
});
