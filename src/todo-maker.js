export function createTask( title, description, dueDate, priority, notes, checkList) {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _notes = notes;
    let _checkList = checkList;

    return {
        //Getter for title
        get title() {
            return _title;
        },

        //Setter for title 
        set title(title) {
            _title = title;

        },
        
        //Getter for description
        get description() {
            return _description;
        },

        //Setter for description
        set description(description) {
            _description = description;
        },

        //Getter for dueDate 
        get dueDate() {
            return _dueDate;
        },

        //Setter for dueDate 
        set dueDate(dueDate) {
            _dueDate = dueDate;
        },

        //Getter for priority
        get priority() {
            return _priority;
        },

        //Setter for priority
        set priority(priority) {
            _priority = priority;
        },

        //Getter for notes
        get notes() {
            return _notes;
        },

        //Setter for notes
        set notes(notes){
            _notes = notes;
        },

        //Getter for checkList
        get checkList() {
            return _checkList;
        },

        //Setter for checkList
        set checkList(checkList) {
            _checkList = checkList;
        }


    }

}