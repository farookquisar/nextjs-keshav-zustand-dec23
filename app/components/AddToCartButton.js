"use client";

import React from "react";
import useCart from "../store/useCart";
export default function AddToCartButton() {
	const addToCart = useCart((state) => state.addToCart);
	return (
		<button
			onClick={() => {
				addToCart();
			}}
		>
			Add to cart
		</button>
	);
}
