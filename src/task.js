export function taskCreator(name, completed) {
    let _name = name;
    let _completed = completed;

    return {
        //Getter and Setters for all member variables
        get name() {
            return _name;
        },

        set name(name) {
            _name = name;
        },
        get completed() {
            return _completed;
        },

        set completed(completed) {
            _completed = completed;
        }
    }

}