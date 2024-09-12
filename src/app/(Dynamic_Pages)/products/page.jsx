import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

 async function getdata() {
  let response =await fetch('https://dummyjson.com/products');
  let data= await response.json();
  return data.products;}
  export const metadata = {
    title: "HexaShop_Products",
    description: "shop",
  };
export default async function products() {
  const products = await getdata();  
  return (
    <div className={styles.maincontainer}>
      {products.map(product => (
        <Link key={product.id} href={`products/${product.id}`} className={styles.post}>
          <div className={styles.imagecontainer}>
            <Image
              priority={false}
              className={styles.image}
              src={product.images[0]}
              alt='product image'
              width={350}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.text}>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
