theme: /

    state: УзнатьЦитаты
        q!: (узнать новые цитаты|новые цитаты|Цитаты|Узнать цитаты)
        event!: learnQuotes
        
        
        script:
            $temp.appeal = $request.rawRequest.payload.character.appeal;
        if: $temp.appeal == "official"
            random:
                a: Выберите категорию цитат
                a: На какую тему вы хотите узнать цитаты?
        elseif: $temp.appeal == "no_official"
            random:
                a: Выбери категорию цитат
                a: На какую тему ты хочешь узнать цитаты?
        else:
            a: Выбери категорию цитат!
            
            
        script:
            learnQuotes($parseTree._anyText, $context);
            addSuggestions(['тема 1', 'тема мотивация', 'закрой окно с темами'], $context);
            