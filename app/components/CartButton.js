"use client";

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../store/useCart";

export default function CartButton() {
	const { count } = useCart();
	return (
		<div style={{ position: "absolute", right: 40 }}>
			<div
				style={{
					position: "relative",
				}}
			>
				<AiOutlineShoppingCart fontSize={24} color="#000" />
				<div
					style={{
						width: "1rem",
						height: "1rem",
						background: "#a34437",
						position: "absolute",
						borderRadius: "50%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						right: -8,
						top: -5,
					}}
				>
					<p
						style={{
							fontSize: "0.6rem",
						}}
					>
						{count}
					</p>
				</div>
			</div>
		</div>
	);
}
