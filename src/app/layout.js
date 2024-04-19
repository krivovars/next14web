import {Inter, Roboto_Mono } from 'next/font/google'


import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
})


export const metadata = {
  title: {default: 'My first Next App',
  template: "%s | NextJS 14"},
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className={"bg-[#0d0c22] text-white font-sans box-border m-5 px-10 flex flex-col h-[96vh]"}>
      <Navbar/>
      <main className={"flex-1 flex items-center"}>
      {children}
      </main>
      <Footer/>
      </body>
      </html>
  )
}