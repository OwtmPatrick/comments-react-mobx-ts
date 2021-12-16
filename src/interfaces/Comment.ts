export default interface Comment {
	id: string;
	text: string;
	author: string;
	avatar: string;
	date: Date;
	rating: number;
	hidden: boolean;
}
