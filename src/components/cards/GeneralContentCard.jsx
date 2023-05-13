import { CardBody } from "../../models/cardProps";
import baseCard from "./Card";

/**
 * 
 * @param {{cardBody:CardBody[]}} props
 */
export default function GeneralContentCard(props) {
    const { cardBody } = props;
    const MyCardComponent = baseCard();
    return (
        <MyCardComponent cardTitle={{ title: "" }} cardBody={cardBody} />
    )
}