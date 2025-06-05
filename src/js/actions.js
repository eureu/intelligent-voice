function addNote(note, context) {
    addAction({
        type: "add_note",
        note: note
    }, context);
}

function doneNote(id, context){
    addAction({
        type: "done_note",
        id: id
    }, context);
}

function deleteNote(id, context){
    addAction({
        type: "delete_note",
        id: id
    }, context);
}

function learnQuotes(note, context){
    addAction({
        type: "learn_quotes",
        note: note
    }, context);
}

function closeModalWindow(note, context){
    addAction({
        type: "close_modal_window",
        note: note
    }, context);
}

function сhooseTheme(id, context){
    addAction({
        type: 'choose_theme',
        id: id
    }, context);
}

function returnMenu(note, context){
    addAction({
        type: 'return_menu',
        note: note
    }, context);
}

function attemptToQuiz(note, context){
    addAction({
        type: 'attemptToQuiz',
        note: note
    }, context);
}

function closeModalForQuiz(note, context){
    addAction({
        type: 'closeModalForQuiz',
        note: note
    }, context)
}

function Answer(id, context){
    addAction({
        type: 'Answer',
        id: id
    }, context)
}

function Next(note, context){
    addAction({
        type: 'Next',
        note: note
    }, context)
}

function Menu(note, context){
    addAction({
        type: 'MenuAfterGame',
        note: note
    }, context)
}

function ScaleQuotes(id, context){
    addAction({
        type: "ScaleQuote",
        id: id
    }, context)
}

function CloseModalQuote(id, context){
    addAction({
        type: "CloseModalQuote",
        id: id
    }, context)
}

function showResults(note, context){
    addAction({
        type: "showRes",
        note: note
    }, context)
}