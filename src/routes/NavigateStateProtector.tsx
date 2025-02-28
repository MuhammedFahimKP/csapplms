import { ComponentType, useEffect } from "react";
import { useNavigate, useLocation, useNavigationType } from "react-router-dom";

function NavigateStateProtector<T extends {}>(Component: ComponentType<T>) {
  return ({ ...props }: T) => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const navigationType = useNavigationType();
    useEffect(() => {
      if (!state) {
        if (navigationType === "POP") {
          navigate("/");
        } else {
          navigate(-1);
        }
      }
    }, [state]);
    return <Component {...(props as T)} />;
  };
}

export default NavigateStateProtector;
