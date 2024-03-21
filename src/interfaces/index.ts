export interface BREADCRUMB_INTERFACE {
  label: string;
  path: string;
}

export interface Candidate {
  name: string;
  phone: string;
  email: string;
  skills: any;
  qualification: string;
  experience: number | string;
  current_ctc: number | string;
  expected_ctc: number | string;
}
