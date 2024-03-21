import { ICONS } from "../assets/icons";

export const ROUTES = {
  HOME: {
    path: "/",
    label: "Dashboard",
    key: "home",
    icon: ICONS.SIDEBAR_DASHBOARD,
  },
  CANDIDATES: {
    path: "/candidates",
    label: "Candidates",
    key: "candidates",
    icon: ICONS.SIDEBAR_REQUESTS,
    childrens: {
      APPLIED: {
        path: "/applied",
        label: "Applied",
        key: "applied",
      },
      CONTACTED: {
        path: "/contacted",
        label: "Contacted",
        key: "contacted",
      },
      SHORTLISTED: {
        path: "/shortlisted",
        label: "Shortlisted",
        key: "shortlisted",
      },
      INTERVIEWED: {
        path: "/interviewed",
        label: "Interviewed",
        key: "interviewed",
      },
      HIRED: {
        path: "/hired",
        label: "Hired",
        key: "hired",
      },
      REJECTED: {
        path: "/rejected",
        label: "Rejected",
        key: "rejected",
      },
    },
  },
  ADD_CANDIDATE: {
    path: "/add-candidate",
    label: "Add Candidate",
    key: "add-candidate",
    icon: ICONS.ADD,
  },
};
