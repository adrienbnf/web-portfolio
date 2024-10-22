import { Button, ButtonGroup } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export type TabTopBar = {
    title: string;
    url: string;
};

type TopBarProps = {
    tabs: TabTopBar[];
} 

export const TopBar: FC<TopBarProps> = ({ tabs }) => {
    const navigate = useNavigate();
    return (
        <div className="top-bar-container">
            <div className="tabs-container">
                {tabs.map((tab) => {
                    return (
                        <Button>
                            {tab.title}
                        </Button>
                    )
                })}
            </div>
        </div>
    );
};