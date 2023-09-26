import { NotificationAlertSize, NotificationAlertVariation, TypographyHeadingJumboLevel } from "@digi/arbetsformedlingen"
import { DigiNotificationAlert, DigiTypographyHeadingJumbo } from "@digi/arbetsformedlingen-react"
import '../style/errorpage/_errorpage.scss'

export const ErrorComponent = () => {
    return (
        <>
        <div className="error-component">
            <DigiTypographyHeadingJumbo
              afText={'Error - 400 Bad Request'}
              afLevel={TypographyHeadingJumboLevel.H2}
            >
            </DigiTypographyHeadingJumbo>
            <DigiNotificationAlert
              afSize={NotificationAlertSize.LARGE}
              afVariation={NotificationAlertVariation.DANGER}	
              afHeading="Något gick fel"
            >
                Vänligen prova att ladda om sidan eller återgå till startsidan
            </DigiNotificationAlert>
        </div>
        </>
    );
};