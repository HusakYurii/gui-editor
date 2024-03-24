import { createContext, useContext } from "react";
import { TServices } from "../../types/shared/services";

const ServiceContext = createContext<TServices>({} as TServices);
const useServices = () => useContext(ServiceContext);

export {
    ServiceContext,
    useServices
};