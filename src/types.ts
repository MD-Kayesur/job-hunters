import { User, UserCredential } from "firebase/auth";

export interface AuthContextType {
    user: User | null;
    loding: boolean;
    createUsers: (email: string, password: string) => Promise<UserCredential>;
    signinUser: (email: string, password: string) => Promise<UserCredential>;
    signout: () => Promise<void>;
    signingoogle: () => Promise<UserCredential>;
}

export interface Job {
    _id: string;
    title: string;
    location: string;
    jobType: string;
    category: string;
    applicationDeadline: string;
    salaryRange: {
        min: number;
        max: number;
        currency: string;
    };
    description: string;
    company: string;
    requirements: string[];
    responsibilities: string[];
    status: string;
    company_logo: string;
    hr_email: string;
}
