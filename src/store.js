
export default {
  debug: true,
  state: {
    links: []
  },

  dispatch(event, param) {
    let links = this.state.links;

    switch (event) {
      case 'search':
        links.splice(0, links.length)
        links.push({
          name: 'Search',
          path: '/search',
        });
        break;

      case 'about':
        links.splice(0, links.length)
        links.push({
          name: 'About',
          path: '/about',
        });
        break;

      case 'category':
        if (!param) {
          console.log('缺少参数');
        }
        links.splice(0, links.length)
        links.push({
          name: param.name,
          path: {
            name: "Category",
            params: {
              cateName: param.name,
              alias: param.alias
            }
          },
        });
        break;

      case 'detail':
        links.push({
          name: param.name,
          path: '/articledetail/' + param.alias,
        });
        break;

      case 'navigation':
        if (!param) {
          console.log('缺少参数');
        }
        if (links.indexOf(param) == 0) {
          if (links.length == 2) {
            links.pop()
          }
        }
        break;

      default:
        break;
    }
  }
}

