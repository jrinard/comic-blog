import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
actions: {
  postFormShow() {
    this.set('addNewPost', true);
  },
  savePost1(){
    var params = {
      title: this.get('title'),
      teaser: this.get('teaser'),
      body: this.get('body'),
      image: this.get('image'),
      owner: this.get('owner')
    };
    this.set('addNewPost', false);
    this.sendAction('savePost2', params);
  }
}

});
