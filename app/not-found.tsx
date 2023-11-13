import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="py-8 px-4 mx-auto max-w-screen max-h-screen lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
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
