
class DataModel {

  constructor() {
    this.todoList = [];
    this.subscribers = []; 

  }

}

let theDataModel;

export function getDataModel() {
  if (!theDataModel) {
    theDataModel = new DataModel();
  }
  return theDataModel;
}