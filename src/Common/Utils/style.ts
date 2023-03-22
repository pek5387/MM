import { Unit } from "../Model/Type";

const baseUnit: string = "rem";

export const arrayStyleSet = (
    target?: readonly [Unit?, Unit?, Unit?, Unit?]
) => {
    const isArray = Array.isArray(target);
    let style = "";
    isArray
        ? target.map((i) => {
              return (style +=
                  typeof i === "number"
                      ? i + `${baseUnit} `
                      : i
                      ? i + " "
                      : "0 ");
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
