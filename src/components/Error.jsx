import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    // Destructuring of the data
    // const { status, statusText } = err;

    console.log(err);
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h2>SOMETHING WENT WRONG...</h2>
            <h3>{err.status + " : " + err.statusText}</h3>
        </div>
    );
};

export default Error;
