import { DigiButton, DigiTypographyPreamble } from "@digi/arbetsformedlingen-react"
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="startPage">
        <h1>Matcha utbildning utifrån jobbtitel</h1>
        <DigiTypographyPreamble>
          <p>
            Varmt välkommen!
          </p>
          <p>
            På denna webbsida har användare möjlighet att söka efter utbildningar med hjälp av en valfri yrkestitel. 
            Genom att granska de resulterande sökresultaten kan användarna hitta övergripande information om de utbildningar som är tillgängliga,
            liksom information om flera relaterade yrken som är kopplade till deras sökning. 
            Dessutom erbjuds information om de kompetenser som är relevanta för dessa yrken.
          </p>
          <p>
            Klicka antingen på knappen nedan eller navigera med hjälp av ovanstående meny för att påbörja en sökning.
          </p>
          <DigiButton afVariation="primary"><Link to={'/search'}>Sök Utbildningar</Link></DigiButton>
        </DigiTypographyPreamble>
    </section>
  );
};
