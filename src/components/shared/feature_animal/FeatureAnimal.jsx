import Link from "next/link";
import Animal from "./Animal";
import { MdKeyboardArrowRight } from "react-icons/md";
import { animalJson } from "@/lib/data";

const FeatureAnimal = async () => {
    const animal = await animalJson();

    return (
        <div className="container_qurban section-space pt-12 mb-12">
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[28px] md:text-[32px] font-bold heading-color">Featured Selections</h2>
                    <p className="text-body-md text-on-surface-variant">Top-tier healthy livestock curated for your sacrifice.</p>
                </div>
                <Link href={'/animal'} className="flex gap-1">View All <MdKeyboardArrowRight className="text-[20px]"/></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mt-8 md:mt-12">
                {animal?.slice(0, 3).map(animal => (
                    <Animal key={animal.id} animal={animal}></Animal>
                ))}
            </div>
        </div>
    );
};

export default FeatureAnimal;