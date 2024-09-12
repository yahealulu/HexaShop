import Image from 'next/image'
import styles from './page.module.css'
async function getdata(id) {
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();  
}
export async function generateMetadata({params}){
  const product = await getdata(params.Post);
  console.log("the product iswewqeqweqwe "+  product);
  
  return{
    title:product.title,
    description:product.description
  }
}

export default async function Post({params}) {
  const product = await getdata(params.Post);  
  return (
    <div className={styles.container}>
     <header className={styles.header}>
      <div className={styles.info}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.description}</p>
      </div>
      <div className={styles.imagecontainer}>
        <Image className={styles.image}
        src={product.images[0]}
        alt='post image'
        priority={true}
        fill={true} />
        <span className={styles.author}>yahya loulou</span>
      </div>
     </header>
     <div className={styles.content}></div>
     <p className={styles.text}>
     sit amet consectetur adipisicing elit. Officia commodi, dicta ex provident minus voluptatum eos eveniet sed nam odit dolorum voluptates blanditiis vitae, asperiores autem minima est ea quisquam?
     sit amet consectetur adipisicing elit. Officia commodi, dicta ex provident minus voluptatum eos eveniet sed nam odit dolorum voluptates blanditiis vitae, asperiores autem minima est ea quisquam?
     sit amet consectetur adipisicing elit. Officia commodi, dicta ex provident minus voluptatum eos eveniet sed nam odit dolorum voluptates blanditiis vitae, asperiores autem minima est ea quisquam?
     sit amet consectetur adipisicing elit. Officia commodi, dicta ex provident minus voluptatum eos eveniet sed nam odit dolorum voluptates blanditiis vitae, asperiores autem minima est ea quisquam?
     sit amet consectetur adipisicing elit. Officia commodi, dicta ex provident minus voluptatum eos eveniet sed nam odit dolorum voluptates blanditiis vitae, asperiores autem minima est ea quisquam?
     </p>
    </div>
  )
}
