"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/app/_components/ui/button";

export function ModeToggle() {
  const [themeValue, setThemeValue] = React.useState<string>("light");
  const { setTheme } = useTheme();

  const themeChangeHandler = function () {
    setThemeValue((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      setTheme(newTheme);
      return newTheme;
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={themeChangeHandler}
      className="bg-transparent hover:bg-foreground/30 cursor-pointer border-0"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 border-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
