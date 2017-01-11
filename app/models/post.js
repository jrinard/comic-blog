import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  image: DS.attr(),
  owner: DS.attr(),
  teaser: DS.attr(),
  title: DS.attr()
});
