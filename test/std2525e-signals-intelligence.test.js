import { ms } from "../src/milsymbol.js";
ms.reset();
import { ms2525e } from "milstandard-e";
import verify from "./number-sidc.js";

import { signalsintelligence as icons } from "../src/numbersidc.js";
ms.addIcons(icons);

export default verify(ms, ms2525e["50"]);
