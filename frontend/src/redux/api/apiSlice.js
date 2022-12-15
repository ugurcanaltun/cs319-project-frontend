import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://03b948e5-5fb2-429b-8548-99746fcd75e4.mock.pstmn.io' }),
  tagTypes: ['User', 'Tasks'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/users',
      providesTags: (result, error, arg) => [{ type: 'User', id: arg }],
    }),
    getTasks: builder.query({
        query: () => '/users/tasks',
        providesTags: (result = [], error, arg) => [
            'Tasks',
            ...result.map(({ id }) => ({ type: 'Tasks', id })),
          ],
    }),
    addTask: builder.mutation({
        query: (task) => ({
            url: 'users/tasks',
            method: 'POST',
            body: task 
        }),
        invalidatesTags: ['Tasks'],
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
        query: ({id}) => ({
            url: `users/tasks/${id}`,
            method: 'DELETE',
            body: id
        }),
        invalidatesTags: ['Tasks'],
    })
  }),
})

export const {
  useGetUserQuery,
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = apiSlice
