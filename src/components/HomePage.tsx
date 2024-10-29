import { FC, useState } from "react";

export const HomePage: FC = () => {
    return (
        <div className="home-page-container">
            <h2 className="home-main-title">Welcome to my portfolio!</h2>
            <div className={"website-description-container"}>
                <div
                    className={"website-description-element"}
                >
                    <h4 className={"website-description-subtitle"}>Who am I ?</h4>
                    <p>
                        My name is Adrien, I&apos;m currently a second-year Master&apos;s student in computer science
                        at the Epitech school campus located in Toulouse &#40;France&#41;.
                    </p>
                </div>
                <div
                    className={"website-description-element"}
                >
                    <h4 className={"website-description-subtitle"}>What about this website ?</h4>
                    <p>
                        This website is my portfolio, it contains some of my school/personal projects
                        and my accounts on different learning plateforms so you can take a look at my progress.<br/><br/>

                        It&apos;s a way for me to show what I&apos;m capable of as a future IT engineer.
                    </p>
                </div>
            </div>
        </div>
    );
};