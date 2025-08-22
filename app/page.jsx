'use client'
import WaitlistForm from '../components/WaitlistForm'
import PrivacyPolicyModal from '../components/PrivacyPolicyModal'

// Hero background images.  These files live in the public/bg directory.  You
// can add or remove images here to change the rotation.  They are
// automatically cross‑faded via CSS defined in globals.css.
// Only two images are available in this repository for the cross‑fade.  Feel free
// to add more files to public/bg and list them here.  The animation will
// automatically adjust based on the number of slides.
const HERO_IMAGES = [
  '/bg/pexels-tima-miroshnichenko-6388383.jpg',
  '/bg/todd-quackenbush-E9PJO_vL3E8-unsplash.jpg',
]

export default function Page() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24 pb-12">
      {/* Background image cross fade */}
      <div className="hero-bg">
        {HERO_IMAGES.map((src, idx) => (
          <img key={idx} src={src} alt="background" className="hero-slide" />
        ))}
      </div>

      <header className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
        <div className="flex items-center gap-3">
          <img src="/CH-FullLogo-RGB_LightPurple-FA.svg" alt="Chapter Health" className="h-7 w-auto" />
        </div>
      </header>

      <section className="relative z-20 flex flex-col items-center text-light-balance max-w-xl">
        <div className="font-heading text-xs uppercase tracking-widest opacity-80">( Take Control )</div>
        <h1 className="font-heading uppercase text-[clamp(44px,8vw,96px)] leading-[0.9] mt-2">
          TAKE\u00a0CONTROL
        </h1>
        <div className="font-heading uppercase tracking-wide text-[clamp(16px,3vw,28px)] opacity-90 mt-1">
          Join the waitlist
        </div>
        <p className="mt-4 max-w-prose opacity-95 text-[clamp(16px,2.2vw,24px)]">
          A place where your health isn’t a script you follow — but a story you edit. This is healthcare built for people who
          refuse to settle.
        </p>

        <div className="mt-6 w-full max-w-md">
          <WaitlistForm />
        </div>
        <p className="mt-2 text-xs opacity-75 max-w-sm">
          By joining, you agree we may email you about the launch. No medical advice is provided on this page.{' '}
          <PrivacyPolicyModal />
        </p>
      </section>

      <footer className="absolute bottom-2 left-0 right-0 text-center text-xs opacity-60 z-10">
        © {new Date().getFullYear()} Chapter Health — mychapter.com.au
      </footer>
    </main>
  )
}
