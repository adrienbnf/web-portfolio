import { FC, useState } from "react";

export const HomePage: FC = () => {
    const [descriptionClass, setDescriptionClass] = useState<string>("website-description");

    return (
        <div className="home-page-container">
            <h2 className="home-main-title">Welcome to my portofolio!</h2>
            <div
                className={descriptionClass}
                onMouseEnter={() => setDescriptionClass("website-description-hover")}
                onMouseLeave={() => setDescriptionClass("website-description")}
            >
                Place holder for the website description, it's coming soon!
            </div>
        </div>
    );
};