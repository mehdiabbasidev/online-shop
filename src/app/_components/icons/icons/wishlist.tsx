import {BaseIcon} from "../base_icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M22 8.69001C22 9.88001 21.81 10.98 21.48 12H2.52C2.19 10.98 2 9.88001 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.37 3.10001 10.99 3.98001 12 5.33001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001Z"/><path opacity=".4" d="M21.48 12C19.9 17 15.03 19.99 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.97002 19.99 4.10002 17 2.52002 12H21.48Z"/>
    </BaseIcon>
  );
}