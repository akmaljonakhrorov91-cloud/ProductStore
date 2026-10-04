import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";
function Home() {
  const { data, isPending, error } = useFetch("https://dummyjson.com/products");
  return (
    <section>
      <div className="container">
        {error && <h2 className="error">{error}</h2>}
        {isPending && <h2 className="loading"> Loading...</h2>}
        {data && <ProductList products={data.products} />}
      </div>
    </section>
  );
}

export default Home;
