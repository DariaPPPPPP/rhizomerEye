import { Filter } from '../breadcrumb/filter';
import { Facet } from '../facet/facet';

export class Value {
  value: string;
  count: number;
  uri: string;
  curie: string;
  label: string;
  selected = false;

  constructor(values: Object = {}, facet: Facet, filters: Filter[]) {
    Object.assign(<any>this, values);

    if (!this.label) {
      if (this.curie) {
        this.label = this.curie.split(':')[1];
      } else {
        this.label = this.value.split('^^')[0];
      }
    }
    this.selected = filters.filter((filter: Filter) =>
      (filter.facet.id === facet.id && filter.value.value === this.value)).length > 0;
  }
}
