export const sortUsers = (users) => {
  users.sort((a, b) => {
    const fa = a.first_name.toLowerCase()
    const fb = b.first_name.toLowerCase()

    if (fa < fb) {
      return -1
    }

    if (fa > fb) {
      return 1
    }

    return 0
  })
}

export const pages = (total) => {
  let items = []
  for (let i = 1; i <= total; i++) {
    items.push(i)
  }
  return items
}
