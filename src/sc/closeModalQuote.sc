theme: /

    state: УменьшиЦитату
        q!: (Закрой|Убери) $AnyText::anyText
        event!: closeQuoteModal
            
        script:
            CloseModalQuote($parseTree._anyText, $context);
            addSuggestions(["Открой цитату 1", "Покажи цитату 2", "Вернуться в меню"], $context);