import { Tab, TabList } from "./Tabs";

const TAB_LIST = [
  { label: "Tab 1" },
  { label: "Tab 2" },
  { label: "Tab 3" },
  { label: "Tab 4" },
  { label: "Tab 5" },
  { label: "Tab 6" },
];

function App() {
  function selectionHandler(index: number) {
    console.log(index + 1);
  }

  return (
    <div>
      <TabList onChange={selectionHandler}>
        {TAB_LIST.map((tab, index) => (
          <Tab key={index} label={tab.label} value={index} />
        ))}
      </TabList>
    </div>
  );
}

export default App;
