$(document).ready(function(){
	//GET
	$(".btn-success").on('click' , function(){
		$.ajax({
			url :'/get' ,
			type : 'GET' ,
			success: function(arr){
					$("p").html("");
				$('#get_output').html(JSON.stringify(arr));
			}
			
		});
		
		
	});
	//Post
	$(".btn-info").on('click' , function(){
		$.ajax({
			url:'/post' ,
			type: 'POST' ,
			dataType: 'json' ,
			data: {
				postName: $("#post_name").val(),
				postSurname : $("#post_surname").val() ,
				postEmail : $("#post_email").val(),
				postPassword : $("#post_password").val() 
			}, 
			success: function(){
					$("p").html("");
				$('#post_output').html('Elementi u shtua  me sukses!!!');
			}
		});
	});
	//Put
	$(".btn-warning").on('click' , function(){
		$.ajax({
			url:'/put' ,
			type: 'PUT' ,
			dataType: 'json' ,
			data: {
				putName: $("#put_name").val(),
				putSurname : $("#put_surname").val() ,
				putEmail : $("#put_email").val(),
				putPassword : $("#put_password").val() 
			}, 
			success: function(){
				$("p").html("");
				$('#put_output').html('Elementi fundit u ndryshua me sukses!!!');
			}
		});
		
	});
	//DELETE
	$(".btn-danger").on('click' , function(){
		$.ajax({
			url :'/delete' ,
			type : 'DELETE' ,
			success : function(){
					$("p").html("");
				$('#delete_output').html('El. i fundit u fshi me sukses');
			}
			
		});
		
	});
	
	
});