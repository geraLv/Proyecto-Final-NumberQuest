import React, {useState} from "react";
import Dropdown from "./hook/useChoice";
import MultipleChoice from "./hook/useChoice";
// import { MaterialTailwindTheme } from "@material-tailwind/react";


export const Composicion1  = () => {
    const [contador, setContador] = useState(0);
    const [respuesta, setRespuesta] = useState();

    return(
        <div>
            <MultipleChoice/>
        </div>
    )
}