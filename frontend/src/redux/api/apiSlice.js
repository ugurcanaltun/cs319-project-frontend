import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  tagTypes: ['User', 'Tasks', 'Transcripts', 'Syllabus'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/erasmus/getUser/1',
      providesTags: ['User'],
    }),
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
    submitTranscript: builder.mutation({
      query: (transcript) => ({
        url: `transcripts`,
        method: 'POST',
        body: transcript
      }),
      invalidatesTags: ['Transcripts'],
    }),
    uploadSyllabus: builder.mutation({
      query: (syllabus) => ({
        url: `uploadSyllabus/`,
        method: 'POST',
        body: syllabus
      }),
      invalidatesTags: ['Syllabus'],
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
