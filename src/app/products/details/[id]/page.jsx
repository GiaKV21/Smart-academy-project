"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          objectFit="contain"
        />
      </div>
      <div className={styles.infoWrapper}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.priceSection}>
          <div>
            <p className={styles.regularPrice}>Regular price</p>
            <p className={styles.price}>${product.price}</p>
          </div>
          <div>
            <p className={styles.memberLabel}>Member (Save $20)</p>
            <p className={styles.memberPrice}>
              ${(product.price - 20).toFixed(2)}
            </p>
          </div>
        </div>

        <div className={styles.quantitySection}>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            −
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.addToCart}>Add to cart</button>
          <button className={styles.buyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
