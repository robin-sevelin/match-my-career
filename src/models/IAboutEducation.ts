import { ITitle } from "./IEducation"

export interface IAboutEducation {
    id: string,
    education: {
        title: ITitle[];
        code: string;
        form: {
            code: string,
        },
        description: [
            {
              content: string;
            }
        ];
    }
    education_providers: [{
        urls: [
            {
                content: string;
            }
        ];
        name: [
            {
                content: string;
            }
        ];
    }];
    events: [
        {
            execution: {
            start: string;
            end: string;
        };
        paceOfStudyPercentage: number;
        urls: [
            {
                content: string;
            }
        ];
        provider: string;
    }
];
}