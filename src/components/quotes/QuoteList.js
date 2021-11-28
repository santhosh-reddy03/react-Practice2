import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation()
  const sortparams = new URLSearchParams(location.search)
  const isSortAscending = sortparams.get('sort') === 'asc'
  const sortedQuoets = sortQuotes(props.quotes, isSortAscending)
  const sortHandler = () => {
    history.push('/quotes/?sort='+(isSortAscending?'desc':'asc'))
  }

  return (
    <Fragment>
      <div className='sorting'>
        <button className='btn' onClick={sortHandler}>Sort {isSortAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuoets.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
