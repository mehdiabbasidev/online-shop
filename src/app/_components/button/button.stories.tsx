import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { IconAccount} from "../icons/icons";

const meta: Meta<typeof Button> = {
   component: Button,
   tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Variants: Story = {
   render: () => (
      <>
         <Button variant="primary">Primary</Button>
         <Button variant="secondary">Secondary</Button>
         <Button variant="success">Success</Button>
         <Button variant="danger">Danger</Button>
         <Button variant="warning">Warning</Button>
         <Button variant="info">Info</Button>
         <Button disabled={true}>disable</Button>
      </>
   ),
};


export const Outline: Story = {
   render: () => (
      <>
         <Button variant="primary" state="outline">Primary</Button>
         <Button variant="secondary" state="outline">Secondary</Button>
         <Button variant="success" state="outline">Success</Button>
         <Button variant="danger" state="outline">Danger</Button>
         <Button variant="warning" state="outline">Warning</Button>
         <Button variant="info" state="outline">Info</Button>
      </>
   ),
};


export const Link: Story = {
   render: () => (
      <>
         <Button variant="primary" state="link">Primary</Button>
         <Button variant="secondary" state="link">Secondary</Button>
         <Button variant="success" state="link">Success</Button>
         <Button variant="danger" state="link">Danger</Button>
         <Button variant="warning" state="link">Warning</Button>
         <Button variant="info" state="link">Info</Button>
      </>
   ),
};

export const Disabled: Story = {
   render: () => (
      <>
         <Button variant="primary" disabled={true}>Primary</Button>
         <Button variant="secondary" disabled={true}>Secondary</Button>
         <Button variant="success" disabled={true}>Success</Button>
         <Button variant="danger" disabled={true}>Danger</Button>
         <Button variant="warning" disabled={true}>Warning</Button>
         <Button variant="info" disabled={true}>Info</Button>
      </>
   ),
};

export const Size: Story = {
   render: () => (
      <div className="flex items-center">
         <Button variant="primary" compSize="xs">Extra Small</Button>
         <Button variant="primary" compSize="sm">Small</Button>
         <Button variant="primary" compSize="md">Medium</Button>
         <Button variant="primary" compSize="lg">Large</Button>
         <Button variant="primary" compSize="xl">Extra Large</Button>
      </div>
   ),
};

export const Shape: Story = {
   render: () => (
      <>
         <div className="flex flex-col gap-2 w-full">
            <Button variant="primary" compSize="lg" shape="default">Default</Button>
            <Button variant="primary" compSize="lg" shape="wide">Wide</Button>
            <Button variant="primary" compSize="lg" shape="square">Square</Button>
            <Button variant="primary" compSize="lg" shape="pill">Pill</Button>
            <Button variant="primary" compSize="lg" shape="full">Full</Button>
         </div>
      </>
   ),
};

export const IconButton: Story = {
   render: () => (
      <>
         <Button variant="success" >
            <IconAccount color="#fff" width={16} height={16} className="mr-1" />
            <span>
               Login
            </span>
         </Button>
      </>
   ),
};

export const LoadingButton: Story = {
   render: () => (
      <>
         <Button variant="info" shape="wide" isLoading={true} loadingText="Loading..." >Register</Button>
      </>
   ),
};
