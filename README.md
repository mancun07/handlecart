При добавлении продуктов в корзину, корзина в строке навбара обновляется.
В качестве State менеджера использован Redux.
При клике на "корзину" открывается список покупок. Можно скорректировать количество товаров.
Чтобы после перезагруки страницы юзером товары оставались в корзине, использую Firebase в качестве базы данных.
После добавления товаров в хранилище Redux, происходит PUT запрос к БД.
При первой загрузке приложения происходит GET запрос к БД. 