'use client'
import { useState } from "react"
import { siteConfig } from "@/config/site"
import {  buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { MenuIcon, XIcon } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex py-2 xl:py-3 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
            <button  className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                  className: 'sm:hidden block'
                })} onClick={() => setToggleMenu(prev => !prev)}>
{toggleMenu ? (
  <XIcon className="sm:hidden block h-6 w-6 fill-current" />
): (
<MenuIcon className="sm:hidden block h-6 w-6 fill-current" />
)}
            <span className="sr-only">MenuIcon</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
