import { Calculator } from "@/entity/Calculator";
import { scales } from "@/shared/config/scales";
import { useFixScreenSize } from "@/shared/lib/hooks/useFixScreenSize";
import { Adress } from "@/shared/types/adresses";
import AppSearchbar from "@/shared/ui/AppSearchbar/AppSearchbar";
import Layout from "@/widgets/Layout/Layout";
import LegalNotes from "@/widgets/LegalNotes/LegalNotes";
import { useState } from "react";

function App() {
  useFixScreenSize();
  const [adress, setAdress] = useState<Adress | null>(null);
  return (
    <Layout>
      <AppSearchbar selectedItem={adress} onChange={setAdress} />
      <Calculator scales={scales} />
      <LegalNotes />
    </Layout>
  );
}

export default App;
