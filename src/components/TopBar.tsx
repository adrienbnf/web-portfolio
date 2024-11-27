import { FC } from "react";
import { Tab, TabTopBar } from "./Tab";

type TopBarProps = {
    tabs: TabTopBar[];
} 

export const TopBar: FC<TopBarProps> = ({ tabs }) => {
    return (
        <div className={"sticky top-0 h-[75px] bg-black border-solid border-b-primary border-b-4 z-10"}>
            <div className={"flex h-full items-center justify-center gap-8"}>
                {tabs.map((tab, index) => {
                    return (
                        <Tab key={index} tab={tab}/>
                    )
                })}
            </div>
        </div>
    );
};