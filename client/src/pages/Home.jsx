import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.img} />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
