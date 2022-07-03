import { useDrag } from "react-dnd";

const Picture = ({ url, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      ref={drag}
      src={url}
      style={{
        width: "150px",
        border: isDragging ? "3px solid yellow" : "0px",
      }}
    />
  );
};

export default Picture;
