// import { prisma } from './prismaClient'
// import { hashSync } from 'bcrypt'
// import { Prisma, UserRole } from '../generated/prisma/client'

// import { categories, ingredients, product } from './constants'

// const randomNumber = (min: number, max: number) => {
// 	return Math.floor(Math.random() * (max - min) + min)
// }

// interface IProductItemParams {
// 	productId: number
// 	pizzaType?: 1 | 2
// 	size?: 20 | 30 | 40
// }

// const generateProductItems = ({
// 	productId,
// 	pizzaType,
// 	size,
// }: IProductItemParams) => {
// 	return {
// 		productId,
// 		pizzaType,
// 		size,
// 		price: randomNumber(190, 600),
// 	} as Prisma.ProductItemUncheckedCreateInput
// }

// async function up() {
//   const user1 = await prisma.user.create({
// 		data: {
// 			fullName: 'User Test',
// 			email: 'user@example.com',
// 			password: hashSync('111111', 10),
// 			verified: new Date(),
// 			role: UserRole.USER,
// 		},
// 	})

// 	const user2 = await prisma.user.create({
// 		data: {
// 			fullName: 'Admin Test',
// 			email: 'admin@example.com',
// 			password: hashSync('111111', 10),
// 			verified: new Date(),
// 			role: UserRole.ADMIN,
// 		},
// 	})

// 	await prisma.category.createMany({
// 		data: categories,
// 	})

// 	await prisma.product.createMany({
// 		data: product,
// 	})

// 	await prisma.ingredient.createMany({
// 		data: ingredients,
// 	})

// 	const pizza1 = await prisma.product.create({
// 		data: {
// 			name: 'ДоДо',
// 			imageUrl:
// 				'https://media.dodostatic.net/image/r:292x292/019ac604bad37209b1ec496bbdd98560.avif',
// 			categoryId: 1,
// 			Ingredients: {
// 				connect: ingredients.slice(0, 5).map(ing => ({ id: ing.id })),
// 			},
// 		},
// 	})
// 	const pizza2 = await prisma.product.create({
// 		data: {
// 			name: 'Карбонара',
// 			imageUrl:
// 				'https://media.dodostatic.net/image/r:584x584/0198bf2b03447079941f2d5ac6e986a9.avif',
// 			categoryId: 1,
// 			Ingredients: {
// 				connect: ingredients.slice(0, 5).map(ing => ({ id: ing.id })),
// 			},
// 		},
// 	})
// 	const pizza3 = await prisma.product.create({
// 		data: {
// 			name: 'Креветка и песто',
// 			imageUrl:
// 				'https://media.dodostatic.net/image/r:584x584/0198bf4d218b75d4a3e667fc2f6d7643.avif',
// 			categoryId: 1,
// 			Ingredients: {
// 				connect: ingredients.slice(0, 5).map(ing => ({ id: ing.id })),
// 			},
// 		},
// 	})

// 	await prisma.productItem.createMany({
// 		data: [
// 			// Додо
// 			generateProductItems({
// 				productId: pizza1.id,
// 				size: 20,
// 				pizzaType: 1,
// 			}),
// 			generateProductItems({
// 				productId: pizza1.id,
// 				size: 30,
// 				pizzaType: 2,
// 			}),
// 			generateProductItems({
// 				productId: pizza1.id,
// 				size: 40,
// 				pizzaType: 2,
// 			}),

// 			// Карбонара
// 			generateProductItems({
// 				productId: pizza2.id,
// 				size: 20,
// 				pizzaType: 1,
// 			}),
// 			generateProductItems({
// 				productId: pizza2.id,
// 				size: 30,
// 				pizzaType: 2,
// 			}),
// 			generateProductItems({
// 				productId: pizza2.id,
// 				size: 40,
// 				pizzaType: 2,
// 			}),

// 			// Креветка и песто
// 			generateProductItems({
// 				productId: pizza3.id,
// 				size: 20,
// 				pizzaType: 1,
// 			}),
// 			generateProductItems({
// 				productId: pizza3.id,
// 				size: 30,
// 				pizzaType: 2,
// 			}),
// 			generateProductItems({
// 				productId: pizza3.id,
// 				size: 40,
// 				pizzaType: 2,
// 			}),
// 		],
// 	})

// 	await prisma.cart.createMany({
// 		data: [
// 			{
// 				userId: 1,
// 				totalAmount: 0,
// 			},
// 			{
// 				userId: 2,
// 				totalAmount: 0,
// 			},
// 		],
// 	})

// 	await prisma.cartItem.create({
// 		data: {
// 			productItemId: 1,
// 			cartId: 1,
// 			quantity: 2,
// 			ingredients: {
// 				connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
// 			},
// 		},
// 	})
// }

// async function down() {
// 	await prisma.verificationCode.deleteMany()
// 	await prisma.order.deleteMany()
// 	await prisma.cartItem.deleteMany()
// 	await prisma.cart.deleteMany()
// 	await prisma.productItem.deleteMany()
// 	await prisma.product.deleteMany()
// 	await prisma.ingredient.deleteMany()
// 	await prisma.category.deleteMany()
// 	await prisma.user.deleteMany()
// }

