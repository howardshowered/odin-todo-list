export function todoCreator(name,
                            priority, description, checkList, dueDate, 
                            completed ) {

    let _name = name;
    let _priority = priority;
    let _description = description;
    let _checkLst = checkList;
    let _dueDate = dueDate;
    let _completed = completed;

    return {
        //Getter and Setters for all member variables
        get name() {
            return _name;
        },

        set name(name) {
            _name = name;
        },

        get priority() {
            return _priority;
        },

        set priority(priority) {
            _priority = priority;
        },

        get description() {
            return _description;
        },

        set description(description) {
            _description = description;
        },
        
        get checkList() {
            return _checkLst;
        },

        set checkList(checkList) {
            _checkLst = checkList;
        },

        get dueDate() {
            return _dueDate;
        },
        
        set dueDate(dueDate) {
            _dueDate = dueDate;
        },
        get completed() {
            return _completed;
        },

        set completed(completed) {
            _completed = completed;
        }
    }
    


}