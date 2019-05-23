import { connectStateResults } from 'react-instantsearch-dom';

const BlogSearchResults = ({ searchState, searchResults, children }) => {
  if(
    searchState.query
    && searchResults
    && searchResults.query === searchState.query
    && searchResults.nbHits !== 0) {
    return children;
  }
  return null;
};

export default connectStateResults(BlogSearchResults);
