import Image from "next/image";

export const metadata = {
    title: 'Contact Page',
    description: 'Apple Contact Information',
}

function ContactPage(props) {
    return (
        <section className={"flex justify-between items-center container gap-20"}>
            <div className={"container flex-1 relative max-md:hidden"}>
                <Image src={"/contact.png"} alt={"contact us image"} width={500} height={500} priority="false" />
            </div>
            <div className={"container flex-1"}>
                <form className={"flex flex-1 flex-col gap-5"}>
                    <input type={"text"} placeholder={"Name and Surname"} className={"p-5 rounded-2xl bg-gray-600 text-gray-300"}/>
                    <input type={"email"} placeholder={"Email"} className={"p-5 rounded-2xl bg-gray-600 text-gray-300"}/>
                    <input type={"number"} placeholder={"Phone Number"} className={"p-5 rounded-2xl bg-gray-600 text-gray-300"}/>
                    <textarea placeholder={"Message"} className={"p-5 rounded-2xl bg-gray-600 text-gray-300"} rows={5}/>
                    <button className={"p-5 bg-[#3673fd] rounded-full h-1.5 flex items-center justify-center font-bold cursor-pointer"}>Send</button>
                </form>
            </div>
        </section>
    );
}

export default ContactPage;