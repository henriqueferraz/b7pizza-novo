"use client";

import { useAuth } from "@/stores/auth";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";


export const LoginAreaDialog = () => {

    const auth = useAuth();

    return (
        <Dialog
            open={auth.open}
            onOpenChange={open => auth.setOpen(open)}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        Login  / Cadastro
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    ...
                </div>
            </DialogContent>
        </Dialog>
    );
};