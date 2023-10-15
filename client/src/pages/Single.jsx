import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://i.ibb.co/52RQNyq/Hooked.jpg" alt="" />
        <div className="user">
          <img src="https://i.ibb.co/52RQNyq/Hooked.jpg" alt="user pic" />
          <div className="info">
            <span>john</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src="https://i.ibb.co/52RQNyq/Hooked.jpg" alt="edit" />
            </Link>
            <img src="https://i.ibb.co/52RQNyq/Hooked.jpg" alt="delete" />
          </div>
        </div>
        <h1>the title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          dolore ut obcaecati? Architecto eum earum qui nisi eligendi id
          suscipit explicabo iure vitae? Explicabo pariatur deleniti minus
          nostrum vel rerum.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iste
          amet, autem ab, a corrupti perferendis nihil inventore aut illo vero
          architecto doloribus perspiciatis voluptas sunt suscipit veniam
          pariatur. Ut?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          reiciendis voluptatibus! Dolor odio fuga beatae eaque aspernatur,
          dolorum magnam necessitatibus, quis natus molestiae eos possimus quo
          atque! Saepe, reiciendis est! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sit minus, est iste odit perferendis recusandae
          consequatur quisquam excepturi aliquid accusamus doloribus rem nam ex
          adipisci quam fuga error optio repudiandae.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aperiam,
          voluptatum maxime sint fugit quasi debitis cupiditate esse animi cum
          quia adipisci, eligendi quisquam repudiandae, recusandae illum nihil
          accusamus non.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
