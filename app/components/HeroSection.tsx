"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ShoeProductCard from "@/app/components/ShoeProductCard"
import ChartComponent from "@/app/components/ChartComponent"
import PricingCard from "./PricingCard"
import { useI18n } from "@/providers/i18nProvider"

export default function HeroSection() {
    const {t} = useI18n()

    return (
        <section className="w-full h-auto min-h-[calc(100vh-4.5rem)] bg-[#040c02] text-green-100 flex flex-col lg:flex-row">
            {/* Left Content */}
            {/* Left Content */}
            <div className="w-full lg:w-1/2 h-full pt-20 px-6 lg:pt-24 lg:pl-16 lg:pr-12 flex flex-col text-center md:text-left items-center md:items-start">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[3.5rem]">
                    {`${t("hero-heading")}`}
                </h1>
                <p className="mt-5 text-sm sm:text-base text-green-100 max-w-xl">
                   {`${t("hero-description")}`}
                </p>

                <Link href="https://rangoli-ui-docs.vercel.app/" target="_blank" className="flex items-center justify-center gap-1 primary-btn mt-5 text-black rounded-md bg-green-500 p-2">
                    Discover Components <ArrowRight className="w-5" />
                </Link>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 px-6 lg:px-0">
                <div className="relative flex justify-center w-full lg:w-[95%] h-auto lg:h-[85%]  mx-auto lg:mx-0 border border-white/5 border-t-0 rounded-bl-2xl bg-[#10260f] pt-5 pl-5 overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-3">
                        {/* ShoeProductCard is hidden on `sm`, but visible on `md+` */}
                        <div className="hidden md:flex flex-col gap-2">
                            <ShoeProductCard />
                            <ChartComponent />
                        </div>
                        <div>
                            <PricingCard
                                planTitle="Basic"
                                planDescription="Create interactive forms that connect to your workflow"
                                price={["24", "242"]}
                                isMonthly={true}
                                features={[
                                    "100 responses/mo included",
                                    "1 user",
                                    "Unlimited forms",
                                    "Unlimited questions",
                                ]}
                                seeAllFeatureLink="/basic-features"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}