// async function main() {
// 	try {
// 		await down()
// 		await up()
// 	} catch (e) {
// 		console.error(e)
// 	}
// }

// main()
// 	.catch(e => {
// 		console.error(e)
// 		process.exit(1)
// 	})
// 	.finally(async () => {
// 		await prisma.$disconnect()
// 	})

import { prisma } from './prismaClient'
import { hashSync } from 'bcrypt'
import { Prisma, UserRole } from '../generated/prisma/client'

import { categories, ingredients, product } from './constants'

const randomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min)
}

interface IProductItemParams {
	productId: number
	pizzaType?: 1 | 2
	size?: 20 | 30 | 40
}

const generateProductItems = ({
	productId,
	pizzaType,
	size,
}: IProductItemParams) => {
	return {
		productId,
		pizzaType,
		size,
		price: randomNumber(190, 600),
	} as Prisma.ProductItemUncheckedCreateInput
}

async function up() {
	// Создаём пользователей по отдельности, чтобы получить их ID
	const user1 = await prisma.user.create({
		data: {
			fullName: 'User Test',
			email: 'user@example.com',
			password: hashSync('111111', 10),
			verified: new Date(),
			role: UserRole.USER,
		},
	})

	const user2 = await prisma.user.create({
		data: {
			fullName: 'Admin Test',
			email: 'admin@example.com',
			password: hashSync('111111', 10),
			verified: new Date(),
			role: UserRole.ADMIN,
		},
	})

	await prisma.category.createMany({
		data: categories,
	})

	await prisma.product.createMany({
		data: product,
	})

	await prisma.ingredient.createMany({
		data: ingredients,
	})

	const pizza1 = await prisma.product.create({
		data: {
			name: 'ДоДо',
			imageUrl:
				'https://media.dodostatic.net/image/r:292x292/019ac604bad37209b1ec496bbdd98560.avif',
			categoryId: 1,
			Ingredients: {
				connect: ingredients.slice(0, 5).map(ing => ({ id: ing.id })),
			},
		},
	})
	const pizza2 = await prisma.product.create({
		data: {
			name: 'Карбонара',
			imageUrl:
				'https://media.dodostatic.net/image/r:584x584/0198bf2b03447079941f2d5ac6e986a9.avif',
			categoryId: 1,
			Ingredients: {
				connect: ingredients.slice(0, 5).map(ing => ({ id: ing.id })),
			},
		},
	})
	const pizza3 = await prisma.product.create({
		data: {
			name: 'Креветка и песто',
			imageUrl:
				'https://media.dodostatic.net/image/r:584x584/0198bf4d218b75d4a3e667fc2f6d7643.avif',
			categoryId: 1,
			Ingredients: {
				connect: ingredients.slice(0, 5).map(ing => ({ id: ing.id })),
			},
		},
	})

	// Создаём первый ProductItem отдельно, чтобы получить его ID
	const productItem1 = await prisma.productItem.create({
		data: generateProductItems({
			productId: pizza1.id,
			size: 20,
			pizzaType: 1,
		}),
	})

	// Остальные ProductItems создаём через createMany
	await prisma.productItem.createMany({
		data: [
			// Додо (остальные варианты)
			generateProductItems({
				productId: pizza1.id,
				size: 30,
				pizzaType: 2,
			}),
			generateProductItems({
				productId: pizza1.id,
				size: 40,
				pizzaType: 2,
			}),

			// Карбонара
			generateProductItems({
				productId: pizza2.id,
				size: 20,
				pizzaType: 1,
			}),
			generateProductItems({
				productId: pizza2.id,
				size: 30,
				pizzaType: 2,
			}),
			generateProductItems({
				productId: pizza2.id,
				size: 40,
				pizzaType: 2,
			}),

			// Креветка и песто
			generateProductItems({
				productId: pizza3.id,
				size: 20,
				pizzaType: 1,
			}),
			generateProductItems({
				productId: pizza3.id,
				size: 30,
				pizzaType: 2,
			}),
			generateProductItems({
				productId: pizza3.id,
				size: 40,
				pizzaType: 2,
			}),
		],
	})

	// Создаём корзины по отдельности, чтобы получить их ID
	const cart1 = await prisma.cart.create({
		data: {
			userId: user1.id,
			totalAmount: 0,
		},
	})

	const cart2 = await prisma.cart.create({
		data: {
			userId: user2.id,
			totalAmount: 0,
		},
	})

	// Используем реальные ID
	await prisma.cartItem.create({
		data: {
			productItemId: productItem1.id,
			cartId: cart1.id,
			quantity: 2,
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
			},
		},
	})
}

async function down() {
	await prisma.verificationCode.deleteMany()
	await prisma.order.deleteMany()
	await prisma.cartItem.deleteMany()
	await prisma.cart.deleteMany()
	await prisma.productItem.deleteMany()
	await prisma.product.deleteMany()
	await prisma.ingredient.deleteMany()
	await prisma.category.deleteMany()
	await prisma.user.deleteMany()
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})