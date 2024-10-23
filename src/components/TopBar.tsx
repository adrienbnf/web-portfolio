import { FC } from "react";
import { Tab, TabTopBar } from "./Tab";

type TopBarProps = {
    tabs: TabTopBar[];
} 

export const TopBar: FC<TopBarProps> = ({ tabs }) => {
    return (
        <div className="top-bar-container">
            <div className="tabs-container">
                {tabs.map((tab) => {
                    return (
                        <Tab tab={tab}/>
                    )
                })}
            </div>
        </div>
    );
};