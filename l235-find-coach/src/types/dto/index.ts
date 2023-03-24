export interface LoginData {
  email: string;
  password: string;
}
export interface Coach {
  id: string;
  firstName: string;
  lastName: string;
  areas: Array<string>;
  description: string;
  hourlyRate: number;
}

export interface MessageToCoach {
  id: string;
  coachId: string;
  email: string;
  message: string;
}
