module.exports = {
    sum: notes => {
        if(Math.min(...notes)) {
            const resultado = notes.reduce((acumulador, note) => {
                return acumulador += note > 9 ? note * 2 : note
            }, 0)
            return notes.length > 5 ? resultado * 2 : resultado 
        }
        return 0
    }
}