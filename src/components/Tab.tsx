import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type TabTopBar = {
    title: string;
    url: string;
};

type TabProps = {
    tab: TabTopBar;
};

export const Tab: FC<TabProps> = ({ tab }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActiveTab = location.pathname.startsWith(tab.url);

    return (
        <div
            className={
                `group flex items-center justify-center h-full w-[100px] bg-primary duration-200
                 bg-opacity-0 hover:bg-opacity-15 cursor-pointer`
            }
            onClick={() => navigate(tab.url)}
        >
            <h4
                className={
                    "w-[80%] border-solid text-center duration-100 pb-1 group-hover:border-b-2 " +
                    (isActiveTab ? "border-b-2 border-primary " : "border-b-0 border-secondary ")
                }
            >
                {tab.title}
            </h4>
        </div>
    )
}