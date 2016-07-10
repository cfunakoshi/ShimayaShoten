export class Content {
	item: string;
	price: string;
	category: string;
	description: string;
	contentId: string;
	url: string;

	constructor (item: string, price: string, category?: string, description?: string, contentId?: string, url?: string) {
		this.item = item;
		this.price = price;
		this.category = category;
		this.description = description;
		this.contentId = contentId;
		this.url = url;
	}
}