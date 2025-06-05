theme: /

    state: Меню
        q!: [меню приложения|выход в меню]
        event!: returnMenuAfterGame
        
        a: Главное меню открыто
        
        script:
            Menu($parseTree._anyText, $context);
            addSuggestions(["Цитаты","Тест"], $context)
            
    state: ПоказРезультата
        q!: [покажи](~результаты|~результат)
        event!: show_res
        
        if: $request.query != undefined
            script:
                showResults($parseTree._anyText, $context);
                addSuggestions(["меню"], $context);
        else:
            script:
                showResults($parseTree._anyText, $context);
                addSuggestions(["меню"], $context);

    
    state: резГол
        event!: suggestRes
        if: $request.query == undefined
            script:
                addSuggestions(["меню", "результат"], $context);