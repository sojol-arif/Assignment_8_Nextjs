import Animal from "./Animal";

const animalJson = async () => {
    const res = await fetch('https://assignmen-8-nextjs-server.onrender.com/animal');
    const data = res.json();
    return data;
}

const FeatureAnimal = async () => {
    const animal = await animalJson();
    console.log(animal, 'from FeatureAnimal Components');

    return (
        <div className="container_qurban section-space pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 md:mt-12">
                {animal?.slice(0, 4).map(animal=>(
                    <Animal key={animal.id} animal={animal}></Animal>
                ))}
            </div>
        </div>
    );
};

export default FeatureAnimal;