'use client'
import React, { useState } from 'react'
import { Button } from '../button'
import { BigBannerProps } from './big-banner.types'

const BigBanner: React.FC<BigBannerProps> = ({ title, content, img, url }) => {
    const [value, setValue] = useState('')
    return (
        <div className="big-banner-wrapper">
            <div className="big-banner-container">
                <div className="big-banner-content-box">
                    <h3 className="big-banner-title">
                        Subscribe &amp; Get
                        <span className="px-2 text-shop-gray-1000">10%</span>
                        Discount
                    </h3>
                    <p className="big-banner-subtitle">
                        Get E-mail updates about our latest shop and
                        <span className="font-lg-bold">special offers.</span>
                    </p>
                </div>
                <div className="box-form-newsletter">
                    <form className="form-newsletter">
                        <input
                            className="input-newsletter"
                            value=""
                            placeholder="Your email Address"
                            onChange={(e) => setValue(e.target.value)}
                        />

                        <Button variant="warning" className="my-0 mr-0 h-full">
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BigBanner
