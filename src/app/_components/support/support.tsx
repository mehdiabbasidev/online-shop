import React from 'react'
import { SupportItemProps } from './support.types'
import SupportItem from './support-Item/support-item'

const Support: React.FC<SupportItemProps> = ({ icon, title }) => {
    return (
        <div className="w-full">
            <ul className="flex flex-wrap items-center justify-center gap-4">
                <SupportItem />
            </ul>
        </div>
    )
}

export default Support
