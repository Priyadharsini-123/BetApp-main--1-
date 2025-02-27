import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const GroupApi = createApi({
  reducerPath: "GroupApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["GROUP"],
  endpoints: (build) => ({
    getGroup: build.query({
      query: ({page,search}) => ({
        url: `/admin/viewGroups?page=${page}&search=${search}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["GROUP"],
    }),
  
    getPhoneNumber: build.query({
        query: () => ({
          url: `/admin/getPhoneNumbers1`,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["GROUP"],
      }),

      addGroupNotification: build.mutation({
        query: ({ groupName, title, body }) => ({
          url: `/admin/sendGroupNotification/${groupName}`,
          method: "POST",
          body: { title, body },
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["GROUP"],
      }),
      addGroup: build.mutation({
        query: ({groupname,phoneNumbers}) => ({
          url: `/admin/addGroup/${groupname}`,
          method: "POST",
          body: { groupname: groupname, phoneNumbers: phoneNumbers },
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["GROUP"],
      }),

    deleteGroup: build.mutation({
      query: (id) => ({
        url: `/admin/deleteGroup/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["GROUP"],
    }),
  }),
});

export const { useGetGroupQuery, useGetPhoneNumberQuery,useDeleteGroupMutation,useAddGroupNotificationMutation,
    useAddGroupMutation} = GroupApi;
