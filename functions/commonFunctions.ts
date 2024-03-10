import { removeLocalStorageAuthToken } from "@/lib/localStorageFunctions";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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

export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const logout = () => {
    removeLocalStorageAuthToken();
    queryClient.removeQueries({ queryKey: ["user-details"] });
    toast.success("Logged out", {
      description: "You have been logged out",
    });
    router.push("/");
    window.location.reload();
  };

  return logout;
};
