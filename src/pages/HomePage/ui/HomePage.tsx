import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useSearch } from '../../../app/providers/SearchProvider';
import { getMovies, SearchResponse } from '../../../shared/api/requests/getMovies';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { Card } from '../../../shared/ui';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const [page, setPage] = useState(1);
  const [data, setData] = useState<SearchResponse | null>(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    if (!debouncedSearchTerm) {
      setData(null);
      return;
    }

    setIsLoading(true);
    getMovies(debouncedSearchTerm, page).then((data) => {
      setData(data);
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchData();
  }, [debouncedSearchTerm, page]);

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handlePageChange = (selectedPage: { selected: number }) => {
    setPage(selectedPage.selected);
  };
  return (
    <>
      <div className={styles.total}>
        <div>
          You searched for:
          <span className={styles.term}>{debouncedSearchTerm}</span>
        </div>
        <div className={styles.results}>
          {data?.totalResults}
          <span>results</span>
        </div>
      </div>
      {!isLoading && !data?.Search && <div>No data</div>}

      <div className={styles.cards}>
        {data?.Search?.map((movie) => (
          <Card
            key={movie.imdbID}
            name={movie.Title}
            year={movie.Year}
            type={movie.Type}
            id={movie.imdbID}
            poster={movie.Poster}
          />
        ))}
      </div>

      <ReactPaginate
        pageCount={Math.ceil(Number(data?.totalResults) / 10)}
        onPageChange={handlePageChange}
        containerClassName={styles.pagination}
        activeClassName="active"
        forcePage={page}
      />

    </>
  );
};

export default HomePage;
