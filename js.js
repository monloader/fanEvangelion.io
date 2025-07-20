const translations = {
  ru: {
    "Сюжет": "Сюжет",
    "Персонажи": "Персонажи",
    "Ангелы": "Ангелы",
    "История Создания": "История Создания",
    "Евангелион": "Евангелион",
  },
  en: {
    "Сюжет": "Plot",
    "Персонажи": "Characters",
    "Ангелы": "Angels",
    "История Создания": "Creation History",
    "Евангелион": "Evangelion",
  },
  ja: {
    "Сюжет": "プロット",
    "Персонажи": "キャラクター",
    "Ангелы": "エンジェル",
    "История Создания": "作成履歴",
    "Евангелион": "エヴァンゲリオン",
  }
};

function translatePage(lang) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

document.getElementById('language-selector').addEventListener('change', (e) => {
  const lang = e.target.value;
  translatePage(lang);
  localStorage.setItem('language', lang); 
});

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'ru';
  document.getElementById('language-selector').value = savedLang;
  translatePage(savedLang);
});