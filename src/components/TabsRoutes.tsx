import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { TopBar } from "./TopBar";

export const TabsRoutes: FC = () => {
    return (
        <div className="all-pages-container">
            <TopBar 
                tabs={[
                    {
                        title: "Home",
                        url:"/home",
                    },
                    {
                        title: "Projects",
                        url:"/projects",
                    },
                ]}
            />
            <Routes>
                <Route path={"/home"} Component={HomePage}/>
            </Routes>
        </div>
    )
};