"use client";
import { useRef } from "react";
import { Input } from "../_components/input";
import { BaseIcon } from "../_components/icons/base_icon";
import { IconAccount, IconEmail } from "../_components/icons/icons";
import { Button } from "../_components/button";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const logValue = () => {
    alert(inputRef.current?.value);
  };
  return (
    <div>
      <h1 className="text-2xl mb-8">فروشگاه اینترنتی درسمن</h1>
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="success">success</Button>
      <Button variant="danger">danger</Button>
      <Button variant="warning">warning</Button>
      <Button variant="info">info</Button>
      <hr />
      <Button variant="primary" state="outline">primary</Button>
      <Button variant="secondary" state="outline">secondary</Button>
      <Button variant="success" state="outline">success</Button>
      <Button variant="danger" state="outline">danger</Button>
      <Button variant="warning" state="outline">warning</Button>
      <Button variant="info" state="outline">info</Button>
      <hr />
      <Button variant="primary" state="link">primary</Button>
      <Button variant="secondary" state="link">secondary</Button>
      <Button variant="success" state="link">success</Button>
      <Button variant="danger" state="link">danger</Button>
      <Button variant="warning" state="link">warning</Button>
      <Button variant="info" state="link">info</Button>
      <hr />
      <Button variant="primary" disabled={true}>primary</Button>
      <Button variant="secondary" disabled={true}>secondary</Button>
      <Button variant="success" disabled={true}>success</Button>
      <Button variant="danger" disabled={true}>danger</Button>
      <Button variant="warning" disabled={true}>warning</Button>
      <Button variant="info" disabled={true}>info</Button>
      <hr />
    <div className="flex items-center">
          <Button variant="primary" compSize="xs">Extra Small</Button>
          <Button variant="primary" compSize="sm">Small</Button>
          <Button variant="primary" compSize="md">Medium</Button>
          <Button variant="primary" compSize="lg">Large</Button>
          <Button variant="primary" compSize="xl">Extra Large</Button>
    </div>
      <hr />

      <Button variant="primary" compSize="md" shape="default">Default</Button>
      <Button variant="primary" compSize="md" shape="wide">Wide</Button>
      <Button variant="primary" compSize="md" shape="square">Square</Button>
      <Button variant="primary" compSize="md" shape="pill">Pill</Button>
      <Button variant="primary" compSize="md" shape="full">Full</Button>
      <hr />


      <Button variant="info" shape="wide" isLoading={true} loadingText="Loading..." dir="ltr">Register</Button>



      
      <hr />
      <Button variant="success">
        <span>
          Login
        </span>
        <IconAccount color="#fff" width={16} height={16} />
      </Button>

      {/* <Input
        variant="primary"
        compSize="md"
        label="ایمیل :"
        placeholder="ایمیل خود را وارد کنید"
        helperText="از قالب صحیح ایمیل استفاده کنید"
        byIcon={true}
        icon={<IconEmail viewBox="0 0 20 16" className="w-4 h-4 text-blue-400 bg-gray-300 " />}
      />


       <Input ref={inputRef} helperText="ssss" />
      <button className="bg-gray-300" onClick={logValue}>نمایش مقدار ورودی</button>
      <hr />



      <Input
        variant="primary"
        compSize="md"
        label="نام :"
        placeholder="نام خود را وارد کنید"
      />



      <Input
        variant="primary"
        compSize="md"
        label="نام خانوادگی :"
        placeholder="نام خانوادگی خود را وارد کنید"
        helperText="از حروف فارسی استفاده کنید" />


      <Input
        variant="primary"
        compSize="md"
        label="ایمیل :"
        placeholder="ایمیل خود را وارد کنید"
        helperText="از قالب صحیح ایمیل استفاده کنید"
        byIcon={true}
         icon={<IconEmail viewBox="0 0 20 16" className="w-4 h-4 text-blue-400 bg-gray-300 " />}
      />

      <Input
        variant="primary"
        compSize="md"
        label="ایمیل :"
        placeholder="ایمیل خود را وارد کنید"
        helperText="از قالب صحیح ایمیل استفاده کنید"
        byIcon={true}
         icon={<IconEmail width={16} height={16} viewBox="0 0 20 16" />}
      />



      <hr />


      <Input variant="primary" compSize="md" placeholder="primary" />
      <Input variant="secondary" compSize="md" placeholder="secondary" />
      <Input variant="success" compSize="md" placeholder="success" />
      <Input variant="danger" compSize="md" placeholder="danger" />
      <Input variant="warning" compSize="md" placeholder="warning" />
      <Input variant="info" compSize="md" placeholder="info" />
      <hr />

      <Input variant="primary" compSize="xs" placeholder="primary" />
      <Input variant="secondary" compSize="sm" placeholder="secondary" />
      <Input variant="success" compSize="md" placeholder="success" />
      <Input variant="danger" compSize="lg" placeholder="danger" />
      <Input variant="warning" compSize="xl" placeholder="warning" />
      <hr />


      <Input variant="primary" shape="wide" placeholder="primary" />
      <Input variant="secondary" shape="wide" placeholder="secondary" />
      <Input variant="success" shape="wide" placeholder="success" />
      <Input variant="danger" shape="wide" placeholder="danger" />
      <Input variant="warning" shape="wide" placeholder="warning" />
      <hr />

      <Input variant="primary" compSize="xs" shape="pill" placeholder="primary" />
      <Input variant="secondary" compSize="sm" shape="pill" placeholder="secondary" />
      <Input variant="success" compSize="md" shape="pill" placeholder="success" />
      <Input variant="danger" compSize="lg" shape="pill" placeholder="danger" />
      <Input variant="warning" compSize="xl" shape="pill" placeholder="warning" />
      <hr />

      <Input variant="primary" compSize="xs" shape="full" placeholder="primary" />
      <Input variant="secondary" compSize="sm" shape="full" placeholder="secondary" />
      <Input variant="success" compSize="md" shape="full" placeholder="success" />
      <Input variant="danger" compSize="lg" shape="full" placeholder="danger" />
      <Input variant="warning" compSize="xl" shape="full" placeholder="warning" />
      <hr />


      <Input variant="primary" compSize="md" placeholder="primary" disabled={true} />
      <Input variant="secondary" compSize="md" placeholder="secondary" disabled={true} />
      <Input variant="success" compSize="md" placeholder="success" disabled={true} />
      <Input variant="danger" compSize="md" placeholder="danger" disabled={true} />
      <Input variant="warning" compSize="md" placeholder="warning" disabled={true} />
      <Input variant="info" compSize="md" placeholder="info" disabled={true} />
      <hr />  */}

        
    </div>
  );
}
