import { useSelector } from "react-redux";

const CartAmount = () => {
  const cartItems = useSelector((Store) => Store.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total +
      item.quantity *
        (!item.price ? item.defaultPrice / 100 : item.price / 100),
    0
  );
  const sgst = (totalAmount * 16) / 100;
  const cgst = (totalAmount * 16) / 100;
  const finalAmount = totalAmount + sgst + cgst;

  return (
    <div className="mt-3 shadow-2xl bg-amber-200 rounded-lg p-4">
      {" "}
      <div className="flex justify-between">
        <div>Item total:</div>

        <div>{totalAmount}</div>
      </div>
      <div className="flex justify-between">
        <div>SGST @16%</div>

        <div>{sgst}</div>
      </div>
      <div className="flex justify-between">
        <div>CGST @16%</div>
        <div>{cgst}</div>
      </div>
      <div className="border-b-1 h-1 opacity-60"></div>
      <div className="flex justify-between">
        <div>Final Amount</div>
        <div>{finalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartAmount;
