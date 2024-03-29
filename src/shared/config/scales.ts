export interface ChoiceOption {
  id: number;
  name: string;
  unavailable: boolean;
  scale?: number;
  parentId?: number;
}

export interface Scales {
  years: ChoiceOption[];
  komn: ChoiceOption[];
  wear: ChoiceOption[];
  series: ChoiceOption[];
  ao: ChoiceOption[];
  area: ChoiceOption[];
  repairs: ChoiceOption[];
}

const years: ChoiceOption[] = [
  { id: 1, name: "25 лет и более", unavailable: false, scale: 0.3 },
  { id: 2, name: "от 20 до 25 лет", unavailable: false, scale: 0.5 },
  { id: 3, name: "от 15 до 20 лет", unavailable: false, scale: 1.0 },
  { id: 4, name: "от 10 до 15 лет", unavailable: false, scale: 1.5 },
  { id: 5, name: "не на учёте", unavailable: true, scale: 1.7 },
];

const komn: ChoiceOption[] = [
  { id: 1, name: "отдельная квартира", unavailable: false, scale: 1.0 },
  { id: 2, name: "комната или доля", unavailable: false, scale: 0.8 },
];

const wear: ChoiceOption[] = [
  { id: 1, name: "до 5 лет (новостройка)", unavailable: false, scale: 1.0 },
  { id: 2, name: "6-10 лет", unavailable: false, scale: 0.9 },
  { id: 3, name: "10-20 лет", unavailable: false, scale: 0.8 },
  { id: 4, name: "20-30 лет", unavailable: false, scale: 0.7 },
  { id: 5, name: "более 30 лет", unavailable: false, scale: 0.6 },
];

const series: ChoiceOption[] = [
  { id: 1, name: "типовая", unavailable: false, scale: 79174.00 },
  { id: 2, name: "индивидуальная", unavailable: false, scale: 131997.09 },
];

const ao: ChoiceOption[] = [
  { id: 1, name: "ЦАО", unavailable: false },
  { id: 2, name: "САО", unavailable: false },
  { id: 3, name: "СВАО", unavailable: false },
  { id: 4, name: "ВАО", unavailable: false },
  { id: 5, name: "ЮВАО", unavailable: false },
  { id: 6, name: "ЮАО", unavailable: false },
  { id: 7, name: "ЮЗАО", unavailable: false },
  { id: 8, name: "ЗАО", unavailable: false },
  { id: 9, name: "СЗАО", unavailable: false },
  { id: 10, name: "ЗелАО", unavailable: false },
  { id: 11, name: "ТАО", unavailable: false },
  { id: 12, name: "НАО", unavailable: false },
  { id: 13, name: "Вне Москвы", unavailable: false },
];

