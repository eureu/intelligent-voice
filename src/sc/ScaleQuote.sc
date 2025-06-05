theme: /
    
    state: УвеличениеЦитаты
        q!: (Открой|Покажи) цитату @duckling.number::number
        event!: ScaleQuote
     
        if: $request.query != undefined
            if: $parseTree._number < 1
                a: нет цитаты под таким номером
                go: УвеличениеЦитаты
            elseif: $parseTree._number > 30
                a: нет цитаты под таким номером
                go: УвеличениеЦитаты
            else:
                script:
                    ScaleQuotes($parseTree._number, $context);
                    addSuggestions(["Закрой цитату"], $context);
        else:
            script:
                ScaleQuotes($request.data.eventData.number, $context);
                addSuggestions(["Закрой цитату"], $context);
                
    state: СкажиЦит
        event!: SayQuote
        a: {{$request.data.eventData.number}}
        
        script:
            addSuggestions(["Закрой цитату"], $context);
                
        