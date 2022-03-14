import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom"
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";


const QuoteDetail = () => {
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);
    const match = useRouteMatch()
    const params = useParams()
    const {quoteid} = params;
    useEffect(()=>{
        sendRequest(quoteid)
    }, [sendRequest, quoteid])
    if (status==='pending') {
        return <LoadingSpinner />
    }
    if (error) {
        return <p className='centered'>{error}</p>
    }
    if (!loadedQuote.text) {
        return <p>no quote found</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link to={`${match.url}/comments`} className='btn--flat'>Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;