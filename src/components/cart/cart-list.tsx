"use client";

import { useProducts } from "@/stores/products";
import { Button } from "../ui/button";
import { useCart } from "@/stores/cart";
import { useEffect, useState } from "react";
import { CartProduct } from "./cart-product";
import { decimalToMoney } from "@/lib/utils";

export const CartList = () => {

    const cart = useCart();
    const products = useProducts();

    const [subTotal, setSubTotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(10);

    const calculateSubtotal = () => {
        let sub = 0;
        for (let item of cart.items) {
            const prod = products.products.find(pitem => pitem.id === item.productId);
            if (prod) {
                sub += item.quantity * parseFloat(prod.price.toString());
            }
        }
        setSubTotal(sub);
    };
    useEffect(calculateSubtotal, [cart]);

    return (
        <>
            <div className="flex flex-col gap-3 my-5">
                {cart.items.map(item => (
                    <CartProduct
                        key={item.productId}
                        data={item}
                    />
                ))}

            </div>
            <div className="my-4 text-right">
                <div>Sub-Total: {decimalToMoney(subTotal)}</div>
                <div>Frete: {decimalToMoney(shippingCost)}</div>
                <div className="font-bold">Total: {decimalToMoney(subTotal + shippingCost)}</div>
            </div>
            <Button>Finalizar Compra</Button>
        </>
    );
};