import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Link from "next/link";


const NotFound = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='h-[80vh] flex justify-center items-center flex-col gap-4 space-y-2'>
                <h2 className='font-bold text-5xl text-primary'>This page is not found</h2>
                <Link href={'/'}>
                    <button className='btn bg-secondary text-white'>Back to Home</button>
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;