import { Fragment } from "react";
import { useParams, Route } from "react-router-dom"
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const params = useParams()
    return (
        <Fragment>
            <h1>quote details</h1>
            <p>{params.quoteid}</p>
            <Route path={`/allquotes/${params.quoteid}/c`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;