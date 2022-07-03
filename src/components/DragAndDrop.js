import { useState } from "react";
import { useDrop } from "react-dnd";
import Picture from "./Picture";

const DragAndDrop = () => {
  const [board, setBoard] = useState([]);
  const picturesList = [
    {
      id: 1,
      url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/34/18/5f.jpg",
    },
    {
      id: 2,
      url: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
    },
    {
      id: 3,
      url: "https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg",
    },
  ];
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addImageToBoard = (id) => {
    const filteredImage = picturesList.filter((picture) => {
      return picture.id === id;
    });
    setBoard((board) => [...board, filteredImage[0]]);
  };
  return (
    <div className="container">
      <div className="pictures">
        {picturesList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id} />;
        })}
      </div>
      <div className="board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id} />;
        })}
      </div>
    </div>
  );
};

export default DragAndDrop;
