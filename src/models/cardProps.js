import { Technology } from "./technology";

/**
 * 
 * @param {string|JSX.Element} cardBodyTitle 
 * @param {string|Array<Technology>} cardBodyContent 
 */
export function CardBody(cardBodyTitle, cardBodyContent) {
    this.cardBodyTitle = cardBodyTitle;
    this.cardBodyContent = cardBodyContent;
}

/**
 * 
 * @param {string} title 
 * @param {string} img 
 */
export function CardTitle(title, img) {
    this.title = title;
    this.img = img;
}


/**
* @param {CardTitle} cardTitle title or img to render;
* @param {Array<CardBody>} cardBody; title and content to render;
**/
export function CardProps(cardTitle, cardBody) {
    this.cardTitle = cardTitle;
    this.cardBody = cardBody;
}