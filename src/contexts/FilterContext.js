import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState("all");

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};
