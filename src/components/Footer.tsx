import { TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiTypography } from "@digi/arbetsformedlingen-react";
import "../style/footer/_footer.scss";

export const Footer = () => {
  return (
    <DigiTypography afVariation={TypographyVariation.SMALL}>
      <footer className="footer">
        <div className="left">
          <h3>Designsystem</h3>
          <p>Denna sida är skapad med hjälp av Arbetsförmedlingens designsystem.</p>
          <p>Läs mer: <a 
          href="https://designsystem.arbetsformedlingen.se/"
          target="_blank"
          >Designsystem - Arbetsförmedlingen</a></p>
        </div>
        <div className="right">
          <p>Robin Sevelin, Filip Hedlén, Emilia Mässing</p>
        </div>
      </footer>
    </DigiTypography>
  );
};
