// src/components/BuyButton.jsx

function BuyButton({ producto }) {
    const manejarCompra = () => {
      console.log(`Comprando: ${producto.title} (ID: ${producto.id}) | Precio: $${producto.price})`);
      // Aquí puedes agregar la lógica para manejar la compra del producto
    };
  
    return (
      <button type="button" className="buy-button" onClick={manejarCompra}>
        comprar ahora
      </button>
    );
  }
  
  export default BuyButton;
  