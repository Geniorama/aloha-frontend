import Slider from "../Slider/Slider";
import AuthorCard from "./AuthorCard/AuthorCard";
import styles from "@/components/PopularAuthors/PopularAuthors.module.css";

const image =
  "https://images.unsplash.com/photo-1693443760721-93025350bf03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80";

export default function PopularAuthors({ type = "primary" }) {
  return (
    <section className={`${styles.section} ${styles[type]}`}>
      <div className="container">
        <h2 className={styles.title}>Autores populares.</h2>
        <Slider>
          <AuthorCard
            link="/autor/vitaliy_sokol"
            cover="https://st.depositphotos.com/1813545/1389/i/450/depositphotos_13899678-stock-photo-big-sea-turle-underwater.jpg?forcejpeg=true"
            photo="https://static.depositphotos.com/storage/avatars/1813/1813545/p_1813545.jpg?a7a5ea3dde9909e8199361f8c28ca01c"
            author="vitaliy_sokol"
          />
          <AuthorCard
            link="/autor/michaeljung"
            cover="https://st.depositphotos.com/1011643/3410/i/450/depositphotos_34107351-stock-photo-business-people-in-a-meeting.jpg?forcejpeg=true"
            photo="https://static.depositphotos.com/storage/avatars/1011/1011643/p_1011643.jpg?a7a5ea3dde9909e8199361f8c28ca01c"
            author="michaeljung"
          />
          <AuthorCard
            cover="https://st4.depositphotos.com/13193658/24775/i/450/depositphotos_247758394-stock-photo-colleagues-table-laptop-smiling-highing.jpg?forcejpeg=true"
            photo="https://static.depositphotos.com/storage/avatars/1319/13193658/p_13193658.jpg?a7a5ea3dde9909e8199361f8c28ca01c"
            author="AndrewLozovyi"
          />
          <AuthorCard
            cover="https://st4.depositphotos.com/1041222/27789/i/450/depositphotos_277898746-stock-photo-mount-rushmore-framed-by-pine.jpg?forcejpeg=true"
            photo="https://static.depositphotos.com/storage/avatars/1041/1041222/p_1041222.jpg?a7a5ea3dde9909e8199361f8c28ca01c"
            author="tamifreed"
          />
          <AuthorCard cover={image} photo={image} author="Paul Steven" />
        </Slider>
      </div>
    </section>
  );
}
