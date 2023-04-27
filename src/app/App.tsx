import { Calculator } from "@/entity/Calculator";
import { scales } from "@/shared/config/scales";
import { useFixScreenSize } from "@/shared/lib/hooks/useFixScreenSize";
import Layout from "@/widgets/Layout/Layout";
import LegalNotes from "@/widgets/LegalNotes/LegalNotes";

function App() {
  useFixScreenSize();
  return (
    <Layout>
      <Calculator scales={scales} />
      <LegalNotes />
    </Layout>
  );
}

export default App;
