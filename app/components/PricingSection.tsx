"use client"

import PricingCard from "@/app/components/PricingCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useI18n } from "@/providers/i18nProvider";
import { useState } from "react"


export default function PricingSection() {
    const [isMonthly, setIsMonthly] = useState(false)
    const { t } = useI18n()


    return <section className="flex flex-col items-center">
        <div className="flex flex-col items-center">
            <h2 className="text-3xl tracking-wide leading-[2.5rem] text-center font-medium md:text-4xl lg:text-5xl lg:leading-[3.8rem] lg:w-[70%]">{`${t("pricing-heading")}`}</h2>
            <p className="mt-7 text-center font-medium text-black/60">{`${t("pricing-description")}`}</p>
        </div>
        <div className="mt-20">
            <Tabs defaultValue="yearly">
                <TabsList>
                    <TabsTrigger value="monthly" className="text-base" onClick={() => setIsMonthly(() => true)}>
                        {`${t("monthly")}`}
                    </TabsTrigger>
                    <TabsTrigger value="yearly" className="text-base" onClick={() => setIsMonthly(() => false)}>
                        {`${t("yearly")}`} <span className="ml-3 text-sm font-semibold text-blue-700">Save 16%</span>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
        <div className="flex flex-col gap-10 mt-20 lg:flex-row">
            <PricingCard planTitle={`${t("basic")}`} planDescription={`${t("basic-plan-desc")}`} price={["24", "242"]} isMonthly={isMonthly} features={[
                `${t("basic-feature-1")}`,
                `${t("basic-feature-2")}`,
                `${t("basic-feature-3")}`,
                `${t("basic-feature-4")}`,
            ]} seeAllFeatureLink="/basic-features" />

            <PricingCard planTitle={`${t("plus")}`} planDescription={`${t("plus-plan-desc")}`} price={["59", "595"]} isMonthly={isMonthly} features={[
                `${t("basic-feature-1")}`,
                `${t("basic-feature-2")}`,
                `${t("basic-feature-3")}`,
                `${t("basic-feature-4")}`,
            ]} seeAllFeatureLink="/plus-features" />

            <PricingCard planTitle={`${t("bussiness")}`} planDescription={`${t("Bussiness-plan-desc")}`} price={["83", "836"]} isMonthly={isMonthly} features={[
                `${t("basic-feature-1")}`,
                `${t("basic-feature-2")}`,
                `${t("basic-feature-3")}`,
                `${t("basic-feature-4")}`,
            ]} seeAllFeatureLink="/business-features" />
        </div>
    </section>
}