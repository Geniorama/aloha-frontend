import Image from "next/image";
import Slider from "../Slider/Slider";
import categories from "@/data/categories";

export default function CateogiresBanner({ category }) {
  const items = categories[category] || [];
  return (
    <div className="container">
      {category ? (
        <Slider autoplay={false}>
          {items.map((item, index) => (
            <div key={index} style={{ padding: "100px", position: "relative" }}>
              <Image
                unoptimized
                src={item.image}
                width={250}
                height={100}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  margin: "0 8px",
                  filter: "brightness(0.6)",
                }}
                alt=""
              />
              <div
                style={{
                  height: "100px",
                  position: "absolute",
                  top: 0,
                  width: "250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5 className="m-0 text-white">{item.text}</h5>
              </div>
            </div>
          ))}
        </Slider>
      ) : null}
    </div>
  );
}
