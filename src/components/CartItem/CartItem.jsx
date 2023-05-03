import "./CartItem.css";

const CartItem = ({ item, quantity }) => {
  return (
    <>
      <section className="productCart">
        <h3 className="tituloCart">{item.name}</h3>
        <ul className="detailsCompra">
          <li>Price: ${item.price}</li>
          <li>Quantity: {quantity}</li>
        </ul>
      </section>
    </>
  );
};

export default CartItem;
