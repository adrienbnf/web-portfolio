import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const WelcomePage: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome-page-container">
            <Button
                className={"welcome-button"}
                variant="contained"
                onClick={() => {navigate("/home")}}
            >
                CLICK
            </Button>
        </div>
    )
};