import About from '@/components/About'
import Personal from '@/components/Personal'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Project'
import Technologies from '@/components/Technologies'

export default function Home() {
    return (
        <main className="max-w-screen-xl m-auto w-full">
            <Header />
            <Hero />
            <Projects />
            <Technologies />
            <About />
            <Personal />
            <Footer />
        </main>
    )
}
