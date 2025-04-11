import { useParams } from "react-router";
import ShimmerItem from "./ShimmerItem";
import MenuResDesc from "./MenuResDesc";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import useMenuItem from "../../utils/useMenuItem";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);
  const { items, loading } = useMenuItem(resId);
  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-full w-screen">
        <ShimmerItem key={0} />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center h-full  ">
      <MenuResDesc {...restaurant} />
      <div className="flex flex-col ">
        {items.length > 0 ? (
          items.map((item) => <MenuItem key={item.card.info.id} {...item} />)
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
