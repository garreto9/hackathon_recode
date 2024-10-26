// Google Maps e Envio de Formulário
function initMap() {
    var options = {
      zoom: 8,
      center: {lat: -30.0346, lng: -51.2177} // Rio Grande do Sul
    };
    var map = new google.maps.Map(document.getElementById('mapa'), options);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    initMap();
    
    const form = document.getElementById('registro-necessidades');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const nome = document.getElementById('nome').value;
      const necessidade = document.getElementById('necessidade').value;
      const localizacao = document.getElementById('localizacao').value;
  
      alert(`Necessidade registrada: ${nome}, ${necessidade}, ${localizacao}`);
      
      // Enviar email (usando um serviço externo como EmailJS)
    });
  });
  