const area: ChoiceOption[] = [
  { id: 1, name: "Арбат", unavailable: false, scale: 1.65, parentId: 1 },
  { id: 2, name: "Басманный", unavailable: false, scale: 1.22, parentId: 1 },
  { id: 3, name: "Замоскворечье", unavailable: false, scale: 1.36, parentId: 1 },
  { id: 4, name: "Красносельский", unavailable: false, scale: 1.22, parentId: 1 },
  { id: 5, name: "Мещанский", unavailable: false, scale: 1.29, parentId: 1 },
  { id: 6, name: "Пресненский", unavailable: false, scale: 1.36, parentId: 1 },
  { id: 7, name: "Таганский", unavailable: false, scale: 1.24, parentId: 1 },
  { id: 8, name: "Тверской", unavailable: false, scale: 1.58, parentId: 1 },
  { id: 9, name: "Хамовники", unavailable: false, scale: 1.52, parentId: 1 },
  { id: 10, name: "Якиманка", unavailable: false, scale: 1.6, parentId: 1 },
  { id: 11, name: "Аэропорт", unavailable: false, scale: 1.1, parentId: 2 },
  { id: 12, name: "Беговой", unavailable: false, scale: 1.12, parentId: 2 },
  { id: 13, name: "Бескудниковский", unavailable: false, scale: 0.9, parentId: 2 },
  { id: 14, name: "Войковский", unavailable: false, scale: 1.02, parentId: 2 },
  { id: 15, name: "Восточное Дегунино", unavailable: false, scale: 0.84, parentId: 2 },
  { id: 16, name: "Головинский", unavailable: false, scale: 0.96, parentId: 2 },
  { id: 17, name: "Дмитровский", unavailable: false, scale: 0.83, parentId: 2 },
  { id: 18, name: "Западное Дегунино", unavailable: false, scale: 0.82, parentId: 2 },
  { id: 19, name: "Коптево", unavailable: false, scale: 0.96, parentId: 2 },
  { id: 20, name: "Левобережный", unavailable: false, scale: 0.98, parentId: 2 },
  { id: 21, name: "Савеловский", unavailable: false, scale: 1.02, parentId: 2 },
  { id: 22, name: "Сокол", unavailable: false, scale: 1.19, parentId: 2 },
  { id: 23, name: "Тимирязевский", unavailable: false, scale: 1.03, parentId: 2 },
  { id: 24, name: "Ховрино", unavailable: false, scale: 0.96, parentId: 2 },
  { id: 25, name: "Хорошевский", unavailable: false, scale: 1.05, parentId: 2 },
  { id: 26, name: "Алексеевский", unavailable: false, scale: 1.08, parentId: 3 },
  { id: 27, name: "Алтуфьевский", unavailable: false, scale: 0.84, parentId: 3 },
  { id: 28, name: "Бабушкинский", unavailable: false, scale: 1.01, parentId: 3 },
  { id: 29, name: "Бибирево", unavailable: false, scale: 0.89, parentId: 3 },
  { id: 30, name: "Бутырский", unavailable: false, scale: 0.96, parentId: 3 },
  { id: 31, name: "Лианозово", unavailable: false, scale: 0.93, parentId: 3 },
  { id: 32, name: "Лосиноостровский", unavailable: false, scale: 0.91, parentId: 3 },
  { id: 33, name: "Марфино", unavailable: false, scale: 0.95, parentId: 3 },
  { id: 34, name: "Марьина Роща", unavailable: false, scale: 1.08, parentId: 3 },
  { id: 35, name: "Останкинский", unavailable: false, scale: 1.09, parentId: 3 },
  { id: 36, name: "Отрадное", unavailable: false, scale: 0.93, parentId: 3 },
  { id: 37, name: "Ростокино", unavailable: false, scale: 0.98, parentId: 3 },
  { id: 38, name: "Свиблово", unavailable: false, scale: 0.95, parentId: 3 },
  { id: 39, name: "Северное Медведково", unavailable: false, scale: 0.91, parentId: 3 },
  { id: 40, name: "Северный", unavailable: false, scale: 0.66, parentId: 3 },
  { id: 41, name: "Южное Медведково", unavailable: false, scale: 0.94, parentId: 3 },
  { id: 42, name: "Ярославский", unavailable: false, scale: 0.9, parentId: 3 },
  { id: 43, name: "Богородское", unavailable: false, scale: 0.96, parentId: 4 },
  { id: 44, name: "Вешняки", unavailable: false, scale: 0.93, parentId: 4 },
  { id: 45, name: "Восточное Измайлово", unavailable: false, scale: 0.98, parentId: 4 },
  { id: 46, name: "Гольяново", unavailable: false, scale: 0.89, parentId: 4 },
  { id: 47, name: "Ивановское", unavailable: false, scale: 0.89, parentId: 4 },
  { id: 48, name: "Измайлово", unavailable: false, scale: 0.98, parentId: 4 },
  { id: 49, name: "Новогиреево", unavailable: false, scale: 0.9, parentId: 4 },
  { id: 50, name: "Новокосино", unavailable: false, scale: 0.82, parentId: 4 },
  { id: 51, name: "Метрогородок", unavailable: false, scale: 0.9, parentId: 4 },
  { id: 52, name: "Перово", unavailable: false, scale: 0.9, parentId: 4 },
  { id: 53, name: "Преображенское", unavailable: false, scale: 1.02, parentId: 4 },
  { id: 54, name: "Северное Измайлово", unavailable: false, scale: 0.94, parentId: 4 },
  { id: 55, name: "Соколиная Гора", unavailable: false, scale: 0.98, parentId: 4 },
  { id: 56, name: "Сокольники", unavailable: false, scale: 1.22, parentId: 4 },
  { id: 57, name: "Косино-Ухтомский", unavailable: false, scale: 0.76, parentId: 4 },
  { id: 58, name: "Выхино-Жулебино", unavailable: false, scale: 0.89, parentId: 5 },
  { id: 59, name: "Капотня", unavailable: false, scale: 0.9, parentId: 5 },
  { id: 60, name: "Кожухово", unavailable: false, scale: 0.72, parentId: 5 },
  { id: 61, name: "Кузьминки", unavailable: false, scale: 0.98, parentId: 5 },
  { id: 62, name: "Лефортово", unavailable: false, scale: 0.97, parentId: 5 },
  { id: 63, name: "Люблино", unavailable: false, scale: 0.91, parentId: 5 },
  { id: 64, name: "Марьино", unavailable: false, scale: 0.91, parentId: 5 },
  { id: 65, name: "Некрасовка", unavailable: false, scale: 0.56, parentId: 5 },
  { id: 66, name: "Печатники", unavailable: false, scale: 0.89, parentId: 5 },
  { id: 67, name: "Рязанский", unavailable: false, scale: 0.92, parentId: 5 },
  { id: 68, name: "Текстильщики", unavailable: false, scale: 0.92, parentId: 5 },
  { id: 69, name: "Южнопортовый", unavailable: false, scale: 0.92, parentId: 5 },
  { id: 70, name: "Бирюлево Восточное", unavailable: false, scale: 0.82, parentId: 6 },
  { id: 71, name: "Бирюлево Западное", unavailable: false, scale: 0.85, parentId: 6 },
  { id: 72, name: "Братеево", unavailable: false, scale: 0.99, parentId: 6 },
  { id: 73, name: "Даниловский", unavailable: false, scale: 1.15, parentId: 6 },
  { id: 74, name: "Донской", unavailable: false, scale: 1.09, parentId: 6 },
  { id: 75, name: "Зябликово", unavailable: false, scale: 0.89, parentId: 6 },
  { id: 76, name: "Москворечье-Сабурово", unavailable: false, scale: 1.01, parentId: 6 },
  { id: 77, name: "Нагатино-Садовники", unavailable: false, scale: 1.02, parentId: 6 },
  { id: 78, name: "Нагатинский затон", unavailable: false, scale: 1.02, parentId: 6 },
  { id: 79, name: "Нагорный", unavailable: false, scale: 1.01, parentId: 6 },
  { id: 80, name: "Орехово-Борисово Северное", unavailable: false, scale: 0.95, parentId: 6 },
  { id: 81, name: "Орехово-Борисово Южное", unavailable: false, scale: 0.93, parentId: 6 },
  { id: 82, name: "Царицыно", unavailable: false, scale: 1.09, parentId: 6 },
  { id: 83, name: "Чертаново Северное", unavailable: false, scale: 1.08, parentId: 6 },
  { id: 84, name: "Чертаново Центральное", unavailable: false, scale: 0.96, parentId: 6 },
  { id: 85, name: "Чертаново Южное", unavailable: false, scale: 0.92, parentId: 6 },
  { id: 86, name: "Академический", unavailable: false, scale: 1.16, parentId: 7 },
  { id: 87, name: "Гагаринский", unavailable: false, scale: 1.3, parentId: 7 },
  { id: 88, name: "Зюзино", unavailable: false, scale: 1.09, parentId: 7 },
  { id: 89, name: "Коньково", unavailable: false, scale: 1.11, parentId: 7 },
  { id: 90, name: "Котловка", unavailable: false, scale: 0.98, parentId: 7 },
  { id: 91, name: "Ломоносовский", unavailable: false, scale: 1.22, parentId: 7 },
  { id: 92, name: "Обручевский", unavailable: false, scale: 1.14, parentId: 7 },
  { id: 93, name: "Северное Бутово", unavailable: false, scale: 0.95, parentId: 7 },
  { id: 94, name: "Теплый Стан", unavailable: false, scale: 1.0, parentId: 7 },
  { id: 95, name: "Черемушки", unavailable: false, scale: 1.15, parentId: 7 },
  { id: 96, name: "Южное Бутово", unavailable: false, scale: 0.88, parentId: 7 },
  { id: 97, name: "Ясенево", unavailable: false, scale: 1.01, parentId: 7 },
  { id: 98, name: "Внуково", unavailable: false, scale: 0.77, parentId: 8 },
  { id: 99, name: "Дорогомилово", unavailable: false, scale: 1.38, parentId: 8 },
  { id: 100, name: "Крылатское", unavailable: false, scale: 1.28, parentId: 8 },
  { id: 101, name: "Кунцево", unavailable: false, scale: 1.09, parentId: 8 },
  { id: 102, name: "Можайский", unavailable: false, scale: 0.97, parentId: 8 },
  { id: 103, name: "Ново-Переделкино", unavailable: false, scale: 0.83, parentId: 8 },
  { id: 104, name: "Очаково-Матвеевское", unavailable: false, scale: 0.94, parentId: 8 },
  { id: 105, name: "Проспект Вернадского", unavailable: false, scale: 1.18, parentId: 8 },
  { id: 106, name: "Раменки", unavailable: false, scale: 1.13, parentId: 8 },
  { id: 107, name: "Солнцево", unavailable: false, scale: 0.89, parentId: 8 },
  { id: 108, name: "Тропарево-Никулино", unavailable: false, scale: 1.06, parentId: 8 },
  { id: 109, name: "Филевский парк", unavailable: false, scale: 1.11, parentId: 8 },
  { id: 110, name: "Фили-Давыдково", unavailable: false, scale: 1.13, parentId: 8 },
  { id: 111, name: "Куркино", unavailable: false, scale: 0.84, parentId: 9 },
  { id: 112, name: "Митино", unavailable: false, scale: 0.86, parentId: 9 },
  { id: 113, name: "Покровское-Стрешнево", unavailable: false, scale: 0.95, parentId: 9 },
  { id: 114, name: "Северное Тушино", unavailable: false, scale: 0.95, parentId: 9 },
  { id: 115, name: "Строгино", unavailable: false, scale: 0.98, parentId: 9 },
  { id: 116, name: "Хорошево-Мневники", unavailable: false, scale: 1.06, parentId: 9 },
  { id: 117, name: "Щукино", unavailable: false, scale: 1.05, parentId: 9 },
  { id: 118, name: "Южное Тушино", unavailable: false, scale: 0.88, parentId: 9 },
  { id: 119, name: "Район Матушкино", unavailable: false, scale: 0.73, parentId: 10 },
  { id: 120, name: "Район Савелки", unavailable: false, scale: 0.74, parentId: 10 },
  { id: 121, name: "Район Силино", unavailable: false, scale: 0.69, parentId: 10 },
  { id: 122, name: "Район Старое Крюково", unavailable: false, scale: 0.75, parentId: 10 },
  { id: 123, name: "Вороновское", unavailable: false, scale: 0.48, parentId: 11 },
  { id: 124, name: "Киевский", unavailable: false, scale: 0.52, parentId: 11 },
  { id: 125, name: "Кленовское", unavailable: false, scale: 0.48, parentId: 11 },
  { id: 126, name: "Краснопахорское", unavailable: false, scale: 0.56, parentId: 11 },
  { id: 127, name: "Михайлово-Ярцевское", unavailable: false, scale: 0.51, parentId: 11 },
  { id: 128, name: "Новофедоровское", unavailable: false, scale: 0.52, parentId: 11 },
  { id: 129, name: "Первомайское", unavailable: false, scale: 0.6, parentId: 11 },
  { id: 130, name: "Роговское", unavailable: false, scale: 0.4, parentId: 11 },
  { id: 131, name: "Троицк", unavailable: false, scale: 0.64, parentId: 11 },
  { id: 132, name: "Щаповское", unavailable: false, scale: 0.51, parentId: 11 },
  { id: 133, name: "Внуковское", unavailable: false, scale: 0.75, parentId: 12 },
  { id: 134, name: "Воскресенское", unavailable: false, scale: 0.66, parentId: 12 },
  { id: 135, name: "Десеновское", unavailable: false, scale: 0.66, parentId: 12 },
  { id: 136, name: "Кокошкино", unavailable: false, scale: 0.6, parentId: 12 },
  { id: 137, name: "Марушкинское", unavailable: false, scale: 0.6, parentId: 12 },
  { id: 138, name: "Московский", unavailable: false, scale: 0.82, parentId: 12 },
  { id: 139, name: "Мосрентген", unavailable: false, scale: 0.83, parentId: 12 },
  { id: 140, name: "Рязановское", unavailable: false, scale: 0.66, parentId: 12 },
  { id: 141, name: "Сосенское", unavailable: false, scale: 0.83, parentId: 12 },
  { id: 142, name: "Филимоновское", unavailable: false, scale: 0.77, parentId: 12 },
  { id: 143, name: "Щербинка", unavailable: false, scale: 0.71, parentId: 12 },
  { id: 144, name: "В пределах Малого Московского кольца", unavailable: false, scale: 0.5, parentId: 13 },
  { id: 146, name: "Вне Малого Московского кольца", unavailable: false, scale: 0.45, parentId: 13 },
];

const repairs: ChoiceOption[] = [
  { id: 1, name: "не требует ремонта", unavailable: false, scale: 1.0 },
  { id: 2, name: "требуется ремонт", unavailable: false, scale: 0.75 },
];

export const scales: Scales = { years, komn, wear, series, ao, area, repairs };
