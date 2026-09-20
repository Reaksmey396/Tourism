import React from 'react'
import { ArrowRight, CalendarDays, MapPin, Play, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import bannerImage from '../../assets/Images/Benner.jpg'

const Benner = () => {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-slate-950 text-white">
      <img src={bannerImage} alt="Cambodia travel landscape" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />

      <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="w-full max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-amber-200 backdrop-blur-md">
            <Sparkles className="h-4 w-4" /> DISCOVER THE KINGDOM OF WONDER
          </div>
          <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            See Cambodia<span className="block text-amber-300">beyond the map.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-100 sm:text-xl">
            Ancient temples, vibrant cities, quiet coastlines, and stories worth taking home. Start planning a journey that feels truly yours.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/provinces" className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 text-base font-bold text-slate-950 transition hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-500/20">
              Explore destinations <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
              <span className="grid h-5 w-5 place-items-center rounded-full border border-white/80"><Play className="ml-0.5 h-3 w-3 fill-current" /></span> Why Cambodia
            </Link>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-white/20 pt-6 sm:gap-7">
            <div><p className="text-2xl font-extrabold sm:text-3xl">25</p><p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-300 sm:text-sm">Provinces</p></div>
            <div><p className="text-2xl font-extrabold sm:text-3xl">2,000+</p><p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-300 sm:text-sm">Temples</p></div>
            <div><p className="text-2xl font-extrabold sm:text-3xl">365</p><p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-300 sm:text-sm">Days to explore</p></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-6 hidden w-64 rounded-2xl border border-white/25 bg-slate-950/55 p-4 shadow-2xl backdrop-blur-lg lg:block lg:right-16">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-amber-400 p-2 text-slate-950"><MapPin className="h-5 w-5" /></div>
          <div><p className="text-xs font-semibold uppercase tracking-wider text-amber-200">Featured route</p><p className="mt-1 font-bold">Siem Reap to Kampot</p><p className="mt-1 text-sm text-slate-300">Culture, coast &amp; countryside</p></div>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-white/15 pt-3 text-sm text-slate-200"><CalendarDays className="h-4 w-4 text-amber-300" /> Perfect for a 7-day escape</div>
      </div>
    </section>
  )
}

export default Benner
