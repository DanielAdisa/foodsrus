import { DISHES } from "../constants"
import DishCard from "./DishCard"

const Dishes = () => {
  return (
    <section className="container py-16 mx-auto " id="dishes">
        <h2 className="mb-8 text-3xl tracking-tighter text-center lg:text-4xl">Our Dishes</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {DISHES.map((project, index) => (
             <DishCard key={index} project={project} />   
            ))}
        </div>
    </section>
  )
}
export default Dishes