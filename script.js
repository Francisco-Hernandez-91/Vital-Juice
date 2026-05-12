// Datos de ejemplo para tus jugos
const productos = [
    {
        nombre: "Detox Verde",
        descripcion: "Espinaca, manzana verde, pepino y limón.",
        precio: "$25.00",
        imagen: "https://images.unsplash.com/photo-1544054151-247b1eaf60f8?auto=format&fit=crop&w=300&q=80"
    },
    {
        nombre: "Energy Glow",
        descripcion: "Apio, jengibre, piña y kale.",
        precio: "$20.00",
        imagen: "https://images.unsplash.com/photo-1615478503562-ec2e8aa0e24e?auto=format&fit=crop&w=300&q=80"
    },
    {
        nombre: "Antioxidante",
        descripcion: "Arándanos, remolacha y zanahoria.",
        precio: "$25.00",
        imagen: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=300&q=80"
    }
];

// Función para mostrar los productos
function cargarProductos() {
    const grid = document.getElementById('grid-productos');
    
    productos.forEach(jugo => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="${jugo.imagen}" alt="${jugo.nombre}">
            <h3>${jugo.nombre}</h3>
            <p>${jugo.descripcion}</p>
            <p><strong>${jugo.precio}</strong></p>
            <button class="btn">Agregar</button>
        `;
        grid.appendChild(card);
    });
}

// Evento de envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu pedido! Nos pondremos en contacto pronto.');
    this.reset();
});

// Inicializar
window.onload = cargarProductos;