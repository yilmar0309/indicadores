import _ from '../@lodash/@lodash';

class CoreUtils {

  static filterArrayByString(mainArr: any[], searchText: string) {
    if (searchText === '') {
      return mainArr;
    }

    searchText = searchText.toLowerCase();

    return mainArr.filter(itemObj => this.searchInObj(itemObj, searchText));
  }

  static searchInObj(itemObj: any, searchText: string) {
    if (!itemObj) {
      return false;
    }

    const propArray = Object.keys(itemObj);

    for (let i = 0; i < propArray.length; i += 1) {
      const prop = propArray[i];
      const value = itemObj[prop];

      if (typeof value === 'string') {
        if (this.searchInString(value, searchText)) {
          return true;
        }
      } else if (Array.isArray(value)) {
        if (this.searchInArray(value, searchText)) {
          return true;
        }
      }

      if (typeof value === 'object') {
        if (this.searchInObj(value, searchText)) {
          return true;
        }
      }
    }
    return false;
  }

  static searchInArray(arr: any[], searchText: string) {
    arr.forEach(value => {
      if (typeof value === 'string') {
        if (this.searchInString(value, searchText)) {
          return true;
        }
      }

      if (typeof value === 'object') {
        if (this.searchInObj(value, searchText)) {
          return true;
        }
      }
      return false;
    });
    return false;
  }

  static searchInString(value: string, searchText: string) {
    return value.toLowerCase().includes(searchText);
  }

  static generateGUID() {
    function S4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return S4() + S4();
  }

  static toggleInArray(item: any, array: any[]) {
    if (array.indexOf(item) === -1) {
      array.push(item);
    } else {
      array.splice(array.indexOf(item), 1);
    }
  }

  static handleize(text: string) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/\W+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }

  static findById(obj: any, id: any) {
    let i: any;
    let childObj: any;
    let result: any;

    if (id === obj.id) {
      return obj;
    }

    for (i = 0; i < Object.keys(obj).length; i += 1) {
      childObj = obj[Object.keys(obj)[i]];

      if (typeof childObj === 'object') {
        result = this.findById(childObj, id);
        if (result) {
          return result;
        }
      }
    }
    return false;
  }

  static difference(object: any, base: any) {
    function changes(_object: any, _base: any) {
      return _.transform(_object, (result: any, value: any, key: any) => {
        if (!_.isEqual(value, _base[key])) {
          result[key] = _.isObject(value) && _.isObject(_base[key]) ? changes(value, _base[key]) : value;
        }
      });
    }

    return changes(object, base);
  }

  static filterRecursive(data: any[], predicate: any) {
    // if no data is sent in, return null, otherwise transform the data
    return !data
      ? null
      : data.reduce((list, entry) => {
        let clone = null;
        if (predicate(entry)) {
          // if the object matches the filter, clone it as it is
          clone = { ...entry };
        }
        if (entry.children != null) {
          // if the object has childrens, filter the list of children
          const children = this.filterRecursive(entry.children, predicate);
          if (children.length > 0) {
            // if any of the children matches, clone the parent object, overwrite
            // the children list with the filtered list
            clone = { ...entry, children };
          }
        }

        // if there's a cloned object, push it to the output list
        clone && list.push(clone);
        return list;
      }, []);
  }

}

export default CoreUtils;