import Slider from "../Slider/Slider";
import AuthorCard from "./AuthorCard/AuthorCard";
import styles from "@/components/PopularAuthors/PopularAuthors.module.css";

const image =
  "https://images.unsplash.com/photo-1693443760721-93025350bf03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80";

export default function PopularAuthors() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Autores populares.</h2>
        <Slider>
          <AuthorCard cover={image} photo={image} author="Paul Steven" />
          <AuthorCard cover={image} photo={image} author="Paul Steven" />
          <AuthorCard cover={image} photo={image} author="Paul Steven" />
          <AuthorCard cover={image} photo={image} author="Paul Steven" />
          <AuthorCard cover={image} photo={image} author="Paul Steven" />
          <AuthorCard cover={image} photo={image} author="Paul Steven" />
          <AuthorCard cover={image} photo={image} author="Paul Steven" />
          <AuthorCard cover={image} photo={image} author="Paul Steven" />
        </Slider>
      </div>
    </section>
  );
}
