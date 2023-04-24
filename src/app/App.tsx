import { Calculator } from "@/entity/Calculator";
import { scales } from "@/shared/config/scales";
import Layout from "@/widgets/Layout/Layout";

function App() {
  return (
    <Layout>
      <Calculator scales={scales} />
      <div className="w-full text-xs tracking-tight text-stone-600 mb-3">
        Расчёт стоимости осуществляется в соответствии с{" "}
        <a
          className="font-semibold text-stone-500"
          target="_blank"
          href="https://www.mos.ru/authority/documents/doc/28499220/"
        >
          постановлением Правительства Москвы от 14.08.2007 № 703-ПП
        </a>{" "}
        "Об утверждении Методики расчета выкупной стоимости жилых помещений, находящихся в собственности города Москвы,
        для реализации гражданам в рамках городских жилищных программ и о порядке выплаты компенсации в денежной форме
        из бюджета города Москвы за ремонт жилого помещения"
      </div>
    </Layout>
  );
}

export default App;
