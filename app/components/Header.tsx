import { GithubIcon, Star } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import Separator from "./Separator";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <>
            <header className="h-[65px]  w-full flex items-center justify-between px-10">
                {/* Left Side */}
                <div className="flex items-center">
                    {/* Logo */}
                    <h1 className="text-3xl font-medium mr-10">RangoliUI</h1>
                    {/* Navigation Menu */}
                    <nav>
                        <ul className="flex items-center gap-7 text-sm font-medium">
                            <li>
                                <a
                                    href="#"
                                    className="p-2 font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
                                >
                                    Get Started
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="p-2 font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
                                >
                                    Docs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="p-2 font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
                                >
                                    Contribute
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="p-2 font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
                                >
                                    Donate
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Right Side */}
                <div className="flex items-center gap-2">
                    <LanguageSelector />
                    <ThemeSwitcher defaultValue="dark" />
                    <Button className="flex items-center gap-2 cursor-pointer">
                        <GithubIcon className="w-4 h-4" />
                        <div className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            <span className="text-xs">1.2K</span>
                        </div>
                    </Button>
                </div>
            </header>
            <Separator />
        </>
    )
}