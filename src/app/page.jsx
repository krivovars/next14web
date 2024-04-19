import Image from "next/image";

const Home = () => {
    return (
        <section className={"flex justify-center items-center container relative z-10"}>
            <div className={"flex-1 flex-col container"}>
                <h1 className={"font-bold text-4xl mb-14"}>
                    Example of a TItle
                </h1>
                <p className={"mb-8 font-light"}>WBla aiuenalor alsjurm. Lorem ipsum, dolor sit consecetur adipicing elit ahskwot
                    skaoepyker appwl. Vero
                    balandis iadipcisi iaskikwa minima recipients a autem virale Ende.</p>
                <div className={"gap-6 mb-4 flex justify-center"}>
                    <button className={"p-5 min-w-30 cursor-pointer bg-[#3673fd] text-white rounded-2xl  max-h-3 flex items-center"}>Learn More</button>
                    <button className={"p-5 min-w-30 cursor-pointer bg-white text-blue-900 rounded-2xl  max-h-3 flex items-center"}>Contact Us</button>
                </div>
                <div>
                    <Image src={"/brands.png"} alt={"Partners"} width={500} height={50}
                           className={"relative grayscale"}/>
                </div>
            </div>
            <div className={"flex flex-1 container max-md:hidden"}>
                <Image src={"/hero.gif"} alt={"Hero"} height={500} width={500} className={"relative"}/>
            </div>
        </section>
    );
};




export default Home;