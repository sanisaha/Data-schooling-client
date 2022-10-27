import React, { useEffect, useState } from 'react';
import './FAQ.css'
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const FAQ = () => {

    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <p>hlw</p>
            </div>
        </div>
    );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<FAQ />, rootElement);

export default FAQ;