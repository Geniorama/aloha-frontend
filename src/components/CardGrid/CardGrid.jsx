import ButtonLink from "../ButtonLink/ButtonLink";
import Image from "next/image";
import styles from "./CardGrid.module.css";

export default function CardGrid({ items }) {
  const exampleImages = [
    "https://images.unsplash.com/photo-1693443760721-93025350bf03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    "https://images.unsplash.com/photo-1693443760721-93025350bf03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    "https://images.unsplash.com/photo-1693443760721-93025350bf03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  ];
  return (
    <div>
      <div className={`${styles.Grid} ${styles.Grid_3}`}>
        {exampleImages &&
          exampleImages.map((item, i) => (
            <div key={i} className={styles.Item}>
              <Image 
                src={item} 
                alt=""
                fill={true}
                >
                
               </Image>
            </div>
          ))}
      </div>
    </div>
  );
}
