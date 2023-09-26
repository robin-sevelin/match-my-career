import { NotificationAlertVariation } from "@digi/arbetsformedlingen"
import { DigiNotificationAlert } from "@digi/arbetsformedlingen-react"
import "../style/_noResult.scss";

interface INoResultProps {
    heading: string,
    message: string
}

export const NoResult = ({heading, message}: INoResultProps) => {
    return (
        <>
            <section className="noResultContainer">
                <DigiNotificationAlert afVariation={NotificationAlertVariation.INFO} afHeading={heading}>
                    {message}
                </DigiNotificationAlert>
            </section>
        </>
    )
}