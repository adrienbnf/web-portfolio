import { FC, ReactNode, useEffect, useState } from "react";

type Props = {
    title: string;
    content: string | ReactNode;
    baseWidth?: string;
    baseHeight?: string;
    hoverHeight?: string;
    hoverWidth?: string;
}

export const Widget: FC<Props> = ({
    title,
    content,
    baseWidth="auto",
    baseHeight="auto",
    hoverWidth=baseWidth,
    hoverHeight=baseHeight,
}) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const [width, setWidth] = useState<string>(baseWidth);
    const [height, setHeight] = useState<string>(baseHeight);

    useEffect(() => {
        if (isHover) {
            setWidth(hoverWidth);
            setHeight(hoverHeight);
        }
        else {
            setWidth(baseWidth);
            setHeight(baseHeight);
        }
    }, [isHover, setHeight, setWidth])
    return (
        <div
            style={{
                width: width,
                height: height,
            }}
            className={
                `border border-solid border-borderColor bg-containerBg rounded-lg p-2
                 hover:border-secondary hover:border-2 text-center
                 custom-widget-transition`
            }
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <h4 
                style={{
                    fontSize: "clamp(0.75em, calc(1.2vw + 0.4vh), 1.6em)",
                }}
                className={"mt-0"}
            > 
                {title}
            </h4>
            {typeof content === "string" ? (
                <p
                    style={{
                        fontSize: "clamp(0.6em, calc(0.8vw + 0.3vh), 1.4em)",
                    }}
                >
                    {content}
                </p>
            ) : (content)}
        </div>
    );
};