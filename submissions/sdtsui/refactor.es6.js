class Dashboard {
  constructor(entryPoint) {
    this.render(entryPoint);
    this.el_sith_list = document.querySelector(selectors);
    this.el_slots = document.querySelector(selectors);
    this.el_obiwan = document.querySelector(selectors);
    this.el_top_button = document.querySelector(selectors);
    this.el_btm_button = document.querySelector(selectors);

    this.SithList = new SithList();
  }

  render(node) {
    //render temlpate onto DOM
  }

}

class Sith {
  constructor(url) {
    this.data = undefined;
    this.url = url;
    this.pending = undefined;
  }

  fetch() {
    //send a request, update data as callback
    this.pending = superagent.get(this.url)
                              .end(this.updateData);
  } 

  updateData(data) {
    this.data = data;
    //assignData
  }

  cancel {
    if (this.pending) this.pending.abort()
  }

  destroy {
    //??
  }

  //Helper Methods
  isPending() {
    return !!(this.data === undefined);
  }

  getHomeworld() {
    if (this.data.homeworld) return this.data.homeworld;

  }

  getName() {
    if (this.data.name) return this.data.name;
  }

  getRelation(apprenticeOrMaster) {
    
  }
}

class SithList {
  constructor() {
    this._storage = [];
    this._keys = {};
    this._homeworlds = {};
    // homeworld : 
  }

  addToTop() {

  }

  addToBottom() {

  }

  removeFromTop() {

  }

  removeFromBottom() {

  }

  hasHomeWorld(world) {
  }

  toJSON() {

  }

  //helperMethods:
  destroyAt(key) {

  }
}

