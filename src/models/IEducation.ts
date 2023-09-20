export interface IEducation {
  education: {
    code: string;
    configuration: {
      code: string;
      type: string;
    };
    identifier: string;
    title: ITitle[];
    subject: ISubject[];

    form: {
      code: string;
      type: string;
    };
    description: [
      {
        lang: string;
        content: string;
      }
    ];
  };
  text_enrichments_results: {
    enriched_candidates: {
      competencies: string[];
      occupations: string[];
      traits: string[];
    };
  };
}

export interface ISubject {
  code: string;
  name: string;
  type: string;
}

export interface ITitle {
  lang: string;
  content: string;
}

[
  {
    lang: 'swe',
    content:
      '*Frontend Developers produce amazing user experiences*Frontend Developers help produce amazing user experiences on the web and in apps through the use of HTML, CSS and JavaScript – as well as a constantly changing battery of tools and programming languages.Frontend Developers essentially bring to life how designers, other team members, and clients imagine user experience. But it’s not just hard technical skills, you also need to have the ability to plan your projects, communicate your ideas and keep the team on track.Hyper Island puts Frontend Developers to work in teams with our design students. This way, you’ll learn useful ways to combine graphic design with coding principles and master the communication and teamwork needed to produce amazing interactive user experiences.What you´ll learn:Bring ideas and concepts to lifeThe 90 week Frontend Developer program will give you the skills and know-how to take ideas and concepts and make them into real web products and projects. You’ll spend 63 weeks at our Stockholm campus, plus 27 weeks doing an internship anywhere in the world.An Essential ToolkitLearn everything from HTML, CSS, PHP, Javascript andMySQL. Vue & web components, Headless CMS Stylesheet Languages (SASS) to advanced web development such as ASP.net, React, Node.js, REST, RubyonRails, elm. and developing mobile applications for iOS and Android. Search engine principles, server rendering, tracking implementation for Google Analytics through Google Tag Manager. Databases: knowledge in SQL, MySQL, MongoDB or similar.Agile DevelopmentLearn how to work in agile development teams and processes. Agile software development is an approach to Frontend development that promotes iterative development throughout the life-cycle of the project, close collaboration between the development team and business side, constant communication, and tightly-knit teams.UX, UI, and Tools for Interface designLearn to work with different design tools and visual forms of expression to understand the important connection between frontend design and UX and graphic design. UX and UI designers are key stakeholders in a Frontend Development project, so you will also learn how to work with UX and UI design in frontend projects.',
  },
];
