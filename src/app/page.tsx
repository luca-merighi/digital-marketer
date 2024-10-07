import Header from '@/components/header'

import LandingPage from '@/components/sections/landing-page'
import Introduction from '@/components/sections/introduction'
import About from '@/components/sections/about'
import Benefits from '@/components/sections/benefits'
import Testimonials from '@/components/sections/testimonials'
import Countdown from '@/components/sections/countdown'
import FreeContent from '@/components/sections/free-content'
import UpSell from '@/components/sections/up-sell'

import Footer from '@/components/footer'

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-50 flex flex-col">
            <Header />

            <main className="flex items-center justify-center h-full w-full">
                <div className="h-full w-full max-w-7xl">
                    <LandingPage />

                    <Introduction />

                    <About />

                    <Benefits />

                    <Testimonials />

                    <Countdown />

                    <FreeContent />

                    <UpSell />
                </div>
            </main>

            <Footer />
        </div>
    )
}