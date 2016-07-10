export class Category {
	name: string;
	categoryId: string;

	constructor (name: string, categoryId?: string) {
		this.name = name;
		this.categoryId = categoryId;
	}
}