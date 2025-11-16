import Link from "next/link"
import Image from "next/image"
import Separator from "./Separator";
import { Github, Linkedin, RssIcon, Twitter, Youtube } from "lucide-react";
import FooterLogo from "@/app/assets/favicon.svg"
import { Card } from "@/components/ui/card";

export default function Footer() {
    return (
        <Card className="pt-20 pb-16 px-14 bg-[#040c02] text-green-100 mb-3 w-[98%] m-auto">
            <div className="flex gap-10 flex-col md:flex-col lg:flex-row">
                {/* Logo & Copyright Section */}
                <div className="w-full md:w-[40%] flex flex-col items-center gap-4">
                    <div className="flex gap-2 items-center">
                        <Image src={FooterLogo} width={40} height={40} alt="logo" />
                        <span className="font-bold text-3xl">Rangoli</span>
                    </div>
                    <span className="text-sm text-green-100/70 text-center">
                        Copyright © 2025 Rangoli UI.
                    </span>
                </div>

                {/* Links Section */}
                <div className="w-full flex flex-wrap justify-center m-auto md:justify-between gap-10">
                    {[
                        { title: "Products", links: ["Introduction", "Setup", "Theming Component", "Contribute"] },
                        { title: "Resources", links: ["Pricing", "Theme", "Testimonial", "Authentication"] },
                        { title: "Explore", links: ["Github Docs", "Github Live Components", "Donate", "Contribute"] },
                        { title: "Company", links: ["Github Docs", "Github Live Components", "Donate", "Contribute"] }
                    ].map((section) => (
                        <div key={section.title} className="w-full sm:w-1/3 md:w-auto flex flex-col items-center md:items-start gap-5">
                            <span className="font-medium">{section.title}</span>
                            <div className="flex flex-col gap-5 text-black/50 text-center md:text-left">
                                {section.links.map((link) => (
                                    <Link key={link} href={"#"} className="duration-300 hover:-translate-y-2 text-green-100 text-[0.83rem]">
                                        {link}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Separator className="bg-white/10 mt-24 w-[95%] m-auto" />
            <div className="flex my-5 ml-10 gap-3">
                <Twitter className="w-5 h-5 text-green-100" />
                <RssIcon className="w-5 h-5 text-green-100"/>
                <Github className="w-5 h-5 text-green-100"/>
                <Linkedin className="w-5 h-5 text-green-100"/>
                <Youtube className="w-5 h-5 text-green-100" />
            </div>
        </Card>
    );
}