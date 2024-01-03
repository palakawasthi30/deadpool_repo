import React from "react";
import CompB from "./CompB";
import CompC from "./CompC";

const CompA=()=>{

    return(
        <div>
            <h1>component A</h1>
            <CompB />
            <CompC />
        </div>
    );
};

export default CompA;