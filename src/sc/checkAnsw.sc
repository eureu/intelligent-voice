theme: /
    
    state: ВОтвета
        q!: [ответ|вариант|номер] @duckling.number::anyText
        event!: checkAnsw
            
        if: $request.query != undefined
            if: $parseTree._anyText < 1
                a: такого ответа нет!
                go: ВОтвета
            elseif: $parseTree._anyText > 4
                a: такого ответа нет!
                go: ВОтвета
            else:
                script:
                    Answer($parseTree._anyText, $context);
        else:
            script:
                Answer($request.data.eventData.number, $context);
            
                
    state: ПравОтвет
        event!: correctAnsw
        random:
            a: Правильный ответ!
            a: Ответ верный!
        
        script:
            addSuggestions(["Следующий вопрос", "Далее вопрос", "Меню"], $context);
            
    state: НеверныйОтв
        event!: uncorrectAnsw
        random:
            a: Неправильный ответ.
            a: Ответ неверный.
        
        script:
            addSuggestions(["Следующий вопрос", "Далее вопрос", "Меню"], $context);
            
    
                
                
