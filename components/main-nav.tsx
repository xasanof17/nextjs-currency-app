"use client"
import {Dispatch, SetStateAction} from 'react'
import { usePathname } from "next/navigation"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Link from "next/link"

interface MainNavProps {
  items?: NavItem[]
  toggleMenu: boolean
  setToggleMenu: Dispatch<SetStateAction<boolean>>
}

export function MainNav({ items, toggleMenu, setToggleMenu }: MainNavProps) {
  const pathname = usePathname()
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        
        <nav className={cn(toggleMenu? "flex flex-col fixed top-14 bg-blackground backdrop-blur-2xl left-0 w-full h-full items-center justify-top py-5" : "sm:flex hidden", "gap-6")}>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  onClick={() => toggleMenu && setToggleMenu(prev => !prev)}
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-[15px] font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80",
                    item.href === pathname && "text-blue-500"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
