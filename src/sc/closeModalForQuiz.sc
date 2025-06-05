theme: /
    
    state:ЗакрытьМодальноеОкноДляКвиза
        q!: * (~закрой|~убери|~сверни) окно c категориями для квиза
        
        random:
            a: Хорошо!
            a: Окно с категориями для квиза закрыто!
        
        script:
            closeModalForQuiz($parseTree._anyText, $context);
            addSuggestions(["Скажите 'узнать новые цитаты' или 'пройти тест'"], $context);