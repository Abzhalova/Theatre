"use client";
import { FC, useState } from "react";
import scss from "./Cards.module.scss";
import Image from "next/image";
import { MdLocationOn, MdOutlineCalendarMonth } from "react-icons/md";
import { IoPricetagsSharp } from "react-icons/io5";
import { BsTicketPerforatedFill } from "react-icons/bs";

interface IDate {
  month: string;
  time: string;
  day: string;
}

interface IData {
  id: number;
  img: string;
  title: string;
  category: string;
  price: number;
  address: string;
  info: IDate[];
}

const Cards: FC = () => {
  const data: IData[] = [
    {
      id: 1,
      img: "https://sputnik.kg/img/103469/24/1034692483_0:0:1566:2048_600x0_80_0_0_b255304384f64800068e8f7b7024e808.jpg",
      title: "Жамила",
      category: "Спектаклдер",
      price: 200,
      address: "Драм Талас Театр",
      info: [
        {
          month: "Авг",
          time: "12:00",
          day: "12",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Баары");

  const filteredData =
    selectedCategory === "Баары"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <section className={scss.Cards}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.category}>
            {[
              "Баары",
              "Спектаклдер",
              "Концерттер",
              "Балдар үчүн",
              "Семинарлар",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? scss.active : ""}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={scss.cards}>
            {filteredData.map((el) => (
              <div key={el.id} className={scss.card}>
                <div className={scss.imageWrapper}>
                  <Image
                    src={el.img}
                    alt={el.title}
                    width={200}
                    height={200}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3>{el.title}</h3>
                <hr />
                <div className={scss.date}>
                  <MdOutlineCalendarMonth
                    style={{
                      color: "var(--clr-grey)",
                    }}
                  />
                  <p
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    {el.info.map((item) => item.day + " ")}
                    {el.info.map((item) => item.month + " - ")}
                    {el.info.map((item) => item.day + " " + item.month)}
                  </p>
                </div>
                <div className={scss.date}>
                  <IoPricetagsSharp
                    style={{
                      color: "var(--clr-grey)",
                    }}
                  />

                  <p>{el.price} сом</p>
                </div>
                <div className={scss.date}>
                  <MdLocationOn
                    style={{
                      color: "var(--clr-grey)",
                    }}
                  />

                  <p>{el.address}</p>
                </div>
                <div className={scss.ticket}>
                  <h4>
                    <BsTicketPerforatedFill />
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
