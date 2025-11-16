//Run The following command to install required shadcn component
//npx shadcn@latest add button

"use client";

import { useState } from "react";
import { GithubIcon, Star, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/providers/i18nProvider";
import Separator from "./Separator";
import Link from "next/link";
import FooterLogo from "@/app/assets/favicon.svg"
import Image from "next/image";

export default function Header() {
    const { t } = useI18n();
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="h-[65px] w-full flex items-center justify-between px-6 lg:px-10">
                {/* LEFT */}
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2">
                         <Image src={FooterLogo} width={40} height={40} alt="logo" />
                        <h1 className="text-3xl font-medium">RangoliUI</h1>
                    </div>
                    

                    {/* Desktop Nav (1120px and up) */}
                    <nav className="hidden xl:block">
                        <ul className="flex items-center gap-7 text-sm font-medium">
                            <li className="cursor-pointer">
                                <Link href={"https://rangoli-ui-docs.vercel.app/"} className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                                    {t("get_started")}
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href={"https://rangoli-ui-docs.vercel.app/"} className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                                    {t("documentation")}
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href={"https://github.com/akshaywritescode/RangoliUI-Docs"} className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                                    {t("contribute")}
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href={"#"} className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                                    {t("donate")}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2">
                    {/* Hide these after 700px */}
                    <div className="hidden sm:flex items-center gap-2">
                        <LanguageSwitcher />
                        <ThemeSwitcher defaultValue="dark" />

                        <Button className="flex items-center gap-2 cursor-pointer">
                            <GithubIcon className="w-4 h-4" />
                            <div className="flex items-center gap-1">
                                <Star className="w-3 h-3" />
                                <span className="text-xs">1.2K</span>
                            </div>
                        </Button>
                    </div>

                    {/* Burger menu (visible < 1120px) */}
                    <button
                        className="xl:hidden p-2 rounded-md hover:bg-accent"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Dropdown */}
            {open && (
                <div>
                    {/* Mobile nav links */}
                    <div className="xl:hidden w-full px-6 py-4 flex flex-col gap-3 text-sm font-medium border-b">
                        <Link href={"#"} className="p-2 rounded-md hover:bg-accent">{t("get_started")}</Link>
                        <Link href={"#"} className="p-2 rounded-md hover:bg-accent">{t("documentation")}</Link>
                        <Link href={"#"} className="p-2 rounded-md hover:bg-accent">{t("contribute")}</Link>
                        <Link href={"#"} className="p-2 rounded-md hover:bg-accent">{t("donate")}</Link>
                    </div>

                    {/* Right side — visible only BELOW 700px */}
                    <div className="flex sm:hidden px-6 py-4 flex-col gap-3">
                        <LanguageSwitcher />
                        <ThemeSwitcher defaultValue="dark" />

                        <Button className="flex items-center gap-2 cursor-pointer w-fit">
                            <GithubIcon className="w-4 h-4" />
                            <div className="flex items-center gap-1">
                                <Star className="w-3 h-3" />
                                <span className="text-xs">1.2K</span>
                            </div>
                        </Button>
                    </div>
                </div>
            )}
            <Separator />
        </>
    );
}
