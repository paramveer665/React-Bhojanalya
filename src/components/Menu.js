import { useParams } from "react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { imgUrl } from "../../constant";
import ShimmerItem from "./ShimmerItem";
import MenuResDesc from "./MenuResDesc";
// import MenuItem from "./MenuItem";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import useMenuItem from "../../utils/useMenuItem";
import MenuItem from "./MenuItem";

// const MenuItem = lazy(() => import("./MenuItem"));

const Menu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);
  // console.log("phle nahi hai", useMenuItem(resId));
  const { items, loading } = useMenuItem(resId);
  if (loading) return <ShimmerItem key={0} />;

  return (
    <div className="flex flex-col items-center h-full ">
      <MenuResDesc {...restaurant} />
      <div>
        {items.length > 0 ? (
          items.map((item) => <MenuItem key={item.id} {...item} />)
        ) : (
          <p>No menu items available.</p>
        )}
      </div>

      {/* {itemCards.map((e) => {
        console.log("kaam chal rha hai");
        <MenuItem />;
      })} */}

      {/* <Suspense>
        <MenuItem {...itemCards[0]} />;
      </Suspense> */}
      {/* <MenuItem {...itemCards[1]} />; */}
    </div>
  );
};

export default Menu;
