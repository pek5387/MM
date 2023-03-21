import { css } from "styled-components";

export const arraySet = (target?: Array<number | string>) => {
    const isArray = Array.isArray(target);
    let style = "";
    isArray
        ? target.map((i) => {
              return (style += typeof i === "number" ? i + "rem " : i + " ");
          })
        : (style += "");

    return style;
};

export const alignSet = (target?: string) => {
    switch (target) {
        case "left":
        case "top":
            return "flex-start";
        case "center":
        case "middle":
            return "center";
        case "right":
        case "bottom":
            return "flex-end";
        case "side":
            return "space-between";
        default:
            return "";
    }
};

export const unitStyle = css`
    ${({ theme: { unit }, ...props }) => `
    ${unit(props)}
`}
`;
