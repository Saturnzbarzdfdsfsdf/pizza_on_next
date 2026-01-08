import { NextPage } from 'next'

interface PageParams {
	id: string
}

interface Props {
	params: Promise<PageParams> // ← Promise!
}

const ProductPage: NextPage<Props> = async ({ params }) => {
	// ← async!
	const { id } = await params // ← await!

	return <p>Product {id}</p>
}

export default ProductPage
