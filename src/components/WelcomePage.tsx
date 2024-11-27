import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const WelcomePage: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-full">
            <Button
                variant="contained"
                onClick={() => {navigate("/home")}}
            >
                CLICK
            </Button>
        </div>
    )
};