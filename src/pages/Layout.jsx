import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { UserContextProvider } from "../components/UserContext";

export const Layout = () => {
    return (
        <UserContextProvider>
            <ScrollToTop>
                <Outlet />
            </ScrollToTop>
        </UserContextProvider>
    );
};