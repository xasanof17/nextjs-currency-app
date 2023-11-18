"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-3">
      <Link
        href={pathname == "/" ? "/currencies" : "/"}
        className="text-base font-medium text-foreground"
      >
        {pathname == "/" ? "Currencies" : "Home"}
      </Link>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
        <Moon className="hidden h-5 w-5 dark:block" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}

export default ThemeToggle;
