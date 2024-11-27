import { FC, ReactNode, useEffect, useState } from "react";
import { SUBTITLE_ADAPTATIVE_FONTSIZE, TEXT_ADAPTATIVE_FONTSIZE } from "../constants/font ";

type Props = {
    baseHeight?: string;
    content: string | ReactNode;
    height?: string;
    hoverWidth?: string;
    title?: string;
    width?: string;
    tailwindStyle?: string;
}

export const Widget: FC<Props> = ({
    title,
    content,
    width="auto",
    height="auto",
    tailwindStyle,
}) => {

    return (
        <div
            style={{
                width: width,
                height: height,
            }}
            className={tailwindStyle ?? `
                    border border-solid border-borderColor bg-containerBg rounded-lg p-3
                    hover:border-secondary hover:border-2 text-center
                    custom-widget-transition hover:scale-105
                `
            }
        >
            {title ? (
                <h4 
                    style={{
                        fontSize: SUBTITLE_ADAPTATIVE_FONTSIZE,
                    }}
                    className={"mt-0"}
                > 
                    {title}
                </h4>
            ) : null}
            {typeof content === "string" ? (
                <p
                    style={{
                        fontSize: TEXT_ADAPTATIVE_FONTSIZE,
                    }}
                >
                    {content}
                </p>
            ) : (content)}
        </div>
    );
};