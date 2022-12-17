import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  tagTypes: ['User', 'Tasks', 'Transcripts', 'Syllabus', 'ScoreTable', 'Wish', 'WishList', 'PreApproval'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/erasmus/getUser/1',
      providesTags: ['User'],
    }),

    // TASK
    getTasks: builder.query({
      query: () => '/erasmus/1/getAllTasks',
      providesTags: ['Tasks'],
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `/erasmus/1/tasks/update/${task.id}`,
        method: 'PUT',
        body: task
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `users/tasks/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['Tasks'],
    }),

    // ISO
    submitTranscript: builder.mutation({
      query: (transcript) => ({
        url: `transcripts`,
        method: 'POST',
        body: transcript
      }),
      invalidatesTags: ['Transcripts'],
    }),
    uploadScoreTable: builder.mutation({
      query: (scoreTable) => ({
        url: `uploadScoreTable/`,
        method: 'POST',
        body: scoreTable
      }),
      invalidatesTags: ['ScoreTable'],
    }),

    // WISHLIST LOGIC
    uploadSyllabus: builder.mutation({
      query: (syllabus) => ({
        url: `uploadSyllabus/`,
        method: 'POST',
        body: syllabus
      }),
      invalidatesTags: ['Syllabus'],
    }),
    addWish: builder.mutation({
      query: (wish) => ({
        url: `addWish`,
        method: 'POST',
        body: wish,
      }),
      invalidatesTags: ["Wish"],
    }),
    submitWishList: builder.mutation({
      query: (wishList) => ({
        url: `submitWishList`,
        method: 'POST',
        body: wishList
      }),
      invalidatesTags: ["WishList"],
    }),

    // PreApproval
    getPreApprovalStatus: builder.query({
      query: () => '/amed/amed',
      providesTags: ['PreApprovalStatus']
    }),
    submitPreApproval: builder.mutation({
      query: () => ({
        url: `submitPreApproval`,
        method: `POST`,
      }),
      invalidatesTags: ["PreApproval"]
    }),
    downloadPreApproval: builder.query({
      query: () => '/amed',
      providesTags: ['PreApproval']
    }),
    getAllPreApprovals: builder.query({
      query: () => '/amedamedamed',
      providesTags: ['PreApproval']
    }),
    updatePreApproval: builder.mutation({
      query: () => ({
        url: "memedov",
        method: "POST",
      }),
      invalidatesTags: ['PreApproval'],
    }),

    // Learning Agreement
    downloadLearningAgreement: builder.query({
      query: () => 'amedamed',
      providesTags: ['LearningAgreement'],
    }),
    uploadLearningAgreement: builder.mutation({
      query: () => ({
        url: 'aahhhhhhhhhhhhhhhhhhmetttttttttttttttttttttttttttt',
        invalidatesTags: ['LearningAgreement']
      }),
    }),

    // Course Proposals
    getCourseProposals: builder.query({
      query: () => 'amed',
      providesTags: ['CourseProposals']
    }),
    updateCourseProposal: builder.mutation({
      query: () => ({
        url: 'amed',
        method: "POST",
      }),
      invalidatesTags: ['LearningAgreement']
    }),

    // Course Transfers
    getCourseTransfers: builder.query({
      query: () => 'amud',
      providesTags: ['CourseTransfer'],
    }),
    updateCourseProposal: builder.mutation({
      query: () => 'mumed',
      invalidatesTags: ['CourseTransfer'],
    }),



  }),
})

export const {
  useGetUserQuery,
  useGetTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useSubmitTranscriptMutation,
  useUploadSyllabus,
} = apiSlice
