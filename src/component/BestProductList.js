import ProductItem from "./ProductItem";

function BestProductListItem({ product, className }) {
  return (
    <ProductItem
      src={product.images}
      name={product.name}
      price={product.price}
      favoriteCount={product.favoriteCount}
      className="best"
    />
  );
}

function BestProductsList({ products, className }) {
  return (
    <div className={className}>
      <h2 className="products-list-title">베스트 상품</h2>
      <div className="row-list">
        {products.map((product) => {
          return <BestProductListItem product={product} />;
        })}
      </div>
    </div>
  );
}

export default BestProductsList;