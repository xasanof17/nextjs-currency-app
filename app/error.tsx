"use client"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function ErrorPage() {
  return (
    <section className="max-w-screen mx-auto max-h-screen px-4 py-8 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
          404
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Somethingd&apos;s missing.
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Sorry, we cand&apos;t find that page. Youd&apos;ll find lots to explore on the
          home page.{" "}
        </p>
        <Link href="/" className={buttonVariants()}>
          Back to Homepage
        </Link>
      </div>
    </section>
  )
}
