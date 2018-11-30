function addObra(titulo, descripcion,fecha,precio) {
   	var title = $("<h5/>", {
      "class":"card-title",
      html: titulo
    })

    var imagen = $("<img/>",{
    	"src":imagen
    })

    var p = $("<p/>",{
      "class": "card-text",
      html: "Descripcion:" +descripcion
    })

    var p2 = $("<p/>",{
      "class": "card-text",
      html: "Fecha: "+fecha
    })

    var p3 = $("<p/>",{
      "class": "card-text",
      html: "Precio: "+precio
    })

    var div = $( "<div/>", {
      "class": "col-xl-4"
    });

    var but= $("<button/>",{
    	html: "Comprar"
    })
    
    title.appendTo(div);
    imagen.appendTo(div)
    p.appendTo(div);
    p2.appendTo(div);
    p3.appendTo(div);
    but.appendTo(div);
    if(titulo.substring(0,6)=="Dibujo"){
    	div.appendTo("#dibujo")
    }
    if(titulo.substring(0,7)=="Pintura"){
    	div.appendTo("#pintura")
    }
    
    
    
}

function vaciar(){
	$("#dibujo").empty()
	$("#pintura").empty()
}

function loadObraXml(ob) {
  $.ajax({
      type: "GET",
      url: "./data/obras.xml",
      dataType: "xml",
      success: function(xml){
          $(xml).find('item').each(function(){
          	  var id= $(this).attr("id")
          	  if(ob==id){      
              var titulo = $(this).find('titulo').text();
              var imagen= $(this).find('imagen').text();
              var descripcion = $(this).find('descripcion').text();
              var fecha=$(this).find('fecha').text();
              var precio=$(this).find('precio').text();              
              addObra(titulo,descripcion,fecha,precio)
          }
          
          });
      },
      error: function() {
        alert("Error al procesar el xml");
      }
  });
}


$(document).ready(function(){

	$("button").click(function(e){
    e.preventDefault();
    vaciar()
    loadObraXml(this.id)
    




})
	
})
