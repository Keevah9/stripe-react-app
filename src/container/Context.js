import React,{ useContext, useState} from "react";
// import { AppContext } from "./Context";
import sublinks from "../data";
const AppContext = React.createContext()

function AppProvider({children}){
const [isSidebarOpen, setIsSidebarOpen] = useState(false)
const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
const [location, setLocation] = useState({}); 
 const [page, setPage] = useState({ page: '', links: [] });

const openSubmenu =({text, coordinates})=>{
   const page = sublinks.find((link) => link.page === text);
   setPage(page);
    setLocation(coordinates)
    setIsSubmenuOpen(true)
}
const closeSubmenu = () => {
  setIsSubmenuOpen(false);
};
const openSidebar = () => {
  setIsSidebarOpen(true);
};
const closeSidebar = () => {
  setIsSidebarOpen(false);
};


    return(
        <AppContext.Provider
        value={{openSidebar,openSubmenu,closeSidebar,closeSubmenu,page,location,isSubmenuOpen,isSidebarOpen}}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGeneralContext=()=>{
    return useContext(AppContext)
}
export { AppContext, AppProvider };