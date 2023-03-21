type UnitString = `px` | `em` | `rem` | `vw` | `vh` | `vmin` | `vmax` | `%`;

export type Unit = "auto" | `${number}${UnitString}` | number;
