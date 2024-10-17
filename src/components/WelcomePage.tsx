import { Button } from "@mui/material";
import { FC } from "react";

export const WelcomePage: FC = () => {
    return (
        <div className="page-container">
            <Button className={"welcome-button"} variant="contained">
                CLICK
            </Button>
        </div>
    )
};