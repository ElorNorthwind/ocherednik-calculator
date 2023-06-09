export default function LegalNotes() {
  return (
    <div className="w-full text-xs tracking-tight text-stone-600 mb-3 hidden md:flex md:flex-col md:gap-3">
      <div>
        Информация о серии и годе постройки дома доступна на{" "}
        <a className="font-semibold text-stone-500" target="_blank" href="https://dom.mos.ru/">
          портале "Дома Москвы" dom.mos.ru
        </a>{" "}
      </div>
      <div>
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
    </div>
  );
}
