import "./App.css";
import DataTable from "./DataTable";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <h1 className="display-3">WELCOME TO BOOTCAMP - Jan 10 2023 Edition</h1>
        <p className="lead">My Name is Abhishek Thakur and I am a Student</p>
        <p className="lead">
          Here is my Github <a href="http://github.com/iamabhishekt">Link </a>
        </p>
        <p className="lead">
          Here is Class Notes <a href="http://webdevnotes.wynisco.com">Link </a>
        </p>
        <p className="lead">
          Here is Homeworks <a href="http://webdevhw.wynisco.com">Link </a>
        </p>
        <p className="lead">
          Main Google Spreadsheet{" "}
          <a href="http://docs.google.com/spreadsheets/d/1I75Kt78QSCRSAiF74yBttNyWVI4bq2ONsTWnN_ai9iA/edit?usp=sharing">
            Link{" "}
          </a>
        </p>
        <DataTable />
      </Container>
    </div>
  );
}

export default App;
