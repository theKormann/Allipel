'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function Cta() {
  const router = useRouter()

  return (
    <section
      id="contact"
      className="justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
    >
      <div
        className="relative mx-auto flex max-w-6xl flex-col items-start gap-4 rounded-2xl border border-neutral-800/50
        bg-[url('/images/bg.png')] bg-cover bg-center p-6 sm:gap-5 sm:p-12 md:gap-7 md:p-16 lg:p-24"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-base h-2/3 w-2/3 rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-2xl text-left">
          <p className="mb-2 text-sm font-semibold uppercase text-white">
            Entre em contato
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Allipel
          </h2>

          <p className="mt-2 text-base text-white max-w-[150px] sm:max-w-none sm:text-lg">
            Esclareça dúvidas e encontre o que precisa
          </p>


          <a href="https://wa.me/5511916400563" target="_blank" rel="noopener noreferrer">
            <Button
              onClick={() => router.push('/form')}
              variant="default"
              size="lg"
              className="cursor-pointer mt-6 rounded-full bg-black text-white hover:bg-neutral-800"
            >
              💬 Contate-nos
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
