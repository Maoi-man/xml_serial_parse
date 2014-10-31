$('document').ready(function () {
    $('#play_button').click(function () {
	var audio1 = document.getElementById('audio1');
	$.ajax({
         type:'post',//тип запроса: get,post либо head
         url:'ajax_sync.php',//url адрес файла обработчика
	 data: { id : '!!!' },
	 success: function(data) {
	    console.log(data);
	    audio1.play();
 	}
  
  }); 
	
    });
});   
