import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "iconsax-react";

const BackIcon = () => {
  const navigate = useNavigate();
  return (
    <ArrowLeft
      size={25}
      onClick={() => navigate(-1)}
      className="shrink-0 text-gray-800 dark:text-neutral-200 my-2"
    />
  );
};

export default BackIcon;
