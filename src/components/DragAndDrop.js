import { useState } from "react";
import { useDrop } from "react-dnd";
import Picture from "./Picture";
import { useDragDropManager } from "react-dnd";

const DragAndDrop = () => {
  const [picturesList, setPicturesList] = useState([
    {
      id: 1,
      url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/34/18/5f.jpg",
      status: "notDraged",
    },
    {
      id: 2,
      url: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
      status: "notDraged",
    },
    {
      id: 3,
      url: "https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg",
      status: "notDraged",
    },
  ]);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "white";
  if (isActive) {
    backgroundColor = "#F5F5F5";
  } else if (canDrop) {
    backgroundColor = "#F5F5";
  }

  const addImageToBoard = (id) => {
    const filteredImage = picturesList.filter(
      (picture, i) => picture.id === id
    );
    filteredImage[0].status = "draged";
    setPicturesList(picturesList.filter((picture, i) => picture.id !== id).concat(filteredImage[0]));
  };
  return (
    <div className="container">
      <div className="pictures">
        {picturesList
          .filter((picture, i) => picture.status === "notDraged")
          .map((picture, i) => {
            return (
              <Picture url={picture.url} id={picture.id} key={picture.id} />
            );
          })}
      </div>
      <div className="board" ref={drop} style={{ backgroundColor }}>
        {picturesList
          .filter((picture, i) => picture.status !== "notDraged")
          .map((picture) => {
            return (
              <Picture url={picture.url} id={picture.id} key={picture.id} />
            );
          })}
      </div>
    </div>
  );
};

export default DragAndDrop;
