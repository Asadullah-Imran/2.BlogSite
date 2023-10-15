import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "hello",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis animi, fuga doloremque asperiores nihil nesciunt nobis iusto aliquid eaque fugit enim quis perspiciatis incidunt unde consectetur dolorum praesentium beatae.",
      img: "https://i.ibb.co/52RQNyq/Hooked.jpg",
    },
    {
      id: 2,
      title: "hi",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis animi, fuga doloremque asperiores nihil nesciunt nobis iusto aliquid eaque fugit enim quis perspiciatis incidunt unde consectetur dolorum praesentium beatae.",
      img: "https://i.ibb.co/52RQNyq/Hooked.jpg",
    },
    {
      id: 3,
      title: "how",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis animi, fuga doloremque asperiores nihil nesciunt nobis iusto aliquid eaque fugit enim quis perspiciatis incidunt unde consectetur dolorum praesentium beatae.",
      img: "https://i.ibb.co/52RQNyq/Hooked.jpg",
    },
    {
      id: 4,
      title: "where",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis animi, fuga doloremque asperiores nihil nesciunt nobis iusto aliquid eaque fugit enim quis perspiciatis incidunt unde consectetur dolorum praesentium beatae.",
      img: "https://i.ibb.co/52RQNyq/Hooked.jpg",
    },
    {
      id: 5,
      title: "hello",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis animi, fuga doloremque asperiores nihil nesciunt nobis iusto aliquid eaque fugit enim quis perspiciatis incidunt unde consectetur dolorum praesentium beatae.",
      img: "https://i.ibb.co/52RQNyq/Hooked.jpg",
    },
    {
      id: 6,
      title: "hello",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis animi, fuga doloremque asperiores nihil nesciunt nobis iusto aliquid eaque fugit enim quis perspiciatis incidunt unde consectetur dolorum praesentium beatae.",
      img: "https://i.ibb.co/52RQNyq/Hooked.jpg",
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="post.img" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
