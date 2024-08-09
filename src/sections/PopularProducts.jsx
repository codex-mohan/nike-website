import { products } from "../constants"
import PopularProductsCard from "../components/PopularProductsCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-14">
      <div className="flex justify-center flex-col gap-5">
        <h2 className="text-4xl font-palanquin font-bolds">
          <span className="text-coral-red">Popular products</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-monsterrat text-slate-gray">Experience Top notch quality with our sought-after selections. Discover a world of comfort, design and value</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))
        }
      </div>
    </section>
  )
}

export default PopularProducts