import { FC } from "react";
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
    const titleClass = location.pathname.startsWith(tab.url) ? "tab-title active-tab-title" : "tab-title";
    return (
        <div className={"tab-container"} onClick={() => navigate(tab.url)}>
            <h4 className={titleClass}>{tab.title}</h4>
        </div>
    )
}