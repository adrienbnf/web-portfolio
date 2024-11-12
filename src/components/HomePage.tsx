import { FC } from "react";
import { Widget } from "./Widget";

export const HomePage: FC = () => {
    return (
        <div className={"h-full flex flex-col items-center gap-5"}>
            <h2 className={"text-5xl m-7"}>Welcome to my portfolio!</h2>
            <div className={"flex justify-center items-center h-1/4 gap-x-[2vw]"}>
                <div className="flex-1 h-full">
                    <Widget
                        baseHeight={"100%"}
                        title={"Who am I ?"}
                        content={
                            `My name is Adrien, I'm currently a second-year Master's
                            student in computer science at the Epitech school campus located in
                            Toulouse (France).`
                        }
                    />
                </div>
                <div className="flex-1 h-full">
                    <Widget
                        baseHeight={"100%"}
                        title={"Who am I ?"}
                        content={
                            `This website is my portfolio, it contains some of my school/personal projects
                            and my accounts on different learning plateforms so you can take a look at my progress.\n\n

                            It's a way for me to show what I'm capable of as a future IT engineer.`
                        }
                    />
                </div>
                <div className="flex-1 h-full">
                    <Widget
                        baseHeight={"100%"}
                        title={"My accounts on different plateforms:"}
                        content={
                            <>
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    );
};