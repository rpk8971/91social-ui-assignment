import "./App.css";
import ChartsCard from "./pages/components/charts/ChartsCard";
import DataSetCard from "./pages/components/datasetcard/DataSetCard";
import TopCard from "./pages/components/topCard/TopCard";
import TransformationCard from "./pages/components/transformation/TransformationCard";
import WorkingVersionCard from "./pages/components/workingversion/WorkingVersionCard";

function App() {
  return (
    <div className="App">
      <TopCard />
      <DataSetCard />
      <TransformationCard />
      <ChartsCard />
      <WorkingVersionCard />
    </div>
  );
}

export default App;
