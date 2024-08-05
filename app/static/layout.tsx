import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import Router from "preact-router";
import Home from "./pages/page"; // Import Home component


export function App() {

    // const [siteTitle, setSiteTitle] = useState("");

    // useEffect(() => {
    //     const initialData = window.context;
    //     if (initialData) {
    //         setSiteTitle(initialData.siteTitle);
    //     }
    // }, []);

    return (
        <>
            <nav>navbar</nav>
            <Router>
                <Home path="/" />
            </Router>
            <footer>footer</footer>
        </>
    );
}