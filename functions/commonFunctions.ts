export const intToDollars = (price: number) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const calculateDiscount = (costPrice: number, sellingPrice: number) => {
  return (((costPrice - sellingPrice) / costPrice) * 100).toFixed(2);
};

export const outsideListener = (ref: any, callback: any) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  document.addEventListener("mousedown", handleClick);
  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
};
