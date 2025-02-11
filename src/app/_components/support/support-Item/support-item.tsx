import { supportItemsData } from '@/data/support-items.data'
import Image from 'next/image'
import React from 'react'


const SupportItem: React.FC = () => {
    return (
        <>
            {supportItemsData.map((item, i) => (
                <li key={i}>
                    <div className="flex w-[251px] items-center justify-center gap-4 rounded-lg border border-[#D5DFE4] p-[15px]">
                        <div className="icon-left">
                            <Image
                                width={40}
                                height={40}
                                src={item.srcImage}
                                alt={item.title}
                            />
                        </div>
                        <div className="info-right">
                            <h5 className="text-md font-bold leading-[24px] text-[#425a8b]">
                                {item.title}
                            </h5>
                            <p className="text-sm font-[400] leading-[20px] text-[#8C9EC5]">
                                {item.label}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </>
    )
}

export default SupportItem
