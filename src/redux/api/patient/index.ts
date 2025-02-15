import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    createPatient: build.mutation<
      PATIENT.PostCreatePatientResponse,
      PATIENT.PostCreatePatientRequest
    >({
      query: (patient) => ({
        url: ``,
        method: "POST",
        body: patient,
      }),
      invalidatesTags: ["patient"],
    }),
  }),
});

export const { useCreatePatientMutation } = api;
