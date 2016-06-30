export class Content {
	item: string;
	price: number;
	contentId: string;

	constructor (item: string, price: number, contentId?: string) {
		this.item = item;
		this.price = price;
		this.contentId = contentId;
	}
}