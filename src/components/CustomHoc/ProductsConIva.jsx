export const productConIva = (Component) => {
  return function ({ id, name, price, img, stock, category, description }) {
    const newPrice = price * 1.21;
    return (
      <>
        <Component
          price={newPrice}
          id={id}
          name={name}
          img={img}
          stock={stock}
          category={category}
          description={description}
        />
      </>
    );
  };
};
