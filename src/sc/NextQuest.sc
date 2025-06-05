theme: /

    state: СледующийВопрос
        q: (далее|следующий|вперед) [вопрос]
        event!: nextQuest
        
        script:
            Next($parseTree._anyText, $context);
            addSuggestions(["ответ 1","вариант 2", "номер 3", "меню"], $context);

