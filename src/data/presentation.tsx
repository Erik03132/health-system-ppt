export interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
  speakerNotes: string;
  type: 'title' | 'content' | 'final';
}

export const slides: Slide[] = [
  {
    id: 1,
    title: 'Титульный',
    type: 'title',
    speakerNotes: `Уважаемые коллеги, позвольте представить доклад о современном состоянии, проблемах и перспективах совершенствования системы охраны здоровья работающих граждан в Московской области. Тема, которую мы сегодня рассматриваем, имеет стратегическое значение: от того, насколько эффективно выстроена система медицинского обслуживания работающего населения, напрямую зависят и производительность труда, и демографическая устойчивость региона. Доклад состоит из трёх частей: анализ текущего состояния, выявленные проблемы нормативного регулирования и конкретные предложения по совершенствованию системы.`,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 100 100" className="w-20 h-20 text-white">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 15 L50 85 M15 50 L85 50" stroke="currentColor" strokeWidth="3"/>
              <path d="M50 15 L65 35 L50 30 L35 35 Z" fill="currentColor"/>
              <path d="M50 85 L35 65 L50 70 L65 65 Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <div className="space-y-4 max-w-3xl">
          <p className="text-xl font-medium text-primary-dark uppercase tracking-wider">Министерство здравоохранения Московской области</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark leading-tight">
            Современное состояние, проблемы и перспективы совершенствования системы охраны здоровья работающих граждан в Московской области
          </h1>
          <div className="pt-8">
            <p className="text-2xl font-semibold text-gray-800">Докладчик: Иванов Иван Иванович</p>
            <p className="text-lg text-gray-600 mt-2">Министр здравоохранения Московской области</p>
            <p className="text-xl font-medium text-primary mt-6">2025 г.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Экономический портрет Московской области',
    type: 'content',
    speakerNotes: `Московская область — это не просто регион-сосед столицы. Это второй по размеру бюджета субъект Российской Федерации и третий по объёму промышленного производства. На территории области сосредоточена наибольшая в стране концентрация наукоградов — Дубна, Пущино, Черноголовка и другие. Область является единственным в России производителем десяти видов стратегической промышленной продукции, включая магистральные тепловозы, вагоны метрополитена и высокочистый индий. Именно эта промышленная насыщенность определяет масштаб задачи по охране здоровья работающего населения. Добавлю важную особенность: близость Москвы одновременно стимулирует развитие региона и конкурентно перетягивает трудовые ресурсы — это создаёт дополнительное давление на систему здравоохранения области.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-bold text-primary-dark mb-8">Экономический портрет Московской области</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {/* Left side - Key facts */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary to-primary-dark p-6 rounded-lg text-white shadow-lg">
              <p className="text-lg font-medium">Московская область —</p>
              <p className="text-3xl font-bold mt-2">промышленное ядро страны</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white text-2xl font-bold">2</div>
                <div>
                  <p className="text-sm text-muted-foreground">место в России</p>
                  <p className="text-lg font-semibold">по размеру бюджета</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white text-2xl font-bold">3</div>
                <div>
                  <p className="text-sm text-muted-foreground">место в России</p>
                  <p className="text-lg font-semibold">по объёму отгруженной продукции</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white text-2xl font-bold">10</div>
                <div>
                  <p className="text-sm text-muted-foreground">видов продукции</p>
                  <p className="text-lg font-semibold">монополист в России</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Industry icons */}
          <div className="space-y-6">
            <p className="text-lg font-semibold text-gray-700">Ключевые отрасли:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                <div className="text-4xl mb-2">🏭</div>
                <p className="font-medium">Машиностроение</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
                <div className="text-4xl mb-2">⚗️</div>
                <p className="font-medium">Химия</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-100">
                <div className="text-4xl mb-2">💻</div>
                <p className="font-medium">Электроника</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-100">
                <div className="text-4xl mb-2">🧵</div>
                <p className="font-medium">Текстиль</p>
              </div>
            </div>
            
            <div className="bg-primary-dark text-white p-4 rounded-lg mt-4">
              <p className="font-semibold mb-2">🏛️ Наукограды России:</p>
              <p className="text-lg">Дубна, Пущино, Черноголовка</p>
              <p className="text-sm opacity-80 mt-1">Наибольшая концентрация в стране</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Численность населения и занятых',
    type: 'content',
    speakerNotes: `По данным Росстата на 1 января 2025 года, в Московской области проживает почти восемь миллионов восемьсот тысяч человек, из которых более четырёх миллионов шестисот тысяч — люди трудоспособного возраста. В региональном статистическом регистре учтено почти 194 тысячи организаций и предприятий с общей численностью работников около 2,4 миллиона человек. Особо хочу акцентировать внимание: из них 165 тысяч человек заняты на работах с вредными и опасными условиями труда. И это, подчеркну, — только те, по которым имеются сведения. По ряду отраслей — в том числе по медицинским организациям — такие данные и вовсе отсутствуют. Это само по себе является показателем системного информационного разрыва.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">Трудовой потенциал Московской области</h2>
        <p className="text-lg text-gray-600 mb-6">(на 01.01.2025)</p>
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stats table */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Показатель</th>
                  <th className="text-right p-4 font-semibold">Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Постоянное население</td>
                  <td className="p-4 text-right font-semibold">8 775,7 тыс. чел.</td>
                </tr>
                <tr className="border-b bg-muted">
                  <td className="p-4">Трудоспособного возраста</td>
                  <td className="p-4 text-right font-semibold">4 640,0 тыс. чел.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Работников в Статрегистре</td>
                  <td className="p-4 text-right font-semibold">2 420,0 тыс. чел.</td>
                </tr>
                <tr className="border-b bg-muted">
                  <td className="p-4">Организаций и предприятий</td>
                  <td className="p-4 text-right font-semibold">193 772</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="p-4 font-semibold">Занятых на вредных производствах</td>
                  <td className="p-4 text-right font-bold text-red-600">165,0 тыс. чел.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Visual representation */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Общее население</p>
              <div className="text-4xl font-bold text-primary">8 775 700</div>
              <p className="text-lg text-gray-600">человек</p>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1 bg-green-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-700">53%</p>
                <p className="text-sm text-green-800">трудоспособного возраста</p>
              </div>
              <div className="flex-1 bg-amber-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-amber-700">28%</p>
                <p className="text-sm text-amber-800">занятых в экономике</p>
              </div>
            </div>
            
            <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
              <p className="text-sm text-red-700 font-semibold">⚠️ ВНИМАНИЕ</p>
              <p className="text-red-800">165 000 человек заняты на вредных производствах</p>
              <p className="text-xs text-red-600 mt-1">* По ряду отраслей данные отсутствуют</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Распределение организаций по видам деятельности',
    type: 'content',
    speakerNotes: `На данном слайде представлена полная таблица распределения организаций Московской области по видам экономической деятельности. Прошу обратить внимание на два ключевых момента. Первый: наибольшее число работников занято в обрабатывающих производствах — более 512 тысяч человек, из которых почти 100 тысяч работают во вредных условиях. Это более 59% от общего числа занятых на вредных производствах по области. Второй момент, и он принципиально важен: по торговле, здравоохранению, образованию, государственному управлению и ряду других отраслей сведения о занятых на вредных производствах попросту отсутствуют. Реальная численность работников, нуждающихся в специализированном медицинском наблюдении, значительно превышает официальные 165 тысяч человек.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-primary-dark mb-4">Распределение организаций по видам деятельности</h2>
        <p className="text-sm text-gray-500 mb-4">Статрегистр Росстата, 01.01.2025</p>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-left p-3 font-semibold">Вид деятельности</th>
                <th className="text-right p-3 font-semibold">Число организаций</th>
                <th className="text-right p-3 font-semibold">Работников (тыс.)</th>
                <th className="text-right p-3 font-semibold">В т.ч. на вредных (тыс.)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-muted font-semibold">
                <td className="p-3">Всего</td>
                <td className="p-3 text-right">193 772</td>
                <td className="p-3 text-right">2 412,0</td>
                <td className="p-3 text-right">165,0</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Обрабатывающие производства</td>
                <td className="p-3 text-right">19 214</td>
                <td className="p-3 text-right">512,2</td>
                <td className="p-3 text-right font-semibold text-red-600">98,2</td>
              </tr>
              <tr className="border-b bg-muted">
                <td className="p-3">Торговля оптовая и розничная</td>
                <td className="p-3 text-right">47 547</td>
                <td className="p-3 text-right">468,8</td>
                <td className="p-3 text-right text-gray-400 italic">нет данных</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Транспортировка и хранение</td>
                <td className="p-3 text-right">12 469</td>
                <td className="p-3 text-right">194,7</td>
                <td className="p-3 text-right font-semibold">37,1</td>
              </tr>
              <tr className="border-b bg-muted">
                <td className="p-3">Здравоохранение и социальные услуги</td>
                <td className="p-3 text-right">5 124</td>
                <td className="p-3 text-right">182,1</td>
                <td className="p-3 text-right text-gray-400 italic">нет данных</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Строительство</td>
                <td className="p-3 text-right">22 511</td>
                <td className="p-3 text-right">112,9</td>
                <td className="p-3 text-right">7,2</td>
              </tr>
              <tr className="bg-muted">
                <td className="p-3">Прочие</td>
                <td className="p-3 text-right">—</td>
                <td className="p-3 text-right">520,1</td>
                <td className="p-3 text-right">16,5</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <p className="font-semibold text-amber-800">⚠️ Ключевой вывод:</p>
          <p className="text-amber-900">59% занятых на вредных производствах — в обрабатывающей промышленности</p>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Структура оказания медицинской помощи',
    type: 'content',
    speakerNotes: `Медицинская помощь работникам организаций Московской области оказывается четырьмя группами медицинских организаций, и здесь сразу обращает на себя внимание структурный дисбаланс. Около 85% объёма обязательных медицинских осмотров выполняют организации частной системы здравоохранения — при том что государственная координация их деятельности законодательно не предусмотрена. По профилю «профпатология» работают Центр профессиональной патологии и 34 кабинета врачей-профпатологов. Но реально занятых должностей врачей-профпатологов — лишь двадцать. Это критически мало для области с миллионами работающих граждан. Уже сама по себе эта цифра говорит о масштабе кадровой проблемы в системе.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-bold text-primary-dark mb-8">Кто оказывает медицинскую помощь работающим гражданам?</h2>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            {/* Central element */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full shadow-lg">
                <span className="text-3xl">👨‍⚕️</span>
                <span className="text-xl font-semibold">Работающий гражданин</span>
              </div>
            </div>
            
            {/* Four branches */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
                <div className="text-2xl mb-2">🏥</div>
                <p className="font-semibold text-primary">Медорганизации Минздрава МО</p>
                <p className="text-sm text-gray-600">по месту прикрепления</p>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-200">
                <div className="text-2xl mb-2">💼</div>
                <p className="font-semibold text-purple-700">Частные медорганизации</p>
                <p className="text-sm text-gray-600">≈85% объёма обязательных осмотров</p>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border-2 border-green-200">
                <div className="text-2xl mb-2">🏛️</div>
                <p className="font-semibold text-green-700">Федеральные организации, ФМБА</p>
                <p className="text-sm text-gray-600">8 медико-санитарных частей</p>
              </div>
              
              <div className="bg-amber-50 p-5 rounded-lg border-2 border-amber-200">
                <div className="text-2xl mb-2">🏭</div>
                <p className="font-semibold text-amber-700">МСЧ предприятий</p>
                <p className="text-sm text-gray-600">всего 4 единицы</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-primary-dark text-white p-4 rounded-lg text-center">
                <p className="text-3xl font-bold">34</p>
                <p className="text-sm">кабинетов врачей-профпатологов</p>
              </div>
              <div className="bg-red-100 border-2 border-red-300 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-red-600">20</p>
                <p className="text-sm text-red-800">фактически занятых должностей</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Системные проблемы',
    type: 'content',
    speakerNotes: `На этом слайде — ключевые системные проблемы, которые мы наблюдаем сегодня. Действующее законодательство не предусматривает координации медицинских организаций при обслуживании работающего населения со стороны органа государственной власти субъекта. Следствие — полное отсутствие преемственности. Медицинская организация по месту прикрепления не знает о результатах осмотров, пройденных работником по месту работы, и наоборот. Это означает повторные обследования за счёт средств обязательного медицинского страхования — то есть прямые и избыточные расходы. В медицинских картах отсутствуют сведения о месте работы пациента и вредных факторах производства. Без цехового принципа медицинского обслуживания увеличивается время от появления первых симптомов до постановки диагноза — а это прямой путь к росту числа дней временной нетрудоспособности и потерям для экономики предприятий.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-bold text-primary-dark mb-8">Ключевые проблемы системы медицинского обслуживания работающих</h2>
        
        <div className="flex-1 space-y-4">
          {[
            { icon: '❌', text: 'Нет координации медицинских организаций со стороны органа власти субъекта', color: 'red' },
            { icon: '❌', text: 'Нет преемственности и информационного обмена между участниками системы', color: 'red' },
            { icon: '❌', text: 'Результаты осмотров не учитываются при оказании первичной помощи → двойные расходы ОМС', color: 'orange' },
            { icon: '❌', text: 'Условия труда пациента не отражаются в медицинской карте', color: 'red' },
            { icon: '❌', text: 'Цеховой принцип медобслуживания фактически упразднён', color: 'red' },
          ].map((problem, idx) => (
            <div key={idx} className={`flex items-start gap-4 p-4 rounded-lg ${problem.color === 'red' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-orange-50 border-l-4 border-orange-500'}`}>
              <span className="text-2xl">{problem.icon}</span>
              <p className={`text-lg ${problem.color === 'red' ? 'text-red-900' : 'text-orange-900'}`}>{problem.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 bg-primary-dark text-white p-4 rounded-lg flex items-center gap-4">
          <span className="text-3xl">→</span>
          <div>
            <p className="font-semibold">Результат:</p>
            <p className="text-lg">рост временной нетрудоспособности, снижение эффективности труда</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Было и стало',
    type: 'content',
    speakerNotes: `Для понимания масштаба регресса важно сравнить то, что было, с тем, что есть. До 1991 года система охраны здоровья работающего населения была выстроена по производственному принципу: на каждом крупном предприятии — медико-санитарная часть, на остальных — здравпункты и цеховые терапевтические отделения. Приоритет здоровья работающих был законодательно закреплён. Сегодня этого приоритета в Федеральном законе об основах охраны здоровья граждан нет вовсе. Медико-санитарных частей — единицы. Цеховой принцип фактически упразднён. При этом именно работающее население формирует экономический потенциал страны. Предлагаемые нами изменения — это не ностальгия по прошлому, а возврат к доказавшим свою эффективность механизмам в современном правовом и технологическом контексте.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-bold text-primary-dark mb-8">Было и стало: приоритет охраны здоровья работающих</h2>
        
        <div className="flex-1">
          <table className="w-full text-lg">
            <thead>
              <tr>
                <th className="text-left p-4 w-1/3"></th>
                <th className="p-4 w-1/3 bg-green-100 text-green-800 text-center rounded-t-lg">
                  <span className="text-2xl">✅</span>
                  <p className="font-bold">До 1991 г.</p>
                </th>
                <th className="p-4 w-1/3 bg-red-100 text-red-800 text-center rounded-t-lg">
                  <span className="text-2xl">❌</span>
                  <p className="font-bold">Сегодня</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Приоритет работающих в законе</td>
                <td className="p-4 bg-green-50 text-center">✅ Закреплён</td>
                <td className="p-4 bg-red-50 text-center">❌ Отсутствует</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">МСЧ на крупных предприятиях</td>
                <td className="p-4 bg-green-50 text-center">✅ Обязательно<br/><span className="text-sm">(от 4000 чел.)</span></td>
                <td className="p-4 bg-red-50 text-center">⚠️ Единицы<br/><span className="text-sm">(4 МСЧ)</span></td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Цеховые терапевтические участки</td>
                <td className="p-4 bg-green-50 text-center">✅ Повсеместно</td>
                <td className="p-4 bg-red-50 text-center">❌ Фактически упразднены</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Здравпункты по месту работы</td>
                <td className="p-4 bg-green-50 text-center">✅ Норма</td>
                <td className="p-4 bg-red-50 text-center">❌ Исключение</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <p className="font-semibold text-amber-800">📋 Важно:</p>
          <p className="text-amber-900">Закон № 323-ФЗ не относит охрану здоровья работающих к основным принципам охраны здоровья граждан.</p>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Нарушения при проведении осмотров',
    type: 'content',
    speakerNotes: `Цифры, которые вы видите на этом слайде, требуют серьёзного осмысления. В 2025 году при проведении периодических медицинских осмотров противопоказания к работе выявлены у 3 176 человек. На экспертизу профессиональной пригодности направлено лишь 258 — это 8,1%. Судьба оставшихся почти трёх тысяч работников с противопоказаниями — неизвестна. Из 631 человека, нуждавшегося в обследовании в центре профпатологии, туда направлено 17 — меньше трёх процентов. И, пожалуй, наиболее красноречивый факт: на протяжении более пяти лет при проведении периодических осмотров в Московской области не выявлено ни одного случая с подозрением на профессиональное заболевание. При том что область насыщена вредными производствами. Это не медицинский феномен — это сигнал о формальном характере значительной части проводимых осмотров.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-primary-dark mb-6">Обязательные медицинские осмотры: критические нарушения (2025 г.)</h2>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Block 1 */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🚫</span>
              <div>
                <p className="text-sm text-red-600">Выявлены противопоказания к работе</p>
                <p className="text-4xl font-bold text-red-700">3 176 чел.</p>
              </div>
            </div>
            <div className="bg-white rounded p-3 mt-4">
              <p className="text-sm text-gray-600">Экспертизу профпригодности прошли:</p>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-2xl font-bold text-green-600">258 чел.</span>
                <span className="text-sm text-gray-500">(8,1%)</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                <div className="bg-red-500 h-3 rounded-full" style={{ width: '8.1%' }}></div>
              </div>
            </div>
          </div>
          
          {/* Block 2 */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏥</span>
              <div>
                <p className="text-sm text-orange-600">Нуждались в обследовании в центре профпатологии</p>
                <p className="text-4xl font-bold text-orange-700">631 чел.</p>
              </div>
            </div>
            <div className="bg-white rounded p-3 mt-4">
              <p className="text-sm text-gray-600">Фактически направлено:</p>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-2xl font-bold text-green-600">17 чел.</span>
                <span className="text-sm text-gray-500">(2,7%)</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                <div className="bg-orange-500 h-3 rounded-full" style={{ width: '2.7%' }}></div>
              </div>
            </div>
          </div>
          
          {/* Block 3 */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">👥</span>
              <div>
                <p className="text-sm text-blue-600">«Стажированных» работников прошли осмотр в Центре</p>
                <p className="text-4xl font-bold text-blue-700">4 806 чел.</p>
              </div>
            </div>
            <div className="bg-white rounded p-3 mt-4">
              <p className="text-sm text-gray-600">Сведения об их общем числе в МО:</p>
              <p className="text-lg font-semibold text-gray-400 mt-2">не представляются</p>
            </div>
          </div>
          
          {/* Block 4 - Most striking */}
          <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6 flex flex-col justify-center items-center text-center">
            <span className="text-5xl mb-4">⚠️</span>
            <p className="text-xl font-bold text-red-800">5 лет</p>
            <p className="text-lg text-red-700">без единого случая подозрения на профзаболевание при периодических осмотрах</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Охват медицинских организаций',
    type: 'content',
    speakerNotes: `Перейдём к данным об охвате медицинских организаций в части представления заключительных актов. Из 370 организаций, имеющих лицензию на проведение обязательных осмотров, заключительные акты в 2025 году представили лишь 151 — это 40,8%. Среди подведомственных Министерству здравоохранения Московской области показатель достаточно высокий — 72,6%. Среди федеральных организаций — 31,4%. Частные медицинские организации, напомню, проводят около 85% всех осмотров, — представили акты лишь 35,6% из них. Организации, подведомственные Департаменту здравоохранения Москвы, не представили ни одного акта. Но главная цифра — другая: расчётное число актов, которое должно ежегодно поступать в Центр профпатологии, составляет около 60 тысяч. Поступило — 5 244. Менее девяти процентов. Это означает, что система надзора за состоянием здоровья работающего населения фактически не функционирует в полном объёме.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-primary-dark mb-4">Представление заключительных актов по итогам периодических осмотров (2025 г.)</h2>
        
        <div className="flex-1">
          <table className="w-full text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-left p-3">Медицинская организация</th>
                <th className="text-right p-3">Имеют лицензию</th>
                <th className="text-right p-3">Представили акты</th>
                <th className="text-right p-3">%</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-green-50">
                <td className="p-3 font-semibold">Подведомственные Минздраву МО</td>
                <td className="p-3 text-right">51</td>
                <td className="p-3 text-right">37</td>
                <td className="p-3 text-right font-bold text-green-600">72,6%</td>
              </tr>
              <tr className="border-b bg-yellow-50">
                <td className="p-3 font-semibold">Федерального подчинения</td>
                <td className="p-3 text-right">35</td>
                <td className="p-3 text-right">11</td>
                <td className="p-3 text-right font-bold text-yellow-600">31,4%</td>
              </tr>
              <tr className="border-b bg-red-50">
                <td className="p-3 font-semibold">Подведомственные ДЗМ г. Москвы</td>
                <td className="p-3 text-right">3</td>
                <td className="p-3 text-right">0</td>
                <td className="p-3 text-right font-bold text-red-600">0%</td>
              </tr>
              <tr className="border-b bg-yellow-50">
                <td className="p-3 font-semibold">Частные медорганизации</td>
                <td className="p-3 text-right">281</td>
                <td className="p-3 text-right">100</td>
                <td className="p-3 text-right font-bold text-yellow-600">35,6%</td>
              </tr>
              <tr className="bg-muted font-semibold">
                <td className="p-3">Всего</td>
                <td className="p-3 text-right">370</td>
                <td className="p-3 text-right">151</td>
                <td className="p-3 text-right">40,8%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 bg-red-100 border-2 border-red-400 p-6 rounded-lg text-center">
          <p className="text-sm text-red-600 font-semibold">ГЛАВНАЯ ЦИФРА</p>
          <p className="text-4xl font-bold text-red-800 mt-2">5 244</p>
          <p className="text-xl text-red-700">из расчётных ~60 000</p>
          <p className="text-lg text-red-600 mt-2">(менее 9%)</p>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: 'Информационные разрывы',
    type: 'content',
    speakerNotes: `Один из ключевых системных разрывов — информационный. Законодательство предусматривает возможность обмена медицинскими данными о работнике между всеми участниками системы, в том числе через ЕМИАС. Но эта норма на практике не исполняется. Медицинские информационные системы частных и федеральных организаций не интегрированы с ЕМИАС Московской области. Результаты осмотра, проведённого по месту работы, не поступают в поликлинику, где работник наблюдается. Электронные выписки по итогам периодических осмотров не направляются. В итоге — одни и те же исследования оплачиваются дважды из средств обязательного медицинского страхования. При этом технологические возможности для устранения этих разрывов уже существуют. Требуется политическая воля и нормативное закрепление обязательности, а не права, информационного обмена.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-bold text-primary-dark mb-8">Информационное взаимодействие: что не работает</h2>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            {/* Three blocks with broken connections */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-100 p-4 rounded-lg text-center border-2 border-blue-300">
                <div className="text-3xl mb-2">🏭</div>
                <p className="font-semibold text-blue-800">Место работы / осмотр</p>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-green-300">
                <div className="text-3xl mb-2">🏥</div>
                <p className="font-semibold text-green-800">Поликлиника прикрепления</p>
              </div>
              
              <div className="bg-purple-100 p-4 rounded-lg text-center border-2 border-purple-300">
                <div className="text-3xl mb-2">🔬</div>
                <p className="font-semibold text-purple-800">Центр профпатологии</p>
              </div>
            </div>
            
            {/* Broken arrows */}
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="flex-1 h-1 bg-red-300 relative">
                <span className="absolute -right-2 -top-1 text-red-500 text-2xl">✖</span>
              </div>
              <span className="text-gray-400">→</span>
              <div className="flex-1 h-1 bg-red-300 relative">
                <span className="absolute -right-2 -top-1 text-red-500 text-2xl">✖</span>
              </div>
              <span className="text-gray-400">→</span>
              <div className="flex-1 h-1 bg-red-300 relative">
                <span className="absolute -right-2 -top-1 text-red-500 text-2xl">✖</span>
              </div>
            </div>
            
            {/* Problems list */}
            <div className="space-y-3">
              {[
                'ЕМИАС МО не взаимодействует с МИС частных и федеральных медорганизаций',
                'Результаты осмотров по месту работы не поступают в поликлинику прикрепления',
                'Электронные выписки после периодических осмотров не направляются',
                'Двойная оплата одних и тех же исследований из средств ОМС',
              ].map((problem, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-red-50 p-3 rounded border-l-4 border-red-400">
                  <span className="text-red-500">❌</span>
                  <p className="text-red-900">{problem}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="font-semibold text-amber-800">📌</p>
              <p className="text-amber-900">Норма об информационном обмене существует в законе, но не исполняется</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: 'Пробелы в нормативной базе',
    type: 'content',
    speakerNotes: `Проблемы, которые мы наблюдаем на практике, имеют нормативную первопричину. Федеральный закон об основах охраны здоровья граждан вообще не содержит понятия «система охраны здоровья работающих граждан» — это означает, что регулировать то, чего нет в правовом поле, крайне затруднительно. Не утверждён порядок оказания первичной медицинской помощи по месту работы. Регион не вправе координировать деятельность частных медицинских организаций, проводящих осмотры. С 2021 года из законодательства исключена норма об обязательном учёте результатов осмотров. Не определён правовой статус центров профессиональной патологии. И, наконец, никакой ответственности за непредставление заключительных актов не предусмотрено. Именно поэтому мы получаем ситуацию, при которой система формально существует, но содержательно не работает.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-primary-dark mb-6">Пробелы в нормативном правовом регулировании: главное</h2>
        
        <div className="flex-1 space-y-3">
          {[
            { text: 'В Законе № 323-ФЗ отсутствует понятие «система охраны здоровья работающих граждан»', status: 'missing' },
            { text: 'Не утверждён порядок оказания первичной помощи по месту работы', status: 'missing' },
            { text: 'Регион не вправе координировать частные медорганизации', status: 'missing' },
            { text: 'С 2021 года утрачена норма об обязательном учёте результатов осмотров', status: 'lost' },
            { text: 'Не определён правовой статус центров профессиональной патологии', status: 'missing' },
            { text: 'Отсутствует ответственность за непредставление заключительных актов', status: 'missing' },
          ].map((item, idx) => (
            <div key={idx} className={`p-4 rounded-lg border-l-4 ${item.status === 'lost' ? 'bg-orange-50 border-orange-500' : 'bg-red-50 border-red-500'}`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.status === 'lost' ? '📉' : '❌'}</span>
                <p className={`text-lg ${item.status === 'lost' ? 'text-orange-900' : 'text-red-900'}`}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 12,
    title: 'Предложения федерального уровня',
    type: 'content',
    speakerNotes: `Перейдём к предложениям. На федеральном уровне мы предлагаем шесть взаимосвязанных инициатив. Первое и основополагающее — внести в базовый закон о здоровье граждан само понятие «система охраны здоровья работающих». Без этого любые последующие меры будут носить лишь ситуативный характер. Второе — закрепить охрану здоровья работающего населения как приоритетное направление государственной политики постановлением Правительства с утверждением комплексного плана мероприятий. Третье — наделить Минздрав России реальными координационными полномочиями. Четвёртое — законодательно закрепить обязательность проведения медицинских осмотров и профилактических мероприятий на цеховом врачебном участке. Пятое — утвердить нормативный акт, регулирующий порядок медицинского обслуживания на цеховом участке: помещения, штат, оборудование, порядок прикрепления. Шестое — разработать через Министерство труда профессиональный стандарт цехового терапевта. Это комплекс мер, которые дополняют друг друга и в совокупности создают правовую основу для новой системы.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-primary-dark mb-6">Предложения для направления в Минздрав России</h2>
        
        <div className="flex-1">
          {/* Stair visualization */}
          <div className="flex flex-col-reverse gap-2">
            {[
              { num: 1, text: 'Внести в Закон № 323-ФЗ понятие и основы системы охраны здоровья работающих граждан', color: 'bg-primary-dark' },
              { num: 2, text: 'Принять акт Правительства РФ, закрепив охрану здоровья работающих как приоритет госполитики', color: 'bg-primary' },
              { num: 3, text: 'Наделить Минздрав России полномочиями по координации всего комплекса мероприятий', color: 'bg-blue-600' },
              { num: 4, text: 'Закрепить обязательность осмотров на цеховом врачебном участке', color: 'bg-blue-500' },
              { num: 5, text: 'Утвердить нормативный акт о порядке медобслуживания на цеховом участке', color: 'bg-blue-400' },
              { num: 6, text: 'Утвердить профстандарт «Врач-терапевт участковый цехового врачебного участка»', color: 'bg-blue-300' },
            ].map((item, idx) => (
              <div key={idx} className={`${item.color} text-white p-3 rounded-lg flex items-center gap-4`}>
                <div className="w-8 h-8 bg-white text-primary-dark rounded-full flex items-center justify-center font-bold">
                  {item.num}
                </div>
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    title: 'Цеховой принцип: модель',
    type: 'content',
    speakerNotes: `Цеховой принцип медицинского обслуживания — это не возврат к советской модели в её буквальном виде. Это современная гибкая система, адаптированная к реалиям сегодняшней экономики. Суть проста: медицинская помощь приближается к месту работы. Цеховой врачебный участок — это первичное звено системы, формируемое как по производственному принципу — то есть с учётом однородных условий труда, так и по территориальному — исходя из близости расположения предприятий. Для работодателя предусмотрено три варианта организации такого обслуживания: договор с государственной поликлиникой, договор с медицинской организацией на базе самого предприятия или создание собственного медицинского подразделения — здравпункта или медсанчасти. Важно: все три варианта могут функционировать одновременно, руководитель предприятия выбирает наиболее удобную для него модель.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-primary-dark mb-4">Цеховой принцип медицинского обслуживания: как это работает</h2>
        
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-900 font-medium">Цеховой врачебный участок — первичное звено системы, формируемое по производственному и территориальному принципам</p>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full">
                <span className="text-2xl">🏭</span>
                <span className="font-semibold">Предприятие / Работодатель</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 text-center">
                <div className="text-4xl mb-3">🏥</div>
                <p className="font-bold text-green-800 mb-2">Вариант 1</p>
                <p className="text-sm text-green-700">Договор с государственной поликлиникой → цеховой терапевтический участок</p>
              </div>
              
              <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4 text-center">
                <div className="text-4xl mb-3">🏭</div>
                <p className="font-bold text-purple-800 mb-2">Вариант 2</p>
                <p className="text-sm text-purple-700">Договор с медорганизацией на базе предприятия</p>
              </div>
              
              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 text-center">
                <div className="text-4xl mb-3">💼</div>
                <p className="font-bold text-amber-800 mb-2">Вариант 3</p>
                <p className="text-sm text-amber-700">Собственное структурное подразделение (здравпункт, МСЧ)</p>
              </div>
            </div>
            
            <div className="mt-6 bg-green-100 border-2 border-green-400 p-4 rounded-lg text-center">
              <p className="text-green-800 font-semibold">✅ Все варианты могут работать параллельно. Работодатель выбирает сам.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 14,
    title: 'Финансирование и IT',
    type: 'content',
    speakerNotes: `Ключевой вопрос при обсуждении любой новой системы — сколько это стоит. Ответ: предлагаемая модель не требует дополнительных бюджетных расходов. Финансирование складывается из двух источников, которые уже существуют: средств обязательного медицинского страхования в рамках программы государственных гарантий и средств работодателей. Информационной основой системы служат уже функционирующие платформы — ЕМИАС Московской области и федеральная ЕГИСЗ. Базовая единица информации — электронная медицинская карта пациента. Цеховой терапевт становится «точкой входа» в систему: он аккумулирует все сведения о здоровье работника и при необходимости формирует маршрут к специализированной помощи. Центр профессиональной патологии Министерства здравоохранения Московской области предлагается в качестве оператора всей системы — как по медицинскому, так и по информационному направлению.`,
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-primary-dark mb-6">Новая система: ресурсы и технологии</h2>
        
        {/* Funding */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-green-700 mb-3">💰 Финансирование — без дополнительных бюджетных расходов:</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🏥</div>
              <p className="font-semibold text-green-800">Программа госгарантий</p>
              <p className="text-sm text-green-600">бесплатной медицинской помощи (ОМС)</p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-300 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">💼</div>
              <p className="font-semibold text-blue-800">Средства работодателей</p>
              <p className="text-sm text-blue-600">на обеспечение охраны труда</p>
            </div>
          </div>
        </div>
        
        {/* IT */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-purple-700 mb-3">🖥️ Информационная основа:</p>
          <div className="bg-purple-50 border-2 border-purple-200 p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl mb-1">💾</div>
                <p className="font-semibold">ЕМИАС МО + ЕГИСЗ</p>
              </div>
              <div>
                <div className="text-2xl mb-1">📋</div>
                <p className="font-semibold">Электронная медкарта</p>
              </div>
              <div>
                <div className="text-2xl mb-1">👨‍⚕️</div>
                <p className="font-semibold">Цеховой терапевт — точка входа</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Operator */}
        <div className="flex-1">
          <div className="bg-primary-dark text-white p-4 rounded-lg text-center">
            <p className="font-semibold mb-2">🏛️ Оператор системы</p>
            <p className="text-lg">Центр профессиональной патологии Минздрава МО</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 15,
    title: 'Спасибо за внимание',
    type: 'final',
    speakerNotes: `Подводя итог, хочу подчеркнуть главное. Организация медицинского обслуживания работающего населения по цеховому принципу — это не теоретическая конструкция. Это практически реализуемая, финансово обеспеченная и нормативно обоснованная модель. Московская область готова стать пилотным регионом для её внедрения. Мы предлагаем рассмотреть изложенные инициативы и поддержать их продвижение на федеральном уровне. Мы убеждены: охрана здоровья работающего гражданина — это не социальная нагрузка на экономику. Это инвестиция в её эффективность. Благодарю за внимание. Готов ответить на ваши вопросы.`,
    content: (
      <div className="h-full flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 100 100" className="w-20 h-20 text-white">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 15 L50 85 M15 50 L85 50" stroke="currentColor" strokeWidth="3"/>
              <path d="M50 15 L65 35 L50 30 L35 35 Z" fill="currentColor"/>
              <path d="M50 85 L35 65 L50 70 L65 65 Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-primary-dark mb-8">Спасибо за внимание</h1>
        
        <div className="max-w-2xl space-y-4">
          <p className="text-xl font-semibold text-gray-800">Министерство здравоохранения Московской области</p>
          
          <div className="bg-muted p-6 rounded-lg mt-8">
            <p className="font-semibold text-gray-700 mb-2">По вопросам сотрудничества и реализации пилотного проекта:</p>
            <p className="text-lg text-primary">Центр профессиональной патологии</p>
            <p className="text-primary">Министерства здравоохранения Московской области</p>
          </div>
        </div>
      </div>
    ),
  },
];
