theme: /
    
    state:ЖанрКвиз
        q!: * (Пройти тест|Тест на знание цитат|Пройти тест на знание цитат|тест)
        event!: attemptToQuiz
        
        
        script:
            $temp.appeal = $request.rawRequest.payload.character.appeal;
        if: $temp.appeal == "official"
            random:
                a: Выберите категорию цитат для квиза!
                a: Темы для квиза на экране!
        elseif: $temp.appeal == "no_official"
            random:
                a: Выбери категорию цитат!
                a: Темы квиза на экране!
        else:
            a: Выбери категорию!
        
        
        script:
            attemptToQuiz($parseTree._anyText, $context);
            addSuggestions(['тема 1', 'тема мотивация', 'закрой окно с темами'], $context);