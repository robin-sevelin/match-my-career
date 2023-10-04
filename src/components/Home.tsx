import { TypographyHeadingJumboLevel } from '@digi/arbetsformedlingen';
import {
  DigiButton,
  DigiTypography,
  DigiTypographyHeadingJumbo,
} from '@digi/arbetsformedlingen-react';
import { useNavigate } from 'react-router-dom';
import '../style/startpage/_startpage.scss';

export const Home = () => {
  const navigate = useNavigate();

  const directToSearch = () => {
    navigate('/search');
  }

  return (
    <section className='startpage'>
      <DigiTypography>
        <div className='flexContainer'>
          <div className='photoContainer'>
            <img
              src='mathematics.jpg'
              loading='lazy'
              alt='silhuette writing equations'
            ></img>
          </div>
          <div className='informationContainer'>
            <DigiTypographyHeadingJumbo
              afText='Match My Career'
              afLevel={TypographyHeadingJumboLevel.H2}
            ></DigiTypographyHeadingJumbo>
            <p>
              På denna webbsida har användare möjlighet att söka efter
              utbildningar med hjälp av en valfri yrkestitel. Genom att granska
              de resulterande sökresultaten kan användarna hitta övergripande
              information om de utbildningar som är tillgängliga, liksom
              information om flera relaterade yrken som är kopplade till deras
              sökning.
            </p>
            <p>
              Dessutom erbjuds information om de kompetenser som är relevanta
              för dessa yrken.
            </p>
            <p>
              Klicka antingen på knappen nedan eller navigera med hjälp av
              ovanstående meny för att påbörja en sökning.
            </p>
            <DigiButton afVariation='primary' onAfOnClick={directToSearch}>
              Sök Utbildningar
            </DigiButton>
          </div>
        </div>
      </DigiTypography>
    </section>
  );
};
