theme: /

    state: ВМеню
        q!: (~вернуться|назад) в меню
        event!: returnMenu
          
        script:
            $temp.appeal = $request.rawRequest.payload.character.appeal;
            
        if: $temp.appeal == "official"
            random:
                a: Вы возращены в главное меню
                a: Меню открыто
        elseif: $temp.appeal == "no_official"
            random:
                a: Ты возвращен в главное меню
                a: Меню открыто
        else:
            a: Меню открыто
        
        script:
            returnMenu($parseTree._anyText, $context);
            addSuggestions(["Тест", "Узнать цитаты"], $context)