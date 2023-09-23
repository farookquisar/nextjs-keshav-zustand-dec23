import styles from "./page.module.css";
import products from "./data/products.json";
import AddToCartButton from "./components/AddToCartButton";
import CartButton from "./components/CartButton";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p>DEMO</p>
				<CartButton />
			</div>
			<div className={styles.content}>
				{products.map((product, index) => (
					<div key={index} className={styles.item}>
						<img src={`${product.image}?sig=${index}`} alt={product.name} />
						<p className={styles.title}>{product.title}</p>
						<p className={styles.description}>{product.description}</p>
						<AddToCartButton />
					</div>
				))}
			</div>
		</div>
	);
}
