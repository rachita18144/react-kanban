import './App.css';
import Column from './components/Column/Column'

const mockData = [
  {
    title: 'Backlog',
    tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    color: 'orange',
    input: '',
  },
  {
    title: 'In progress',
    tasks: ['Task 5', 'Task 6'],
    color: 'purple',
    input: '',
  },
  {
    title: 'Done',
    tasks: ['Task 7', 'Task 8', 'Task 9'],
    color: 'green',
    input: '',
  }
]

/* TODO: we can also make the number of
  columns customizable.
*/
const getColumnSection = () => (
  <section className="columns">
    <Column
      itemList={mockData[0].tasks}
      colTitle={mockData[0].title}
      color={mockData[0].color}
      />
    <Column
      itemList={mockData[1].tasks}
      colTitle={mockData[1].title}
      color={mockData[1].color}
      />
    <Column
      itemList={mockData[2].tasks}
      colTitle={mockData[2].title}
      color={mockData[2].color}
      />
  </section>
);

function App() {
  return (
    <div className="app">
      <header className="header">
        <h2>
          Kanban Board
        </h2>
      </header>

      {getColumnSection()}
      
    </div>
  );
}

export default App;
