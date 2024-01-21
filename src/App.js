import { useState } from "react";
import "./App.css";
const tableData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [data, setData] = useState(tableData);
  const [sortType, setSortType] = useState(null);

  const handleSortByDate = () => {
    const sortedData = data.slice().sort((a, b) => {
      if (a.date === b.date) {
        return a.views - b.views;
      }
      return a.date.localeCompare(b.date);
    });
    setData(sortedData);
    setData(sortType === "date" ? sortedData.reverse() : sortedData);
    setSortType("date");
  };

  const handleSortByView = () => {
    const sortedData = data.slice().sort((a, b) => {
      if (a.views === b.views) {
        return a.date.localeCompare(b.date);
      }
      return a.views - b.views;
    });
    setData(sortType === "views" ? sortedData.reverse() : sortedData);
    setSortType("views");
  };
  return (
    <div className="Container">
      <h1>Date and Views Table</h1>
      <div className="table_btn">
        <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handleSortByView}>Sort by Views</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <th>{item.date}</th>
              <th>{item.views}</th>
              <th>{item.article}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
