import "./PersonCard.css"

export default function ({ name, technologies, email, phone }) {
    return (
        <div className="person-card">
            <div className="person-card__header">
                <h3 className="person-card__title">{name}</h3>
            </div>
            <div className="person-card__content">
                <div className="person-card__prop">
                    <strong>Technologies: </strong>
                    <div className="technologies">
                        {technologies.map((technology) => {
                            const { Component, classname, color } = technology;
                            return <span className="technology-container"><Component className={classname} color={color} /></span>
                        })}
                    </div>
                </div>
                <div className="person-card__prop">
                    <strong>Phone: </strong>
                    {phone}
                </div>
                <div className="person-card__prop">
                    <strong>Email: </strong>
                    {email}
                </div>
            </div>
        </div>
    )
}