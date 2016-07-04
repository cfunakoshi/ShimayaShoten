import {Component} from "@angular/core";
@Component({
	selector: 'my-home',
	template: `
		<div class="col-md-8 col-md-offset-2">
			<div class="css-carousel">
				<img class="css-img" src="https://www.filestackapi.com/api/file/Rqr5AsHTXun62x0aMShA" />
				<img class="css-img" src="https://www.filestackapi.com/api/file/FT0k0M09THedM3EcbFGF" />
				<img class="css-img" src="https://www.filestackapi.com/api/file/AQ5k2JeaT8m8WXVBrlWW" />
				<img class="css-img" src="https://www.filestackapi.com/api/file/8s2emWOQDGMxUqwUnMVb" />
				<img class="css-img" src="https://www.filestackapi.com/api/file/fcmdeBJQxWDcOTOuLW2l" />
			</div>
		</div>
	`,
    styles: [`
       	.col-md-8 {
       		padding-top: 80px;
       	}

       	.css-carousel {
			width: 100%;
			height: 350px; /* Height of images */
			position: relative;
			overflow: hidden;
		}

		.css-carousel .css-img {
			max-width: 100%;
			height: 100%;
			position: absolute;
			top: 50%;
			left: 50%;;
			transform: translate(-50%, -50%);
			opacity: 0;
			-webkit-animation: css-carousel-fade 25s linear infinite;
			-moz-animation: css-carousel-fade 25s linear infinite;
			-ms-animation: css-carousel-fade 25s linear infinite;
			animation: css-carousel-fade 25s linear infinite;
		}

		.css-carousel .css-img:nth-child(2) {
			-webkit-animation-delay: 5s;
			-moz-animation-delay: 5s;
			-ms-animation-delay: 5s;
			animation-delay: 5s;
		}

		.css-carousel .css-img:nth-child(3) {
			-webkit-animation-delay: 10s;
			-moz-animation-delay: 10s;
			-ms-animation-delay: 10s;
			animation-delay: 10s;
		}

		.css-carousel .css-img:nth-child(4) {
			-webkit-animation-delay: 15s;
			-moz-animation-delay: 15s;
			-ms-animation-delay: 15s;
			animation-delay: 15s;
		}

		.css-carousel .css-img:nth-child(5) {
			-webkit-animation-delay: 20s;
			-moz-animation-delay: 20s;
			-ms-animation-delay: 20s;
			animation-delay: 20s;
		}

		@-webkit-keyframes css-carousel-fade {
    		0%, 20%, 100% { opacity: 0; }
    		5%, 15% { opacity: 1;}
		}

		@-moz-keyframes css-carousel-fade {
    		0%, 20%, 100% { opacity: 0; }
    		5%, 15% { opacity: 1;}
		}

		@-ms-keyframes css-carousel-fade {
    		0%, 20%, 100% { opacity: 0; }
    		5%, 15% { opacity: 1;}
		}

		@keyframes css-carousel-fade {
			0%, 20%, 100% { opacity: 0; }
			5%, 15% { opacity: 1;}
		}
    `]
})
export class HomeComponent {
}