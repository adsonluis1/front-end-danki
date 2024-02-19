function filter_list(l) {
   console.log(l.filter((e) => typeof e != 'string'))
  }

  filter_list(['a','b','c',5,5])