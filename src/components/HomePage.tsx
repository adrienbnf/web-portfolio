import { FC } from "react";
import { Widget } from "./Widget";
import { Icon } from "@iconify/react";
import { PLATEFORM_ICON_ADAPTATIVE_FONTSIZE, SUBTITLE_ADAPTATIVE_FONTSIZE } from "../constants/font ";
import { Link } from "react-router-dom";
import { PlateformLinks } from "../constants/external-links";

export const HomePage: FC = () => {
    return (
        <div className={"h-full flex flex-col items-center gap-5"}>
            <h2 className={"text-5xl m-7 text-center"}>Welcome to my portfolio!</h2>
            <div className={"flex flex-col justify-center items-center h-3/5 w-full gap-y-[2vw] px-10"}>
                <div className="flex gap-x-[2vw] justify-center w-full h-1/2">
                    <Widget
                        height={"100%"}
                        width={"40%"}
                        title={"Who am I ?"}
                        content={
                            `My name is Adrien, I'm currently a second-year Master's
                            student in computer science at the Epitech school campus located in
                            Toulouse (France).`
                        }
                    />
                    <Widget
                        height={"100%"}
                        width={"40%"}
                        title={"What about this website ?"}
                        content={
                            `This website is my portfolio, it contains some of my school/personal projects
                            and my accounts on different learning plateforms so you can take a look at my progress.\n\n

                            It's a way for me to show what I'm capable of as a future IT engineer.`
                        }
                    />
                </div>
                <Widget
                    height={"60%"}
                    width={"82%"}
                    title={"My accounts on different plateforms:"}
                    tailwindStyle={`
                        border border-solid border-borderColor bg-containerBg rounded-lg p-3
                        text-center custom-widget-transition hover:border-primary hover:border-1 
                        `}
                    content={
                        <div className={"flex justify-around items-center h-4/5"}>
                            <Link to={PlateformLinks.GITHUB} target="_blank">
                                <div className="flex flex-col gap-2 text-center items-cente duration-300 hover:text-primary hover:scale-105">
                                    <Icon
                                        icon={"mdi:github"}
                                        fontSize={PLATEFORM_ICON_ADAPTATIVE_FONTSIZE}
                                    />
                                    <h4 className={"italic font-normal"} style={{ fontSize: SUBTITLE_ADAPTATIVE_FONTSIZE }}>
                                        Github
                                    </h4>
                                </div>
                            </Link>

                            <Link to={PlateformLinks.LEETCODE} target="_blank">
                                <div className="flex flex-col gap-2 text-center items-center duration-300 hover:text-primary hover:scale-105">
                                    <Icon
                                        icon={"simple-icons:leetcode"}
                                        fontSize={PLATEFORM_ICON_ADAPTATIVE_FONTSIZE}
                                    />
                                    <h4  className={"italic font-normal"} style={{ fontSize: SUBTITLE_ADAPTATIVE_FONTSIZE }}>
                                        Leetcode
                                    </h4>
                                </div>
                            </Link>

                            <Link to={PlateformLinks.HTB} target="_blank">
                                <div className="flex flex-col gap-2 text-center items-center duration-300 hover:text-primary hover:scale-105">
                                    <Icon
                                        icon={"simple-icons:hackthebox"}
                                        fontSize={PLATEFORM_ICON_ADAPTATIVE_FONTSIZE}
                                    />
                                    <h4 className={"italic font-normal"} style={{ fontSize: SUBTITLE_ADAPTATIVE_FONTSIZE }}>
                                        Hack the box
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    }
                />
            </div>
        </div>
    );
};