theme:/

    state: ВТемы
        q: ([ (~тема) @duckling.number::number ] | [ (~тема) $AnyText::anyText ])
        event!: chooseTheme
        
        if: $request.query != undefined
            if: $parseTree._anyText == null
                if: $parseTree._number < 1
                    a: эта тема отсутствует.
                    go: ВТемы
                elseif: $parseTree._number > 3
                    a: эта тема отсутствует.
                    go: ВТемы
                else:
                    random:
                        a: Отлично, тема {{$parseTree._number}}!
                        a: Тема {{$parseTree._number}}!
                        a: Тема {{$parseTree._number}} выбрана!
                    script:
                        сhooseTheme($parseTree._number, $context);
            else:
                if: $parseTree._anyText != "Человек" & $parseTree._anyText != "человек" & $parseTree._anyText != "Жизнь" & $parseTree._anyText != "жизнь" & $parseTree._anyText != "мотивация" & $parseTree._anyText != "Мотивация"
                    a: этой темы не существует.
                    go: ВТемы
                else:
                    a: {{$parseTree._anyText}}!
                    script:
                        сhooseTheme($parseTree._anyText, $context);
        else:
            a: {{$request.data.eventData.number}}!
            script:
                сhooseTheme($request.data.eventData.number, $context);
    
    state: ПодсказкиКвиз
        event!: suggestQuiz
        script:
            addSuggestions(["Ответ 1","Вариант 2", "Номер 3", "Меню"], $context);
        
    state: ПодсказкиЦитаты
        event!: suggestQuote
        script:
            addSuggestions(["Открой цитату 1", "Покажи цитату 30", "Вернуться в меню"], $context);
            
    
        