theme: /

    state: ЗакройОкно
        q!: (закрой|убери|сверни) окно $AnyText::anyText
        event!: closeModalForLearn
            
        if: $request.query != undefined
            random:
                a: Окно с темами цитат закрыто!
                a: Запрос выполнен!
        else:
            random:
                a: Окно закрыто
                a: Темы убраны.
       
            
        script:
            closeModalWindow($parseTree._anyText, $context);
            addSuggestions(["Новые цитаты", "Пройти тест"], $context);