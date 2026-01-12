export const categories = [
	{
    id: 1,
		name: 'Пиццы',
	},
	{
    id: 2,
		name: 'Напитки',
	},
	{ 
    id: 3,
		name: 'Закуски',
	},
	{
    id: 4,
		name: 'Коктейли',
	},
]

export const product = [
	{
		name: 'Омлет с ветчиной и сыром',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/0198bf046b9577f78d909cfe8e772264.jpg',
		categoryId: 3,
	},
	{
		name: 'Паста Мясная',
		imageUrl:
			'https://media.dodostatic.net/image/r:584x584/019a8979ec99730580d34b96cdd8324c.avif',
		categoryId: 3,
	},
	{
		name: 'Холодный чикен ролл',
		imageUrl:
			'https://media.dodostatic.net/image/r:584x584/01980e8a432071ca863e03212730c399.avif',
		categoryId: 3,
	},
	{
		name: 'Додстер',
		imageUrl:
			'https://media.dodostatic.net/image/r:584x584/01980cb92528769295aeb186fb501f8e.avif',
		categoryId: 3,
	},
	{
		name: 'Додстер Чилл Грилл',
		imageUrl:
			'https://media.dodostatic.net/image/r:584x584/01980cb84cfb7023b6eca978780d30c5.avif',
		categoryId: 3,
	},
	{
		name: 'Острый Додстер',
		imageUrl:
			'https://media.dodostatic.net/image/r:584x584/01980cbb11e677738af9e254a413763f.avif',
		categoryId: 3,
	},
]

export const ingredients = [
	{
		name: '123Сырный бортик',
		price: 179,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
	},
	{
		name: 'Сливочная моцарелла',
		price: 79,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
	},
	{
		name: 'Сыры чеддер и пармезан',
		price: 79,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
	},
	{
		name: 'Острый перец халапеньо',
		price: 59,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
	},
	{
		name: 'Нежный цыпленок',
		price: 79,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
	},
	{
		name: 'Шампиньоны',
		price: 59,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
	},
	{
		name: 'Бекон',
		price: 79,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
	},
	{
		name: 'Ветчина',
		price: 79,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
	},
	{
		name: 'Пикантная пепперони',
		price: 79,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
	},
	{
		name: 'Острая чоризо',
		price: 79,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
	},
	{
		name: 'Маринованные огурчики',
		price: 59,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
	},
	{
		name: 'Свежие томаты',
		price: 59,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
	},
	{
		name: 'Красный лук',
		price: 59,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
	},
	{
		name: 'Сочные ананасы',
		price: 59,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
	},
	{
		name: 'Итальянские травы',
		price: 39,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
	},
	{
		name: 'Сладкий перец',
		price: 59,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
	},
	{
		name: 'Кубики брынзы',
		price: 79,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
	},
	{
		name: 'Митболы',
		price: 79,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
	},
].map((onj, index) => ({ id: index + 1, ...onj }))



