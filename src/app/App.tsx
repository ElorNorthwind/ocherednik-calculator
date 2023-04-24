import { Calculator } from "@/entity/Calculator";
import { scales } from "@/shared/config/scales";
import Layout from "@/widgets/Layout/Layout";

function App() {
  return (
    <Layout>
      <Calculator scales={scales} />
    </Layout>
  );
}

export default App;
