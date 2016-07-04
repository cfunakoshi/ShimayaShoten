export class Content {
	item: string;
	price: string;
	contentId: string;
	url: string;

	constructor (item: string, price: string, contentId?: string, url?: string) {
		this.item = item;
		this.price = price;
		this.contentId = contentId;
		this.url = url;
	}
}