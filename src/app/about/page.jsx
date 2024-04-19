import Image from "next/image";


export const metadata = {
    title: 'About Page',
    description: 'Some About Information',
}

function AboutPage(props) {
    return (
        <section className={"flex justify-between items-center"}>
            <div className={"flex-1 flex-col"}>
                <h2 className={"mb-5 text-[#3673fd] font-bold text-2xl"}>About Agency</h2>
                <h3 className={"font-bold text-4xl mb-10"}>
                    We create digital ideas that are bigger, bolder, braver and better.
                </h3>
                <p className={"mb-10 font-light"}>
                    We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas
                    flexibility and precision. We are best Our Special is in Consulting & Finance Solution Provider.
                    Wide range of WEb and Software Services for you.
                </p>
                <div className={"flex items-center justify-between mt-5 gap-4 max-sm:flex-col max-sm:text-center"}>
                    <div className={"flex-col items-center "}>
                        <h4 className={"text-3xl text-[#3673fd]"}>10 K+</h4>
                        <p>Years of experience</p>
                    </div>
                    <div className={"flex-col"}>
                        <h4 className={"text-3xl text-[#3673fd]"}>234 K+</h4>
                        <p>People reached</p>
                    </div>
                    <div className={"flex-col"}>
                        <h4 className={"text-3xl text-[#3673fd]"}>5 K+</h4>
                        <p>Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className={"flex-1 ml-20 max-md:hidden"}>
                <Image src="/about.png" alt="image of about" width={500} height={500} priority={true} className={"container"}/>
            </div>
        </section>
    );
}

export default AboutPage;