const CartItem = ({ item, quantity }) => {
  return (
    <>
      <section className="sectionCart">
        <h4>NAME: {item.name} </h4>
        <p>PRICE: {item.price} </p>
        <p>QUANTITY: {quantity} </p>
      </section>
    </>
  );
};

export default CartItem;
