import noInterNetImage from "@/assets/no-internet_12890341.png";

import { NoInternetConnectionPropType } from "@/types";

const NoInternet = ({ reason }: NoInternetConnectionPropType) => {
  return (
    <section className="">
      <img src={noInterNetImage} alt="" className="size-64 " />

      <h1 className="text-2xl font-bold text-white  text-center ">
        No Internet Connection
      </h1>
      {reason && (
        <p className="text-lg text-center font-bold text-white mt-5">
          {reason}
        </p>
      )}
    </section>
  );
};

export default NoInternet;
