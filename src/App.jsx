import './App.css';
import FormattedText from './components/FornattedText';
import List from './components/List';

const list1 = [
  "pimeiro item",
  "segundo item",
  "terceiro item",
  "quarto item",
  "quinto item",
]
const list2 = [
  "sexto item",
  "setimo item",
]


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <List 
          items={list1}
        />
        <List 
          items={list2}
        />
        <FormattedText 
          label={"Miguel"}
          value={"leugiM"}
        />
        <FormattedText 
          label={"Pedro"}
          value={"ordeP"}
        />
      </header>
      <div></div>
    </div>
  );
}

export default App;
