import React from 'react'
import Image from 'next/image'
import Tag from '../../tag/tag'
import Link from 'next/link'
import { IBlogCardProp } from './blogCard.types'

export const BlogCard: React.FC<IBlogCardProp> = ({
    id,
    srcImage,
    label,
    title,
    date,
    visit_number,
    slug,
}) => {
    return (
        <>
            <Link
                href={`/blog/${slug}`}
                className="flex w-[319px] flex-col gap-y-3"
            >
                {/* img */}
                <div className="relative h-[186px] w-[319px] rounded-md">
                    <Image
                        src={srcImage}
                        className="h-full w-full rounded-md object-cover"
                        fill
                        alt="blogImage"
                    />
                </div>
                <Tag tag_title={label} />

                {/* title */}
                <h4 className="text-wrap px-1 text-2xl text-shop-gray-900 hover:text-blue-600">
                    {title}
                </h4>
                {/* date */}
                <div className="flex gap-5">
                    <span className="mr-30 text-xxs text-shop-gray-500">
                        {date}
                    </span>
                    <span className="text-xxs text-shop-gray-500">
                        {visit_number}
                        <span> Mins read</span>
                    </span>
                </div>
            </Link>
        </>
    )
}
