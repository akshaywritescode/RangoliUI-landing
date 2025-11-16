import NikeShoe from "@/app/assets/nike.png"
import Image from "next/image"

export default function ShoeProductCard() {
    return <div className="w-[280px] p-3 rounded-md bg-white shadow-md shadow-black">
        <div className="w-full bg-green-400 rounded-lg">
            <Image src={NikeShoe} alt="product image" width={250} height={250} unoptimized quality={100} className="-rotate-12" />
        </div>
    </div>
}