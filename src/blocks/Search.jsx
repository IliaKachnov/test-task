import { useState, useEffect } from "react";
import SearchBar from "../components/searchBar/SearchBar";
import TableCell from "../components/tableCell/TableCell";
import TableHeader from "../components/tableHeader/TableHeader";
import "./search.css";
import "../styles/pagination.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [collections, setCollections] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении данных!");
      });
  }, [page]);
  return (
    <>
      <div className="search__container">
        <SearchBar value={searchValue} onChange={setSearchValue} />
        <div className="wrapper">
          <TableHeader />

          {collections
            .filter(
              (obj) =>
                obj.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                obj.body.toLowerCase().includes(searchValue.toLowerCase()) ||
                obj.id == searchValue
            )
            .map((obj) => (
              <TableCell
                key={obj.id}
                id={obj.id}
                title={obj.title}
                body={obj.body}
              />
            ))}
        </div>

        <div className="pagination__container">
          <p
            className={page <= 1 ? "previous visibility" : "previous"}
            onClick={() => setPage(page - 1)}
          >
            Назад
          </p>
          <ul className="page__container">
            {[...Array(10)].map((_, i) => (
              <li
                key={i}
                onClick={() => setPage(i + 1)}
                className={page === i + 1 ? "page active" : "page"}
              >
                {i + 1}
              </li>
            ))}
          </ul>
          <p
            className={page >= 10 ? "next visibility" : "next"}
            onClick={() => setPage(page + 1)}
          >
            Далее
          </p>
        </div>
      </div>
    </>
  );
};

export default Search;
