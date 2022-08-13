import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container p-5">
      <ul className="list-group">
        <li className="list-group-item">
          Click the title to navigate to the page
        </li>

        <li className="list-group-item list-group-item-primary">
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
        <li className="list-group-item list-group-item-warning">
          <Link to="/strings">Strings</Link>
        </li>
        <li className="list-group-item list-group-item-success">
          <Link to="/prime-numbers">Prime Numbers</Link>
        </li>
        <li className="list-group-item list-group-item-info">
          <Link to="/multiplication-table">Multiplication Table</Link>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Link to="/sum-of-natural-numbers">Sum of Natural Numbers</Link>
        </li>
        <li className="list-group-item list-group-item-light">
          <Link to="/sum-of-digits">Sum of Digits in a String</Link>
        </li>
        <li className="list-group-item list-group-item-dark">
          <Link to="/check-within-100To500">Check if number is within 100 to 500</Link>
        </li>
        <li className="list-group-item list-group-item-primary">
          <Link to="/right-triangle">Right triangle</Link>
        </li>
        <li className="list-group-item list-group-item-warning">
          <Link to="/triangle">Isosceles Triangle</Link>
        </li>
        <li className="list-group-item list-group-item-success">
          <Link to="/number-right-triangle">NumberRightTriangle</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;