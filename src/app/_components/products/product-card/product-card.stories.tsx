import { Meta, StoryObj } from '@storybook/react'
import ProductCard from './product-card'

const meta: Meta<typeof ProductCard> = {
    component: ProductCard,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ProductCard>

export const Variants: Story = {
    render: () => (
        <>
            <ProductCard />
        </>
    ),
}
