import { Color } from "./types/color.type";
import { Size } from "./types/size.type";
import { Variant } from "./types/variant.type";

export type BaseComponent={
    compSize?:Size,
    color?:Color,
    variant?:Variant,
    isDisabled?:boolean,
}