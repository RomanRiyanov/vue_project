export default ({ app, redirect, route }) => {
  const isRouteExist = app.router.options.routes.some(
    (option) => option.name === route.name
  )
  if (!isRouteExist) {
    redirect('/')
    this.$notify({
      group: 'bar',
      title: 'Ошибочка вышла!',
      text: `Такой страницы не существует: ${route.name}`,
    })
  }
}
