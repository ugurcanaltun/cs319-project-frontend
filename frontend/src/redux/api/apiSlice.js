import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  tagTypes: ['User', 'Tasks', 'Transcripts'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/erasmus/getUser/1',
      providesTags: (result, error, arg) => [{ type: 'User', id: arg }],
    }),
    getTasks: builder.query({
      query: () => '/erasmus/1/getAllTasks',
      providesTags: (result, error, arg) => [{ type: 'Tasks', id: arg }],
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `/users/tasks/${task.id}`,
        method: 'PUT',
        body: task
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Tasks', id: arg.id }],
    }),
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `users/tasks/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['Tasks'],
    }),
    addTranscript: builder.mutation({
      query: (transcript) => ({
        url: `transcripts`,
        method: 'POST',
        body: transcript
      }),
      invalidatesTags: ['Transcripts'],
    })
  }),
})

export const {
  useGetUserQuery,
  useGetTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useAddTranscriptMutation
} = apiSlice
