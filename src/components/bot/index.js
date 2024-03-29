const TelegramBot = require("node-telegram-bot-api");

// Введите ваш токен бота, который вы получили от BotFather
const token = "6990162499:AAFSG4KnYXy3zgVsXC-sVsosryblcS1filo";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Выберите интересующую вас тему:", {
    reply_markup: {
      keyboard: [
        ["Описание продукции", "Цены"],
        ["Контакты", "Адрес"],
        ["Перечень видов кофе", "Разнообразие напитков"],
        ["кофейные аксуссуары", "обучение приготовлению кофе"],
        ["информация о поставщиках", "особенности заведения"],
        ["работающие часы"],
      ],
      resize_keyboard: true,
    },
  });
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  switch (msg.text.toLowerCase()) {
    case "описание продукции":
    case "продукция":
    case "что есть в наличии?":
    case "товары":
    case "какая продукция у вас есть?":
      const productDescription = `
        В нашем уютном магазине представлен широкий ассортимент продукции для настоящих ценителей комфорта и наслаждения. У нас вы можете приобрести утонченные товары для коейна, эксклюзивные сорта кофе и инновационные кофемашины производства высшего качества. 😊

        Откройте для себя мир настоящего кофейного искусства с нашими кофемашинами для дома. В нашем ассортименте представлены капельные кофемашины для тех, кто ценит традиционный вкус, обычные модели для любителей классики, а также стильные устройства для капсул, добавляющие изысканности в каждый ваш кофейный момент. ☕

        Погрузитесь в удовольствие от идеального кофе вместе с нами, выбирайте лучшее для своего уюта и наслаждайтесь неповторимым вкусом, который мы предлагаем вам нашими изысканными продуктами. 🌟

        В дополнение к нашему разнообразному ассортименту кофейных устройств, у нас также представлен обширный выбор самых изысканных видов кофе. Откройте для себя настоящее удовольствие кофейного разнообразия, выбирая между зерновыми сортами для тех, кто предпочитает максимальный контроль над процессом приготовления. ☕

        Для ценителей удобства и быстроты мы предлагаем великолепные варианты кофе в капсулах, обеспечивающие непревзойденный вкус в каждом глотке. Если вы предпочитаете дробленый кофе, то у нас также есть великолепные варианты для создания идеального напитка в соответствии с вашими предпочтениями. ☕

        Приготовьтесь к погружению в мир кофейного искусства, где каждый вид кофе становится уникальным опытом. Ваш уют и наслаждение – наша главная забота. 🌈
      `;

      bot.sendMessage(chatId, productDescription);
      break;
    case "цены":
    case "цена":
    case "стоимость":
      bot.sendMessage(
        chatId,
        "🏡 Кофемашины для дома:\n" +
          "- Капельные кофемашины: $50 - $200\n" +
          "- Кофемашины для капсул: $100 - $500\n" +
          "- Эспрессо-машины: $200 - $1000\n\n" +
          "☕ Зерновой кофе:\n" +
          "- Стандартные сорта: $10 - $30 за фунт\n" +
          "- Эксклюзивные сорта: $30 - $50 за фунт\n\n" +
          "🌰 Кофе в капсулах:\n" +
          "- Средняя цена за капсулу: $0.50 - $1.50\n\n" +
          "☕ Дробленый кофе:\n" +
          "- Стандартные сорта: $8 - $20 за фунт\n" +
          "- Специальные смеси: $20 - $40 за фунт\n\n" +
          "🛠️ Кофейное оборудование и аксессуары:\n" +
          "- Кофейные мельницы: $20 - $100\n" +
          "- Подогреватели для чашек: $20 - $50\n" +
          "- Кофейные весы: $15 - $50"
      );
      break;

    case "контакты":
    case "телефон":
    case "номер":
    case "номер телефона":
      bot.sendMessage(
        chatId,
        "📞 Контакты:\n" + "Вы можете связаться с нами по телефону - 0501304053"
      );
      break;

    case "какой адрес?":
    case "где вы находитесь?":
    case "где вы находитесь":
    case "ваш адрес":
    case "адрес":
    case "ваше местоположение":
      bot.sendMessage(
        chatId,
        "📍 Наш адрес:\n" +
          "Мы находимся по адресу: Ошский рынок 259, бутик А12"
      );
      break;

    case "перечень видов кофе":
    case "кофе":
    case "какое кофе есть?":
      bot.sendMessage(
        chatId,
        "📜 Меню: \n\n" +
          "   - Эспрессо: Крепкий кофе с интенсивным вкусом. $1.00\n" +
          "   - Латте: Кофе с молоком и нежной пенкой. $3.50\n" +
          "   - Капучино: Эспрессо с воздушной молочной пенкой. $4.00\n" +
          "   - Американо: Разбавленное эспрессо горячей водой. $2.50\n" +
          "   - Мокка:* Эспрессо с шоколадом и взбитыми сливками. $4.50"
      );
      break;

    case "разнообразие напитков":
      bot.sendMessage(
        chatId,
        "📜 Меню кофейни:\n\n" +
          "   - Латте: $3.50\n" +
          "   - Капучино: $4.00\n" +
          "   - Американо: $2.50\n" +
          "   - Мокка: $4.50"
      );
      break;

    case "кофейные аксессуары":
      bot.sendMessage(
        chatId,
        "🛍️ Кофейные аксессуары:\n" +
          "1. Кофейные фильтры 📜\n" +
          "2. Чашки для эспрессо и латте ☕\n" +
          "3. Ложки для кофе 🥄\n" +
          "4. Кофейные капсулы ☕\n" +
          "5. Кофейные мельницы ⚙️\n" +
          "6. Термосы и термокружки 🌡️\n" +
          "7. Весы для кофе ⚖️\n" +
          "8. Френч-пресс (кофеварки с поршнем) 🇫🇷\n" +
          "9. Кофейные капельницы 💧\n" +
          "10. Кофейные столовые сервизы 🍽️\n" +
          "11. Кофейные фрезы 🍰\n" +
          "12. Шаблоны для украшения кофейных напитков 🎨\n" +
          "13. Подставки для чашек 🍵\n" +
          "14. Специальные ложки для смешивания сахара и молока в кофе 🥄🥛\n" +
          "15. Кофейные рукоятки и держатели для эспрессо-машин 🔧"
      );
      break;

    case "обучение приготовлению кофе":
      bot.sendMessage(
        chatId,
        "🎓 Обучение приготовлению кофе:\n" +
          "Желаете стать настоящим бариста и создавать великолепные кофейные напитки прямо у себя дома? Наш курс по приготовлению кофе – это увлекательное путешествие в мир ароматов и вкусов, где вы освоите все тонкости и секреты настоящего кофейного искусства.\n\n" +
          "📚 Что включает в себя курс:\n" +
          "1.Теория кофеиного мира: Узнайте о различных сортах кофе, методах обжарки, истории кофейной культуры.\n\n" +
          "2.Изысканные методы приготовления: Овладейте искусством приготовления кофе с использованием различных методов, таких как эспрессо, аэропресс, V60, и многих других.\n\n" +
          "3.Лучшие рецепты напитков: Получите доступ к эксклюзивным рецептам лучших кофейных напитков, включая латте, капучино, аффогато и многие другие.\n\n" +
          "4.Мастер-класс по латте-арту: Научитесь украшать свои напитки красивыми рисунками на поверхности молочной пены.\n\n" +
          "5.Практические навыки: Получите руки-на опыт, приготавливая кофе под руководством опытных бариста, и вы сможете удивлять своих друзей и близких великолепными напитками.\n\n" +
          "Пройдите наше обучение, и вы станете настоящим кофейным экспертом! ☕🌟"
      );
      break;

    case "информация о поставщиках":
    case "ипоставщики":
      bot.sendMessage(
        chatId,
        "📜 Меню кофейни: Информация о поставщиках.\n\n" +
          "   - Откуда поступает наш кофе?\n" +
          "     У нас для вас только лучшие сорта кофе от проверенных поставщиков. Мы гордимся качеством и уникальностью нашей продукции.\n\n" +
          "   - Надежные партнеры:\n" +
          "     Мы сотрудничаем с надежными поставщиками, чтобы каждый ваш глоток кофе был неповторим и насыщен вкусом. Наши партнеры делятся с нами страстью к кофе и стремятся предоставить лучшие продукты.\n\n" +
          "   - Экологическая ответственность:\n" +
          "     Мы заботимся о окружающей среде, поэтому выбираем продукты от поставщиков, которые следят за экологией и качеством наших сырьевых материалов. Так вы можете наслаждаться чашкой кофе, зная, что она произведена с уважением к природе.\n\n" +
          "   - Уникальные сорта:\n" +
          "     Поставщики нашего кофе - настоящие профессионалы, предоставляющие уникальные сорта кофе, чтобы каждый наш клиент мог выбрать напиток по своему вкусу.\n\n" +
          "   - Гарантия качества:\n" +
          "     Наши поставщики гарантируют высший стандарт качества в каждой упаковке кофе и других продуктов. Мы стремимся предоставить вам только лучшее!\n\n" +
          "Ваш уникальный кофейный опыт начинается с выбора лучших сырьевых материалов. Доверьтесь нам, и мы позаботимся о вашем неповторимом вкусовом путешествии. ☕🌱"
      );
      break;

    case "особенности заведения":
      bot.sendMessage(
        chatId,
        "📜 Меню кофейни: Особенности заведения.\n\n" +
          "   - Уютный интерьер: Наши просторные и уютные помещения создают атмосферу уюта, где вы можете наслаждаться своим любимым кофе.\n\n" +
          "   - Оформление магазина: Мы уделяем внимание деталям, чтобы каждый посетитель чувствовал особенность нашего заведения.\n\n" +
          "   - Атмосфера кофейни: Здесь вы не просто пьете кофе, а погружаетесь в настоящий мир кофейного искусства. Мы создаем уникальную атмосферу, где каждый посетитель может наслаждаться своим временем.\n\n" +
          "   - Музыка и события: Для нас важно, чтобы ваш визит был не только вкусным, но и разнообразным. Мы устраиваем музыкальные вечера и специальные события, чтобы делать ваше пребывание у нас еще более приятным.\n\n" +
          "   - Уникальные встречи: Мы регулярно проводим встречи для ценителей кофе, где можно обсудить новинки, поделиться опытом и, конечно же, попробовать новые виды кофе.\n\n" +
          "Посетите нас, и вы почувствуете, почему мы так особенны. Добро пожаловать в наш мир кофе и уюта! ☕🌟"
      );
      break;

    case "работающие часы":
      bot.sendMessage(
        chatId,
        "📜 Меню кофейни: Работающие часы.\n\n" +
          "   - Расписание работы: Мы готовы встречать вас каждый день недели с утра до вечера, создавая удобные часы работы, чтобы вы могли наслаждаться своим кофе в любое удобное для вас время.\n\n" +
          "   - Гибкий график: Понедельник - Воскресенье: 08:00 - 22:00\n\n" +
          "   - Без выходных: Мы стараемся быть доступными в любое время, чтобы вы могли наслаждаться ароматным кофе, когда захотите.\n\n" +
          "Приглашаем вас посетить нас в любое удобное время! ☕🕒"
      );
      break;
  }
});
