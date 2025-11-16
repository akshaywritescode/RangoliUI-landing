"use client"

import PricingCard from "@/app/components/PricingCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useI18n } from "@/providers/i18nProvider";
import { useState } from "react"


export default function PricingSection() {
    const [isMonthly, setIsMonthly] = useState(false)
    const {t} = useI18n()


    return <section className="flex flex-col items-center">
        <div className="flex flex-col items-center">
            <h2 className="text-3xl tracking-wide leading-[2.5rem] text-center font-medium md:text-4xl lg:text-5xl lg:leading-[3.8rem] lg:w-[70%]">{`${t("pricing-heading")}`}</h2>
            <p className="mt-7 text-center font-medium text-black/60">{`${t("pricing-description")}`}</p>
        </div>
        <div className="mt-20">
            <Tabs defaultValue="yearly">
                <TabsList>
                    <TabsTrigger value="monthly" className="text-base" onClick={() => setIsMonthly(() => true)}>
                        Monthly
                    </TabsTrigger>
                    <TabsTrigger value="yearly" className="text-base" onClick={() => setIsMonthly(() => false)}>
                        Yearly <span className="ml-3 text-sm font-semibold text-blue-700">Save 16%</span>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
        <div className="flex flex-col gap-10 mt-20 lg:flex-row">
            <PricingCard planTitle="Basic" planDescription="Create interactive forms that connect to your workflow" price={["24", "242"]} isMonthly={isMonthly} features={["100 responses/mo included", "1 user", "Unlimited forms", "Unlimited questions"]} seeAllFeatureLink="/basic-features" />

            <PricingCard planTitle="Plus" planDescription="Make your forms more beautiful and on-brand" price={["59", "595"]} isMonthly={isMonthly} features={["1,000 responses/mo included", "3 user", "Everything in Basic", "Remove FillUp branding", "Custom subdomain"]} seeAllFeatureLink="/plus-features" />

            <PricingCard planTitle="Business" planDescription="Analyze performance and do more with your data" price={["83", "836"]} isMonthly={isMonthly} features={["10,000 responses/mo included", "5 user", "Everything in Plus", "Drop-off rates", "Conversion tracking", "Priority support and live chat"]} seeAllFeatureLink="/business-features" />
        </div>
    </section>
}