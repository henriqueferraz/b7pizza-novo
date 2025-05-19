"use client"

import { CustomInput } from "../layout/custom-input";

type Props = {
    onValidate: (hasEmail: boolean, email: string) => void;
}

export const LoginAreaStepEmail = ({ onValidate }: Props) => {



    return (
        <>
            <div>
                <p className="mb-2">Digite seu e-mail</p>
                <CustomInput
                    name="email"
                    errors={[]}

                />
            </div>
        </>
    );
};