import { ComponentProps } from "react";
import { Input } from "../ui/input";
import { checkFieldError } from "@/lib/utils";

type Props = ComponentProps<"input"> & {
    name: string;
    errors: any;
};

export const CustomInput = (props: Props) => {

    const error = checkFieldError(props.errors, props.name);

    return (
        <>
            <Input
                {...props}
                className={`${error ? " border border-red-800" : ""}`}
            />
            {error &&
                <div className="mt-1 text-red-800 text-sm">{error}</div>
            }
        </>
    );
};

