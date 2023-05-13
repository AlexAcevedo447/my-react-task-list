
import baseCard from "./Card";
import { CardBody } from "../../models/cardProps";

/**
 * 
 * @param {{image:string,cardBody:CardBody[]}} props
 */
export default function PersonCard(props) {
    const { image, cardBody } = props;
    const MyCardComponent = baseCard();
    return (
        <MyCardComponent cardTitle={{ img: image }} cardBody={cardBody} />
    )
}